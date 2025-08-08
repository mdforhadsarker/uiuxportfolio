import { ExternalLink, Figma, Globe } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import "./App.css";

function App() {
  const projects = [
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
      category: "Mobile App",
    },
    {
      id: 5,
      title: "ExceedICT",
      description:
        "Technology company website with modern design (new design under development)",
      figmaUrl:
        "https://www.figma.com/proto/yTMUDyMzhmI6zXLu7vF0bB/Exceedict?page-id=0%3A1&node-id=1-12665&viewport=-138%2C-276%2C0.14&t=4C2cZnqrx1bLC2fT-1&scaling=min-zoom&content-scaling=fixed",
      designUrl:
        "https://www.figma.com/design/yTMUDyMzhmI6zXLu7vF0bB/Exceedict?node-id=0-1",
      liveUrl: "https://exceedict.com/",
      category: "Technology",
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
      mobileUrl:
        "https://www.figma.com/proto/zjjeNgi4xIoshsyFT99ndo/Nattroroza-New-Design?page-id=1178%3A138335&node-id=1875-222495&viewport=-453%2C4161%2C0.15&t=Um7RxVQ3JO7L2C4a-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1311%3A170021",
      liveUrl: "https://natrarosa.com/",
      category: "Multi-platform",
    },
    {
      id: 8,
      title: "Wakkelni",
      description:
        "Comprehensive platform with mobile app, web app, and landing page designs",
      mobileUrl:
        "https://www.figma.com/proto/9CFjR4m9F3nuW4QzwyJbla/Wakkelni?page-id=687%3A41188&node-id=656-24213&viewport=608%2C-1235%2C0.16&t=JM1RhgHauVES3Wt8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=629%3A22295",
      webUrl:
        "https://www.figma.com/proto/9CFjR4m9F3nuW4QzwyJbla/Wakkelni?page-id=738%3A29890&node-id=740-29999&viewport=612%2C108%2C0.13&t=uGqwwv5vK87TIqAw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=740%3A29999",
      landingUrl:
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
      figmaUrl2:
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
      designUrl:
        "https://www.figma.com/design/mdqOQrB4MWasp7GENVxVoJ/Digital-Card?node-id=0-1",
      figmaUrl:
        "https://www.figma.com/proto/mdqOQrB4MWasp7GENVxVoJ/Digital-Card?page-id=0%3A1&node-id=3-68&viewport=613%2C300%2C0.15&t=9da9tubQSxfxTvY4-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A68",
      category: "Dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                UI/UX Design Portfolio
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Professional Design Solutions
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">12 Projects</span>
            </div>
           
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Introduction */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A collection of UI/UX design projects showcasing modern design
            principles, user-centered approaches, and innovative solutions
            across various industries.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-slate-600 dark:text-slate-300 mt-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.figmaUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-xs"
                      onClick={() => window.open(project.figmaUrl, "_blank")}
                    >
                      <Figma className="w-3 h-3" />
                      Prototype
                    </Button>
                  )}
                  {project.designUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-xs"
                      onClick={() => window.open(project.designUrl, "_blank")}
                    >
                      <Figma className="w-3 h-3" />
                      Design
                    </Button>
                  )}
                  {project.mobileUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-xs"
                      onClick={() => window.open(project.mobileUrl, "_blank")}
                    >
                      <Figma className="w-3 h-3" />
                      Mobile
                    </Button>
                  )}
                  {project.webUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-xs"
                      onClick={() => window.open(project.webUrl, "_blank")}
                    >
                      <Figma className="w-3 h-3" />
                      Web App
                    </Button>
                  )}
                  {project.landingUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-xs"
                      onClick={() => window.open(project.landingUrl, "_blank")}
                    >
                      <Figma className="w-3 h-3" />
                      Landing
                    </Button>
                  )}
                  {project.figmaUrl2 && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-xs"
                      onClick={() => window.open(project.figmaUrl2, "_blank")}
                    >
                      <Figma className="w-3 h-3" />
                      Site 2
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex items-center gap-2 text-xs bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <Globe className="w-3 h-3" />
                      Live Site
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Footer */}
        <footer className=" flex items-center justify-between mt-16 text-center py-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-400">
            <a
              href="https://forhadsarkar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              UI/UX Designer • Creating meaningful digital experiences
            </a>
          </p>
           <a href="https://forhadsarkar.vercel.app/" target="_blank">
              <span className="text-sm text-slate-500 dark:text-slate-400 cursor-pointer">
                Md Forhad Sarkar
              </span>
            </a>
        </footer>
      </main>
    </div>
  );
}

export default App;
