import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-300 mb-6 tracking-tighter">
        အတူတူ<span className='text-slate-500'>အနာဂတ်တစ်ခု</span>ဖန်တီးကြရအောင်
      </h2>
      <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
        ကျွန်တော် အခု အခွင့်အလမ်းအသစ်တွေ ရှာဖွေနေပါတယ်။ မေးခွန်းတစ်ခုခုရှိရင်ပဲဖြစ်ဖြစ်၊ ဆွေးနွေးစရာရှိရင်ပဲဖြစ်ဖြစ်၊ ကျွန်တော့်ကို ဆက်သွယ်နိုင်ပါတယ်၊ ကျွန်တော့်ဘက်ကလည်း ပြန်ဆက်သွယ်ဖို့ အကောင်းဆုံး ကြိုးစားပါ့မယ်။
      </p>
      <a 
        href="mailto:hello@example.com" 
        className="px-8 py-4 rounded-lg bg-slate-700 dark:bg-white text-white dark:text-slate-700 font-bold hover:bg-mint-blue dark:hover:bg-mint-blue transition-colors shadow-lg"
      >
        ဟဲလိုလုပ်လိုက်ပါ
      </a>
    </section>
  );
};

export default Contact;