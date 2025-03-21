
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-fund-light p-6">
      <div className="bg-white p-10 rounded-2xl shadow-soft-xl max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-fund-primary/10 text-fund-primary rounded-full mb-6">
          <span className="text-4xl font-display font-bold">404</span>
        </div>
        
        <h1 className="text-3xl font-display font-semibold text-fund-dark mb-4">
          Сторінку не знайдено
        </h1>
        
        <p className="text-fund-dark/70 mb-8">
          Вибачте, сторінка за адресою <span className="font-medium">{location.pathname}</span> не існує або її було видалено.
        </p>
        
        <button 
          onClick={() => navigate("/")}
          className="btn-primary inline-flex items-center justify-center gap-2"
        >
          <ArrowLeft size={16} />
          Повернутися на головну
        </button>
      </div>
    </div>
  );
};

export default NotFound;
