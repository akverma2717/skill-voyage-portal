import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Award, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl float-animation"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white fade-in-up">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">🎓 Smart Student Hub</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Smart Education
              <br />
              <span className="gradient-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                for Your Future
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-xl">
              Centralized student activity and achievement management system for colleges and universities. 
              Track progress, manage portfolios, and showcase accomplishments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white">25,000+</h3>
                <p className="text-blue-200">Active Students</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">500+</h3>
                <p className="text-blue-200">Partner Institutions</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6 slide-in-right">
            <Card className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Activity Tracking</h3>
                  <p className="text-muted-foreground">
                    Track conferences, workshops, certifications, and achievements in one place.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Digital Portfolio</h3>
                  <p className="text-muted-foreground">
                    Auto-generate verified portfolios for NAAC, AICTE, and NIRF reporting.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Analytics Dashboard</h3>
                  <p className="text-muted-foreground">
                    Real-time analytics and reports for academic performance tracking.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;