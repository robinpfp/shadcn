"use client";

import React from "react";
import { Calendar } from "../ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <h2 className="text-2xl font-semibold">Calendar</h2>
      <p className="leading-7 mt-6">
        Displays a calendar or a component that looks like a calendar.
      </p>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
