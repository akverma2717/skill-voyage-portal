import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Brain } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import educationIcons from "@/assets/education-icons-3d.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Modern Background with AI Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-purple-600/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
        
        {/* Animated Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-white/10 to-blue-200/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl float-animation" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:col-span-6 text-white fade-in-up">
            {/* Modern Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-full mb-8 hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 mr-3 text-yellow-300" />
              <span className="font-semibold">AI-Powered Student Hub</span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse" />
            </div>
            
            {/* Modern Typography */}
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="block">Smart</span>
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Education
              </span>
              <span className="block text-4xl lg:text-5xl font-light text-blue-100 mt-2">
                for Tomorrow
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-50/90 mb-10 max-w-2xl leading-relaxed font-light">
              Revolutionary platform that transforms how educational institutions manage student achievements, 
              create digital portfolios, and ensure compliance with modern AI-driven insights.
            </p>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-semibold text-lg px-8 py-4 rounded-2xl shadow-2xl"
              >
                <Zap className="w-6 h-6 mr-3" />
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-lg px-8 py-4 rounded-2xl backdrop-blur-sm"
              >
                <Play className="w-6 h-6 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Modern Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-2">25K+</h3>
                <p className="text-blue-100 font-medium">Active Students</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-2">500+</h3>
                <p className="text-blue-100 font-medium">Institutions</p>
              </div>
              <div className="text-center lg:text-left col-span-2 lg:col-span-1">
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-2">98%</h3>
                <p className="text-blue-100 font-medium">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Dashboard Preview */}
          <div className="lg:col-span-6 slide-in-right">
            <div className="relative">
              {/* 3D Floating Icons */}
              <div className="absolute -top-10 -left-10 w-24 h-24 opacity-80 animate-bounce">
                <img src={educationIcons} alt="Education Icons" className="w-full h-full object-contain" />
              </div>
              
              {/* Main Dashboard Image */}
              <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl">
                  <img 
                    src={dashboardPreview} 
                    alt="Modern Dashboard Preview" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5" />
                    <span className="font-semibold">AI-Powered Analytics</span>
                  </div>
                </div>
              </div>

              {/* Additional Floating Elements */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg opacity-90">
                <span className="text-sm font-medium">Real-time Updates</span>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl shadow-lg opacity-90">
                <span className="text-sm font-medium">NAAC Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;