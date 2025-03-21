
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId!);

        if (targetElement) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: "smooth",
          });
          setIsMobileMenuOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const navItems = [
    { href: "#aboutFund", label: "Про фонд" },
    { href: "#howToHelp", label: "Як допомогти" },
    { href: "#reports", label: "Звіти" },
    { href: "#partners", label: "Партнери" },
    { href: "#becomePartner", label: "Стать партнером" },
    { href: "#footer", label: "Контакти" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-soft py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#aboutFund" className="flex items-center group">
          <img src="/logo.png" alt="Логотип" className="h-12 w-auto mr-3" />
          <span className="text-xl font-display font-semibold text-fund-dark group-hover:text-fund-primary transition-colors">
            <span className="text-fund-primary">Фонд</span>Допомоги
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-fund-dark hover:text-fund-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-medium animate-fade-in">
          <ul className="flex flex-col p-4">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-gray-100 last:border-b-0">
                <a 
                  href={item.href} 
                  className="block py-3 px-4 text-fund-dark hover:text-fund-primary hover:bg-fund-light/50 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
