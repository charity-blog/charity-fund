
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: <Phone size={18} />,
      label: "Телефон",
      value: "+380123456789",
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "contact@fund.com",
    },
    {
      icon: <MapPin size={18} />,
      label: "Адреса",
      value: "вул. Липова, 10, Київ",
    },
  ];

  const navItems = [
    { href: "#aboutFund", label: "Про фонд" },
    { href: "#howToHelp", label: "Як допомогти" },
    { href: "#reports", label: "Звіти" },
    { href: "#partners", label: "Партнери" },
    { href: "#becomePartner", label: "Стати партнером" },
  ];

  return (
    <footer id="footer" className="bg-fund-dark text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-12">
          {/* Column 1: Logo and description */}
          <div className="space-y-6">
            <a href="#aboutFund" className="flex items-center">
              <img src="/logo.png" alt="Логотип" className="h-12 w-auto mr-3 filter brightness-0 invert" />
              <span className="text-xl font-display font-semibold">
                <span className="text-white">Фонд</span>Допомоги
              </span>
            </a>
            <p className="text-white/70">
              Наша місія — допомогти тим, хто цього потребує. Ми працюємо над тим,
              щоб кожен міг знайти підтримку та ресурси для кращого життя.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навігація</h3>
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакти</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-fund-secondary mr-3 mt-1">{info.icon}</span>
                  <div>
                    <span className="block text-white/70">{info.label}</span>
                    <span className="block text-white">{info.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Підпишіться на новини</h3>
            <p className="text-white/70 mb-4">
              Отримуйте інформацію про наші проєкти та ініціативи
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fund-secondary/50"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-fund-primary hover:bg-fund-accent transition-colors rounded-lg font-medium"
              >
                Підписатися
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom - copyright */}
        <div className="border-t border-white/10 py-6 px-12 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <div>
            © {new Date().getFullYear()} ФондДопомоги. Всі права захищені.
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <span>Зроблено з</span>
            <Heart size={14} className="mx-1 text-fund-primary" />
            <span>в Україні</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
