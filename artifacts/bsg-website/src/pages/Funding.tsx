import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { IndianRupee, Landmark, ShieldCheck, Check, Heart } from "lucide-react";

export default function Funding() {
  return (
    <Layout>
      <div className="bg-background pt-16 pb-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Funding & Donations
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Your contribution goes directly toward building a stronger, educated society. We operate with 100% transparency.
            </p>
          </motion.div>
        </div>

        {/* 1% Rule Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-secondary to-[#b3602d] rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-secondary/20 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="shrink-0 w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
              <span className="font-display font-bold text-4xl">1%</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Save 1% of your income</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                We encourage all our volunteers and supporters to dedicate just 1% of their monthly income to social service. Small, consistent contributions create massive, sustainable impact.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Bank Details Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <Landmark className="w-6 h-6 text-primary" />
                Bank Account Details
              </h3>
              
              <div className="bg-white rounded-3xl p-8 border border-border shadow-lg relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <Landmark className="w-32 h-32" />
                </div>
                
                <div className="relative z-10 space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Account Name</p>
                    <p className="text-2xl font-display font-bold text-foreground">BORN TO SERVE GROUP (BSG)</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Account Number</p>
                    <p className="text-3xl font-mono text-primary tracking-widest font-medium bg-primary/5 inline-block px-4 py-2 rounded-lg border border-primary/10">
                      059805005001
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Bank Name</p>
                      <p className="font-medium text-foreground">ICICI BANK</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">IFSC Code</p>
                      <p className="font-medium text-foreground">ICIC0000598</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Branch</p>
                    <p className="font-medium text-foreground">HYDERABAD - MINDSPACE</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-muted rounded-xl p-4 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All donations are deposited directly into the official BSG account. We maintain strict financial records and transparency reports for our members.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Purpose of Funds */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-secondary" />
                How Your Funds Are Used
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Financial Aid",
                    desc: "Direct tuition and educational fee support for meritorious students from poor backgrounds."
                  },
                  {
                    title: "Books & Infrastructure",
                    desc: "Purchasing textbooks, notebooks, and essential school supplies for students."
                  },
                  {
                    title: "Village Libraries",
                    desc: "Setting up and maintaining public libraries in rural villages to promote reading."
                  },
                  {
                    title: "Prizes & Motivation",
                    desc: "Prize money and awards for academic competitions to keep students motivated."
                  },
                  {
                    title: "Volunteer Logistics",
                    desc: "Basic travel and logistical support for volunteers conducting surveys and campaigns in remote areas."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-border shadow-sm flex items-start gap-4 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <IndianRupee className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
