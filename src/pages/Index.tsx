import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UserTypes from "@/components/UserTypes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <UserTypes />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
