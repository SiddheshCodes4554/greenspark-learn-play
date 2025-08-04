import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Sun, 
  Wind, 
  Waves, 
  Zap, 
  Battery, 
  Home, 
  RotateCcw, 
  Save, 
  HelpCircle,
  Lightbulb,
  Fan,
  Power
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Component {
  id: string;
  type: "solar" | "wind" | "hydro" | "battery" | "house" | "fan" | "light";
  x: number;
  y: number;
  connections: string[];
  isActive: boolean;
}

interface Connection {
  from: string;
  to: string;
  isActive: boolean;
}

const EnergyLab = () => {
  const { toast } = useToast();
  const canvasRef = useRef<HTMLDivElement>(null);
  const [components, setComponents] = useState<Component[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [energyGenerated, setEnergyGenerated] = useState(0);
  const [energyUsed, setEnergyUsed] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  const componentTypes = [
    { type: "solar", icon: Sun, label: "Solar Panel", color: "from-solar to-accent", energy: 30 },
    { type: "wind", icon: Wind, label: "Wind Turbine", color: "from-wind to-secondary", energy: 25 },
    { type: "hydro", icon: Waves, label: "Water Wheel", color: "from-hydro to-secondary", energy: 35 },
    { type: "battery", icon: Battery, label: "Battery", color: "from-primary to-success", energy: 0 },
    { type: "house", icon: Home, label: "House", color: "from-muted to-card", energy: -20 },
    { type: "fan", icon: Fan, label: "Fan", color: "from-secondary to-wind", energy: -10 },
    { type: "light", icon: Lightbulb, label: "Light Bulb", color: "from-accent to-solar", energy: -5 },
  ];

  const addComponent = (type: Component["type"]) => {
    const newComponent: Component = {
      id: `${type}-${Date.now()}`,
      type,
      x: Math.random() * 400 + 50,
      y: Math.random() * 300 + 50,
      connections: [],
      isActive: false
    };
    
    setComponents(prev => [...prev, newComponent]);
    toast({
      title: "Component Added!",
      description: `${componentTypes.find(c => c.type === type)?.label} added to your lab.`,
    });
  };

  const removeComponent = (id: string) => {
    setComponents(prev => prev.filter(c => c.id !== id));
    setConnections(prev => prev.filter(c => c.from !== id && c.to !== id));
  };

  const handleComponentClick = (id: string) => {
    if (isConnecting && selectedComponent && selectedComponent !== id) {
      // Create connection
      const newConnection: Connection = {
        from: selectedComponent,
        to: id,
        isActive: true
      };
      
      setConnections(prev => [...prev, newConnection]);
      setIsConnecting(false);
      setSelectedComponent(null);
      
      // Update component connections
      setComponents(prev => prev.map(c => {
        if (c.id === selectedComponent || c.id === id) {
          return { ...c, connections: [...c.connections, c.id === selectedComponent ? id : selectedComponent] };
        }
        return c;
      }));

      calculateEnergy();
      toast({
        title: "Connected!",
        description: "Components successfully connected.",
      });
    } else {
      setSelectedComponent(id);
      setIsConnecting(true);
    }
  };

  const calculateEnergy = () => {
    let generated = 0;
    let used = 0;

    components.forEach(component => {
      const componentType = componentTypes.find(t => t.type === component.type);
      if (componentType) {
        if (componentType.energy > 0) {
          generated += componentType.energy;
        } else {
          used += Math.abs(componentType.energy);
        }
      }
    });

    setEnergyGenerated(generated);
    setEnergyUsed(used);

    // Generate feedback
    if (generated > used) {
      setFeedback("Excellent! You're generating more energy than you're using. Great job building a sustainable system! 🌟");
    } else if (generated === used) {
      setFeedback("Perfect balance! Your system generates exactly what it uses. Well done! ⚖️");
    } else {
      setFeedback("You need more energy sources! Try adding more solar panels or wind turbines. 💡");
    }
  };

  const resetLab = () => {
    setComponents([]);
    setConnections([]);
    setEnergyGenerated(0);
    setEnergyUsed(0);
    setFeedback("");
    setIsConnecting(false);
    setSelectedComponent(null);
    toast({
      title: "Lab Reset",
      description: "Your energy lab has been cleared.",
    });
  };

  const saveLab = () => {
    toast({
      title: "Lab Saved!",
      description: "Your energy system has been saved successfully.",
    });
  };

  const efficiency = energyGenerated > 0 ? Math.min((energyGenerated / Math.max(energyUsed, 1)) * 100, 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/10 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gradient-hero mb-4">
            Interactive Energy Lab
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your own renewable energy system! Drag components, connect them, and see how clean energy works.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Component Toolbox */}
          <div className="space-y-6">
            <Card className="p-6 card-playful">
              <h3 className="text-lg font-bold text-foreground mb-4">Energy Components</h3>
              <div className="space-y-3">
                {componentTypes.map((componentType) => {
                  const Icon = componentType.icon;
                  return (
                    <Button
                      key={componentType.type}
                      variant="outline"
                      className="w-full justify-start gap-3 h-auto p-3"
                      onClick={() => addComponent(componentType.type as Component["type"])}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${componentType.color} flex items-center justify-center`}>
                        <Icon className="h-4 w-4 text-card" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{componentType.label}</p>
                        <p className="text-xs text-muted-foreground">
                          {componentType.energy > 0 ? `+${componentType.energy}W` : `${componentType.energy}W`}
                        </p>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </Card>

            {/* Energy Meter */}
            <Card className="p-6 card-energy">
              <h3 className="text-lg font-bold text-foreground mb-4">Power Meter</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Energy Generated</span>
                    <span className="font-bold text-success">{energyGenerated}W</span>
                  </div>
                  <Progress value={(energyGenerated / 100) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Energy Used</span>
                    <span className="font-bold text-destructive">{energyUsed}W</span>
                  </div>
                  <Progress value={(energyUsed / 100) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Efficiency</span>
                    <span className="font-bold text-primary">{efficiency.toFixed(0)}%</span>
                  </div>
                  <Progress value={efficiency} className="h-2" />
                </div>
              </div>
            </Card>

            {/* Controls */}
            <Card className="p-6 card-playful">
              <h3 className="text-lg font-bold text-foreground mb-4">Controls</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full gap-2" onClick={resetLab}>
                  <RotateCcw className="h-4 w-4" />
                  Reset Lab
                </Button>
                <Button variant="success" className="w-full gap-2" onClick={saveLab}>
                  <Save className="h-4 w-4" />
                  Save System
                </Button>
                <Button variant="secondary" className="w-full gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Ask Sparky
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Canvas */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="p-6 card-playful">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-foreground">Energy System Canvas</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Power className="h-4 w-4" />
                  {isConnecting ? "Click another component to connect" : "Click components to connect them"}
                </div>
              </div>
              
              <div 
                ref={canvasRef}
                className="relative bg-gradient-to-br from-muted/20 to-secondary/5 rounded-2xl border-2 border-dashed border-primary/30 min-h-[500px] overflow-hidden"
                style={{ minHeight: "500px" }}
              >
                {/* Components */}
                {components.map((component) => {
                  const componentType = componentTypes.find(t => t.type === component.type);
                  if (!componentType) return null;
                  
                  const Icon = componentType.icon;
                  const isSelected = selectedComponent === component.id;
                  
                  return (
                    <div
                      key={component.id}
                      className={`absolute cursor-pointer transition-all duration-300 ${
                        isSelected ? "scale-110 shadow-glow" : "hover:scale-105"
                      }`}
                      style={{ left: component.x, top: component.y }}
                      onClick={() => handleComponentClick(component.id)}
                      onDoubleClick={() => removeComponent(component.id)}
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${componentType.color} flex items-center justify-center shadow-playful ${
                        isSelected ? "ring-4 ring-primary/50" : ""
                      }`}>
                        <Icon className="h-8 w-8 text-card" />
                      </div>
                      <div className="text-xs text-center mt-2 font-medium text-foreground">
                        {componentType.label}
                      </div>
                    </div>
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {connections.map((connection, index) => {
                    const fromComponent = components.find(c => c.id === connection.from);
                    const toComponent = components.find(c => c.id === connection.to);
                    
                    if (!fromComponent || !toComponent) return null;
                    
                    return (
                      <line
                        key={index}
                        x1={fromComponent.x + 32}
                        y1={fromComponent.y + 32}
                        x2={toComponent.x + 32}
                        y2={toComponent.y + 32}
                        stroke="hsl(var(--primary))"
                        strokeWidth="3"
                        strokeDasharray={connection.isActive ? "none" : "5,5"}
                        className="animate-pulse"
                      />
                    );
                  })}
                </svg>

                {/* Empty State */}
                {components.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Zap className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">Start building your energy system!</p>
                      <p className="text-sm">Add components from the toolbox on the left</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Feedback */}
            {feedback && (
              <Card className="p-6 card-playful bg-gradient-to-r from-success/10 to-primary/10 border-success/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-success-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-success mb-2">System Feedback</h4>
                    <p className="text-foreground">{feedback}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyLab;