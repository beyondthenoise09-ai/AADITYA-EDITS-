import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Layers, 
  Zap, 
  Users, 
  ExternalLink, 
  ChevronRight,
  Instagram,
  Twitter,
  Mail,
  Youtube,
  Scissors,
  Star,
  Monitor,
  Smartphone,
  Cpu,
  MousePointer2,
  Video
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

// --- Data ---

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Content Creator @TechFlow",
    content: "Aditya transformed my raw footage into a cinematic masterpiece. The pacing and motion graphics are world-class.",
    rating: 5
  },
  {
    name: "Marc Thompson",
    role: "Director, Vision Media",
    content: "One of the most precise editors I've worked with. He understands the 'hook' better than anyone else in the industry.",
    rating: 5
  },
  {
    name: "Alex Rivera",
    role: "Lifestyle Vlogger",
    content: "His text animations are so smooth! My retention rate went up by 40% since I started working with Aditya.",
    rating: 5
  }
];

const software = [
  { name: "After Effects", icon: <Layers className="w-6 h-6" />, level: "Expert", color: "from-purple-500 to-indigo-600" },
  { name: "Premiere Pro", icon: <Scissors className="w-6 h-6" />, level: "Expert", color: "from-blue-500 to-blue-700" },
  { name: "DaVinci Resolve", icon: <Zap className="w-6 h-6" />, level: "Advanced", color: "from-orange-500 to-red-600" },
  { name: "CapCut", icon: <Smartphone className="w-6 h-6" />, level: "Master", color: "from-black to-neutral-800" },
  { name: "Audition", icon: <Cpu className="w-6 h-6" />, level: "Intermediate", color: "from-green-500 to-emerald-700" },
  { name: "Photoshop", icon: <Monitor className="w-6 h-6" />, level: "Advanced", color: "from-sky-500 to-blue-600" },
];

const mainProject = {
  id: "long-form",
  title: "Professional Storytelling (16:9)",
  type: "Long Form Content",
  driveId: "1VTpOJ3u9Cat4Ct7ZRpI0HBXdOq0-6BP-",
  link: "https://drive.google.com/file/d/1VTpOJ3u9Cat4Ct7ZRpI0HBXdOq0-6BP-/view"
};

const latestShorts = [
  { id: "s1", title: "Viral Short #1", driveId: "1UuHNgwLgB1c3ORT_-wQLxgQodraAk1qy", link: "https://drive.google.com/file/d/1UuHNgwLgB1c3ORT_-wQLxgQodraAk1qy/view" },
  { id: "s2", title: "Vertical Edit #2", driveId: "19thdI14WZFVxD8LyxoCR1AB6OYTQ_uLr", link: "https://drive.google.com/file/d/19thdI14WZFVxD8LyxoCR1AB6OYTQ_uLr/view" },
  { id: "s3", title: "Motion Reel #3", driveId: "1FDkClwUaG7rqnIt9sJ2bIMDOINCFM_wK", link: "https://drive.google.com/file/d/1FDkClwUaG7rqnIt9sJ2bIMDOINCFM_wK/view" },
  { id: "s4", title: "Pacing Demo #4", driveId: "1o5pyYKLTkYor5xS1Svwht3Ve3uaHQaJz", link: "https://drive.google.com/file/d/1o5pyYKLTkYor5xS1Svwht3Ve3uaHQaJz/view" },
];

const galleryProjects = [
  { id: 1, title: "Precision Pacing", type: "Rhythm Edit", driveId: "16Ch5I85OAfEI1glWP_-LEWaiOMxLXp48", link: "https://drive.google.com/file/d/16Ch5I85OAfEI1glWP_-LEWaiOMxLXp48/view" },
  { id: 2, title: "Cinematic Grade", type: "Colorist", driveId: "1aWXowjs7AE20OBSOQAhvqp6GsFXyQxSI", link: "https://drive.google.com/file/d/1aWXowjs7AE20OBSOQAhvqp6GsFXyQxSI/view" },
];

export default function App() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero Parallax
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, -100]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);
  const heroRotate = useTransform(smoothProgress, [0, 0.2], [0, 5]);
  const bgTextX = useTransform(smoothProgress, [0, 0.4], [0, -200]);
  const bgTextXReverse = useTransform(smoothProgress, [0, 0.4], [0, 200]);

  return (
    <div ref={containerRef} className="relative bg-black text-white selection:bg-accent selection:text-black min-h-screen">
      
      {/* Motion Grid Overlay */}
      <div className="fixed inset-0 motion-grid pointer-events-none z-0" />

      {/* Progress Line - Vertical */}
      <motion.div 
        className="fixed left-0 top-0 bottom-0 w-[2px] bg-accent/20 z-50 origin-top"
        style={{ scaleY: smoothProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 md:px-12 py-10 flex justify-between items-center z-50 mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-black tracking-[0.2em] uppercase text-glow"
        >
          ADITYA<span className="text-accent underline underline-offset-8 decoration-2 ml-2">.</span>
        </motion.div>
        
        <div className="flex gap-10 items-center">
          {['About', 'Toolkit', 'Showcase'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2, color: '#00ff88' }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold transition-colors hidden md:block"
            >
              {item}
            </motion.a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-black px-8 py-3 rounded-sm text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)]"
          >
            Contact
          </motion.button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="h-screen flex items-center justify-center relative overflow-hidden px-6 perspective-1000">
        
        {/* Background Typography behind hero */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none overflow-hidden select-none opacity-10">
          <motion.h2 
            style={{ x: bgTextX }}
            className="text-[25vw] font-display font-black leading-none whitespace-nowrap tracking-tighter"
          >
            MOTION GRAPHICS
          </motion.h2>
          <motion.h2 
            className="text-[25vw] font-display font-black leading-none whitespace-nowrap tracking-tighter text-outline"
            style={{ x: bgTextXReverse, WebkitTextStroke: '2px white', color: 'transparent' }}
          >
            VIDEO EDITOR
          </motion.h2>
        </div>

        {/* Hero Content Container */}
        <motion.div
          style={{ y: heroY, scale: heroScale, rotateX: heroRotate }}
          className="relative z-10 w-full max-w-5xl aspect-video flex items-center justify-center preserve-3d"
        >
          {/* Central Portrait with Green Glow */}
          <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] group">
            {/* Glow Layers */}
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/30 transition-all duration-700" />
            <div className="absolute -inset-10 bg-accent/10 blur-[60px] rounded-full animate-pulse" />
            
            {/* Image Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-full rounded-2xl overflow-hidden border border-accent/30 shadow-[0_0_50px_rgba(0,255,136,0.2)] preserve-3d"
            >
              {/* Note: In a real environment, the user would replace this src with their uploaded image path */}
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop" 
                alt="Aditya Profile"
                className="w-full h-full object-cover filter contrast-125 brightness-90 grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>

            {/* Floating UI Elements Around Character */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-4 rounded-xl border-accent/20 backdrop-blur-2xl z-20"
            >
              <Video className="text-accent mb-2" size={20} />
              <div className="h-1 w-12 bg-accent/30 rounded-full" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-10 glass-card p-4 rounded-xl border-accent/20 backdrop-blur-2xl z-20"
            >
              <Zap className="text-accent mb-2" size={20} />
              <div className="text-[10px] font-mono text-accent">60 FPS</div>
            </motion.div>
          </div>

          {/* Hero Text Overlays */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-0 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="md:-ml-32 mt-20"
            >
              <h1 className="text-5xl md:text-8xl font-display font-black leading-none uppercase">
                CINE<span className="text-accent italic">MATIC</span><br />
                <span className="text-3xl md:text-5xl tracking-[0.1em] font-light italic">EXPERIENCE</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-accent font-mono text-xs mt-4 tracking-[0.5em] font-bold"
              >
                WITH ADITYA
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="md:-mr-32 mb-20 text-right self-end"
            >
              <p className="text-[10px] uppercase tracking-[0.5em] text-white font-black mb-4 opacity-50">Content Strategist</p>
              <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter">
                STOP THE<br />SCROLL
              </h2>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Mouse/Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.3em] text-muted font-bold italic">Deep Scroll</span>
          <motion.div 
            animate={{ height: [40, 0, 40], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[2px] bg-accent"
          />
        </div>
      </section>

      {/* --- SHOWCASE SECTION --- */}
      <section id="showcase" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <span className="text-accent text-xs font-mono font-bold tracking-widest">{`// FEATURED_PROJECTS`}</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-none">
              OUR LATEST<br /><span className="text-outline italic serif" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>WORK.</span>
            </h2>
          </div>
          <p className="max-w-xs text-muted text-sm leading-relaxed font-light italic text-right">
            Each project is a study in timing, sound design, and color theory. I make viewers stop, feel, and share.
          </p>
        </div>

        {/* Main 16:9 Video */}
        <div className="mb-32">
          <h3 className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-8">Long Form Masterpiece (16:9)</h3>
          <motion.a
            href={mainProject.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block relative w-full aspect-video rounded-3xl overflow-hidden bg-surface border border-white/10"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all z-20">
               <motion.div 
                 whileHover={{ scale: 1.1 }}
                 className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-black shadow-[0_0_50px_#00ff88]"
               >
                 <Play fill="black" size={32} />
               </motion.div>
            </div>
            <iframe 
              src={`https://drive.google.com/file/d/${mainProject.driveId}/preview`}
              className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
              title={mainProject.title}
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-0 z-30">
               <span className="text-[10px] font-mono text-accent uppercase tracking-widest mb-1 block">{mainProject.type}</span>
               <h3 className="text-3xl font-display font-black uppercase italic">{mainProject.title}</h3>
            </div>
          </motion.a>
        </div>

        {/* Vertical Shorts Grid (9:16) */}
        <div className="mb-32">
          <h3 className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-12 border-b border-white/10 pb-4">Viral Verticals (9:16)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestShorts.map((short, i) => (
              <motion.a
                key={short.id}
                href={short.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[9/16] glass-card rounded-2xl overflow-hidden relative group block"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-accent/20 backdrop-blur-sm z-20 pointer-events-none">
                   <div className="px-4 py-2 bg-accent text-black font-black text-[10px] uppercase tracking-widest rounded-sm shadow-xl">
                      Watch on Drive
                   </div>
                </div>
                <iframe 
                  src={`https://drive.google.com/file/d/${short.driveId}/preview`}
                  className="absolute inset-0 w-full h-full brightness-[0.6] group-hover:brightness-100 transition-all duration-500 pointer-events-none"
                  title={short.title}
                ></iframe>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent opacity-100 group-hover:opacity-0 transition-opacity z-10">
                  <p className="text-[9px] font-mono text-accent font-bold uppercase">{short.title}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Gallery Mix */}
        <div>
          <h4 className="text-[10px] font-mono text-muted uppercase tracking-[0.4em] mb-12">Production Archive</h4>
          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {galleryProjects.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-black aspect-video overflow-hidden block"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                   <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                      <ExternalLink size={18} className="text-white" />
                   </div>
                </div>
                <iframe 
                  src={`https://drive.google.com/file/d/${project.driveId}/preview`}
                  className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-100 transition-opacity pointer-events-none"
                  title={project.title}
                ></iframe>
                <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors p-8 flex flex-col justify-end pointer-events-none z-10">
                  <span className="text-[9px] font-mono text-accent mb-2">{project.type}</span>
                  <h3 className="text-xl font-display font-bold uppercase italic tracking-tighter">{project.title}</h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-40 relative overflow-hidden">
        {/* Large Decorative Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-black text-white/[0.03] select-none pointer-events-none">
          ART
        </div>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black leading-tight">
              Editing is<br />
              <span className="text-accent italic serif text-glow">ART.</span>
            </h2>
            <div className="h-1 w-20 bg-accent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-2xl font-medium text-neutral-200 leading-tight">
              I'm Aditya — a cinematic video editor obsessed with one thing: making your content unforgettable.
            </p>
            <p className="text-muted leading-relaxed font-light text-lg">
               I've spent years studying what makes viewers stop, feel, and share. Every edit I deliver is precision-engineered for maximum emotional impact and platform performance.
            </p>
            
            <div className="grid grid-cols-2 gap-px bg-white/5 p-px">
               {['Rhythm', 'Flow', 'Impact', 'Precision'].map(tag => (
                 <div key={tag} className="bg-black p-6 flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                   <span className="text-xs uppercase tracking-widest font-bold">{tag}</span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TOOLKIT SECTION --- */}
      <section id="toolkit" className="py-40 bg-surface/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight">Standard of <span className="text-accent">Execution</span></h2>
            <p className="text-muted font-mono text-xs">01 / SOFTWARE_V2.0</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {software.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, borderColor: '#00ff88' }}
                className="bg-black border border-white/10 p-10 rounded-2xl group transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform`}>
                   {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-2 uppercase italic">{item.name}</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.level === 'Master' ? '100%' : item.level === 'Expert' ? '90%' : '75%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-accent"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-accent">{item.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card p-12 rounded-3xl relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-1 mb-8">
                   {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-accent" fill="#00ff88" />)}
                </div>
                <p className="text-xl italic serif leading-relaxed mb-10 text-neutral-300">"{t.content}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40" />
                   <div>
                     <p className="font-bold text-sm tracking-tight">{t.name}</p>
                     <p className="text-[10px] uppercase tracking-widest text-muted font-bold">{t.role}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-20">
          <div className="relative inline-block py-10 px-20">
             <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />
             <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-tight relative z-10">
               READY TO GO<br /><span className="text-accent underline decoration-4 underline-offset-10">VIRAL?</span>
             </h2>
          </div>

          <motion.div 
            className="flex flex-col items-center gap-8"
            onHoverStart={() => setIsCtaHovered(true)}
            onHoverEnd={() => setIsCtaHovered(false)}
          >
             <motion.a 
               href="mailto:adityakmr706153@gmail.com"
               animate={{ scale: isCtaHovered ? 1.05 : 1 }}
               className="group relative flex items-center gap-6 bg-white text-black px-12 py-6 rounded-full text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden"
             >
               <span className="relative z-10 font-bold">Start your edit</span>
               <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 font-bold" />
               <motion.div 
                  className="absolute inset-0 bg-accent"
                  initial={{ x: '-100%' }}
                  animate={{ x: isCtaHovered ? '0%' : '-100%' }}
                  transition={{ ease: "easeInOut" }}
               />
             </motion.a>
             <p className="text-muted text-xs font-mono uppercase">Estimated turn-around: 48 Hours</p>
          </motion.div>

          <div className="pt-20 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/10 font-mono text-[9px] uppercase tracking-[0.4em] text-muted font-bold">
             <div className="flex gap-10 order-2 md:order-1">
                <a href="#" className="hover:text-accent transition-colors">INSTAGRAM</a>
                <a href="#" className="hover:text-accent transition-colors">YOUTUBE</a>
                <a href="#" className="hover:text-accent transition-colors">BEHANCE</a>
             </div>
             <p className="order-1 md:order-2">ADITYA © 2026 / CREATIVE DIRECTOR</p>
             <div className="flex gap-4 order-3 items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>AVAILABLE FOR FREELANCE</span>
             </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

