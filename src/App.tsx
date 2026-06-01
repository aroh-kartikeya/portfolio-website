import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-neutral-200 overflow-hidden font-sans">
      {/* Background Grid Pattern & Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      
      {/* Light drifting gradient blobs - SaaS styling */}
      <div className="fixed -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none animate-float-slow z-0" />
      <div className="fixed -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none animate-float-medium z-0" style={{ animationDelay: "-4s" }} />

      {/* Main Assembly Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* About & Terminal Card Section */}
          <About />

          {/* Currently Building (Finance Tracker Highlight) */}
          <CurrentlyBuilding />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
