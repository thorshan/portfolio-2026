import { 
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, 
  SiHtml5, SiCss, SiNodedotjs, SiExpress, 
  SiGit, SiPostgresql, SiMongodb 
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="dark:text-white text-black" /> },
    { name: "Git System", icon: <SiGit className="text-[#F05032]" /> },
    { name: "SQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "NoSQL", icon: <SiMongodb className="text-[#47A248]" /> },
  ];

  return (
    <section id="about" className="py-20 border-t border-transparent px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="flex items-center my-8">
          <div className="grow border-t border-slate-700/30 dark:border-slate-300/30" />
          <h2 className="px-6 text-3xl font-bold text-center text-slate-700 dark:text-white tracking-tighter shrink-0">
            ကျွန်တော့်<span className="text-slate-500">အကြောင်း</span>
          </h2>
          <div className="grow border-t border-slate-700/30 dark:border-slate-300/30" />
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
          ကျွန်တော်က ဒီဇိုင်းနှင့် အသုံးပြုသူအတွေ့အကြုံတွေကို အသေအချာ လေ့လာပြီး
          ဖန်တီးနိုင်စွမ်းအကောင်းဆုံးဖြစ်အောင် ကြိုးစားတတ်တဲ့ Full-Stack Web
          Developer တစ်ယောက်ဖြစ်ပါတယ်။ ဒီဇိုင်းနဲ့ အင်ဂျင်နီယာပညာကြားက
          ကွာဟချက်ကို ကောင်းမွန်ချောမွေ့စွာ လုပ်ဆောင်နိုင်သော
          အသုံးပြုသူအတွေ့အကြုံကို တည်ဆောက်ဖို့ ကြိုးစားနေသူဖြစ်ပါတယ်။
        </p>

        {/* Skill Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all cursor-default group"
            >
              <span className="text-xl transition-transform group-hover:scale-110">
                {skill.icon}
              </span>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;