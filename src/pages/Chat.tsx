import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Mic, MicOff, Volume2, VolumeX, RotateCcw } from "lucide-react";
import sparkyMascot from "@/assets/sparky-mascot.jpg";

interface Message {
  id: string;
  content: string;
  sender: "user" | "sparky";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! I'm Sparky, your eco-friendly AI friend! 🌱 I'm here to help you learn about renewable energy and sustainability. What would you like to know?",
      sender: "sparky",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    "What is solar power?",
    "How can I save energy at home?",
    "Why are renewable energy sources important?",
    "How do wind turbines work?",
    "What is the greenhouse effect?",
    "How can kids help the environment?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! Solar power works by converting sunlight into electricity using special panels called photovoltaic cells. When sunlight hits these cells, it creates an electric current that we can use to power our homes! ☀️",
        "Excellent! You can save energy by turning off lights when you leave a room, unplugging electronics when not in use, and using energy-efficient LED bulbs. Every small action helps our planet! 💡",
        "Wind turbines work like giant pinwheels! When wind blows, it spins the blades, which turn a generator inside the turbine to create electricity. The stronger the wind, the more energy we can make! 💨",
        "The greenhouse effect happens when certain gases in our atmosphere trap heat from the sun, making Earth warmer. While some greenhouse effect is natural and good, too much can cause climate change. That's why renewable energy is so important! 🌍"
      ];
      
      const sparkyResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        sender: "sparky",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, sparkyResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        content: "Hi there! I'm Sparky, your eco-friendly AI friend! 🌱 I'm here to help you learn about renewable energy and sustainability. What would you like to know?",
        sender: "sparky",
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/10">
      <div className="max-w-6xl mx-auto p-4 lg:p-8">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-2rem)]">
          
          {/* Chat Area */}
          <div className="lg:col-span-2 flex flex-col">
            <Card className="flex-1 flex flex-col p-0 overflow-hidden shadow-playful">
              
              {/* Chat Header */}
              <div className="bg-gradient-hero p-6 text-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-glow">
                      <img 
                        src={sparkyMascot} 
                        alt="Sparky AI Mascot"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Chat with Sparky</h2>
                      <p className="text-card/80">Your eco-friendly AI friend</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleVoice}
                      className="text-card hover:bg-card/20"
                    >
                      {voiceEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={clearChat}
                      className="text-card hover:bg-card/20"
                    >
                      <RotateCcw className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-gentle ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground ml-4"
                          : "bg-card border-2 border-primary/10 mr-4"
                      }`}
                    >
                      {message.sender === "sparky" && (
                        <div className="flex items-center gap-2 mb-2">
                          <img 
                            src={sparkyMascot} 
                            alt="Sparky"
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm font-semibold text-primary">Sparky</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl bg-card border-2 border-primary/10 mr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <img 
                          src={sparkyMascot} 
                          alt="Sparky"
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm font-semibold text-primary">Sparky</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-primary/10 bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                      placeholder="Ask Sparky about renewable energy..."
                      className="pr-12 rounded-xl border-2 border-primary/20 focus:border-primary h-12"
                    />
                  </div>
                  <Button
                    variant={isListening ? "success" : "outline"}
                    size="icon"
                    onClick={toggleListening}
                    className="h-12 w-12"
                  >
                    {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                  </Button>
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim()}
                    className="h-12 w-12"
                    size="icon"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Sparky Info */}
            <Card className="p-6 text-center card-playful">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-glow">
                <img 
                  src={sparkyMascot} 
                  alt="Sparky AI Mascot"
                  className="w-full h-full object-cover float-animation"
                />
              </div>
              <h3 className="text-xl font-bold text-gradient-hero mb-2">Meet Sparky!</h3>
              <p className="text-muted-foreground text-sm">
                Your friendly AI guide to the world of renewable energy and sustainability!
              </p>
            </Card>

            {/* Quick Questions */}
            <Card className="p-6 card-playful">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Questions</h3>
              <div className="space-y-3">
                {sampleQuestions.slice(0, 4).map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-3 text-wrap"
                    onClick={() => handleQuestionClick(question)}
                  >
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-6 card-playful bg-gradient-to-br from-accent/10 to-solar/10">
              <h3 className="text-lg font-bold text-gradient-solar mb-4">💡 Did You Know?</h3>
              <p className="text-sm text-muted-foreground">
                Solar panels can work for over 25 years and can power your entire house! 
                Ask Sparky more amazing facts about renewable energy!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;