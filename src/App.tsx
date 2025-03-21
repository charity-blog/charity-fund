
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import AboutFund from "./components/AboutFund";
import HowToHelp from "./components/HowToHelp";
import Reports from "./components/Reports";
import Partners from "./components/Partners";
import BecomePartner from "./components/BecomePartner";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="overflow-x-hidden bg-gradient-to-b from-white to-fund-light/50">
          <Header />
          <main>
            <AboutFund />
            <HowToHelp />
            <Reports />
            <Partners />
            <BecomePartner />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
