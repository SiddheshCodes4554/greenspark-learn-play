import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sun, Wind, Waves, Zap, Star, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sustainable-city.jpg";
import energyIcons from "@/assets/energy-types-icons.jpg";

const Home = () => {
  const energyTypes = [
    {
      icon: Sun,
      title: "Solar Power",
      description: "Learn how the sun creates clean electricity!",
      color: "from-solar to-accent",
      path: "/learn/solar"
    },
    {
      icon: Wind,
      title: "Wind Energy",
      description: "Discover how wind turbines work their magic!",
      color: "from-wind to-secondary",
      path: "/learn/wind"
    },
    {
      icon: Waves,
      title: "Hydro Power",
      description: "Explore the power of flowing water!",
      color: "from-hydro to-secondary",
      path: "/learn/hydro"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Interactive Energy Lab",
      description: "Build and test renewable energy systems",
    },
    {
      icon: Target,
      title: "Fun Missions",
      description: "Complete challenges and earn badges",
    },
    {
      icon: Star,
      title: "Learn with Sparky",
      description: "Your AI friend answers all your questions",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-card leading-tight">
                  Power your mind with{" "}
                  <span className="text-accent bounce-gentle inline-block">
                    clean energy!
                  </span>
                </h1>
                <p className="text-xl text-card/90 max-w-lg">
                  Join GreenSpark and discover the amazing world of renewable energy 
                  through games, experiments, and adventures with Sparky!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/learn">
                  <Button variant="solar" size="xl" className="w-full sm:w-auto group">
                    Start Learning
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/lab">
                  <Button variant="wind" size="xl" className="w-full sm:w-auto">
                    Try Energy Lab
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 text-card/80">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent" />
                  <span className="font-medium">Ages 7-14</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  <span className="font-medium">100+ Activities</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-floating hover:shadow-glow transition-all duration-500 hover:scale-105">
                <img 
                  src={heroImage} 
                  alt="Children building sustainable energy city"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl float-animation"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl bounce-gentle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gradient-hero">
              What You'll Learn
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore different types of renewable energy and become an eco hero!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {energyTypes.map((energy, index) => {
              const Icon = energy.icon;
              return (
                <Link key={energy.title} to={energy.path}>
                  <Card className="card-playful p-8 h-full group cursor-pointer">
                    <div className="text-center space-y-6">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${energy.color} flex items-center justify-center shadow-playful group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="h-10 w-10 text-card" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-foreground">
                          {energy.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {energy.description}
                        </p>
                      </div>
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        Explore Now
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gradient-hero">
              Learning Made Fun
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive tools and games that make learning about sustainability exciting!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center space-y-6 group">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-eco flex items-center justify-center shadow-playful group-hover:shadow-glow transition-all duration-300 hover:scale-110 cursor-pointer">
                    <Icon className="h-8 w-8 text-card" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-card">
              Ready to become an Eco Hero?
            </h2>
            <p className="text-xl text-card/90">
              Join thousands of kids learning about renewable energy and saving our planet!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learn">
                <Button variant="solar" size="xl" className="w-full sm:w-auto">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/chat">
                <Button variant="outline" size="xl" className="w-full sm:w-auto bg-card/10 border-card/30 text-card hover:bg-card hover:text-primary">
                  Meet Sparky
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;