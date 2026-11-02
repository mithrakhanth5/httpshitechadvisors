import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCcw, 
  BarChart3, 
  ShieldAlert, 
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
    <section id="assessment" className="py-24 bg-slate-900/50 relative overflow-hidden border-y border-slate-800">
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Zap className="w-3.5 h-3.5 text-rose-500" />
            <span>Interactive Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise AI &amp; Cloud Maturity Benchmark
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Take 60 seconds to benchmark your technical readiness. Receive actionable guidance tailored to your architecture and growth bottlenecks.
          </p>
        </div>

        {/* Diagnostic Wizard Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          {!submitted ? (
            <div>
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="text-rose-400 font-semibold">QUESTION {step} OF 3</span>
                <div className="flex space-x-1.5">
                  {[1, 2, 3].map((num) => (
                    <span
                      key={num}
                      className={`h-1.5 w-8 rounded-full transition-all ${
                        step >= num ? 'bg-rose-500' : 'bg-slate-800'
                      }`}
                    ></span>
                  ))}
                </div>
              </div>

              {/* Step 1: Infrastructure */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center">
                    <Server className="w-5 h-5 mr-2 text-rose-400" />
                    1. What best describes your primary infrastructure foundation?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { id: 'legacy', label: 'Legacy & On-Premises', desc: 'Monolithic servers, manual deployments, siloed data storage.' },
                      { id: 'hybrid', label: 'Hybrid Cloud', desc: 'Mix of AWS/Azure and legacy databases with partial containerization.' },
                      { id: 'cloud-native', label: 'Modern Cloud-Native', desc: 'Kubernetes, multi-region cloud, automated CI/CD pipelines.' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setInfra(opt.id)}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          infra === opt.id
                            ? 'bg-rose-950/40 border-rose-500 shadow-md shadow-rose-950/40'
                            : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-semibold text-white text-sm">{opt.label}</div>
                        <div className="text-xs text-slate-400 mt-1 leading-relaxed">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: AI Workload Stage */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center">
                    <Cpu className="w-5 h-5 mr-2 text-rose-400" />
                    2. Where is your organization currently with AI deployment?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { id: 'pilot', label: 'Exploration & Pilots', desc: 'Testing consumer LLMs, prototyping internal chatbots and scripts.' },
                      { id: 'production', label: 'Early Production Systems', desc: 'Few customer-facing AI features running with occasional downtime.' },
                      { id: 'scaled', label: 'Scaled Mission-Critical', desc: 'High-frequency model inference integrated into core revenue workflows.' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setAiStage(opt.id)}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          aiStage === opt.id
                            ? 'bg-rose-950/40 border-rose-500 shadow-md shadow-rose-950/40'
                            : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-semibold text-white text-sm">{opt.label}</div>
                        <div className="text-xs text-slate-400 mt-1 leading-relaxed">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Primary Bottleneck */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-rose-400" />
                    3. What is the single biggest impediment holding your team back?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { id: 'talent', label: 'Specialized Senior Talent Deficit', desc: 'Struggling to recruit elite cloud, security, and AI system architects.' },
                      { id: 'architecture', label: 'Architecture Scale & Latency', desc: 'Systems buckle under high traffic spikes or require slow manual fixes.' },
                      { id: 'security', label: 'Data Security & Compliance', desc: 'Strict regulatory requirements (HIPAA, SOC2, M&A) freezing development.' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setBottleneck(opt.id)}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          bottleneck === opt.id
                            ? 'bg-rose-950/40 border-rose-500 shadow-md shadow-rose-950/40'
                            : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-semibold text-white text-sm">{opt.label}</div>
                        <div className="text-xs text-slate-400 mt-1 leading-relaxed">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Stepper Controls */}
              <div className="mt-8 flex justify-between items-center pt-4 border-t border-slate-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                  >
                    Back
                  </button>
                ) : <div></div>}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 shadow-lg shadow-rose-950/40 flex items-center"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="px-7 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 shadow-lg shadow-rose-900/40 flex items-center"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span>Generate Diagnostic Assessment</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-400">
                    DIAGNOSTIC REPORT
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {result.tier}
                  </h3>
                </div>
                <div className="flex items-center space-x-3 bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-800">
                  <BarChart3 className="w-5 h-5 text-rose-500" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">READINESS SCORE</div>
                    <div className="text-xl font-black text-white">{result.score} / 100</div>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {result.summary}
              </p>

              {/* Recommended Action Steps */}
              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400 flex items-center">
                  <ShieldAlert className="w-4 h-4 text-amber-400 mr-2" />
                  Hitech Advisory Recommended Strategic Milestones
                </div>
                <div className="space-y-2">
                  {result.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="flex items-center text-xs font-semibold text-slate-400 hover:text-white"
                >
                  <RefreshCcw className="w-3.5 h-3.5 mr-1.5" />
                  <span>Restart Benchmark</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Diagnostic Assessment Review (${result.tier})`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 shadow-lg shadow-rose-950/50"
                >
                  <span>Review Diagnostic with a Hitech Principal Advisor</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
