"use client";
import React, { useMemo } from "react";
import { roadmapSteps} from "../data/roadmap"

//   {
//     id: 1,
//     title: "1. MVP (0–2 oy)",
//     details: [
//       "Mobil ilova va admin panelni ishlab chiqish",
//       "Geo-lokatsiya va navbat logikasi",
//       "To‘lov tizimi sinov integratsiyasi (Click / Payme)",
//       "Telegram mini app test versiyasi",
//       "UI/UX dizayn va brend tayyorlash",
//     ],
//     result: "Natija: Ishlaydigan minimal versiya (MVP)",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     title: "2. Test va Feedback (3–5 oy)",
//     details: [
//       "10–15 joyda pilot test (barber, klinika, kafe)",
//       "Foydalanuvchi tajribasi tahlili va optimizatsiya",
//       "Barqarorlik, tezlik va xavfsizlikni yaxshilash",
//     ],
//     result: "🎯 Natija: Barqaror MVP va dastlabki foydalanuvchi bazasi (1 000+)",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     title: "3. Bozorga chiqish (6–9 oy)",
//     details: [
//       "Promo web-sayt ishga tushirish",
//       "Brending va reklama (Instagram, Telegram, TikTok)",
//       "1–2 shaharda soft launch",
//     ],
//     result: "Natija: 5 000+ foydalanuvchi, 100+ joy tizimda",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     title: "4. Monetizatsiya (10–15 oy)",
//     details: [
//       "Joylar uchun obuna tizimi (10–200$/oy)",
//       "1% komissiya modeli",
//       "Statistik panel va reklama joylari",
//     ],
//     result: "Natija: Oylik 3 000$+ daromad, 300+ joy faol",
//     isCompleted: false,
//   },
//   {
//     id: 5,
//     title: "5. Investitsiya va Hamkorlik (16–20 oy)",
//     details: [
//       "Pitch deck va moliyaviy prognozlar tayyorlash",
//       "IT Park va investorlar bilan uchrashuvlar",
//       "Yirik tarmoqlar bilan hamkorlik",
//     ],
//     result: "Natija: 50 000$+ investitsiya, 2 strategik hamkor",
//     isCompleted: false,
//   },
//   {
//     id: 6,
//     title: "6. Kengayish (21–24 oy)",
//     details: [
//       "Tavsiya tizimi (AI asosida)",
//       "Qo‘shni davlatlarga chiqish (Qozog‘iston, Qirg‘iziston)",
//       "Bandu Business panel (analitika uchun)",
//     ],
//     result:
//       "Natija: 100 000+ foydalanuvchi, 500+ joy faol, oylik 10 000$+ daromad",
//     isCompleted: false,
//   },
// ];

// --- Roadmap Component ---
export default function Roadmap() {
  const activeIndex = useMemo(() => {
    return roadmapSteps.findIndex((s) => !s.isCompleted);
  }, []);

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">
          Loyihaning Roadmapi
        </h2>

        <div className="grid gap-6">
          {roadmapSteps.map((step, idx) => {
            const isCompleted = step.isCompleted;
            const isActive = idx === activeIndex;
            const isFuture = idx > activeIndex && activeIndex !== -1;

            let containerClass =
              "rounded-2xl p-6 border transition-all duration-300 transform hover:-translate-y-1";
            if (isCompleted) {
              containerClass +=
                " bg-gray-100 border-gray-200 text-gray-600 shadow-sm";
            } else if (isActive) {
              containerClass +=
                " bg-white border-blue-300 shadow-[0_10px_30px_rgba(59,130,246,0.08)] ring-1 ring-blue-100";
            } else if (isFuture) {
              containerClass += " bg-gray-50 border-gray-100 text-gray-500";
            } else {
              containerClass += " bg-white border-gray-200 text-gray-700";
            }

            return (
              <div key={step.id} className={containerClass}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex items-center justify-center w-11 h-11 rounded-lg font-semibold text-sm shadow-sm
                        ${
                          isCompleted
                            ? "bg-gray-200 text-gray-500"
                            : isActive
                            ? "bg-gradient-to-br from-blue-500 to-indigo-500 text-white animate-[pulse_2.5s_infinite]"
                            : "bg-white text-gray-800 border border-gray-100"
                        }`}
                    >
                      {step.id}
                    </div>

                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-semibold ${
                          isCompleted ? "text-gray-600" : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm mt-1 ${
                          isCompleted
                            ? "text-gray-500"
                            : isActive
                            ? "text-blue-600"
                            : "text-gray-500"
                        }`}
                      >
                        {isActive
                          ? "Hozirgi bosqich"
                          : isCompleted
                          ? "Yakunlangan"
                          : "Kutilmoqda"}
                      </p>
                    </div>
                  </div>

                  <div>
                    {isCompleted && (
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700">
                        ✅ Tugallandi
                      </span>
                    )}
                    {isActive && (
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 border border-blue-100">
                        Faol
                      </span>
                    )}
                  </div>
                </div>

                <ul className="list-disc pl-5 mt-4 space-y-1 text-sm sm:text-base">
                  {step.details.map((item, i) => (
                    <li
                      key={i}
                      className={`leading-relaxed ${
                        isCompleted ? "text-gray-500" : "text-gray-700"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p
                  className={`mt-4 font-medium ${
                    isCompleted
                      ? "text-gray-600"
                      : isActive
                      ? "text-indigo-700"
                      : "text-gray-700"
                  }`}
                >
                  {step.result}
                </p>

                <div className="mt-4">
                  <div
                    className={`h-1 rounded-full ${
                      isCompleted
                        ? "bg-gray-200"
                        : isActive
                        ? "bg-gradient-to-r from-blue-400 to-indigo-400 animate-pulse"
                        : "bg-gray-100"
                    }`}
                    style={{ width: isActive ? "72%" : "100%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
