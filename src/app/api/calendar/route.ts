import { format, parseISO } from "date-fns";
import ical from "ical-generator";
export const dynamic = "force-static";

type Payload = {
  title: string;
  eventDates: string[];
};

export async function POST(req: Request, res: Response) {
  const data: Payload = JSON.parse(await req.json());
  const filename = "calendar.ics";
  const title = data.title;

  const events = data.eventDates.map((date) => {
    return {
      start: parseISO(date),
      allDay: true,
      summary: title,
    };
  });

  try {
    const calendar = ical({
      name: data.title,
      events: events,
    });

    return new Response(calendar.toString(), {
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": `attachment; filename=${filename}`,
      },
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify(err), { status: 500 });
  }
}
