import React from "react";
import { useNavigate } from "react-router-dom";

const ExceedICTCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <main className="max-w-[1100px] mx-auto px-6 py-10 font-inter text-slate-900 bg-white">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-50 to-emerald-100 flex items-center justify-center font-extrabold text-emerald-700">
            EI
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Exceed ICT — Website Redesign (38 Pages)
            </h1>
            <p className="text-sm text-slate-500">
              Modernizing a large-scale ICT platform with clarity and
              consistency
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
            href="https://www.figma.com/proto/gWkpWk84pgXFiLE4eFCRt4/Exceedict-2025?page-id=3022%3A76813&node-id=3022-78248&viewport=1443%2C-607%2C0.2&t=8fIS2ld8UIPG7UgT-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3022%3A78248"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-emerald-800 transition"
          >
            View Final
          </a>
          <a
            href="https://www.figma.com/proto/GAau8ARiAiqk8YhtPUyvYB/WasteMate-Sponsorship-program-2025?page-id=0%3A1&node-id=2-5764&viewport=-197%2C206%2C0.07&t=LcTHozsGMAFZVf6f-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A5764"
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
          <p className="mb-4">
            Exceed ICT is an Australian ICT provider offering digital
            connectivity, IoT, and managed services. The 38-page website needed
            a complete redesign to reflect innovation, improve navigation, and
            create consistency across all touchpoints.
          </p>
          <p className="text-sm text-slate-500 mb-4">
            Goal: Modernize the user interface, simplify navigation, and align
            digital identity with Exceed ICT’s forward-looking brand.
          </p>

          <h3 className="font-semibold mt-4 mb-2">Key Objectives</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Deliver a clean, scalable design system</li>
            <li>Improve usability across 38+ service pages</li>
            <li>Enhance mobile responsiveness and hierarchy</li>
            <li>Strengthen brand trust through visuals</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Deliverables</h3>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Full website redesign (38 pages)</li>
            <li>Wireframes and information architecture</li>
            <li>High-fidelity mockups and Figma prototype</li>
            <li>Reusable UI components and style system</li>
          </ul>
        </section>

        <aside className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Project Info</h2>
          <p className="text-sm text-slate-500 mb-2">
            Role: Lead UI/UX Designer — Research, Wireframing, Visual Design
          </p>
          <p className="text-sm text-slate-500 mb-2">
            Duration: 3 months (May – July 2025)
          </p>
          <p className="text-sm text-slate-500 mb-4">
            Tools: Figma, Notion, Illustrator
          </p>
          <div className="bg-slate-50 p-3 rounded-lg">
            <p className="font-semibold">Primary Outcome</p>
            <p className="text-sm text-slate-500">
              Scalable, modern design system for enterprise-level ICT brand
            </p>
          </div>
        </aside>
      </div>

      {/* Problem */}
      <section className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-3">Problem</h2>
        <p className="mb-3">
          The previous website was visually outdated, inconsistent, and
          difficult to navigate. Users faced challenges finding relevant
          information across 38+ pages, resulting in reduced engagement and
          brand trust.
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>Complex navigation without clear hierarchy</li>
          <li>Inconsistent UI patterns and visuals</li>
          <li>Non-responsive layouts on mobile devices</li>
          <li>Text-heavy sections lacking visual clarity</li>
        </ul>
      </section>

      {/* Research */}
      <section className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-3">Research Insights</h2>
        <p className="mb-4">
          Through competitor analysis, heuristic evaluation, and user
          interviews, several key usability issues and improvement areas were
          identified.
        </p>

        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>
            Competitors used minimal, visual-driven layouts with strong CTAs.
          </li>
          <li>
            Users preferred simple navigation and clear descriptions of
            services.
          </li>
          <li>
            Decision-makers emphasized trust, clarity, and professional visuals.
          </li>
        </ul>
      </section>

      {/* Wireframes */}
      <section
        id="wireframes"
        className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm mb-8"
      >
        <h2 className="text-lg font-semibold mb-3">Wireframes</h2>
        <p className="text-sm text-slate-500 mb-4">
          Low-fidelity wireframes focused on content hierarchy and interaction
          flow.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <img
            src="/exceedict-wireframe.png"
            alt="Exceed ICT Wireframe Preview"
            className="rounded-lg border border-slate-100 sm:col-span-2"
          />
        </div>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>Logical grouping of service categories</li>
          <li>Consistent header and footer navigation</li>
          <li>Improved CTA placement and visual balance</li>
        </ul>
      </section>

      {/* Final Design */}
      <section
        id="final"
        className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm mb-8"
      >
        <h2 className="text-lg font-semibold mb-3">Final Visual Design</h2>
        <p className="text-sm text-slate-500 mb-4">
          High-fidelity mockups emphasize a modern dark theme with green accent
          highlights, professional typography, and a scalable layout grid.
        </p>

        {/* Desktop & Mobile Mockups */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div>
            <img
              src="/exceedict-final-desktop.png"
              alt="Exceed ICT Desktop Mockup"
              className="rounded-lg border border-slate-100 shadow-sm"
            />
            <p className="text-center text-sm text-slate-500 mt-2">
              Desktop View
            </p>
          </div>
          <div>
            <img
              src="/exceedict-final-mobile.png"
              alt="Exceed ICT Mobile Mockup"
              className="rounded-lg border border-slate-100 shadow-sm"
            />
            <p className="text-center text-sm text-slate-500 mt-2">
              Mobile View
            </p>
          </div>
        </div>

        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>Dark background theme for a sleek, modern aesthetic</li>
          <li>Green accent tones for brand recognition</li>
          <li>Readable Aptos typography for clarity</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="bg-white p-6 border border-slate-100 rounded-xl shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-3">Impact & Learnings</h2>
        <p className="mb-3">
          The redesign significantly improved usability and brand perception.
          Navigation became intuitive, and content was easier to explore across
          devices.
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>Improved user satisfaction and retention</li>
          <li>Faster navigation across all 38 pages</li>
          <li>Stronger visual identity and scalability</li>
          <li>Optimized mobile experience for enterprise clients</li>
        </ul>
      </section>

      {/* Back Button */}
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
        Exceed ICT — Website Redesign Case Study
      </footer>
    </main>
  );
};

export default ExceedICTCaseStudy;
