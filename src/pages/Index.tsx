import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Music, 
  Video, 
  Calendar, 
  Mail, 
  Instagram, 
  Youtube, 
  ExternalLink,
  Mic,
  Users,
  MapPin,
  Zap,
  Radio,
  Headphones,
  Waves,
  Download,
  Share,
  Heart,
  Star,
  TrendingUp,
  Activity
} from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    alert("Welcome to the future of music! 🚀");
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-border/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black tracking-tight font-cyber text-gradient">
              RIPP THA RULA
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="font-medium hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-cyber hover:text-glow">HOME</a>
              <a href="#about" className="font-medium hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-cyber hover:text-glow">ABOUT</a>
              <a href="#music" className="font-medium hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-cyber hover:text-glow">MUSIC</a>
              <a href="#videos" className="font-medium hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-cyber hover:text-glow">VIDEOS</a>
              <a href="#shows" className="font-medium hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-cyber hover:text-glow">SHOWS</a>
              <a href="#contact" className="font-medium hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-cyber hover:text-glow">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-32 bg-gradient-to-b from-primary/50 to-transparent animate-float"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-24 bg-gradient-to-t from-accent/50 to-transparent animate-float delay-500"></div>
        </div>
        
        <div className={`relative z-10 text-center px-6 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12">
            <Badge className="mb-8 glass-morphism text-primary border-primary/30 px-6 py-3 text-sm font-cyber tracking-widest animate-pulse-glow">
              <MapPin className="w-5 h-5 mr-3" />
              HOUSTON, TEXAS • ARTIST
            </Badge>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-black mb-12 text-gradient leading-none tracking-tight font-cyber">
            RIPP THA RULA
          </h1>
          
          <div className="text-2xl md:text-4xl font-light mb-16 text-muted-foreground tracking-[0.2em] font-cyber">
            FUTURE • SOUND • EXPERIENCE
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-20">
            <Button size="lg" className="tech-gradient hover:scale-105 hover-lift transition-all duration-300 text-white font-bold px-12 py-6 text-lg neon-glow font-cyber tracking-widest">
              <Play className="w-6 h-6 mr-3" />
              ENTER THE MATRIX
            </Button>
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-black px-12 py-6 text-lg font-bold hover-lift glass-morphism font-cyber tracking-widest">
              <Video className="w-6 h-6 mr-3" />
              VISUAL EXPERIENCE
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-black px-12 py-6 text-lg font-bold hover-lift glass-morphism font-cyber tracking-widest">
              <Zap className="w-6 h-6 mr-3" />
              BOOK NOW
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:neon-glow">
              <Instagram className="w-10 h-10" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110 hover:cyber-glow">
              <Youtube className="w-10 h-10" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110">
              <Music className="w-10 h-10" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Radio className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 text-gradient font-cyber tracking-wide">
            THE ARCHITECT
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="glass-morphism rounded-2xl h-[500px] flex items-center justify-center mb-8 overflow-hidden hover-lift">
                <div className="absolute inset-0 tech-gradient opacity-20"></div>
                <div className="relative z-10 text-8xl font-black text-gradient font-cyber">RIPP</div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
            
            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-foreground/90 font-light text-xl leading-relaxed">
                Born in the pulse of <span className="text-primary font-bold text-glow">Houston, TX</span>, 
                Ripp Tha Rula represents the evolution of hip-hop into the digital age. 
                With backing from legendary <span className="text-secondary font-bold">DJ Michael Watts</span> 
                and the prestigious <span className="text-accent font-bold">Swisha House</span> collective, 
                Ripp crafts sonic experiences that transcend traditional boundaries.
              </p>
              
              <p className="text-foreground/90 font-light text-xl leading-relaxed">
                His groundbreaking project <span className="text-primary font-bold text-glow">"RIP'n & Runnin"</span> 
                showcases a fusion of street authenticity and technological innovation. 
                From DJ Screw Day performances to cutting-edge studio productions, 
                Ripp embodies the future of H-Town culture.
              </p>

              <Card className="glass-morphism border-primary/20 hover-lift bg-card/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Activity className="w-6 h-6 text-primary mr-3" />
                    <div className="text-primary font-bold font-cyber tracking-wide">DJ MICHAEL WATTS</div>
                  </div>
                  <div className="italic text-muted-foreground text-lg font-light">
                    "Ripp Tha Rula is architecting the future of Houston sound. 
                    He's not just the next generation – he's the quantum leap."
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-background"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 text-gradient font-cyber tracking-wide">
            SONIC MATRIX
          </h2>

          {/* Featured Track */}
          <div className="mb-20">
            <Card className="glass-morphism border-primary/30 hover-lift neon-glow bg-gradient-to-r from-primary/10 to-accent/10">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl font-cyber tracking-widest text-gradient">
                  🎵 MATRIX ENTRY POINT 🎵
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <div className="text-5xl font-black mb-8 text-gradient font-cyber tracking-wide">
                  "RIP'n & Runnin"
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button className="tech-gradient text-white font-bold px-8 py-4 hover-lift font-cyber tracking-wide">
                    <Play className="w-6 h-6 mr-3" />
                    EXPERIENCE NOW
                  </Button>
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-black px-8 py-4 hover-lift glass-morphism font-cyber tracking-wide">
                    <Download className="w-6 h-6 mr-3" />
                    DOWNLOAD
                  </Button>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black px-8 py-4 hover-lift glass-morphism font-cyber tracking-wide">
                    <Share className="w-6 h-6 mr-3" />
                    SHARE
                  </Button>
                </div>
                
                {/* Audio Visualizer Simulation */}
                <div className="flex justify-center items-center space-x-2 mb-6">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-to-t from-primary to-accent rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 40 + 10}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Discography Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "RIP'n & Runnin", 
                year: "2024", 
                type: "Single",
                streams: "2.5M",
                genre: "Future Hip-Hop"
              },
              { 
                title: "Digital Dynasty", 
                year: "2024", 
                type: "EP",
                streams: "1.8M",
                genre: "Cyber Rap"
              },
              { 
                title: "Quantum Bars", 
                year: "2023", 
                type: "Album",
                streams: "4.2M",
                genre: "Tech Trap"
              }
            ].map((release, index) => (
              <Card key={index} className="glass-morphism border-border/20 hover-lift group bg-card/30">
                <CardContent className="p-8">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <div className="relative">
                        <Waves className="w-16 h-16 text-foreground/50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30 font-cyber">
                        {release.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 font-cyber tracking-wide">{release.title}</h3>
                  <div className="text-sm text-muted-foreground mb-2 font-cyber">{release.genre}</div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                    <span className="font-cyber">{release.year}</span>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="font-cyber">{release.streams}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 group-hover:border-primary group-hover:text-primary hover-lift font-cyber">
                      <Play className="w-4 h-4 mr-2" />
                      PLAY
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:text-primary">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:text-secondary">
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Music Stats */}
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            {[
              { label: "Total Streams", value: "8.5M+", icon: Headphones },
              { label: "Monthly Listeners", value: "450K", icon: Users },
              { label: "Countries", value: "25+", icon: MapPin },
              { label: "Collaborations", value: "12", icon: Star }
            ].map((stat, index) => (
              <Card key={index} className="glass-morphism border-border/20 hover-lift text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-black text-gradient font-cyber mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-cyber tracking-wide">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 text-gradient font-cyber tracking-wide">
            VISUAL REALM
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { title: "RIP'n & Runnin [MATRIX CUT]", views: "850K", duration: "3:42" },
              { title: "Studio Session w/ DJ Michael Watts [LIVE]", views: "425K", duration: "15:20" },
              { title: "Houston Cypher 2024 [EXCLUSIVE]", views: "1.2M", duration: "8:15" },
              { title: "Future Sound Documentary", views: "650K", duration: "22:30" }
            ].map((video, index) => (
              <Card key={index} className="glass-morphism border-border/20 hover-lift group overflow-hidden bg-card/30">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="relative">
                      <Play className="w-20 h-20 text-white bg-primary/80 rounded-full p-5 group-hover:scale-110 transition-transform neon-glow" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 text-white font-cyber">
                      {video.duration}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 font-cyber">
                      4K ULTRA
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 font-cyber tracking-wide">{video.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground font-cyber">{video.views} views</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-secondary font-cyber">
                        WATCH
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-primary">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-background"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 text-gradient font-cyber tracking-wide">
            LIVE MATRIX
          </h2>
          
          <div className="space-y-6">
            {[
              { date: "DEC 15", venue: "Cyber Arena Houston", city: "Houston, TX", status: "VIP Available", price: "$75" },
              { date: "DEC 22", venue: "Future Sound Festival", city: "Houston, TX", status: "Free Entry", price: "FREE" },
              { date: "JAN 5", venue: "Digital Dreams Arena", city: "Dallas, TX", status: "Coming Soon", price: "$85" }
            ].map((show, index) => (
              <Card key={index} className="glass-morphism border-border/20 hover-lift bg-card/30">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-center space-x-8">
                      <div className="text-center">
                        <div className="text-3xl font-black text-gradient font-cyber">{show.date}</div>
                        <div className="text-sm text-muted-foreground font-cyber">2024</div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl font-cyber tracking-wide">{show.venue}</h3>
                        <div className="text-muted-foreground flex items-center font-cyber">
                          <MapPin className="w-4 h-4 mr-2" />
                          {show.city}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary font-cyber">{show.price}</div>
                        <Badge className={`${show.status === "Free Entry" ? "bg-secondary/20 text-secondary" : "bg-primary/20 text-primary"} border-0 font-cyber`}>
                          {show.status}
                        </Badge>
                      </div>
                      <Button className="tech-gradient text-white hover-lift font-cyber tracking-wide">
                        {show.status === "Coming Soon" ? "NOTIFY ME" : "GET ACCESS"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-6 tech-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-black mb-12 text-white font-cyber tracking-wide">
            JOIN THE MATRIX
          </h2>
          <p className="text-2xl mb-16 text-white/90 font-light tracking-wide max-w-3xl mx-auto">
            Access exclusive drops, behind-the-scenes content, and first access to the future of sound
          </p>
          
          <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your digital signature"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-morphism border-white/30 text-foreground placeholder:text-muted-foreground px-8 py-6 text-lg font-cyber"
              required
            />
            <Button type="submit" className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-6 text-lg tracking-wide hover-lift font-cyber">
              <Zap className="w-6 h-6 mr-3" />
              ENTER MATRIX
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-6xl md:text-8xl font-black text-center mb-20 text-gradient font-cyber tracking-wide">
            ESTABLISH CONNECTION
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gradient font-cyber tracking-wide">BUSINESS MATRIX</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 glass-morphism p-4 rounded-lg hover-lift">
                  <Mic className="w-6 h-6 text-primary" />
                  <span className="font-cyber tracking-wide">Live Performance Booking</span>
                </div>
                <div className="flex items-center space-x-4 glass-morphism p-4 rounded-lg hover-lift">
                  <Music className="w-6 h-6 text-secondary" />
                  <span className="font-cyber tracking-wide">Digital Collaborations</span>
                </div>
                <div className="flex items-center space-x-4 glass-morphism p-4 rounded-lg hover-lift">
                  <Radio className="w-6 h-6 text-accent" />
                  <span className="font-cyber tracking-wide">Media & Press Access</span>
                </div>
              </div>
              
              <div className="mt-12">
                <Button className="tech-gradient text-white font-bold px-8 py-4 hover-lift font-cyber tracking-wide">
                  <Mail className="w-6 h-6 mr-3" />
                  INITIATE CONTACT
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gradient font-cyber tracking-wide">DIGITAL PRESENCE</h3>
              <div className="grid grid-cols-2 gap-6">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white hover-lift glass-morphism font-cyber p-6">
                  <Instagram className="w-6 h-6 mr-3" />
                  INSTAGRAM
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-black hover-lift glass-morphism font-cyber p-6">
                  <Youtube className="w-6 h-6 mr-3" />
                  YOUTUBE
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black hover-lift glass-morphism font-cyber p-6">
                  <Music className="w-6 h-6 mr-3" />
                  SPOTIFY
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white hover-lift glass-morphism font-cyber p-6">
                  <Headphones className="w-6 h-6 mr-3" />
                  APPLE MUSIC
                </Button>
              </div>
              
              <Card className="mt-12 glass-morphism border-primary/20 hover-lift">
                <CardContent className="p-8">
                  <h4 className="font-bold text-primary mb-4 font-cyber tracking-wide">DIGITAL PRESS KIT</h4>
                  <p className="text-muted-foreground mb-6 font-light">High-resolution assets, bio data, and exclusive content for media distribution</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white hover-lift font-cyber tracking-wide">
                    <Download className="w-5 h-5 mr-3" />
                    DOWNLOAD MATRIX
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 glass-morphism border-t border-border/20">
        <div className="container mx-auto text-center">
          <div className="text-4xl font-black text-gradient mb-6 font-cyber tracking-wide">
            RIPP THA RULA
          </div>
          <div className="text-muted-foreground mb-8 font-cyber tracking-widest">
            HOUSTON, TX • FUTURE SOUND ARCHITECT
          </div>
          <div className="text-sm text-muted-foreground font-cyber">
            © 2024 Ripp Tha Rula. All rights reserved in this dimension and beyond.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;