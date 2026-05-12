import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { useTheme } from "./hooks/useTheme";

function App() {
  // Gọi hook để kích hoạt Dark/Light Mode logic ngay khi app khởi động
  useTheme();

  return (
    <main className="bg-white dark:bg-[#0a0a0a] min-h-screen relative transition-colors duration-500">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;