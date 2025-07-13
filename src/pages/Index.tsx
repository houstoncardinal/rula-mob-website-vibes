
import { useState } from "react";
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
  MapPin
} from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    // Add newsletter signup logic here
    setEmail("");
    alert("Welcome to the Rula Mob! 🎤");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight text-gradient">
              RIPP THA RULA
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="font-medium hover:text-primary transition-colors uppercase tracking-wide text-sm">Home</a>
              <a href="#about" className="font-medium hover:text-primary transition-colors uppercase tracking-wide text-sm">About</a>
              <a href="#music" className="font-medium hover:text-primary transition-colors uppercase tracking-wide text-sm">Music</a>
              <a href="#videos" className="font-medium hover:text-primary transition-colors uppercase tracking-wide text-sm">Videos</a>
              <a href="#shows" className="font-medium hover:text-primary transition-colors uppercase tracking-wide text-sm">Shows</a>
              <a href="#contact" className="font-medium hover:text-primary transition-colors uppercase tracking-wide text-sm">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,127,0.1)_0%,transparent_50%)]"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-6 glass-effect text-primary border-primary/20 px-4 py-2 text-sm font-medium tracking-wide">
              <MapPin className="w-4 h-4 mr-2" />
              HOUSTON, TEXAS
            </Badge>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 text-gradient leading-none tracking-tight">
            RIPP THA RULA
          </h1>
          
          <div className="text-2xl md:text-4xl font-light mb-12 text-muted-foreground tracking-wide">
            LUXURY • AUTHENTICITY • EXCELLENCE
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="luxury-gradient hover:scale-105 transition-transform text-white font-semibold px-10 py-4 text-lg luxury-shadow tracking-wide">
              <Play className="w-6 h-6 mr-3" />
              EXPERIENCE NOW
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg font-semibold tracking-wide">
              <Video className="w-6 h-6 mr-3" />
              WATCH PORTFOLIO
            </Button>
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 text-lg font-semibold tracking-wide">
              <Mic className="w-6 h-6 mr-3" />
              BOOK CONSULTATION
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Music className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Luxury floating elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-32 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-24 bg-gradient-to-t from-primary/30 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-gradient">
            THE STORY
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-96 flex items-center justify-center mb-6">
                <div className="text-6xl font-black text-muted-foreground">RIPP</div>
              </div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Born and raised in Houston, TX, <span className="text-primary font-bold">Ripp Tha Rula</span> represents 
                the next generation of H-Town hip-hop excellence. With the backing of legendary 
                <span className="text-secondary font-bold"> DJ Michael Watts</span> and the prestigious 
                <span className="text-primary font-bold"> Swisha House</span> family, Ripp brings that authentic 
                Houston sound to a new era.
              </p>
              
              <p>
                His latest project <span className="text-secondary font-bold">"RIP'n & Runnin"</span> showcases 
                the raw talent and street authenticity that caught the attention of Houston's hip-hop elite. 
                From DJ Screw Day performances to late-night studio sessions, Ripp embodies the spirit 
                and hustle of H-Town culture.
              </p>

              <div className="bg-card border border-primary/20 rounded-lg p-6 mt-8">
                <div className="text-primary font-bold mb-2">DJ Michael Watts says:</div>
                <div className="italic text-muted-foreground">
                  "Ripp Tha Rula got that authentic Houston sound we've been waiting for. 
                  He's the future of Swisha House."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-gradient">
            THE MUSIC
          </h2>

          {/* Featured Track */}
          <div className="mb-12">
            <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 glow-purple">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-secondary">
                  🔥 FEATURED TRACK 🔥
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-black mb-4 text-gradient">
                  "RIP'n & Runnin"
                </div>
            <Button className="luxury-gradient text-white font-semibold px-8 py-3 luxury-shadow hover:scale-105 transition-transform">
              <Play className="w-5 h-5 mr-2" />
              EXPERIENCE NOW
            </Button>
              </CardContent>
            </Card>
          </div>

          {/* Discography Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "RIP'n & Runnin", year: "2024", type: "Single" },
              { title: "Houston Heat", year: "2023", type: "EP" },
              { title: "Swisha Affiliated", year: "2023", type: "Mixtape" }
            ].map((release, index) => (
              <Card key={index} className="border-border bg-card/80 hover:border-primary/50 transition-all group">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-48 flex items-center justify-center mb-4 group-hover:glow-purple transition-all">
                    <Music className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{release.title}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>{release.year}</span>
                    <Badge variant="outline">{release.type}</Badge>
                  </div>
                  <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Listen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-gradient">
            THE VISUALS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "RIP'n & Runnin (Official Video)", views: "50K" },
              { title: "Studio Session w/ DJ Michael Watts", views: "25K" },
              { title: "Live at DJ Screw Day 2024", views: "75K" },
              { title: "Houston Cypher", views: "100K" }
            ].map((video, index) => (
              <Card key={index} className="border-border bg-card/80 hover:border-primary/50 transition-all group overflow-hidden">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center group-hover:glow-purple transition-all">
                  <Play className="w-16 h-16 text-white bg-primary/80 rounded-full p-4 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">{video.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{video.views} views</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-secondary">
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-gradient">
            UPCOMING SHOWS
          </h2>
          
          <div className="space-y-4">
            {[
              { date: "Dec 15", venue: "House of Blues Houston", city: "Houston, TX", status: "Tickets Available" },
              { date: "Dec 22", venue: "DJ Screw Day Festival", city: "Houston, TX", status: "Free Event" },
              { date: "Jan 5", venue: "The Observatory", city: "Dallas, TX", status: "Coming Soon" }
            ].map((show, index) => (
              <Card key={index} className="border-border bg-card/80 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-black text-secondary">{show.date}</div>
                        <div className="text-sm text-muted-foreground">2024</div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{show.venue}</h3>
                        <div className="text-muted-foreground flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {show.city}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={show.status === "Free Event" ? "bg-secondary text-black" : "bg-primary"}>
                        {show.status}
                      </Badge>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        {show.status === "Coming Soon" ? "Notify Me" : "Get Tickets"}
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
      <section className="py-24 px-4 luxury-gradient">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-white tracking-wide">
            EXCLUSIVE ACCESS
          </h2>
          <p className="text-xl mb-12 text-white/90 font-light tracking-wide max-w-2xl mx-auto">
            Join our premium community for first access to releases, exclusive content, and behind-the-scenes experiences
          </p>
          
          <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-effect border-white/30 text-foreground placeholder:text-muted-foreground px-6 py-4 text-lg"
              required
            />
            <Button type="submit" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg tracking-wide">
              <Users className="w-5 h-5 mr-2" />
              JOIN NOW
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-gradient">
            GET IN TOUCH
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-secondary">Booking & Business</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mic className="w-5 h-5 text-primary" />
                  <span>Show Bookings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Music className="w-5 h-5 text-primary" />
                  <span>Features & Collaborations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Press & Interviews</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="luxury-gradient text-white font-semibold px-8 py-3 luxury-shadow hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 mr-2" />
                  CONTACT MANAGEMENT
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-secondary">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Youtube className="w-5 h-5 mr-2" />
                  YouTube
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-black">
                  <Music className="w-5 h-5 mr-2" />
                  Spotify
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-black">
                  <Music className="w-5 h-5 mr-2" />
                  Apple Music
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-card border border-primary/20 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Press Kit</h4>
                <p className="text-muted-foreground mb-4">Download high-res photos, bio, and music for press use</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Download EPK
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-black text-gradient mb-4">
            RIPP THA RULA
          </div>
          <div className="text-muted-foreground mb-6">
            Houston, TX • Swisha House Affiliated
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 Ripp Tha Rula. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
