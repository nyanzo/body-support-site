import "./App.css";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Service from "./components/Service";
import Features from "./components/Features";
import Price from "./components/Price";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Hero />
      <Problems />
      <Service />

      {/* 特徴と料金を横並びにするコンテナで囲む */}
      <section className="features-price-wrapper">
        <div className="features-price-container">
          <Features />
          <Price />
        </div>
      </section>

      <Contact />
    </>
  );
}

export default App;