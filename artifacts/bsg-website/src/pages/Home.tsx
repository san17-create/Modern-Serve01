import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, BookOpen, Users, Lightbulb, HeartHandshake } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Warm soft background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-sm font-semibold text-primary">Reg No: 2050</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
                One Passion, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Rise of Great Nation
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
                Born to Serve Group (BSG) is a voluntary youth organization dedicated to uplifting society by educating, guiding, and empowering the next generation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/join" 
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Join the Movement
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/funding" 
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-lg shadow-sm border border-border/50 hover:bg-muted/50 hover:-translate-y-1 transition-all duration-300"
                >
                  Support our Cause
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="hidden lg:block relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* community illustration */}
              <img 
                src={`${import.meta.env.BASE_URL}images/community.png`}
                alt="Community working together"
                className="w-full h-auto rounded-3xl shadow-2xl shadow-black/5 object-cover"
              />
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 glass-panel rounded-2xl p-6 max-w-[240px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-foreground">100%</div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Volunteer Run</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Our Core Focus</h2>
            <p className="text-muted-foreground text-lg">
              We focus on building a self-sustaining society through education, from 7th grade to undergraduate levels, and career guidance for youth.
            </p>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: BookOpen,
                title: "Quality Education",
                desc: "Providing tuition, books, and infrastructure to meritorious poor students to ensure they never stop learning.",
                color: "text-primary",
                bg: "bg-primary/10"
              },
              {
                icon: Lightbulb,
                title: "Career Guidance",
                desc: "Mentoring sessions, career talks, and employment opportunity guidance for youth to secure their future.",
                color: "text-secondary",
                bg: "bg-secondary/10"
              },
              {
                icon: Users,
                title: "Village Libraries",
                desc: "Setting up libraries in rural areas to bring knowledge directly to the communities that need it most.",
                color: "text-accent-foreground",
                bg: "bg-accent/40"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group p-8 rounded-3xl border border-border/50 bg-background hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to make a difference?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 text-balance mx-auto">
            Whether you want to volunteer your time, share your expertise, or support us financially, there is a place for you at Born to Serve Group.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/join" 
              className="px-8 py-4 rounded-xl bg-white text-primary font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
            >
              Become a Volunteer
            </Link>
            <Link 
              href="/funding" 
              className="px-8 py-4 rounded-xl bg-transparent border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
