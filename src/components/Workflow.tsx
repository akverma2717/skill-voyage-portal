import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Upload, FileCheck, Award, Download } from "lucide-react";

const Workflow = () => {
  const steps = [
    {
      icon: Upload,
      title: "Submit Activities",
      description: "Students upload conference certificates, workshop completion documents, internship reports, and other academic achievements through the user-friendly portal.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileCheck,
      title: "Faculty Review",
      description: "Faculty members receive notifications and review submitted activities. They can approve, request modifications, or reject submissions with detailed feedback.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Verification & Scoring",
      description: "Approved activities are automatically scored based on NAAC/NIRF criteria. Digital certificates are generated and added to student portfolios.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Download,
      title: "Generate Reports",
      description: "Comprehensive reports and digital portfolios are generated for students, departments, and institutional compliance requirements.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            How EduSangrah Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined 4-step process that transforms how educational institutions 
            manage student activities and achievements
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border-0 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow between cards - hidden on last card */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;