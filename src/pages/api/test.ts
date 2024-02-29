import { format, parseISO } from "date-fns";
import ical, { ICalCalendarMethod } from "ical-generator";
import { NextRequest, NextResponse } from "next/server";

type Payload = {
  title: string;
  eventDates: string[];
};
export default async function handler(req: NextRequest, res: NextResponse) {
  const data: Payload = JSON.parse(await req.json());
  const filename = "calendar.ics";
  const title = data.title;

  const events = data.eventDates.map((date, index) => {
    return {
      start: parseISO(date),
      allDay: true,
      summary: title,
      description: `Event Occurence: ${index}`,
    };
  });

  try {
    const calendar = ical({
      name: data.title,
      events: events,
    });
    calendar.method(ICalCalendarMethod.REQUEST);

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
