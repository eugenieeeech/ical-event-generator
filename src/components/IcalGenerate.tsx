export const IcalGenerate = ({
  title,
  eventDates,
}: {
  title: string;
  eventDates: Date[];
}) => {
  const generateIcal = async ({
    title,
    eventDates,
  }: {
    title: string;
    eventDates: Date[];
  }) => {
    try {
      const res = await fetch(`/api/calendar?name=${title}`, {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (res) {
        const data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 stext-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => generateIcal({ title, eventDates })}
    >
      Generate
    </button>
  );
};
