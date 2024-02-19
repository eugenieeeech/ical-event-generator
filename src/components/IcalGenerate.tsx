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
    <button onClick={() => generateIcal({ title, eventDates })}>
      Generate
    </button>
  );
};
