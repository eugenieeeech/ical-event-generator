import ical from "ical-generator";

export async function GET(req: Request) {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", {
      headers: { Allow: "GET" },
      status: 405,
    });
  }

  const filename = "calendar.ics";
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  try {
    const calendar = ical({
      name: "Generated",
      events: [
        {
          start: new Date("2024-01-01"),
          summary: name ?? "", //event title
        },
      ],
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
