import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const Projects = () => {
  // Helper to render official icons based on tag name
  const getIcon = (tag) => {
    switch (tag.toLowerCase()) {
      case "react":
        return <SiReact className="text-[#61DAFB]" />;
      case "tailwind":
        return <SiTailwindcss className="text-[#06B6D4]" />;
      case "node":
        return <SiNodedotjs className="text-[#339933]" />;
      case "express":
        return <SiExpress className="dark:text-white text-black" />;
      case "javascript":
        return <SiJavascript className="text-[#F7DF1E]" />;
      case "typescript":
        return <SiTypescript className="text-[#3178C6]" />;
      default:
        return null;
    }
  };

  const projects = [
    {
      id: 1,
      title: "JLPTX.",
      desc: "JLPT စာမေးပွဲအတွက် အကောင်းဆုံး လေ့ကျင့်နိုင်မည့်နေရာ",
      tag: ["TypeScript", "React", "Tailwind", "Node", "Express"],
      repo: "thorshan/jlpt-test-client",
      url: "https://github.com/thorshan/jlpt-mock",
    },
    {
      id: 2,
      title: "Note App",
      desc: "မြန်ဆန်တဲ့ မှတ််စုလုပ်ဖို့ အတွက်နေရာကောင်းတစ်ခု",
      tag: ["JavaScript", "React", "Tailwind", "Node", "Express"],
      repo: "thorshan/jlpt-test-client",
      url: "https://github.com/thorshan/jlpt-mock",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      desc: "Real-time weather data visualization.",
      tag: ["React", "Tailwind", "Node", "Express"],
      repo: "thorshan/jlpt-test-client",
      url: "https://github.com/thorshan/jlpt-mock",
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 border-t border-transparent px-4">
      <div className="flex items-center my-8">
        <div className="grow border-t border-slate-700/30 dark:border-slate-300/30" />
        <h2 className="px-6 text-3xl font-bold text-center text-slate-700 dark:text-white tracking-tighter shrink-0">
          လက်ရှိ<span className="text-slate-500">လုပ်ဆောင်ချက်များ</span>
        </h2>
        <div className="grow border-t border-slate-700/30 dark:border-slate-300/30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleCardClick(project.url)}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700 group cursor-pointer transform hover:-translate-y-2"
          >
            <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-900">
              <img
                src={`https://opengraph.githubassets.com/1/${project.repo}`}
                alt={project.title}
                className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              {/* Official Icons Tags */}
              <div className="flex items-center gap-3">
                {project.tag.map((t, index) => (
                  <div
                    key={index}
                    title={t}
                    className="text-lg p-1.5 bg-slate-50 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700"
                  >
                    {getIcon(t)}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-5 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                {project.desc}
              </p>

              <div className="text-mint-blue font-semibold inline-flex items-center text-sm group-hover:gap-2 transition-all">
                လုပ်ဆောင်ချက် ကြည့်ရန်
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
