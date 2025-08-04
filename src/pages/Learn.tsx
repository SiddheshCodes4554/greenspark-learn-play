import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Sun, 
  Wind, 
  Waves, 
  Leaf, 
  PlayCircle, 
  BookOpen, 
  Target,
  ChevronRight,
  Clock,
  Star,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Learn = () => {
  const learningPaths = [
    {
      id: "solar",
      title: "Solar Energy Mastery",
      description: "Discover how sunlight becomes electricity and powers our world",
      icon: Sun,
      color: "from-solar to-accent",
      progress: 75,
      lessons: 8,
      completedLessons: 6,
      estimatedTime: "2 hours",
      difficulty: "Beginner",
      topics: ["How Solar Panels Work", "Solar vs Traditional Energy", "Solar in Space", "Home Solar Systems"]
    },
    {
      id: "wind",
      title: "Wind Power Adventures",
      description: "Learn how wind turbines capture nature's power",
      icon: Wind,
      color: "from-wind to-secondary",
      progress: 45,
      lessons: 6,
      completedLessons: 3,
      estimatedTime: "1.5 hours",
      difficulty: "Beginner",
      topics: ["Wind Turbine Design", "Offshore Wind Farms", "Wind Patterns", "Future of Wind Energy"]
    },
    {
      id: "hydro",
      title: "Hydroelectric Power",
      description: "Explore the amazing power of flowing water",
      icon: Waves,
      color: "from-hydro to-secondary",
      progress: 20,
      lessons: 7,
      completedLessons: 1,
      estimatedTime: "2.5 hours",
      difficulty: "Intermediate",
      topics: ["Dam Construction", "River vs Ocean Power", "Mini Hydro Systems", "Environmental Impact"]
    },
    {
      id: "environment",
      title: "Environmental Impact",
      description: "Understand climate change and how renewable energy helps",
      icon: Leaf,
      color: "from-primary to-success",
      progress: 0,
      lessons: 5,
      completedLessons: 0,
      estimatedTime: "1 hour",
      difficulty: "Beginner",
      topics: ["Greenhouse Effect", "Carbon Footprint", "Clean vs Dirty Energy", "Making a Difference"]
    }
  ];

  const featuredLessons = [
    {
      id: 1,
      title: "How Do Solar Panels Actually Work?",
      description: "A fun animated explanation of photovoltaic cells",
      duration: "8 min",
      type: "Interactive Video",
      category: "Solar",
      isNew: true
    },
    {
      id: 2,
      title: "Build Your First Wind Turbine",
      description: "Virtual hands-on activity with real physics",
      duration: "15 min",
      type: "Interactive Lab",
      category: "Wind",
      isNew: false
    },
    {
      id: 3,
      title: "Water Power Around the World",
      description: "Explore famous hydroelectric dams globally",
      duration: "12 min",
      type: "Virtual Tour",
      category: "Hydro",
      isNew: true
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success/20 text-success border-success/20";
      case "Intermediate": return "bg-accent/20 text-accent border-accent/20";
      case "Advanced": return "bg-destructive/20 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/10 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gradient-hero mb-4">
            Learn Renewable Energy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore interactive lessons, watch fun videos, and discover how clean energy powers our future!
          </p>
        </div>

        {/* Featured Lessons */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Featured Lessons</h2>
            <Button variant="outline" size="sm">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredLessons.map((lesson) => (
              <Card key={lesson.id} className="p-6 card-playful group cursor-pointer">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {lesson.isNew && (
                        <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full mb-2">
                          NEW
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {lesson.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{lesson.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{lesson.duration}</span>
                      </div>
                      <span className="px-2 py-1 bg-muted rounded-full text-xs">
                        {lesson.category}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Start Lesson
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Paths */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gradient-hero mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow structured courses designed for young eco-explorers like you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {learningPaths.map((path) => {
              const Icon = path.icon;
              return (
                <Card key={path.id} className="p-8 card-playful group hover:shadow-playful transition-all duration-300">
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center shadow-playful group-hover:shadow-glow transition-all duration-300`}>
                        <Icon className="h-8 w-8 text-card" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(path.difficulty)}`}>
                            {path.difficulty}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{path.title}</h3>
                        <p className="text-muted-foreground">{path.description}</p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{path.completedLessons}/{path.lessons} lessons</span>
                      </div>
                      <Progress value={path.progress} className="h-3" />
                      <div className="text-xs text-muted-foreground">
                        {path.progress}% complete
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{path.estimatedTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{path.lessons} lessons</span>
                      </div>
                    </div>

                    {/* Topics Preview */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">What you'll learn:</p>
                      <div className="grid grid-cols-1 gap-1">
                        {path.topics.slice(0, 3).map((topic, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            {index < path.completedLessons ? (
                              <CheckCircle className="h-4 w-4 text-success" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border-2 border-muted" />
                            )}
                            <span>{topic}</span>
                          </div>
                        ))}
                        {path.topics.length > 3 && (
                          <p className="text-xs text-muted-foreground pl-6">
                            +{path.topics.length - 3} more topics
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link to={`/learn/${path.id}`}>
                        <Button 
                          className="w-full" 
                          variant={path.progress > 0 ? "default" : "outline"}
                        >
                          {path.progress > 0 ? (
                            <>
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Continue Learning
                            </>
                          ) : (
                            <>
                              <Target className="h-4 w-4 mr-2" />
                              Start Course
                            </>
                          )}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 text-center">
          <Card className="p-8 card-playful bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient-hero">Ready to become an energy expert?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of young learners discovering the power of renewable energy. 
                Every lesson brings you closer to becoming an eco-hero!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/missions">
                  <Button variant="hero" size="lg">
                    <Star className="h-5 w-5 mr-2" />
                    View Missions
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button variant="outline" size="lg">
                    Ask Sparky for Help
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Learn;