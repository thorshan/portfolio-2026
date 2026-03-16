const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">
          Thor<span className="text-slate-500">Shan.</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 text-sm font-bold text-slate-700 dark:text-slate-300">
            <li><a href="#home" className="hover:text-slate-500 transition-colors">မူလစာမျက်နာ</a></li>
            <li><a href="#about" className="hover:text-slate-500 transition-colors">ကျွန်တော့်အကြောင်း</a></li>
            <li><a href="#projects" className="hover:text-slate-500 transition-colors">လုပ်ဆောင်ချက်များ</a></li>
            <li><a href="#contact" className="hover:text-slate-500 transition-colors">ဆက်သွယ်ရန်</a></li>
          </ul>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-600 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;