import { DaysCounter } from "@/components/DaysCounter";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Ical Generator
        </h2>
        <div className="flex items-center justify-between">
      
          <label
            htmlFor="eventTitle"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Event Title
          </label>
          <div className="text-sm"></div>
        </div>
        <div className="mt-2">
          <input
            id="eventTitle"
            name="eventTitle"
            type="text"
            required
            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <DaysCounter />
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="occurrences"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Occurrences
          </label>
          <div className="text-sm"></div>
        </div>
        <div className="mt-2">
          <input
            id="occurrences"
            name="occurrences"
            type="number"
            autoComplete="number"
            required
            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
}
