import React from "react";
import { ExternalLink, Figma, Globe } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import "../App.css";

const Home = () => {
  const projects = [
    {
      id: 5,
      title: "ExceedICT",
      description:
        "Technology company website with modern design (new design under development).",
      figmaUrl:
        "https://www.figma.com/proto/gWkpWk84pgXFiLE4eFCRt4/Exceedict-2025?page-id=3022%3A76813&node-id=3022-78248",
      liveUrl: "https://exceedict.com/",
      caseStudy: "/exceedict",
      category: "Technology",
    },
    {
      id: 13,
      title: "Resident Stylist",
      description:
        "Clinical, trustworthy Fintech-inspired landing page for on-site care services.",
      figmaUrl:
        "https://www.figma.com/proto/mPfXKdJ4ZdhTjvgtLbRSlz/ResidentStylist?page-id=0%3A1&node-id=1-457",
      liveUrl: "https://residentstylist.com/",
      caseStudy: "/resident-stylist",
      category: "Style",
    },
    {
      id: 1,
      title: "SquadDeck",
      description:
        "A comprehensive platform design with modern UI/UX principles",
      figmaUrl:
        "https://www.figma.com/proto/smS69yYNKwavQJyLyExvN1/SquadDeck-v2?page-id=0%3A1&node-id=2078-1280&viewport=716%2C468%2C0.04&t=mUkhQYSPoIYGjNYl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2078%3A1280",
      liveUrl: "https://squaddeck.com/",
      category: "Web Platform",
    },
    {
      id: 2,
      title: "AGS - Aylward Game Solicitors",
      description:
        "Professional legal services website with clean, trustworthy design",
      figmaUrl:
        "https://www.figma.com/proto/MUtdEMDiCGRw4sIAx7ZCqf/AGS-UI-UX?page-id=0%3A1&node-id=1-2705&viewport=478%2C209%2C0.08&t=duSylFj7y1Gb2NnK-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2705",
      liveUrl: "https://aylwardgame.com.au/",
      category: "Legal Services",
    },
    {
      id: 3,
      title: "JNL - James Noble Law",
      description:
        "Modern law firm website with professional aesthetics and user-friendly navigation",
      figmaUrl:
        "https://www.figma.com/proto/XCNo1QYhS4O4FZCRXKpvtd/JNL-UI-UX?page-id=0%3A1&node-id=1-1357&viewport=-547%2C252%2C0.12&t=tRMvHvsY7wixfX9I-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1357",
      liveUrl: "https://jamesnoblelaw.com.au/",
      category: "Legal Services",
    },
    {
      id: 4,
      title: "The Law App",
      description:
        "Innovative legal application with intuitive interface and comprehensive functionality",
      figmaUrl:
        "https://www.figma.com/proto/uYFDvLCCwrkfMwt0D4FCp6/THE-LAW-APP?page-id=0%3A1&node-id=2-2640&viewport=252%2C-39%2C0.05&t=KA5MrlFZCvCppgWL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A10857",
      liveUrl: "https://stag.thelawapp.com.au/",
      category: "Legal Services",
    },
    {
      id: 6,
      title: "Ammerny",
      description:
        "E-commerce platform with focus on user experience and conversion optimization",
      figmaUrl:
        "https://www.figma.com/proto/uWRKjYZjdANgQNHSqp6npL/INMOGR?page-id=102%3A54164&node-id=102-56009&viewport=2440%2C531%2C0.16&t=qYmS4qhrXo6jzPGc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=102%3A77350",
      liveUrl: "https://ammerny.com/",
      category: "E-commerce",
    },
    {
      id: 7,
      title: "Nattraroza",
      description:
        "Multi-platform design including website and mobile app with cohesive branding",
      figmaUrl:
        "https://www.figma.com/proto/zjjeNgi4xIoshsyFT99ndo/Nattroroza-New-Design?page-id=1145%3A151303&node-id=1145-158815&viewport=4351%2C4225%2C0.23&t=KuPt8i1qzU0tQtEV-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1145%3A158815",
      figmaUrl1:
        "https://www.figma.com/proto/zjjeNgi4xIoshsyFT99ndo/Nattroroza-New-Design?page-id=1178%3A138335&node-id=1875-222495&viewport=-453%2C4161%2C0.15&t=Um7RxVQ3JO7L2C4a-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1311%3A170021",
      liveUrl: "https://natrarosa.com/",
      category: "Multi-platform",
    },
    {
      id: 8,
      title: "Wakkelni",
      description:
        "Comprehensive platform with mobile app, web app, and landing page designs",
      figmaUrl:
        "https://www.figma.com/proto/9CFjR4m9F3nuW4QzwyJbla/Wakkelni?page-id=687%3A41188&node-id=656-24213&viewport=608%2C-1235%2C0.16&t=JM1RhgHauVES3Wt8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=629%3A22295",
      figmaUrl1:
        "https://www.figma.com/proto/9CFjR4m9F3nuW4QzwyJbla/Wakkelni?page-id=738%3A29890&node-id=740-29999&viewport=612%2C108%2C0.13&t=uGqwwv5vK87TIqAw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=740%3A29999",
      figmaUrl2:
        "https://www.figma.com/proto/uWRKjYZjdANgQNHSqp6npL/INMOGR?page-id=0%3A1&node-id=2-46&viewport=1088%2C457%2C0.08&t=O4EI1HRuGfBJ6Rc8-1&scaling=scale-down&content-scaling=fixed",
      category: "Multi-platform",
    },
    {
      id: 9,
      title: "Awaneek",
      description:
        "Dual-site design approach with comprehensive branding and user experience",
      figmaUrl:
        "https://www.figma.com/proto/uWRKjYZjdANgQNHSqp6npL/INMOGR?page-id=102%3A9032&node-id=102-15286&viewport=2611%2C778%2C0.22&t=0scp7FXFMFp2nSfr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=102%3A15286",
      figmaUrl1:
        "https://www.figma.com/proto/uWRKjYZjdANgQNHSqp6npL/INMOGR?page-id=2%3A5274&node-id=2-11130&viewport=596%2C770%2C0.1&t=B3LxwzwDk7VXj7as-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A11130",
      liveUrl: "https://awaneek.com/",
      category: "Multi-site",
    },
    {
      id: 10,
      title: "Kiss Mobile App UI/UX",
      description:
        "Modern mobile application design with intuitive user interface",
      figmaUrl:
        "https://www.figma.com/proto/ShMfQsrJmlGSOXXsB2QQB7/All-Mobile-Apps-from-INMOGR?page-id=0%3A1&node-id=1-3855&viewport=693%2C502%2C0.06&t=yhUpQlcYxOh86LH2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3787",
      category: "Mobile App",
    },
    {
      id: 11,
      title: "Car Rental Mobile App",
      description:
        "Comprehensive car rental application with seamless booking experience",
      figmaUrl:
        "https://www.figma.com/proto/ShMfQsrJmlGSOXXsB2QQB7/All-Mobile-Apps-from-INMOGR?page-id=1%3A137402&node-id=1-137656&viewport=844%2C498%2C0.08&t=qOWPejupzkKWEcVz-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A137539",
      category: "Mobile App",
    },
    {
      id: 12,
      title: "Digital Card Dashboard - UI",
      description:
        "Professional dashboard interface for digital card management system",
      figmaUrl1:
        "https://www.figma.com/design/mdqOQrB4MWasp7GENVxVoJ/Digital-Card?node-id=0-1",
      figmaUrl2:
        "https://www.figma.com/proto/mdqOQrB4MWasp7GENVxVoJ/Digital-Card?page-id=0%3A1&node-id=3-68&viewport=613%2C300%2C0.15&t=9da9tubQSxfxTvY4-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A68",
      category: "Dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Md Forhad Sarkar
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              UI/UX Designer & Frontend Developer
            </p>
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {projects.length} Projects
          </span>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        {/* About Section */}

        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 rounded-3xl shadow-sm mb-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-10" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r bg-[#008E86] to-cyan-500 dark:from-blue-400 dark:to-teal-300 mb-6 animate-fade-in">
              Crafting Human-Centered Digital Experiences
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I’m a{" "}
              <span className="font-semibold text-[#008E86] dark:text-blue-400">
                UI/UX Designer
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#008E86] dark:text-blue-400">
                Frontend Developer
              </span>{" "}
              with 4+ years of experience designing elegant, user-focused web
              and mobile interfaces. I bridge design and technology — crafting
              intuitive user experiences and transforming them into scalable,
              production-ready products.
            </p>

            <div className="max-w-3xl mx-auto space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                Currently leading the design team at{" "}
                <span className="font-semibold text-[#008E86] dark:text-blue-400">
                  Inleads IT
                </span>
                , I’ve also collaborated with{" "}
                <span className="font-semibold">FreeCast Inc. (USA)</span>,{" "}
                <span className="font-semibold">Z IT Solution Ltd.</span>, and{" "}
                <span className="font-semibold">INMOGR FZCO</span>.
              </p>
              <p>
                Skilled in{" "}
                <span className="font-medium text-[#008E86] dark:text-blue-400">
                  Figma, React.js, Next.js, Tailwind CSS, and TypeScript
                </span>
                — I create AI-ready, SaaS-driven digital products that balance
                creativity with usability.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-10">
              <a
                href="https://www.linkedin.com/in/mdforhadsarkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r bg-[#008E86] to-cyan-500 hover:bg-[#007a74] hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-medium text-sm md:text-base shadow-lg shadow-blue-500/20 transition-all duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/message/XZFDKUCW4DIAL1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-600 px-6 py-3 rounded-xl text-sm md:text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-300 dark:bg-cyan-800/20 rounded-full blur-3xl opacity-40" />
        </section>

        {/* Projects */}
        <section>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              >
                {" "}
                <CardHeader>
                  {" "}
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-[#008E86] dark:group-hover:text-blue-400 transition-colors">
                    {" "}
                    {project.title}{" "}
                  </CardTitle>{" "}
                  <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-[#008E86] dark:text-[#a4f1ee] rounded-full">
                    {" "}
                    {project.category}{" "}
                  </span>{" "}
                  <CardDescription className="text-slate-600 dark:text-slate-300 mt-3">
                    {" "}
                    {project.description}{" "}
                  </CardDescription>{" "}
                </CardHeader>{" "}
                <CardContent>
                  {" "}
                  <div className="flex flex-wrap gap-2">
                    {" "}
                    {project.figmaUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 text-xs cursor-pointer"
                        onClick={() => window.open(project.figmaUrl, "_blank")}
                      >
                        {" "}
                        <Figma className="w-3 h-3" /> Prototype{" "}
                      </Button>
                    )}{" "}
                    {project.figmaUrl1 && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 text-xs cursor-pointer"
                        onClick={() => window.open(project.figmaUrl1, "_blank")}
                      >
                        {" "}
                        <Figma className="w-3 h-3" /> Prototype{" "}
                      </Button>
                    )}{" "}
                    {project.figmaUrl2 && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 text-xs cursor-pointer"
                        onClick={() => window.open(project.figmaUrl2, "_blank")}
                      >
                        {" "}
                        <Figma className="w-3 h-3" />
                        Prototype{" "}
                      </Button>
                    )}{" "}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex items-center gap-2 text-xs bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        {" "}
                        <Globe className="w-3 h-3" /> Live Site{" "}
                      </Button>
                    )}{" "}
                    {project.caseStudy && (
                      <Button
                        size="sm"
                        className="inline-flex items-center gap-2 bg-gradient-to-r bg-[#008E86] to-cyan-500 hover:bg-[#007a74] hover:to-cyan-600 text-white px-6 py-3 rounded cursor-pointer text-sm shadow-lg shadow-blue-500/20 transition-all duration-300"
                        onClick={() => window.open(project.caseStudy, "_blank")}
                      >
                        {" "}
                        <ExternalLink className="w-3 h-3" /> Case Study{" "}
                      </Button>
                    )}{" "}
                  </div>{" "}
                </CardContent>{" "}
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row items-center justify-between mt-16 text-center py-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-400">
            <a
              href="https://forhadsarkar.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              UI/UX Designer • Creating meaningful digital experiences
            </a>
          </p>
          <span className="text-sm text-slate-500 dark:text-slate-400 mt-3 md:mt-0">
            © {new Date().getFullYear()} Md Forhad Sarkar
          </span>
        </footer>
      </main>
    </div>
  );
};

export default Home;
