
const Partners = () => {
  const partners = [
    {
      href: "https://www.apple.com",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      alt: "Apple",
    },
    {
      href: "https://www.microsoft.com",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      alt: "Microsoft",
    },
    {
      href: "https://www.google.com",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google",
    },
    {
      href: "https://www.amazon.com",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      alt: "Amazon",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-fund-primary/10 text-fund-primary rounded-full text-sm font-medium mb-4">
            Співпраця
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-fund-dark">
            Наші <span className="text-fund-primary">партнери</span>
          </h2>
          <p className="mt-6 text-xl text-fund-dark/70 max-w-2xl mx-auto">
            Завдяки підтримці наших партнерів ми можемо ефективно реалізовувати наші проєкти та ініціативи.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={partner.src} 
                alt={partner.alt} 
                className="h-16 object-contain" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
