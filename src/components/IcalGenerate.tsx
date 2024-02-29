import { formatISO, parseISO } from "date-fns";
import { dayIntervalCounter } from "./IcalInfoForm";
export const dynamic = "force-static";
export const IcalGenerate = ({
  title,
  beginDate,
  interval,
  occurences,
  isStartDateCount,
}: {
  title: string;
  beginDate: Date;
  interval: number;
  occurences: number;
  isStartDateCount: boolean;
}) => {
  const generateIcal = async () => {
    let eventDates: string[] = [formatISO(beginDate)];
    for (let i = 0; i < occurences - 1; i++) {
      eventDates[i + 1] = formatISO(
        dayIntervalCounter({
          startDate: parseISO(eventDates[i]),
          interval: interval,
          isStartDateCount: i === 0 ? isStartDateCount : false,
        })
      );
    }
    const submitData = JSON.stringify({
      title: title,
      eventDates: eventDates,
    });

    try {
      //production
      const res = await fetch("/api/calendar", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "calendar.ics";
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 stext-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => generateIcal()}
    >
      Generate
    </button>
  );
};
