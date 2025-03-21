
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          comment: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="becomePartner"
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-fund-primary/10 to-fund-secondary/20 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-fund-primary/5 rounded-full transform translate-x-1/2 -translate-y-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-fund-primary/5 rounded-full transform -translate-x-1/3 translate-y-1/3 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-fund-primary/10 text-fund-primary rounded-full text-sm font-medium mb-4">
            Співпраця
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-fund-dark">
            Стати <span className="text-fund-primary">партнером</span>
          </h2>
          <p className="mt-6 text-xl text-fund-dark/70 max-w-2xl mx-auto">
            Заповніть форму нижче, і ми зв'яжемося з вами для обговорення можливостей співпраці.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft-xl animate-fade-in">
            {isSubmitted ? (
              <div className="py-8 text-center">
                <div className="mb-6 flex justify-center text-fund-success">
                  <CheckCircle size={64} />
                </div>
                <h3 className="text-2xl font-semibold text-fund-dark mb-3">
                  Дякуємо за заявку!
                </h3>
                <p className="text-fund-dark/70">
                  Ми зв'яжемося з вами найближчим часом для обговорення деталей співпраці.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-fund-dark/80 font-medium block">
                    Ім'я
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Ваше ім'я"
                    required
                  />
                </div>

                {/* Phone number field */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-fund-dark/80 font-medium block">
                    Номер телефону
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Ваш номер телефону"
                    required
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-fund-dark/80 font-medium block">
                    Пошта
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Ваш email"
                    required
                  />
                </div>

                {/* Comment field */}
                <div className="space-y-2">
                  <label htmlFor="comment" className="text-fund-dark/80 font-medium block">
                    Коментар
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    className="input-field min-h-[120px] resize-y"
                    placeholder="Ваш коментар або запитання"
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center gap-2 py-4 ${
                    isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Відправлення...
                    </>
                  ) : (
                    <>
                      Відправити
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePartner;
