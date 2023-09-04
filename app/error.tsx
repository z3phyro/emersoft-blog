"use client";

import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center py-20 gap-8">
      <h2 className="flex gap-2 items-center text-xl text-red-600">
        <ExclamationTriangleIcon className="w-6 h-6" /> Something went wrong!
      </h2>
      <button
        aria-label="Refresh button"
        className="flex gap-2 items-center rounded-xl shadow hover:shadow-lg justify-center py-2 px-3 ease-in-out duration-300"
        onClick={() => reset()}>
        Try again
      </button>
    </section>
  );
}
