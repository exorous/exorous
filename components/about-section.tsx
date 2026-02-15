import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { Cpu, Brain, Rocket, LineChart } from 'lucide-react';
import MotionSection from './motion-section';

const philosophies = [
  {
    id: "automation",
    icon: <Cpu className="h-6 w-6 text-cyan-400" />,
    title: "Automation-First Approach",
    description: "We don't just improve manual work; we eliminate it. Our systems are designed to run autonomously from day one, freeing your human talent for high-value strategic thinking.",
    image: "/images/philosophy/automation.png",
    color: "from-cyan-500/20"
  },
  {
    id: "intelligence",
    icon: <Brain className="h-6 w-6 text-purple-400" />,
    title: "AI-Powered Decision Making",
    description: "Our agents go beyond simple scripts. They analyze complex data sets, qualify leads with high precision, and make intelligent cross-platform decisions in milliseconds.",
    image: "/images/philosophy/intelligence.png",
    color: "from-purple-500/20"
  },
  {
    id: "implementation",
    icon: <Rocket className="h-6 w-6 text-orange-400" />,
    title: "End-to-End Implementation",
    description: "We handle the entire automation lifecycle. From initial bottleneck analysis and strategy design to full-scale development and seamless deployment into your existing stack.",
    image: "/images/philosophy/implementation.png",
    color: "from-orange-500/20"
  },
  {
    id: "roi",
    icon: <LineChart className="h-6 w-6 text-emerald-400" />,
    title: "Real ROI Focus",
    description: "We measure success in tangible results: revenue generated, hours saved, and conversion rate increases. We are not a cost center; we are a growth engine.",
    image: "/images/philosophy/growth.png",
    color: "from-emerald-500/20"
  }
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map 0-1 progress to 0-3 index
    const index = Math.min(
      Math.floor(latest * philosophies.length),
      philosophies.length - 1
    );
    if (index !== activeStep) {
      setActiveStep(index);
    }
  });

  return (
    <section id="about" className="relative bg-black w-full overflow-visible">
      {/* Container with extra height to facilitate scrolling while pinned */}
      <div ref={containerRef} className="container mx-auto px-4 relative min-h-[400vh]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">

          {/* Left Column: Pinned Visuals */}
          <div className="w-full lg:w-1/2 hidden lg:block sticky top-32 h-[calc(100vh-8rem)] flex items-center overflow-visible z-20">
            <div className="relative w-full aspect-[4/5] max-h-[700px] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl transition-all duration-500 hover:border-zinc-700/50">
              {/* Background Glow */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`glow-${activeStep}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 bg-gradient-to-br ${philosophies[activeStep].color} via-transparent to-transparent opacity-60`}
                />
              </AnimatePresence>

              {/* Main Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={philosophies[activeStep].image}
                    alt={philosophies[activeStep].title}
                    fill
                    className="object-cover opacity-80 mix-blend-lighten"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Edge Highlights */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-500/30 to-transparent" />
              <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Scrollable Content */}
          <div className="w-full lg:w-1/2 flex flex-col pt-48 pb-32">
            <MotionSection className="mb-48 lg:mb-72">
              <h2 className="text-primary font-medium mb-6 tracking-widest uppercase text-sm flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Our Philosophy
              </h2>
              <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tight">
                Not Just An Agency. <br />
                <span className="text-zinc-500">An Automation Partner.</span>
              </h3>
              <p className="text-zinc-400 text-2xl max-w-lg leading-relaxed font-light">
                We believe in building systems that work while you sleep.
                Our approach merges deep strategic consulting with world-class AI engineering.
              </p>
            </MotionSection>

            <div className="flex flex-col gap-[40vh]">
              {philosophies.map((item, index) => (
                <div key={item.id} className="min-h-[70vh] flex flex-col justify-center">
                  <PhilosophyItem
                    item={item}
                    isActive={activeStep === index}
                  />
                </div>
              ))}
              {/* Spacer to allow the last item to be scrolled past to the end of the container */}
              <div className="h-[20vh]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophyItem({
  item,
  isActive
}: {
  item: any,
  isActive: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{
        opacity: isActive ? 1 : 0.1,
        x: isActive ? 0 : 20,
        scale: isActive ? 1 : 0.98
      }}
      transition={{ duration: 0.4 }}
      className="flex flex-col relative"
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 border transition-all duration-500 ${isActive ? 'bg-zinc-900 border-zinc-700 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'bg-transparent border-white/5'
        }`}>
        {item.icon}
      </div>

      <h4 className={`text-3xl font-bold mb-6 transition-colors duration-500 ${isActive ? 'text-white' : 'text-zinc-700'
        }`}>
        {item.title}
      </h4>

      <p className={`text-xl leading-relaxed max-w-lg transition-colors duration-500 ${isActive ? 'text-zinc-300' : 'text-zinc-600'
        }`}>
        {item.description}
      </p>

      {/* Mobile Image */}
      <div className="mt-12 lg:hidden w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 relative bg-zinc-900">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>
    </motion.div>
  );
}