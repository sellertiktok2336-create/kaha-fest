"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calc(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ isoDate }: { isoDate: string }) {
  const target = new Date(isoDate).getTime();
  // Hindari hydration mismatch: nilai asli dihitung setelah mount
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    // Hitung nilai awal setelah paint agar aman dari hydration mismatch
    const frameId = requestAnimationFrame(() => {
      setTime(calc(target));
      intervalId = setInterval(() => setTime(calc(target)), 1000);
    });
    return () => {
      cancelAnimationFrame(frameId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [target]);

  const cells: { value: string; label: string }[] = [
    { value: time ? pad(time.days) : "--", label: "Hari" },
    { value: time ? pad(time.hours) : "--", label: "Jam" },
    { value: time ? pad(time.minutes) : "--", label: "Menit" },
    { value: time ? pad(time.seconds) : "--", label: "Detik" },
  ];

  return (
    <div
      role="timer"
      aria-label="Hitung mundur menuju KAHA FEST 2027"
      className="grid grid-cols-4 gap-2 sm:gap-3"
    >
      {cells.map((c) => (
        <div
          key={c.label}
          className="rounded-xl border border-cream/15 bg-ink/60 px-2 py-3 text-center backdrop-blur-md sm:px-4 sm:py-4"
        >
          <div className="font-display text-2xl font-extrabold tabular-nums text-acid sm:text-4xl">
            {c.value}
          </div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/60 sm:text-xs">
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}
