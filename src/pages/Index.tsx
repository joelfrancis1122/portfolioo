import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Subtle noise overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider " />
        <Work />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
