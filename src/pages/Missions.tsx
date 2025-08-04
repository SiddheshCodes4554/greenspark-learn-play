import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Star, 
  Play, 
  CheckCircle, 
  Clock, 
  Zap, 
  Target,
  Award,
  Sun,
  Wind,
  Waves
} from "lucide-react";

interface Mission {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  xp: number;
  progress: number;
  completed: boolean;
  category: "solar" | "wind" | "hydro" | "general";
  estimatedTime: string;
  badges: string[];
}

interface UserBadge {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  earned: boolean;
  category: string;
}

const Missions = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const badges: UserBadge[] = [
    {
      id: "solar-star",
      name: "Solar Star",
      description: "Complete 5 solar energy missions",
      icon: Sun,
      earned: true,
      category: "solar"
    },
    {
      id: "wind-wizard",
      name: "Wind Wizard",
      description: "Master wind energy challenges",
      icon: Wind,
      earned: true,
      category: "wind"
    },
    {
      id: "eco-hero",
      name: "Eco Hero",
      description: "Save 100 virtual trees",
      icon: Trophy,
      earned: false,
      category: "general"
    },
    {
      id: "hydro-champion",
      name: "Hydro Champion",
      description: "Complete all water energy missions",
      icon: Waves,
      earned: false,
      category: "hydro"
    }
  ];

  const missions: Mission[] = [
    {
      id: "1",
      title: "Power Your House for 24 Hours",
      description: "Design a solar energy system that can power a family home for an entire day",
      difficulty: "Beginner",
      xp: 100,
      progress: 100,
      completed: true,
      category: "solar",
      estimatedTime: "15 min",
      badges: ["Solar Star"]
    },
    {
      id: "2",
      title: "Build a Wind Farm",
      description: "Create an efficient wind turbine layout to maximize energy production",
      difficulty: "Intermediate",
      xp: 250,
      progress: 65,
      completed: false,
      category: "wind",
      estimatedTime: "25 min",
      badges: []
    },
    {
      id: "3",
      title: "Hydroelectric Dam Challenge",
      description: "Design a water-powered energy system for a mountain village",
      difficulty: "Advanced",
      xp: 500,
      progress: 0,
      completed: false,
      category: "hydro",
      estimatedTime: "40 min",
      badges: []
    },
    {
      id: "4",
      title: "Energy Efficiency Expert",
      description: "Reduce energy consumption in a virtual city by 50%",
      difficulty: "Intermediate",
      xp: 300,
      progress: 30,
      completed: false,
      category: "general",
      estimatedTime: "30 min",
      badges: []
    },
    {
      id: "5",
      title: "Solar Car Race",
      description: "Build and race a solar-powered car in our virtual racing simulator",
      difficulty: "Beginner",
      xp: 150,
      progress: 0,
      completed: false,
      category: "solar",
      estimatedTime: "20 min",
      badges: []
    },
    {
      id: "6",
      title: "Smart Grid Master",
      description: "Balance energy supply and demand across multiple renewable sources",
      difficulty: "Advanced",
      xp: 600,
      progress: 0,
      completed: false,
      category: "general",
      estimatedTime: "45 min",
      badges: ["Eco Hero"]
    }
  ];

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredMissions = selectedDifficulty === "All" 
    ? missions 
    : missions.filter(mission => mission.difficulty === selectedDifficulty);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "solar": return "from-solar to-accent";
      case "wind": return "from-wind to-secondary";
      case "hydro": return "from-hydro to-secondary";
      default: return "from-primary to-success";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success/20 text-success border-success/20";
      case "Intermediate": return "bg-accent/20 text-accent border-accent/20";
      case "Advanced": return "bg-destructive/20 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const totalXP = missions.filter(m => m.completed).reduce((sum, m) => sum + m.xp, 0);
  const completedMissions = missions.filter(m => m.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/10 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gradient-hero mb-4">
            Missions & Challenges
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete exciting missions to earn XP, unlock badges, and become a renewable energy expert!
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* User Stats */}
            <Card className="p-6 card-playful text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                  <Trophy className="h-8 w-8 text-card" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-hero">{totalXP} XP</h3>
                  <p className="text-muted-foreground">Total Experience</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-success">{completedMissions}</p>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{missions.length - completedMissions}</p>
                    <p className="text-xs text-muted-foreground">Remaining</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Badges */}
            <Card className="p-6 card-playful">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Your Badges
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {badges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.id}
                      className={`p-3 rounded-xl border text-center transition-all duration-300 ${
                        badge.earned
                          ? "bg-gradient-to-br from-success/20 to-primary/20 border-success/30 shadow-gentle hover:shadow-playful"
                          : "bg-muted/50 border-muted text-muted-foreground opacity-60"
                      }`}
                    >
                       <Icon className={`h-6 w-6 mx-auto mb-2 ${badge.earned ? "text-success" : "text-muted-foreground"}`} />
                      <p className="text-xs font-medium">{badge.name}</p>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Difficulty Filter */}
            <Card className="p-6 card-playful">
              <h3 className="text-lg font-bold text-foreground mb-4">Filter by Difficulty</h3>
              <div className="space-y-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Missions Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredMissions.map((mission) => (
                <Card key={mission.id} className="p-6 card-playful group hover:shadow-playful transition-all duration-300">
                  <div className="space-y-4">
                    
                    {/* Mission Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                         <div className="flex items-center gap-2 mb-2">
                         <Badge variant="outline">
                           {mission.difficulty}
                         </Badge>
                          {mission.completed && (
                            <CheckCircle className="h-5 w-5 text-success" />
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{mission.title}</h3>
                        <p className="text-muted-foreground text-sm">{mission.description}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(mission.category)} flex items-center justify-center shadow-gentle group-hover:shadow-playful transition-all duration-300`}>
                        {mission.category === "solar" && <Sun className="h-6 w-6 text-card" />}
                        {mission.category === "wind" && <Wind className="h-6 w-6 text-card" />}
                        {mission.category === "hydro" && <Waves className="h-6 w-6 text-card" />}
                        {mission.category === "general" && <Zap className="h-6 w-6 text-card" />}
                      </div>
                    </div>

                    {/* Progress */}
                    {mission.progress > 0 && !mission.completed && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{mission.progress}%</span>
                        </div>
                        <Progress value={mission.progress} className="h-2" />
                      </div>
                    )}

                    {/* Mission Details */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{mission.estimatedTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>{mission.xp} XP</span>
                        </div>
                      </div>
                    </div>

                    {/* Badges */}
                    {mission.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {mission.badges.map((badge) => (
                        <Badge key={badge} variant="secondary">
                            <Award className="h-3 w-3 mr-1" />
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="pt-2">
                      {mission.completed ? (
                        <Button variant="success" className="w-full" disabled>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </Button>
                      ) : mission.progress > 0 ? (
                        <Button variant="default" className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Continue Mission
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <Target className="h-4 w-4 mr-2" />
                          Start Mission
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;