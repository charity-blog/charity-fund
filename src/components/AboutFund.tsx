
import { ArrowDown } from "lucide-react";

const AboutFund = () => {
  const scrollToNextSection = () => {
    const howToHelpSection = document.getElementById("howToHelp");
    if (howToHelpSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      window.scrollTo({
        top: howToHelpSection.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="aboutFund"
      className="min-h-screen pt-28 pb-12 flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-fund-light to-white opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
        {/* Left part - Image and animation */}
        <div className="w-full md:w-1/2 h-full mb-12 md:mb-0 relative animate-fade-in-left">
          <div className="relative rounded-2xl overflow-hidden shadow-soft-xl">
            <img
              src="/about_fund.png"
              alt="Фонд допомоги"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fund-dark/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-soft transform rotate-2 border border-gray-100">
            <p className="text-fund-primary font-medium">Допомагаємо з 2020 року</p>
          </div>
        </div>
        
        {/* Right part - Description */}
        <div className="w-full md:w-1/2 md:pl-16 animate-fade-in-right">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-fund-primary/10 text-fund-primary rounded-full text-sm font-medium">
              Благодійна організація
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-semibold text-fund-dark leading-tight">
              Про <span className="text-fund-primary">фонд</span>
            </h1>
            
            <p className="text-xl text-fund-dark/80 leading-relaxed">
              Наша місія — допомогти тим, хто цього потребує. Ми працюємо над тим,
              щоб кожен міг знайти підтримку та ресурси, що дозволяють змінити
              своє життя на краще.
            </p>
            
            <p className="text-lg text-fund-dark/70">
              Долучайтесь до нашої ініціативи та разом ми
              зробимо світ кращим!
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <button className="btn-primary">
                Підтримати
              </button>
              <button className="btn-secondary">
                Дізнатися більше
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-fund-primary/60 hover:text-fund-primary animate-scroll-down transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
};

export default AboutFund;
