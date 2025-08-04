import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Leaf, 
  Zap, 
  Trophy, 
  Target,
  Calendar,
  Sun,
  Wind,
  Waves,
  Battery,
  Star
} from "lucide-react";

const Dashboard = () => {
  const userStats = {
    level: 12,
    xp: 2450,
    nextLevelXp: 3000,
    treesPlanted: 47,
    energySaved: 1250, // kWh
    streakDays: 15,
    missionsCompleted: 23,
    badgesEarned: 8
  };

  const energyStats = [
    { type: "Solar", percentage: 45, color: "from-solar to-accent", icon: Sun },
    { type: "Wind", percentage: 35, color: "from-wind to-secondary", icon: Wind },
    { type: "Hydro", percentage: 20, color: "from-hydro to-secondary", icon: Waves }
  ];

  const recentActivities = [
    {
      id: 1,
      activity: "Completed 'Solar House Challenge'",
      xp: 150,
      time: "2 hours ago",
      icon: Sun,
      type: "mission"
    },
    {
      id: 2,
      activity: "Earned 'Wind Wizard' badge",
      xp: 200,
      time: "1 day ago",
      icon: Trophy,
      type: "badge"
    },
    {
      id: 3,
      activity: "Built efficient wind farm in Energy Lab",
      xp: 100,
      time: "2 days ago",
      icon: Wind,
      type: "lab"
    },
    {
      id: 4,
      activity: "Scored 95% on Renewable Energy Quiz",
      xp: 75,
      time: "3 days ago",
      icon: Target,
      type: "quiz"
    }
  ];

  const weeklyProgress = [
    { day: "Mon", energy: 85 },
    { day: "Tue", energy: 92 },
    { day: "Wed", energy: 78 },
    { day: "Thu", energy: 95 },
    { day: "Fri", energy: 88 },
    { day: "Sat", energy: 96 },
    { day: "Sun", energy: 90 }
  ];

  const achievementProgress = userStats.xp / userStats.nextLevelXp * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/10 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gradient-hero mb-2">
                Eco Dashboard
              </h1>
              <p className="text-xl text-muted-foreground">
                Track your progress and celebrate your environmental impact!
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">Level {userStats.level}</p>
                <p className="text-sm text-muted-foreground">Eco Explorer</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                <Leaf className="h-8 w-8 text-card" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column - Stats Cards */}
          <div className="space-y-6">
            
            {/* Level Progress */}
            <Card className="p-6 card-energy">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">Your Progress</h3>
                  <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                    <Star className="h-5 w-5 text-card" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Level {userStats.level}</span>
                    <span className="font-medium">{userStats.xp}/{userStats.nextLevelXp} XP</span>
                  </div>
                  <Progress value={achievementProgress} className="h-3" />
                  <p className="text-xs text-muted-foreground">
                    {userStats.nextLevelXp - userStats.xp} XP to next level
                  </p>
                </div>
              </div>
            </Card>

            {/* Impact Stats */}
            <Card className="p-6 card-playful">
              <h3 className="text-lg font-bold text-foreground mb-4">Your Environmental Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-success/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-success flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-success-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-success">Trees Saved</p>
                      <p className="text-xs text-muted-foreground">This month</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-success">{userStats.treesPlanted}</p>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Energy Saved</p>
                      <p className="text-xs text-muted-foreground">Total kWh</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary">{userStats.energySaved}</p>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-accent/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-accent">Learning Streak</p>
                      <p className="text-xs text-muted-foreground">Days in a row</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-accent">{userStats.streakDays}</p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 card-playful">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Zap className="h-4 w-4" />
                  Continue Last Mission
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Target className="h-4 w-4" />
                  Take Daily Quiz
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Battery className="h-4 w-4" />
                  Open Energy Lab
                </Button>
              </div>
            </Card>
          </div>

          {/* Middle Column - Energy Usage & Weekly Progress */}
          <div className="space-y-6">
            
            {/* Energy Source Usage */}
            <Card className="p-6 card-energy">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">Energy Mix This Week</h3>
                  <BarChart3 className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <div className="space-y-4">
                  {energyStats.map((energy) => {
                    const Icon = energy.icon;
                    return (
                      <div key={energy.type} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${energy.color} flex items-center justify-center`}>
                              <Icon className="h-4 w-4 text-card" />
                            </div>
                            <span className="font-medium">{energy.type}</span>
                          </div>
                          <span className="font-bold">{energy.percentage}%</span>
                        </div>
                        <Progress value={energy.percentage} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Weekly Progress Chart */}
            <Card className="p-6 card-energy">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">Weekly Learning Progress</h3>
                  <TrendingUp className="h-5 w-5 text-success" />
                </div>
                
                <div className="space-y-2">
                  {weeklyProgress.map((day) => (
                    <div key={day.day} className="flex items-center gap-3">
                      <span className="text-sm font-medium w-10">{day.day}</span>
                      <div className="flex-1">
                        <Progress value={day.energy} className="h-2" />
                      </div>
                      <span className="text-sm font-medium w-12">{day.energy}%</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Average completion: <span className="font-bold text-success">89%</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="space-y-6">
            
            {/* Achievement Summary */}
            <Card className="p-6 card-playful bg-gradient-to-br from-success/10 to-primary/10">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                  <Trophy className="h-8 w-8 text-card" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient-hero">Eco Champion</h3>
                  <p className="text-muted-foreground">You're making a real difference!</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{userStats.missionsCompleted}</p>
                    <p className="text-xs text-muted-foreground">Missions Done</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-success">{userStats.badgesEarned}</p>
                    <p className="text-xs text-muted-foreground">Badges Earned</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 card-playful">
              <h3 className="text-lg font-bold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted/70 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-gradient-eco flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-card" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{activity.activity}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-success font-medium">+{activity.xp} XP</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;