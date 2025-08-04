import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Settings, 
  Volume2, 
  Bell, 
  Shield, 
  Download,
  Share2,
  Trophy,
  Target,
  Calendar,
  Leaf,
  Star,
  Edit3,
  Save,
  RotateCcw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [settings, setSettings] = useState({
    voiceGuidance: true,
    soundEffects: true,
    notifications: true,
    parentalReports: false,
    autoSave: true
  });

  const [userInfo, setUserInfo] = useState({
    name: "Alex Green",
    username: "eco_explorer_alex",
    age: "12",
    grade: "7th Grade",
    school: "Greenwood Elementary",
    favoriteEnergy: "Solar Power"
  });

  const achievements = [
    { name: "Solar Star", description: "Completed 5 solar missions", earned: true, date: "2024-01-15" },
    { name: "Wind Wizard", description: "Mastered wind energy", earned: true, date: "2024-01-10" },
    { name: "Eco Hero", description: "Saved 100 virtual trees", earned: false, progress: 75 },
    { name: "Quiz Master", description: "Scored 90%+ on 10 quizzes", earned: false, progress: 60 }
  ];

  const stats = {
    totalXP: 2450,
    level: 12,
    missionsCompleted: 23,
    quizzesCompleted: 18,
    daysActive: 45,
    treesPlanted: 47,
    badgesEarned: 8
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated!",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleSettingChange = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    toast({
      title: "Setting Updated",
      description: `${key.replace(/([A-Z])/g, ' $1').toLowerCase()} has been ${value ? 'enabled' : 'disabled'}.`,
    });
  };

  const generateReport = () => {
    toast({
      title: "Report Generated!",
      description: "Your progress report has been created and shared with your teacher.",
    });
  };

  const resetProgress = () => {
    toast({
      title: "Are you sure?",
      description: "This will reset all your progress. This action cannot be undone.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/10 p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gradient-hero mb-4">
            Your Profile
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your account, track achievements, and customize your learning experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            
            {/* Profile Card */}
            <Card className="p-6 card-playful text-center">
              <div className="space-y-4">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                  <User className="h-12 w-12 text-card" />
                </div>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <Input 
                      value={userInfo.name}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                      className="text-center font-bold"
                    />
                    <Input 
                      value={userInfo.username}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, username: e.target.value }))}
                      className="text-center text-sm"
                      placeholder="Username"
                    />
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{userInfo.name}</h2>
                    <p className="text-muted-foreground">@{userInfo.username}</p>
                  </div>
                )}

                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-accent" />
                    <span className="font-medium">Level {stats.level}</span>
                  </div>
                  <span>•</span>
                  <span className="text-muted-foreground">{stats.totalXP} XP</span>
                </div>

                <Button 
                  variant={isEditing ? "success" : "outline"} 
                  size="sm" 
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  className="w-full"
                >
                  {isEditing ? (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit3 className="h-4 w-4 mr-2" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 card-energy">
              <h3 className="text-lg font-bold text-foreground mb-4">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-success" />
                    <span className="text-sm">Trees Planted</span>
                  </div>
                  <span className="font-bold text-success">{stats.treesPlanted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="text-sm">Missions Done</span>
                  </div>
                  <span className="font-bold text-primary">{stats.missionsCompleted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span className="text-sm">Days Active</span>
                  </div>
                  <span className="font-bold text-accent">{stats.daysActive}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-destructive" />
                    <span className="text-sm">Badges Earned</span>
                  </div>
                  <span className="font-bold text-destructive">{stats.badgesEarned}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Middle Column - Personal Info & Settings */}
          <div className="space-y-6">
            
            {/* Personal Information */}
            <Card className="p-6 card-playful">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Personal Information</h3>
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age" className="text-sm font-medium">Age</Label>
                    <Input 
                      id="age"
                      value={userInfo.age}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, age: e.target.value }))}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="grade" className="text-sm font-medium">Grade</Label>
                    <Input 
                      id="grade"
                      value={userInfo.grade}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, grade: e.target.value }))}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="school" className="text-sm font-medium">School</Label>
                  <Input 
                    id="school"
                    value={userInfo.school}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, school: e.target.value }))}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="favorite" className="text-sm font-medium">Favorite Energy Source</Label>
                  <Input 
                    id="favorite"
                    value={userInfo.favoriteEnergy}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, favoriteEnergy: e.target.value }))}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
              </div>
            </Card>

            {/* Settings */}
            <Card className="p-6 card-playful">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Learning Settings</h3>
                <Settings className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Voice Guidance</p>
                      <p className="text-xs text-muted-foreground">Sparky reads lessons aloud</p>
                    </div>
                  </div>
                  <Switch 
                    checked={settings.voiceGuidance}
                    onCheckedChange={(checked) => handleSettingChange('voiceGuidance', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Sound Effects</p>
                      <p className="text-xs text-muted-foreground">Fun sounds during activities</p>
                    </div>
                  </div>
                  <Switch 
                    checked={settings.soundEffects}
                    onCheckedChange={(checked) => handleSettingChange('soundEffects', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Daily Reminders</p>
                      <p className="text-xs text-muted-foreground">Get reminded to learn</p>
                    </div>
                  </div>
                  <Switch 
                    checked={settings.notifications}
                    onCheckedChange={(checked) => handleSettingChange('notifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Parent Reports</p>
                      <p className="text-xs text-muted-foreground">Weekly progress emails</p>
                    </div>
                  </div>
                  <Switch 
                    checked={settings.parentalReports}
                    onCheckedChange={(checked) => handleSettingChange('parentalReports', checked)}
                  />
                </div>
              </div>
            </Card>

            {/* Actions */}
            <Card className="p-6 card-playful">
              <h3 className="text-lg font-bold text-foreground mb-4">Account Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3" onClick={generateReport}>
                  <Download className="h-4 w-4" />
                  Generate Progress Report
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Share2 className="h-4 w-4" />
                  Share Profile with Teacher
                </Button>
                <Button variant="destructive" className="w-full justify-start gap-3" onClick={resetProgress}>
                  <RotateCcw className="h-4 w-4" />
                  Reset All Progress
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-6">
            
            {/* Achievements */}
            <Card className="p-6 card-playful">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Achievements</h3>
                <Trophy className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      achievement.earned 
                        ? "bg-gradient-to-br from-success/20 to-primary/20 border-success/30" 
                        : "bg-muted/50 border-muted"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        achievement.earned ? "bg-success shadow-glow" : "bg-muted"
                      }`}>
                        <Trophy className={`h-5 w-5 ${achievement.earned ? "text-success-foreground" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-sm ${achievement.earned ? "text-success" : "text-muted-foreground"}`}>
                          {achievement.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                        
                        {achievement.earned ? (
                          <p className="text-xs text-success font-medium">
                            Earned on {new Date(achievement.date!).toLocaleDateString()}
                          </p>
                        ) : (
                          <div className="space-y-1">
                            <Progress value={achievement.progress} className="h-1" />
                            <p className="text-xs text-muted-foreground">{achievement.progress}% complete</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Learning Streak */}
            <Card className="p-6 card-energy bg-gradient-to-br from-accent/10 to-solar/10">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent to-solar flex items-center justify-center shadow-glow">
                  <Calendar className="h-8 w-8 text-card" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-solar">15 Days</h3>
                  <p className="text-muted-foreground">Learning Streak</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  You've been learning every day for 15 days! Keep it up!
                </p>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 7 }, (_, i) => (
                    <div 
                      key={i}
                      className={`w-6 h-6 rounded-sm ${
                        i < 6 ? "bg-success" : "bg-muted/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;