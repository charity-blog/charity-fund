
import { ExternalLink, Check } from "lucide-react";

const Reports = () => {
  const achievements = [
    "Закупівля комп'ютерної техніки для шкіл",
    "Надання медичного обладнання для лікарень",
    "Допомога постраждалим від стихійних лих",
  ];

  return (
    <section
      id="reports"
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-fund-primary/5 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-fund-primary/10 text-fund-primary rounded-full text-sm font-medium mb-4">
            Прозорість
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-fund-dark">
            Наші <span className="text-fund-primary">звіти</span>
          </h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-soft-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left part: Image */}
            <div className="w-full lg:w-1/2 animate-fade-in-left">
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                  alt="Допомога технікою"
                  className="w-full h-full object-cover max-h-[400px] lg:max-h-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fund-dark/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-lg shadow-soft text-sm font-medium text-fund-primary">
                  Березень 2023
                </div>
              </div>
            </div>
            
            {/* Right part: Text and details */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 animate-fade-in-right flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-semibold text-fund-dark mb-6">
                  Звіт про закупівлю техніки
                </h3>
                
                <p className="text-lg text-fund-dark/70 mb-8">
                  Ми продовжуємо розширювати наш асортимент техніки, щоб
                  забезпечити потреби наших підопічних. Ось деякі з останніх
                  придбань та досягнень:
                </p>
                
                <ul className="space-y-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-fund-dark/80">
                      <span className="mr-3 mt-1 text-fund-success">
                        <Check size={18} />
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-fund-primary font-medium hover:text-fund-accent transition-colors gap-2 group"
                >
                  <span>Переглянути всі звіти в Instagram</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
