
import { Heart, UserPlus, Share2 } from "lucide-react";

const HowToHelp = () => {
  const helpOptions = [
    {
      icon: <Heart className="w-8 h-8 text-fund-primary" />,
      title: "Матеріальна допомога",
      description: "Ваші фінансові внески допоможуть забезпечити необхідні ресурси для наших проєктів.",
      details: ["Реквізит 1: Номер рахунку", "Реквізит 2: Назва банку"],
      actionText: "Зробити внесок",
      actionUrl: "https://example.com",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-fund-primary" />,
      title: "Волонтерство",
      description: "Ми завжди раді новим волонтерам, які готові допомогти в різних сферах.",
      details: ["Деталі волонтерської роботи", "Зв'язок для реєстрації"],
      actionText: "Стати волонтером",
      actionUrl: "https://example.com/volunteer",
    },
    {
      icon: <Share2 className="w-8 h-8 text-fund-primary" />,
      title: "Інформаційна підтримка",
      description: "Ви можете поширювати інформацію про наші ініціативи в соціальних мережах та серед ваших друзів.",
      details: ["Поділитися нашими постами", "Розповісти про ініціативи своїм знайомим"],
      actionText: "Поділитися інформацією",
      actionUrl: "https://example.com/share",
    },
  ];

  return (
    <section
      id="howToHelp"
      className="py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-fund-primary/10 text-fund-primary rounded-full text-sm font-medium mb-4">
            Долучайтеся
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-fund-dark">
            Як <span className="text-fund-primary">допомогти?</span>
          </h2>
          <p className="mt-6 text-xl text-fund-dark/70 max-w-2xl mx-auto">
            Ви можете допомогти матеріально, волонтерством або інформаційною
            підтримкою. Кожен внесок важливий!
          </p>
        </div>

        {/* Help option cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {helpOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-soft card-hover animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-fund-light w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {option.icon}
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-fund-dark mb-4">
                {option.title}
              </h3>
              
              <p className="text-fund-dark/70 mb-6">
                {option.description}
              </p>
              
              <div className="mb-6">
                <p className="text-fund-dark/70 font-medium mb-2">Деталі:</p>
                <ul className="space-y-1">
                  {option.details.map((detail, idx) => (
                    <li key={idx} className="text-fund-dark/60 flex items-start">
                      <span className="mr-2 text-fund-primary">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href={option.actionUrl}
                className="inline-block text-fund-primary font-medium hover:text-fund-accent transition-colors underline-offset-4 hover:underline"
              >
                {option.actionText}
              </a>
            </div>
          ))}
        </div>

        {/* Learn more button */}
        <div className="text-center">
          <a 
            href="#becomePartner" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Дізнатися більше
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
