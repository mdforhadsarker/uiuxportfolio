import React from "react";
import { useNavigate } from "react-router-dom";

const ResidentStylistCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <main className="max-w-[1100px] mx-auto px-6 py-10 font-inter text-slate-900 bg-white">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-50 to-green-50 flex items-center justify-center font-extrabold text-teal-700">
            RS
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Resident Stylist — Landing Case Study
            </h1>
            <p className="text-sm text-slate-500">
              Enhancing Care Through Confidence — Arizona pilot landing page
            </p>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap justify-end">
          <button
            onClick={() => navigate("/")}
            className="border border-slate-200 px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-50"
          >
            ← Back to Projects
          </button>
          <a
            href="https://www.figma.com/proto/mPfXKdJ4ZdhTjvgtLbRSlz/ResidentStylist?page-id=0%3A1&node-id=1-457&viewport=696%2C791%2C0.1&t=X5fPbNwrRkYQ6QvV-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A457"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#008E86] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#007a74] transition"
          >
            View Final
          </a>
          <a
            href="https://www.figma.com/proto/Ghge7RScZsf7yMi3zTJ79Y/Resident-stylist?page-id=184%3A687&node-id=379-1539&viewport=99%2C-421%2C0.09&t=0wIB3ouigYvG3Yis-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=379%3A1539"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-200 px-3 py-2 rounded-lg font-medium text-sm hover:bg-slate-50"
          >
            Wireframes
          </a>
        </div>
      </header>

      {/* Summary + Sidebar */}
      <div className="grid md:grid-cols-[1fr_360px] gap-7 mb-8">
        <section className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Executive Summary</h2>
          <p className="text-sm text-slate-500 mb-4">
            Goal: Drive facility sign-ups for the Arizona pilot. Tone: Clinical,
            trustworthy, and human-centered.
          </p>
          <p className="mb-4">
            Resident Stylist connects licensed, insured stylists with senior and
            care facilities for on-site hairstyling. The landing page focuses on
            three audiences: Facility Managers, Stylists, and
            Residents/Families.
          </p>

          <h3 className="font-semibold mt-4 mb-2">Key Results (Target)</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Increase facility signups during pilot phase</li>
            <li>Drive stylist applications for local coverage</li>
            <li>Raise awareness with residents and families</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Deliverables</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>High-converting landing page HTML prototype</li>
            <li>Wireframes (low-fi + annotated)</li>
            <li>Final high-fidelity mockups</li>
          </ul>
        </section>

        <aside className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Project Info</h2>
          <p className="text-sm text-slate-500 mb-2">
            Role: Product Designer — UX, Wireframes, Visual Design
          </p>
          <p className="text-sm text-slate-500 mb-2">Duration: 2 weeks</p>
          <p className="text-sm text-slate-500 mb-4">
            Tools: Figma, VS Code, Chrome
          </p>
          <div className="bg-slate-50 p-3 rounded-lg">
            <p className="font-semibold">Primary CTA</p>
            <p className="text-sm text-slate-500">
              Register Your Facility — Pilot application
            </p>
          </div>
        </aside>
      </div>

      {/* Problem */}
      <section className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-3">Problem</h2>
        <p className="mb-3">
          Facilities need a simple, reliable way to offer on-site grooming
          services without operational overhead. Stylists need flexible,
          dependable work. Residents want dignity and convenience.
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>Facilities prefer pre-booked block scheduling.</li>
          <li>
            Families prioritize safety, vetting, and consistent caregivers.
          </li>
          <li>Stylists value predictable pay and local travel.</li>
        </ul>
      </section>

      {/* Wireframes */}
      <section
        id="wireframes"
        className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm mb-8"
      >
        <h2 className="text-lg font-semibold mb-3">Wireframes</h2>
        <p className="text-sm text-slate-500 mb-4">
          Low-fidelity wireframes showing layout, content hierarchy, and CTA
          placement.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <img
            src="/resident-wireframe.png"
            alt="Wireframe Preview"
            className="rounded-lg border border-slate-100 sm:col-span-2"
          />
        </div>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>CTAs grouped by audience to reduce friction.</li>
          <li>Pre-booked 2-hour blocks emphasized for clarity.</li>
          <li>Stylist pay and schedule benefits highlighted.</li>
        </ul>
      </section>

      {/* Final Design */}
      <section
        id="final"
        className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm mb-8"
      >
        <h2 className="text-lg font-semibold mb-3">Final Visual Design</h2>
        <p className="text-sm text-slate-500 mb-4">
          High-fidelity screens showcasing final desktop and mobile designs.
        </p>

        {/* Desktop & Mobile Mockups */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div>
            <img
              src="/resident-final-desktop.png"
              alt="Resident Stylist Desktop Mockup"
              className="rounded-lg border border-slate-100 shadow-sm"
            />
            <p className="text-center text-sm text-slate-500 mt-2">
              Desktop View
            </p>
          </div>
          <div>
            <img
              src="/resident-final-mobile.png"
              alt="Resident Stylist Mobile Mockup"
              className="rounded-lg border border-slate-100 shadow-sm"
            />
            <p className="text-center text-sm text-slate-500 mt-2">
              Mobile View
            </p>
          </div>
        </div>

        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>Teal accent for clinical trust and calm tone.</li>
          <li>Rounded CTAs for accessibility and mobile comfort.</li>
          <li>Human photography for emotional connection.</li>
        </ul>
      </section>

      {/* Back Button (Bottom) */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="border border-slate-300 px-5 py-2 rounded-lg hover:bg-slate-50 transition text-sm font-medium"
        >
          ← Back to Projects
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-100 pt-6 text-sm text-slate-500 text-center mt-10">
        Created by <span className="font-medium">Md Forhad Sarkar</span> •
        Resident Stylist — Enhancing Care Through Confidence
      </footer>
    </main>
  );
};

export default ResidentStylistCaseStudy;
