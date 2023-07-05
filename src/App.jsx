import Header from "./Components/Header";
import Hero from "./Components/Hero";

import "./App.css";

function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-tr from-[#60072C]
    via-[#120B2E] to-[#091498] px-8 pb-10 pt-7 md:px-14 lg:px-36"
    >
      <Header />
      <Hero />
    </div>
  );
}

export default App;
