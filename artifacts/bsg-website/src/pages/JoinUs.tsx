import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, CheckSquare, Users, Send } from "lucide-react";

export default function JoinUs() {
  const requirements = [
    "Full Name",
    "Company / College name",
    "Permanent Address",
    "Mobile Number",
    "Email Address",
    "Why you want to join BSG?",
    "How you heard about BSG?",
    "Areas you'd like to volunteer (Trainings / Mentoring / Fund Raising / Career Talks / Survey)"
  ];

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
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Join the Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Membership is open to anyone above 18 years of age who is passionate about meeting the objectives of BSG.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            
            {/* Steps / Instructions */}
            <motion.div 
              className="md:col-span-3 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-border shadow-md">
                <h2 className="text-2xl font-display font-bold mb-4">How to Apply</h2>
                <p className="text-muted-foreground mb-8">
                  We don't use complex web forms. To join us, simply write us an email with your details. This helps us start a direct, personal conversation with you from day one.
                </p>

                <h3 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-secondary" />
                  Please include the following details:
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-muted-foreground">
                        {idx + 1}
                      </div>
                      <span className="text-foreground font-medium">{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-accent/30 rounded-xl p-5 border border-accent">
                  <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                    <strong className="text-foreground">Note:</strong> Once we receive your email, a BSG coordinator will reach out to you within 48 hours to discuss next steps and orientation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email CTA */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-primary rounded-3xl p-8 text-primary-foreground shadow-xl sticky top-32">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Send us an email</h3>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  Ready to make an impact? Click below to open your email client with our address pre-filled.
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold mb-1">To</p>
                    <p className="font-medium break-all bg-white/10 px-3 py-2 rounded-lg border border-white/10">rajachowdari@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold mb-1">CC</p>
                    <p className="font-medium break-all bg-white/10 px-3 py-2 rounded-lg border border-white/10">borntoservebsbc@gmail.com</p>
                  </div>
                </div>

                <a 
                  href="mailto:rajachowdari@gmail.com?cc=borntoservebsbc@gmail.com&subject=Application%20to%20Join%20Born%20to%20Serve%20Group&body=Hello%20BSG%20Team%2C%0A%0AI%20would%20like%20to%20join%20the%20organization.%20Here%20are%20my%20details%3A%0A%0AFull%20Name%3A%20%0ACompany%2FCollege%3A%20%0APermanent%20Address%3A%20%0AMobile%20Number%3A%20%0AEmail%20Address%3A%20%0AWhy%20I%20want%20to%20join%20BSG%3A%20%0AHow%20I%20heard%20about%20BSG%3A%20%0AAreas%20I'd%20like%20to%20volunteer%3A%20%0A%0AThank%20you!"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-primary rounded-xl font-bold hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Draft Email Now
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
