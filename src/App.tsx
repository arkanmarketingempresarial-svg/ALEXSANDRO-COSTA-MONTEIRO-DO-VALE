/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { 
  motion, 
  useScroll, 
  useSpring,
  useTransform,
  AnimatePresence
} from 'motion/react';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  ChevronDown, 
  ArrowRight,
  CheckCircle2,
  GitBranch,
  BarChart3,
  ShieldCheck,
  Cpu,
  Play,
  ClipboardList,
  ArrowDown,
  Workflow,
  Settings2,
  PieChart,
  MessageSquare,
  Search,
  FileText,
  Handshake,
  HeartHandshake,
  Bell,
  Instagram,
  Smartphone,
  Globe,
  UserPlus,
  Calendar,
  Clock as ClockIcon,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';

// --- Components ---

const FloatingParticle: React.FC<{ delay?: number }> = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 0, x: 0 }}
    animate={{ 
      opacity: [0, 0.5, 0],
      y: [-20, -120],
      x: Math.random() * 100 - 50
    }}
    transition={{ 
      duration: 5 + Math.random() * 5, 
      repeat: Infinity, 
      delay,
      ease: "linear"
    }}
    className="absolute w-1 h-1 bg-arkan-green rounded-full blur-[1px]"
    style={{ 
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
  />
);

const NeonButton = ({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 102, 0.6)" }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`bg-arkan-green text-arkan-black font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer ${className}`}
  >
    {children}
  </motion.button>
);

const SectionHeading = ({ subtitle, title, description }: { subtitle: string, title: string, description?: React.ReactNode }) => (
  <div className="mb-16">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-arkan-green font-display font-bold tracking-widest uppercase text-sm mb-4 block"
    >
      // {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
    >
      {title}
    </motion.h2>
    {description && (
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-white/60 max-w-3xl text-lg leading-relaxed space-y-4"
      >
        {description}
      </motion.div>
    )}
  </div>
);

const FlowchartNode = ({ title, icon: Icon, color = "arkan-green", delay = 0, isAutomated = false }: { title: string, icon: any, color?: string, delay?: number, isAutomated?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    className="flex flex-col items-center relative group"
  >
    <motion.div 
      whileHover={{ y: -8, scale: 1.1 }}
      className={`w-32 h-32 rounded-[2.5rem] bg-arkan-surface border border-white/10 flex flex-col items-center justify-center relative transition-all duration-500 group-hover:border-${color}/50 shadow-2xl shadow-black/50 overflow-hidden`}
    >
      {/* Animated Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <motion.div 
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className={`absolute -inset-4 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,255,102,0.1)_45deg,transparent_90deg)] opacity-0 group-hover:opacity-100 transition-opacity`}
      />

      <div className={`relative z-10 mb-2 p-4 rounded-2xl bg-white/5 text-${color} group-hover:bg-${color}/20 group-hover:scale-110 transition-all duration-300`}>
        <Icon size={32} />
      </div>
      
      <span className="relative z-10 text-[11px] font-black uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors px-3 text-center leading-tight">
        {title}
      </span>

      {isAutomated ? (
        <motion.div 
          animate={{ boxShadow: ["0 0 10px rgba(0,255,102,0.4)", "0 0 20px rgba(0,255,102,0.6)", "0 0 10px rgba(0,255,102,0.4)"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-2 -right-2 bg-arkan-green text-arkan-black text-[10px] font-black px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg border border-white/20 z-20"
        >
          <Cpu size={12} className="animate-pulse" /> 
          <span className="tracking-widest">AUTO</span>
        </motion.div>
      ) : (
        <div className="absolute -top-2 -right-2 bg-white/10 text-white/80 text-[10px] font-black px-3 py-1.5 rounded-xl flex items-center gap-1.5 border border-white/10 backdrop-blur-xl z-20">
          <Users size={12} /> 
          <span className="tracking-widest">HUMANO</span>
        </div>
      )}

      {/* Connection Point Indicators */}
      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 rounded-full bg-white/20 group-hover:bg-arkan-green transition-colors" />
      <div className="absolute left-1/2 -top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-white/20 group-hover:bg-arkan-green transition-colors" />
    </motion.div>
  </motion.div>
);

const Connector = ({ direction = "right", delay = 0, active = true }: { direction?: "right" | "down", delay?: number, active?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className={`flex items-center justify-center relative ${direction === "right" ? "h-32 w-16" : "w-32 h-16"}`}
  >
    {direction === "right" ? (
      <div className="relative w-full flex items-center">
        <div className="h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
          {active && (
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-arkan-green to-transparent"
            />
          )}
        </div>
        <motion.div
          animate={active ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute right-0"
        >
          <ArrowRight size={18} className={active ? "text-arkan-green" : "text-white/10"} />
        </motion.div>
      </div>
    ) : (
      <div className="relative h-full flex flex-col items-center">
        <div className="w-[2px] h-full bg-white/5 overflow-hidden rounded-full">
          {active && (
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-arkan-green to-transparent"
            />
          )}
        </div>
        <motion.div
          animate={active ? { y: [0, 5, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-0"
        >
          <ArrowDown size={18} className={active ? "text-arkan-green" : "text-white/10"} />
        </motion.div>
      </div>
    )}
  </motion.div>
);

const AutomationMapItem = ({ title, trigger, action, impact, icon: Icon, delay = 0 }: { title: string, trigger: string, action: string, impact: string, icon: any, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass-card p-6 rounded-3xl border border-white/5 group hover:border-arkan-green/30 transition-all relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={64} />
    </div>
    
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-2xl bg-arkan-green/10 flex items-center justify-center text-arkan-green">
        <Icon size={24} />
      </div>
      <h4 className="text-xl font-bold">{title}</h4>
    </div>

    <div className="space-y-4 relative z-10">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Gatilho</span>
        <p className="text-sm text-white/80">{trigger}</p>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-black text-arkan-green/40 uppercase tracking-widest">Ação Automática</span>
        <p className="text-sm text-arkan-green font-medium">{action}</p>
      </div>
      <div className="pt-4 border-t border-white/5">
        <div className="flex items-center gap-2 text-xs font-bold text-white/60">
          <TrendingUp size={14} className="text-arkan-green" />
          Impacto: <span className="text-white">{impact}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const PipelineStage = ({ title, description, icon: Icon, color = "arkan-green", delay = 0 }: { title: string, description: string, icon: any, color?: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-white/5 group hover:border-arkan-green/30 transition-all"
  >
    <div className={`w-12 h-12 rounded-xl bg-${color}/10 flex items-center justify-center text-${color} group-hover:scale-110 transition-transform`}>
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-white/90">{title}</h4>
      <p className="text-xs text-white/40">{description}</p>
    </div>
  </motion.div>
);

const FollowUpItem = ({ day, title, message, objective }: { day: string, title: string, message: string, objective: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-12 pb-12 last:pb-0 group"
  >
    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-arkan-surface border border-white/10 flex items-center justify-center text-arkan-green font-bold text-sm z-10 group-hover:bg-arkan-green group-hover:text-arkan-black transition-all">
      {day}
    </div>
    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-white/10 group-last:hidden" />
    <div className="glass-card p-6 rounded-2xl border border-white/5">
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <div className="bg-arkan-black/40 p-4 rounded-xl border border-white/5 mb-4 italic text-white/70 text-sm">
        "{message}"
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-arkan-green/60">Objetivo: {objective}</p>
    </div>
  </motion.div>
);

const CalendarPreview = () => (
  <div className="glass-card p-6 rounded-3xl border border-white/10 max-w-md mx-auto relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-arkan-green/5 blur-3xl -mr-16 -mt-16" />
    <div className="flex items-center justify-between mb-6 relative z-10">
      <h4 className="font-bold flex items-center gap-2"><Calendar size={18} className="text-arkan-green" /> Agendar Reunião</h4>
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
      </div>
    </div>
    <div className="grid grid-cols-7 gap-2 mb-6 relative z-10">
      {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
        <div key={i} className="text-[10px] font-bold text-white/20 text-center">{d}</div>
      ))}
      {Array.from({ length: 31 }).map((_, i) => (
        <div key={i} className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium transition-colors ${i === 16 ? 'bg-arkan-green text-arkan-black font-bold' : 'hover:bg-white/5 text-white/40'}`}>
          {i + 1}
        </div>
      ))}
    </div>
    <div className="space-y-3 relative z-10">
      <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Horários Disponíveis</p>
      <div className="grid grid-cols-3 gap-2">
        {['09:00', '10:30', '14:00', '15:30', '17:00'].map((t, i) => (
          <div key={i} className="py-2 rounded-lg border border-white/5 text-center text-xs font-bold hover:border-arkan-green hover:text-arkan-green transition-all cursor-pointer">
            {t}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FunnelStep = ({ label, value, color, delay }: { label: string, value: number, color: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, width: "0%" }}
    whileInView={{ opacity: 1, width: `${value}%` }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className={`h-12 ${color} rounded-r-full flex items-center justify-end pr-6 relative group`}
  >
    <div className="absolute left-4 font-bold text-white whitespace-nowrap group-hover:text-arkan-green transition-colors">{label}</div>
    <span className="font-black text-arkan-black/40">{value}</span>
  </motion.div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-arkan-black text-white font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-arkan-green/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-arkan-green/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-arkan-green z-50 origin-left"
        style={{ scaleX: scaleProgress }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 bg-arkan-black overflow-hidden">
        {/* Animated Light Rays Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,255,102,0.15)_45deg,transparent_90deg,rgba(0,255,102,0.05)_180deg,transparent_270deg)]"
          />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-arkan-black/90 to-arkan-black" />
        </div>

        <div className="relative z-20 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <motion.div 
                animate={{ height: [0, 32, 32] }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-1 bg-arkan-green" 
              />
              <span className="text-white/40 font-display font-medium tracking-[0.4em] uppercase text-xs">Arkan Marketing Empresarial</span>
            </div>
            
            <h1 className="text-5xl md:text-[80px] font-display font-bold mb-10 leading-[1.1] tracking-tighter text-white">
              Estruturação e Otimização do <br />
              <span className="text-arkan-green relative inline-block">
                Processo Comercial
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute -bottom-2 left-0 h-1 bg-arkan-green/50 blur-sm"
                />
              </span> <br />
              da Corretora PHX
            </h1>
            
            <div className="h-px w-24 bg-arkan-green mx-auto mb-10" />
            
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light tracking-wide uppercase">
              Organização, Padronização e Inovação para o Crescimento Exponencial
            </p>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
              <NeonButton className="px-10 py-5">
                INICIAR APRESENTAÇÃO <ArrowRight size={20} />
              </NeonButton>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
        >
          <div className="w-px h-16 bg-gradient-to-b from-arkan-green to-transparent" />
        </motion.div>
      </section>

      {/* Introdução */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="INTRODUÇÃO"
            title="O Objetivo do Projeto"
            description={
              <>
                <p>O objetivo deste projeto é organizar, padronizar e otimizar todo o processo de vendas da corretora, desde o primeiro contato do cliente até o pós-venda.</p>
                <p>Hoje, muitas empresas possuem bons vendedores e bons produtos, mas não possuem um processo comercial estruturado. Isso faz com que oportunidades se percam ao longo do caminho.</p>
                <p>O que propomos aqui é a criação de um sistema organizado de vendas, onde cada etapa do contato com o cliente é clara, mensurável e, sempre que possível, automatizada.</p>
              </>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { title: "Aumentar a conversão de clientes", icon: Target },
              { title: "Reduzir o tempo de atendimento", icon: TrendingUp },
              { title: "Criar previsibilidade nas vendas", icon: ShieldCheck },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:border-arkan-green/30 transition-colors"
              >
                <div className="w-16 h-16 bg-arkan-green/10 rounded-2xl flex items-center justify-center text-arkan-green mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold leading-tight">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fluxograma Visual */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="VISUALIZAÇÃO"
            title="Fluxograma do Processo de Vendas"
            description="A representação visual do fluxo de trabalho, garantindo clareza operacional e distinção entre automação e toque humano."
          />

          <div className="mt-20 p-12 glass-card rounded-[40px] border border-white/5 overflow-x-auto relative bg-arkan-black/50 backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-8 flex gap-6">
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                <div className="w-3 h-3 rounded bg-arkan-green shadow-[0_0_10px_rgba(0,255,102,0.5)]" /> Automatizado
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                <div className="w-3 h-3 rounded bg-white/10 border border-white/20" /> Humano
              </div>
            </div>
            
            <div className="min-w-[1000px] py-12 flex flex-col items-center">
              {/* Row 1: Entry Channels */}
              <div className="flex items-center gap-4 mb-8">
                <FlowchartNode title="Instagram" icon={Instagram} color="white/40" isAutomated />
                <FlowchartNode title="WhatsApp" icon={Smartphone} color="white/40" isAutomated />
                <FlowchartNode title="Google Ads" icon={Globe} color="white/40" isAutomated />
                <FlowchartNode title="Site PHX" icon={Globe} color="white/40" isAutomated />
              </div>

              <Connector direction="down" delay={0.5} />

              {/* Row 2: Initial Processing */}
              <div className="flex items-center">
                <FlowchartNode title="Triagem Inteligente" icon={Search} delay={0.6} isAutomated />
                <Connector direction="right" delay={0.7} />
                <FlowchartNode title="Coleta de Dados" icon={ClipboardList} delay={0.8} isAutomated />
                <Connector direction="right" delay={0.9} />
                <FlowchartNode title="Distribuição" icon={GitBranch} delay={1.0} isAutomated />
              </div>

              <Connector direction="down" delay={1.1} />

              {/* Row 3: Technical & Sales */}
              <div className="flex items-center">
                <FlowchartNode title="Cotação Técnica" icon={Workflow} delay={1.2} />
                <Connector direction="right" delay={1.3} />
                <FlowchartNode title="Apresentação" icon={FileText} delay={1.4} />
                <Connector direction="right" delay={1.5} />
                <FlowchartNode title="Negociação" icon={Handshake} delay={1.6} />
              </div>

              <Connector direction="down" delay={1.7} />

              {/* Row 4: Closing & Post-Sale */}
              <div className="flex items-center">
                <FlowchartNode title="Fechamento" icon={CheckCircle2} delay={1.8} />
                <Connector direction="right" delay={1.9} />
                <FlowchartNode title="Pós-Venda" icon={HeartHandshake} delay={2.0} isAutomated />
                <Connector direction="right" delay={2.1} />
                <FlowchartNode title="Régua de Reaquecimento" icon={TrendingUp} delay={2.2} isAutomated />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Automações */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="TECNOLOGIA"
            title="Mapa de Automações"
            description="Onde a inteligência artificial e os fluxos automáticos trabalham para você."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <AutomationMapItem 
              title="Triagem Inteligente"
              trigger="Novo Lead via WhatsApp/Site"
              action="Chatbot qualifica perfil e necessidade"
              impact="Redução de 80% no tempo de triagem"
              icon={Search}
              delay={0.1}
            />
            <AutomationMapItem 
              title="Distribuição de Leads"
              trigger="Lead Qualificado"
              action="Encaminhamento imediato ao vendedor disponível"
              impact="Atendimento em menos de 5 minutos"
              icon={GitBranch}
              delay={0.2}
            />
            <AutomationMapItem 
              title="Régua de Reaquecimento"
              trigger="Lead sem resposta (5, 15, 30 dias)"
              action="Envio de mensagens de follow-up estratégico"
              impact="Recuperação de 15% das vendas perdidas"
              icon={TrendingUp}
              delay={0.3}
            />
            <AutomationMapItem 
              title="Pós-Venda Automático"
              trigger="Venda Concluída"
              action="Sequência de mensagens de boas-vindas e suporte"
              impact="Aumento de 30% na taxa de indicação"
              icon={HeartHandshake}
              delay={0.4}
            />
            <AutomationMapItem 
              title="Alertas de Vencimento"
              trigger="Próximo ao vencimento do plano"
              action="Notificação para renovação e upgrade"
              impact="Retenção de clientes superior a 90%"
              icon={Bell}
              delay={0.5}
            />
            <AutomationMapItem 
              title="Relatórios em Tempo Real"
              trigger="Qualquer ação no CRM"
              action="Atualização instantânea de dashboards"
              impact="Decisões baseadas em dados reais"
              icon={BarChart3}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* 2. Estrutura de Organização do Funil de Vendas */}
      <section className="py-32 px-6 bg-arkan-dark relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="ESTRUTURA DE CRM"
            title="Pipeline de Vendas Organizado"
            description={
              <>
                <p>Para tudo isso funcionar, os leads precisam estar organizados. Criamos um pipeline de vendas que evita o problema comum: leads esquecidos.</p>
                <p className="text-arkan-green font-bold italic">"Assim conseguimos ver exatamente quantos clientes estão em cada etapa."</p>
              </>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <PipelineStage title="Novo Lead" description="Lead acabou de entrar no sistema" icon={UserPlus} delay={0.05} />
            <PipelineStage title="Primeiro Contato" description="Tentativa de conexão inicial" icon={MessageSquare} delay={0.1} />
            <PipelineStage title="Qualificação" description="Entendendo perfil e necessidade" icon={Search} delay={0.15} />
            <PipelineStage title="Aguardando Dados" description="Pendente envio de docs/infos" icon={ClipboardList} delay={0.2} />
            <PipelineStage title="Cotação em andamento" description="Busca técnica nas operadoras" icon={Workflow} delay={0.25} />
            <PipelineStage title="Proposta enviada" description="Apresentação de valores e rede" icon={FileText} delay={0.3} />
            <PipelineStage title="Negociação" description="Ajustes e quebra de objeções" icon={Handshake} delay={0.35} />
            <PipelineStage title="Fechado" description="Contrato assinado e ativado" icon={CheckCircle2} color="emerald-400" delay={0.4} />
            <PipelineStage title="Perdido" description="Oportunidade não convertida" icon={Zap} color="red-400" delay={0.45} />
          </div>
        </div>
      </section>

      {/* 3. Otimização e Automação de Processos */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="RECUPERAÇÃO DE VENDAS"
            title="Sequência de Follow-up"
            description={
              <>
                <p className="text-arkan-green font-bold italic">"Isso é algo extremamente poderoso que muitas corretoras não fazem."</p>
                <p>Muitos clientes não fecham não porque não querem, mas porque estão pesquisando, esqueceram de responder ou querem comparar planos.</p>
                <p>Este fluxo sozinho pode recuperar de 10% a 20% de vendas perdidas.</p>
              </>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            <div className="space-y-2">
              <FollowUpItem 
                day="05" 
                title="Retomada Simples" 
                message="Olá, tudo bem? Passando para saber se você conseguiu analisar a cotação que enviamos."
                objective="Reabrir conversa"
              />
              <FollowUpItem 
                day="15" 
                title="Atualização de Mercado" 
                message="Alguns planos tiveram atualização recente. Posso verificar se existe alguma opção melhor para você."
                objective="Gerar curiosidade"
              />
              <FollowUpItem 
                day="30" 
                title="Novas Opções" 
                message="Caso ainda esteja procurando plano de saúde, posso te ajudar com algumas novas opções."
                objective="Última tentativa ativa"
              />
              <FollowUpItem 
                day="60" 
                title="Disponibilidade Futura" 
                message="Se no futuro precisar de plano de saúde, estaremos à disposição para te ajudar."
                objective="Manter porta aberta"
              />
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 rounded-3xl border border-white/5 bg-arkan-green/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arkan-green to-transparent opacity-30" />
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Workflow className="text-arkan-green" /> Automação vs. Humano
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Resposta Inicial", type: "AUTO" },
                    { label: "Coleta de Dados", type: "AUTO" },
                    { label: "Qualificação Técnica", type: "HUMAN" },
                    { label: "Negociação & Fechamento", type: "HUMAN" },
                    { label: "Follow-up de Leads", type: "AUTO" },
                    { label: "Pós-Venda Estratégico", type: "AUTO" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group hover:bg-white/10 transition-all">
                      <span className="font-bold text-white/80">{item.label}</span>
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${item.type === 'AUTO' ? 'bg-arkan-green text-arkan-black shadow-[0_0_10px_rgba(0,255,102,0.3)]' : 'bg-white/10 text-white/40'}`}>
                        {item.type === 'AUTO' ? 'AUTOMÁTICO' : 'VENDEDOR'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <CalendarPreview />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Estrutura de Pós-Venda */}
      <section className="py-32 px-6 bg-arkan-dark relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="RELACIONAMENTO"
            title="Sequência de Pós-Venda"
            description="Não podemos simplesmente desaparecer após o fechamento. Criamos uma sequência de relacionamento que mantém o cliente conectado."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              { day: "15 dias", title: "Check-in Ativação", msg: "Olá! Tudo bem? Passando para saber se seu plano já foi ativado corretamente.", obj: "Demonstrar cuidado" },
              { day: "30 dias", title: "Experiência", msg: "Como está sendo sua experiência com o plano?", obj: "Coletar feedback" },
              { day: "45 dias", title: "Indicação", msg: "Se conhecer alguém que esteja procurando plano de saúde, será um prazer atender também.", obj: "Gerar novos leads" },
              { day: "90 dias", title: "Relacionamento", msg: "Mensagem de acompanhamento estratégico.", obj: "Fortalecer conexão" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-arkan-green/30 transition-all"
              >
                <div className="text-arkan-green font-display font-bold text-xl mb-2">{item.day}</div>
                <h4 className="font-bold mb-4 group-hover:text-arkan-green transition-colors">{item.title}</h4>
                <div className="text-xs italic text-white/40 mb-4 bg-white/5 p-3 rounded-xl">"{item.msg}"</div>
                <div className="pt-4 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest text-arkan-green/60">{item.obj}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Monitoramento de Resultados */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle="INDICADORES"
            title="Gestão Baseada em Dados"
            description="Sem números, não existe gestão. Precisamos medir cada etapa para identificar exatamente onde melhorar."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <BarChart3 className="text-arkan-green" /> Exemplo Real de Conversão
              </h3>
              <div className="space-y-4">
                <FunnelStep label="Leads Entram" value={100} color="bg-white/10" delay={0.1} />
                <FunnelStep label="Respondem" value={70} color="bg-white/20" delay={0.2} />
                <FunnelStep label="Enviam Dados" value={50} color="bg-arkan-green/20" delay={0.3} />
                <FunnelStep label="Recebem Cotação" value={40} color="bg-arkan-green/40" delay={0.4} />
                <FunnelStep label="Negociam" value={20} color="bg-arkan-green/60" delay={0.5} />
                <FunnelStep label="Fecham" value={12} color="bg-arkan-green" delay={0.6} />
              </div>
              <div className="mt-8 p-8 bg-arkan-green/10 rounded-3xl border border-arkan-green/20 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-arkan-green/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm text-white/40 uppercase tracking-widest mb-1 relative z-10">Taxa de Conversão Final</p>
                <p className="text-6xl font-black text-arkan-green relative z-10">12%</p>
                <p className="text-xs text-arkan-green/60 mt-2 font-bold relative z-10">Benchmark do Setor: 8%</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Leads por Canal", icon: Globe },
                { label: "Tempo de Resposta", icon: ClockIcon },
                { label: "Cotações Feitas", icon: Workflow },
                { label: "Propostas Enviadas", icon: FileText },
              ].map((item, i) => (
                <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:border-arkan-green/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-arkan-green/10 flex items-center justify-center text-arkan-green mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <span className="text-sm font-bold text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusão */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full neon-bg-glow pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <SectionHeading 
              subtitle="CONCLUSÃO"
              title="O Futuro da Corretora PHX"
              description={
                <>
                  <p>A organização do processo comercial permite transformar o atendimento em um sistema estruturado e previsível.</p>
                  <p>Com processos claros, automações estratégicas e acompanhamento constante dos indicadores, a corretora passa a ter mais organização, mais eficiência e mais vendas.</p>
                </>
              }
            />
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <NeonButton className="px-12 py-6 text-xl">
                IMPLEMENTAR AGORA <ArrowUpRight size={24} />
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-arkan-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-arkan-green rounded-lg flex items-center justify-center text-arkan-black">
              <Zap size={20} />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg tracking-tighter">ARKAN</h4>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">Marketing Empresarial</p>
            </div>
          </div>
          
          <div className="flex gap-12 text-sm font-bold text-white/40 uppercase tracking-widest">
            <span className="text-arkan-green">Inovação</span>
            <span className="text-white/20">•</span>
            <span className="text-arkan-green">Estratégia</span>
            <span className="text-white/20">•</span>
            <span className="text-arkan-green">Resultados</span>
          </div>

          <p className="text-xs text-white/20">
            © 2026 Arkan Marketing. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
