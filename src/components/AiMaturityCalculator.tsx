import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCcw, 
  BarChart3, 
  Sparkles,
  Server,
  Cpu,
  Users
} from 'lucide-react';

interface AiMaturityCalculatorProps {
  onOpenConsultation: (initialTopic?: string) => void;
}

export const AiMaturityCalculator: React.FC<AiMaturityCalculatorProps> = ({ onOpenConsultation }) => {
  const [step, setStep] = useState<number>(1);
  const [infra, setInfra] = useState<string>('hybrid');
  const [aiStage, setAiStage] = useState<string>('pilot');
  const [bottleneck, setBottleneck] = useState<string>('talent');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Calculate score and recommendation
  const calculateResult = () => {
    let score = 50;
    if (infra === 'cloud-native') score += 20;
    if (infra === 'hybrid') score += 10;
    if (infra === 'legacy') score -= 10;

    if (aiStage === 'scaled') score += 25;
    if (aiStage === 'production') score += 15;
    if (aiStage === 'pilot') score += 5;

    let tier = 'Stage 2: Pilot & Fragmented Architecture';
    let summary = 'Your organization has validated promising AI concepts, but fragmentation in infrastructure and data pipelines creates reliability and security friction.';
    let recommendations = [
      'Establish a unified zero-trust orchestration layer across models and datasets.',
      'Deploy containerized GPU/compute autoscaling to cap unexpected inferencing bills.',
      'Embed a dedicated senior AI architect to establish production CI/CD and verification gates.',
    ];

    if (score >= 80) {
      tier = 'Stage 4: Autonomous Scaled Enterprise';
      summary = 'High operational capability. Your primary upside is multi-region latency optimization, sovereign edge deployment, and proprietary IP creation.';
      recommendations = [
        'Deploy edge inference for sub-50ms latency in critical operational nodes.',
        'Implement automated governance for continuous compliance (SOC2/HIPAA/EU AI Act).',
        'Explore proprietary fine-tuning pipelines to build enterprise defensibility.',
      ];
    } else if (score <= 45) {
      tier = 'Stage 1: Legacy Foundational Tech Debt';
      summary = 'Your systems are bottlenecked by legacy on-prem backbones or siloed databases, preventing scalable AI deployment.';
      recommendations = [
        'Execute a cloud modernization roadmap before introducing complex machine learning.',
        'Consolidate identity management (Okta/Entra ID) and secure telemetry.',
        'Engage fractional tech leadership to prioritize low-risk, high-ROI automations.',
      ];
    }

    return { score, tier, summary, recommendations };
  };

  const result = calculateResult();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0B1F33] tracking-tight font-serif">
            Benchmark your AI &amp; Cloud maturity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Take 60 seconds to benchmark your enterprise architecture against Pacific Northwest technology peers. Receive immediate architectural recommendations.
          </p>
        </motion.div>

        {/* Assessment Card */}
        <div className="p-6 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={`form-step-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Stepper Progress */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Step {step} of 3
                  </span>
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((s) => (
                      <span
                        key={s}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          s === step
                            ? 'w-8 bg-[#D2232A]'
                            : s < step
                            ? 'w-2 bg-[#0B1F33]'
                            : 'w-2 bg-slate-300'
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>

                {/* Step 1: Infrastructure */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1F33] flex items-center font-sans">
                      <Server className="w-5 h-5 mr-2 text-[#D2232A]" />
                      1. What best describes your primary infrastructure foundation?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {[
                        { id: 'legacy', label: 'Legacy & On-Premises', desc: 'Monolithic servers, manual deployments, siloed data storage.' },
                        { id: 'hybrid', label: 'Hybrid Cloud', desc: 'Mix of AWS/Azure and legacy databases with partial containerization.' },
                        { id: 'cloud-native', label: 'Modern Cloud-Native', desc: 'Kubernetes, multi-region cloud, automated CI/CD pipelines.' },
                      ].map((opt) => (
                        <motion.button
                          key={opt.id}
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setInfra(opt.id)}
                          className={`p-5 rounded-xl text-left border transition-all ${
                            infra === opt.id
                              ? 'bg-white border-[#D2232A] shadow-md ring-2 ring-[#D2232A]/20'
                              : 'bg-white/70 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-bold text-[#0B1F33] text-sm">{opt.label}</div>
                          <div className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">{opt.desc}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: AI Workload Stage */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1F33] flex items-center font-sans">
                      <Cpu className="w-5 h-5 mr-2 text-[#D2232A]" />
                      2. Where is your organization currently with AI deployment?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {[
                        { id: 'pilot', label: 'Exploration & Pilots', desc: 'Testing consumer LLMs, prototyping internal chatbots and scripts.' },
                        { id: 'production', label: 'Early Production Systems', desc: 'Few customer-facing AI features running with occasional downtime.' },
                        { id: 'scaled', label: 'Scaled Mission-Critical', desc: 'High-frequency model inference integrated into core revenue workflows.' },
                      ].map((opt) => (
                        <motion.button
                          key={opt.id}
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setAiStage(opt.id)}
                          className={`p-5 rounded-xl text-left border transition-all ${
                            aiStage === opt.id
                              ? 'bg-white border-[#D2232A] shadow-md ring-2 ring-[#D2232A]/20'
                              : 'bg-white/70 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-bold text-[#0B1F33] text-sm">{opt.label}</div>
                          <div className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">{opt.desc}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Primary Bottleneck */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1F33] flex items-center font-sans">
                      <Users className="w-5 h-5 mr-2 text-[#D2232A]" />
                      3. What is the single biggest impediment holding your team back?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {[
                        { id: 'talent', label: 'Specialized Senior Talent Deficit', desc: 'Struggling to recruit elite cloud, security, and AI system architects.' },
                        { id: 'architecture', label: 'Architecture Scale & Latency', desc: 'Systems buckle under high traffic spikes or require slow manual fixes.' },
                        { id: 'security', label: 'Data Security & Compliance', desc: 'Strict regulatory requirements (HIPAA, SOC2, M&A) freezing development.' },
                      ].map((opt) => (
                        <motion.button
                          key={opt.id}
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setBottleneck(opt.id)}
                          className={`p-5 rounded-xl text-left border transition-all ${
                            bottleneck === opt.id
                              ? 'bg-white border-[#D2232A] shadow-md ring-2 ring-[#D2232A]/20'
                              : 'bg-white/70 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-bold text-[#0B1F33] text-sm">{opt.label}</div>
                          <div className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">{opt.desc}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stepper Controls */}
                <div className="mt-8 flex justify-between items-center pt-4 border-t border-slate-200">
                  {step > 1 ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-white text-xs font-bold transition"
                    >
                      Back
                    </motion.button>
                  ) : (
                    <div></div>
                  )}

                  {step < 3 ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#0B1F33] text-white hover:bg-[#D2232A] text-xs font-bold transition shadow-xs"
                    >
                      <span>Next Criterion</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setSubmitted(true)}
                      className="inline-flex items-center px-7 py-3 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white text-xs font-bold transition shadow-md shadow-red-900/20"
                    >
                      <span>Generate Architectural Diagnosis</span>
                      <Zap className="w-3.5 h-3.5 ml-1.5" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Results View */
              <motion.div
                key="diagnostic-results"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D2232A] font-bold">
                      Executive Evaluation Output
                    </span>
                    <h3 className="text-2xl font-bold text-[#0B1F33] mt-1 font-serif">
                      {result.tier}
                    </h3>
                  </div>
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="flex items-baseline space-x-2 bg-white px-5 py-2.5 rounded-2xl border border-slate-200 shadow-xs"
                  >
                    <span className="text-xs text-slate-500 font-mono">Benchmark Score:</span>
                    <span className="text-3xl font-extrabold text-[#D2232A] font-serif">{result.score}</span>
                    <span className="text-xs text-slate-400">/100</span>
                  </motion.div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed font-normal">
                  {result.summary}
                </p>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#0B1F33] font-bold flex items-center">
                    <BarChart3 className="w-4 h-4 mr-2 text-[#D2232A]" />
                    <span>Immediate High-ROI Action Items</span>
                  </div>
                  <div className="space-y-2 pt-1">
                    {result.recommendations.map((rec, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="inline-flex items-center space-x-1.5 text-xs text-slate-600 hover:text-[#0B1F33] font-bold"
                  >
                    <RefreshCcw className="w-3.5 h-3.5" />
                    <span>Recalculate Assessment</span>
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onOpenConsultation(`Diagnostic Follow-up: ${result.tier}`)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white text-xs font-bold transition shadow-md shadow-red-900/20"
                  >
                    <span>Review Findings with a Senior Architect</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
