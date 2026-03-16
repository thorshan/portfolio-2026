import { Code2 } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-20 px-4"
    >
      <div className="flex items-center mt-5 mb-10 w-full max-w-xl">
        <div className="grow border-t border-slate-300 dark:border-slate-800" />

        <div className="flex items-center gap-3 px-6 shrink-0">
          <Code2 size={15} className="text-slate-500/50" />
          <h2 className="text-base md:text-xl font-bold text-slate-500 dark:text-slate-400 tracking-tighter">
            ကြိုဆိုလျှက်ပါ
          </h2>
          <Code2 size={15} className="text-slate-500/50" />
        </div>

        <div className="grow border-t border-slate-300 dark:border-slate-800" />
      </div>

      <h1 className="text-3xl md:text-7xl font-extrabold text-slate-700 dark:text-white mb-6 tracking-tighter">
        မင်္ဂလာပါ၊ <span className="text-slate-500">သောရှန်</span> ဖြစ်ပါတယ်။
      </h1>

      <p className="text-lg md:text-xl text-slate-700 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
        Full-Stack Developer တစ်ယောက်ဖြစ်ပါတယ်။ လက်တလောမှာ၊ ကျွန်တော် ထပ်တိုးလေ့လာထားတဲ့
        Program ဘာသာစကားဖြစ်တဲ့ <span className="text-amber-300">JavaScript</span> နှင့် <span className="text-blue-500">TypeScript</span> ကိုကောင်းကောင်း အသုံးချပြီး Project
        များရေးပါတယ်။
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-8 py-3 rounded-full bg-slate-700 text-slate-100 font-semibold hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white transition-all shadow-lg transform hover:-translate-y-1"
        >
          လုပ်ဆောင်ချက်ကြည့်ရန်
        </a>
        <a
          href="#contact"
          className="px-8 py-3 rounded-full border-2 border-slate-700 text-slate-700 dark:border-slate-400 dark:text-slate-400 font-semibold hover:bg-slate-700 hover:text-white transition-all"
        >
          ဆက်သွယ်ရန်
        </a>
      </div>
    </section>
  );
};

export default Hero;
