import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/layout/sections/Hero";
import Stats from "./components/layout/sections/Stats";
import About from "./components/layout/sections/About";
import Academics from "./components/layout/sections/Academics";
import Campus from "./components/layout/sections/Campus";
import Sports from "./components/layout/sections/Sports";
import Facilities from "./components/layout/sections/Facilities";
import Testimonials from "./components/layout/sections/Testimonials";
import Admissions from "./components/layout/sections/Admissions";

import CustomCursor from "./components/animation/CustomCursor";
import ScrollProgress from "./components/animation/ScrollProgress";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Academics />
        <Campus />
        <Sports />
        <Facilities />
        <Testimonials />
        <Admissions />
      </main>

      <Footer />
    </>
  );
}

export default App;