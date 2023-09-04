import s from "./style";

// source tutorial
//https://www.youtube.com/watch?v=_oO4Qi5aVZs

import {
  Navbar,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Client,
  CTA,
  Footer,
  Hero,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${s.paddingX} ${s.flexCenter}`}>
        <div className={`${s.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${s.flexStart}`}>
        <div className={`${s.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Section */}
      <div className={`bg-primary ${s.paddingX} ${s.flexStart}`}>
        <div className={`${s.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
