import Header from "./Header";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import AboutProduct from "./AboutProduct";
import NestedRoutesExample from "./NestedRoutesExample";

function App() {
  return (
    <div className="bg-black h-screen">
      <Header />
      <main>
        <HeroSection>yy</HeroSection>
        <TestimonialSection></TestimonialSection>
        <AboutProduct></AboutProduct>
        <NestedRoutesExample></NestedRoutesExample>
        <div style={{ height: 1500, background: "pink" }}></div>
      </main>
    </div>
  );
}

export default App;
