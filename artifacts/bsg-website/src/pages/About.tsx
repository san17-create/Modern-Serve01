import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, History, Target, Leaf } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="bg-background pt-16 pb-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About BSG
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              From a small village initiative to a growing community of youth dedicated to national upliftment.
            </p>
          </motion.div>
        </div>

        {/* Origin Story */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/education.png`}
                alt="Education and growth"
                className="rounded-3xl shadow-xl border border-border/50 object-cover w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-6">
                <History className="w-4 h-4" />
                Our Origin
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">How It All Started</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Born to Serve Group (BSG) began its journey as a humble <strong className="text-foreground">Village Knowledge Center</strong>. What started as an initiative to give basic tuition to poor students in rural areas quickly blossomed into a broader vision.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seeing the immense potential in these students and the gaps in their opportunities, passionate youth came together to officially form BSG. Today, we focus on continuous education from 7th grade all the way to the Undergraduate level, paired with vital employment guidance.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Fundamental Principles */}
        <div className="bg-white py-24 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Fundamental Principles</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything we do is guided by three core philosophies that ensure our impact is lasting and meaningful.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Self Sustainism",
                  icon: Leaf,
                  desc: "We don't just give a fish; we teach how to fish. We empower individuals to become self-reliant so they can eventually support themselves and their families without continuous external aid.",
                  color: "bg-primary",
                  textColor: "text-primary"
                },
                {
                  title: "Hierarchical Service",
                  icon: ArrowRight,
                  desc: "Those who receive help today are encouraged to help others tomorrow. We build a chain of giving where beneficiaries become benefactors, compounding our impact across generations.",
                  color: "bg-secondary",
                  textColor: "text-secondary"
                },
                {
                  title: "Clear Vision",
                  icon: Target,
                  desc: "Our ultimate goal is the holistic upliftment of society. We focus our resources strictly on education and employment—the two most powerful tools for eradicating poverty.",
                  color: "bg-accent-foreground",
                  textColor: "text-accent-foreground"
                }
              ].map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-background rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${principle.color} opacity-[0.03] rounded-bl-[100px] transition-all duration-500 group-hover:opacity-[0.08] group-hover:scale-110`}></div>
                  
                  <div className={`w-14 h-14 rounded-2xl ${principle.color}/10 ${principle.textColor} flex items-center justify-center mb-6`}>
                    <principle.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Areas of Operations */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-primary rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute w-full h-full scale-150 transform-gpu origin-center">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)"/>
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
                  What We Actually Do
                </h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                  BSG executes its vision through targeted, practical activities run by our dedicated volunteers.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <ul className="space-y-4">
                  {[
                    "Mentoring & Career Guidance programs",
                    "Conducting awareness campaigns in rural schools",
                    "Establishing Village Libraries",
                    "Providing financial aid for tuition and books",
                    "Surveying rural areas to identify needs"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 text-primary-foreground font-medium border border-white/10">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
