const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 transition-colors duration-300">
      <p className="text-slate-500 text-sm">
        &copy;{new Date().getFullYear()} ThorShan
      </p>
    </footer>
  );
};

export default Footer;