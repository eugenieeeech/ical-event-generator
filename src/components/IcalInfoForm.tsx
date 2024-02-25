"use client";
import { useState } from "react";
import { IcalGenerate } from "./IcalGenerate";

export function dayIntervalCounter({
  startDate,
  interval,
  isStartDateCount,
}: {
  startDate: Date;
  interval: number;
  isStartDateCount: boolean;
}) {
  const resultDate = new Date();
  return isStartDateCount
    ? new Date(
        new Date().setTime(
          startDate.getTime() + (interval - 1) * 1000 * 60 * 60 * 24
        )
      )
    : new Date(
        new Date().setTime(startDate.getTime() + interval * 1000 * 60 * 60 * 24)
      );
}
export const IcalInfoForm = () => {
  const [startingDay, setStartingDay] = useState(new Date());
  const [title, setTitle] = useState("");
  const [occurences, setOccurences] = useState(1);
  const [inputDays, setInputDays] = useState(1);
  const [isStartDateCount, setIsStartDateCount] = useState(true);

  const handleInputDays = (e: any) => {
    const input = e.target.value;
    setInputDays(input);
  };
  const handleStartingDayChange = (e: any) => {
    const updateDate = new Date(e.target.value);
    startingDay.setTime(updateDate.getTime());
    setStartingDay(updateDate);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Ical Generator
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="startDay"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Start Date
            </label>
            <div className="mt-2">
              <input
                id="startDay"
                name="date"
                type="date"
                autoComplete="date"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={
                  new Date(
                    startingDay.getTime() -
                      startingDay.getTimezoneOffset() * 60 * 1000
                  )
                    .toISOString()
                    .split("T")[0]
                }
                onChange={handleStartingDayChange}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="days"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Days
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <div>
                <input
                  id="days"
                  name="number"
                  type="number"
                  autoComplete="number"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={inputDays}
                  onChange={handleInputDays}
                />
              </div>
            </div>
            <div className="relative flex items-start mt-4 ">
              <div className="flex h-6 items-center">
                <input
                  id="isStartDateCount"
                  aria-describedby="isStartDateCount-description"
                  name="isStartDateCount"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  checked={isStartDateCount}
                  onChange={() => setIsStartDateCount(!isStartDateCount)}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Count Start Date as 1st day
                </label>
                <p id="comments-description" className="text-gray-500">
                  Counting the begining date as 1st day
                </p>
              </div>
            </div>
          </div>
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
                value={occurences}
                onChange={(e) => setOccurences(Number(e.target.value))}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <IcalGenerate
              title={title}
              occurences={occurences}
              interval={inputDays}
              beginDate={startingDay}
              isStartDateCount={isStartDateCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
