import React, { useState, useEffect } from 'react';

const HOME = {
  eyebrow: "GummyGum Masterclass",
  category: "LEADERSHIP & PSYCHOLOGICAL AGENCY",
  title: "Ownership Deep Dive",
  sub: "Accountability, Agency & Execution",
  description: "Unpack why ownership vanishes in growing teams, how psychological agency functions, and how to build RACI structures that drive single-threaded accountability.",
  cta: "Start Experience",
  specs: ["⏱ 15–20 Mins", "💎 5 Core Modules", "👥 Leadership / All Teams"],
  outcomes: [
    { title: "Psychological Agency", desc: "Understand the 3 core pillars that create felt psychological ownership." },
    { title: "Diffusion Prevention", desc: "Eliminate bystander dynamics where shared responsibility leads to inaction." },
    { title: "RACI Framework", desc: "Master single-threaded accountability structures across project lifecycles." }
  ]
};

const INTRO_LINES = [
  { text: "Everyone demands an ‘owner mindset.’" },
  { text: "Yet few organizations define what that means structurally in daily decision-making." },
  { text: "True ownership is not an inherent personality trait. It is a psychological state created by environment, clarity, and authority." },
  { text: "Let's explore the research, psychological mechanics, and structural frameworks that build real accountability.", gold: true, cta: "Begin Deep Dive" }
];

const SECTIONS = [
  {
    title: "1. The Psychology of Ownership",
    cards: [
      {
        type: "define",
        concept: "Psychological Ownership",
        body: [
          "Psychological ownership is the feeling that a piece of work, a goal, or a product is 'mine' or 'ours'.",
          "When psychological ownership exists, individuals naturally take responsibility for outcomes, proactively solve unassigned problems, and hold higher standards without needing external pressure."
        ]
      },
      {
        type: "research",
        authors: "Pierce, Kostova, & Dirks",
        year: "2001",
        study: "The State of Psychological Ownership",
        body: [
          "Research shows psychological ownership rests on three core human needs:",
          "1. Efficacy & Control: The ability to alter outcomes through your own decisions.",
          "2. Self-Identity: Seeing your work as an extension of your own standards and craft.",
          "3. Having a Place: Feeling genuine security and belonging within the target area."
        ]
      },
      {
        type: "practice",
        scenario: "When a manager overrides every detail of a project, control drops to zero.",
        quote: "The moment someone loses control over their work, psychological ownership evaporates. They shift from 'owning' the project to simply executing someone else's instructions.",
        closing: "Autonomy is the fuel of psychological ownership."
      }
    ]
  },
  {
    title: "2. Diffusion of Responsibility",
    cards: [
      {
        type: "define",
        concept: "Bystander Effect in Teams",
        body: [
          "Diffusion of responsibility occurs when an objective is assigned to a group rather than an individual.",
          "Because everyone shares responsibility, no single person feels personally accountable for ensuring completion. When 'everyone owns it', nobody owns it."
        ]
      },
      {
        type: "research",
        authors: "Darley & Latané",
        year: "1968",
        study: "Bystander Intervention in Emergencies",
        body: [
          "Studies show that as team size increases, individual effort and felt responsibility systematically decrease unless single-threaded accountability is explicitly established."
        ]
      },
      {
        type: "practice",
        scenario: "A Slack message sent to #general: 'Can someone check the client report before 5 PM?'",
        quote: "Result: 12 people view it, 0 people check it. Everyone assumes one of the other 11 viewers will take care of it.",
        closing: "Direct, named ownership eliminates bystander inaction."
      }
    ]
  },
  {
    title: "3. The RACI Framework",
    cards: [
      {
        type: "framework",
        title: "The RACI Responsibility Matrix",
        items: [
          { label: "R — Responsible", desc: "The doer. The person who performs the work to complete the task." },
          { label: "A — Accountable", desc: "The single owner. The sole person with final decision power and total accountability." },
          { label: "C — Consulted", desc: "The advisor. Subject matter experts who provide input before decisions." },
          { label: "I — Informed", desc: "The spectator. People who are kept updated on progress after decisions." }
        ]
      },
      {
        type: "practice",
        scenario: "The Golden Rule of RACI",
        quote: "There can be multiple Responsible individuals, but there MUST be exactly ONE Accountable person per task.",
        closing: "Two Accountable names = Zero Accountable names."
      }
    ]
  },
  {
    title: "4. Single-Threaded Leadership",
    cards: [
      {
        type: "define",
        concept: "Single-Threaded Owners",
        body: [
          "Popularized by Amazon, single-threaded leadership means having one senior leader wake up every single day thinking about exactly one critical priority.",
          "Single-threaded owners aren't distracted by competing baseline operations. Their sole mission is driving that single initiative to completion."
        ]
      },
      {
        type: "checklist",
        title: "Evaluating Single-Threaded Ownership",
        variant: "high",
        items: [
          "Does this project have ONE named leader whose top success metric depends on it?",
          "Does that leader have authority to make key trade-off decisions without multi-layer approval?",
          "Are resources and budget directly attached to this owner?"
        ]
      }
    ]
  },
  {
    title: "5. Building a Culture of Agency",
    cards: [
      {
        type: "checklist",
        title: "Signs of Low Ownership Culture",
        variant: "low",
        items: [
          "Team members frequently say: 'That's not my job' or 'Nobody told me to do that'.",
          "Problems are reported to leadership without proposing solutions.",
          "Decisions constantly stall waiting for manager confirmation.",
          "Deadlines miss silently with zero advance notice."
        ]
      },
      {
        type: "checklist",
        title: "Signs of High Ownership Culture",
        variant: "high",
        items: [
          "Team members bring 'I recommend X because Y' instead of 'What should I do?'.",
          "Small fixes happen immediately without needing formal tickets or meetings.",
          "Clear post-mortems happen without finger-pointing when mistakes occur.",
          "Single-threaded owners track progress transparently."
        ]
      }
    ]
  }
];

const OUTRO = {
  titleWhite: "True Ownership",
  titleAccent: "Is Built, Not Asked For.",
  paras: [
    "You cannot simply demand ownership from your team. You must architect the environment where ownership makes sense.",
    "Give people genuine control over outcomes, assign single-threaded accountability, utilize RACI matrices, and reward proactive agency.",
    "When people feel trust, authority, and clear boundaries, true ownership becomes the default."
  ]
};

// Flatten cards into interactive steps
const screens = [{ kind: 'home' }];
INTRO_LINES.forEach(l => screens.push({ kind: 'introline', ...l }));

let cardCount = 0;
SECTIONS.forEach(sec => {
  sec.cards.forEach(c => {
    cardCount++;
    screens.push({
      kind: 'card',
      sectionLabel: sec.title,
      globalCardIdx: cardCount,
      card: c
    });
  });
});

const TOTAL_CARDS = cardCount;
screens.push({ kind: 'outro' });

export default function OwnershipExperience({ onBackToHub }) {
  const [current, setCurrent] = useState(0);
  const s = screens[current];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrent(c => Math.min(screens.length - 1, c + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrent(c => Math.max(0, c - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const go = (delta) => {
    setCurrent(c => Math.max(0, Math.min(screens.length - 1, c + delta)));
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-between py-4 px-3 sm:px-6 text-slate-900 bg-white selection:bg-purple-600 selection:text-white">
      
      {/* Main Content Stage */}
      <div className="w-full flex-1 flex flex-col items-center justify-center my-auto">
        {s.kind === 'home' && (
          <div className="w-full max-w-4xl p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xl shadow-slate-200/50 animate-fade-in flex flex-col gap-8 my-auto">
            
            {/* Top Badge & Header */}
            <div className="flex flex-col gap-3 text-left">
              <div className="inline-flex items-center gap-2 w-fit font-mono text-xs text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full uppercase tracking-widest font-semibold">
                <span>💎 {HOME.eyebrow}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                {HOME.title}
              </h1>
              <p className="text-lg sm:text-xl font-display font-semibold text-purple-900 italic">
                {HOME.sub}
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-700 font-body leading-relaxed max-w-3xl text-left border-l-3 border-purple-600 pl-4">
              {HOME.description}
            </p>

            {/* Outcomes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {HOME.outcomes.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col gap-1.5 shadow-sm hover:border-purple-300 transition-all">
                  <span className="font-display font-bold text-purple-800 text-sm">{item.title}</span>
                  <span className="font-body text-xs text-slate-600 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* CTA Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3 font-mono text-xs text-slate-600">
                {HOME.specs.map((spec, idx) => (
                  <span key={idx} className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                    {spec}
                  </span>
                ))}
              </div>
              <button
                onClick={() => go(1)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-semibold text-sm tracking-wide shadow-lg shadow-purple-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{HOME.cta}</span>
                <span>➔</span>
              </button>
            </div>

          </div>
        )}

        {s.kind === 'introline' && (
          <div className="w-full max-w-2xl p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl text-left space-y-6 animate-fade-in my-auto">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] text-amber-800 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
              <span>EXECUTIVE SUMMARY</span>
            </div>

            <p className={`text-lg sm:text-2xl font-display leading-relaxed ${s.gold ? 'text-purple-900 font-bold' : 'text-slate-800 font-medium'}`}>
              {s.text}
            </p>

            {s.cta && (
              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => go(1)}
                  className="px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  {s.cta} ➔
                </button>
              </div>
            )}
          </div>
        )}

        {s.kind === 'card' && (
          <div className="w-full max-w-3xl bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-slate-200/50 flex flex-col justify-between space-y-6 animate-fade-in my-auto">
            
            {s.card.type === 'define' && (
              <div className="space-y-5 text-left py-2">
                <span className="px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-mono font-bold uppercase tracking-wider">
                  DEFINITION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">{s.card.concept}</h3>
                <div className="space-y-3 text-base sm:text-lg text-slate-800 leading-relaxed font-body">
                  {s.card.body.map((p, idx) => <p key={idx}>{p}</p>)}
                </div>
              </div>
            )}

            {s.card.type === 'research' && (
              <div className="space-y-5 text-left py-2">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider">
                    RESEARCH INSIGHT
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-medium">{s.card.authors} ({s.card.year})</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight">{s.card.study}</h3>
                <div className="space-y-3 text-base sm:text-lg text-slate-800 leading-relaxed font-body">
                  {s.card.body.map((p, idx) => <p key={idx}>{p}</p>)}
                </div>
              </div>
            )}

            {s.card.type === 'practice' && (
              <div className="space-y-5 text-left py-2">
                <span className="px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-mono font-bold uppercase tracking-wider">
                  IN PRACTICE
                </span>
                <p className="text-base sm:text-lg text-slate-800 font-body">{s.card.scenario}</p>
                <div className="p-5 rounded-2xl bg-purple-50/80 border border-purple-200/80 text-purple-950 font-display font-semibold text-base sm:text-lg leading-relaxed shadow-xs">
                  "{s.card.quote}"
                </div>
                <div className="text-xs font-mono italic text-slate-500">{s.card.closing}</div>
              </div>
            )}

            {s.card.type === 'framework' && (
              <div className="space-y-5 text-left py-2">
                <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider">
                  FRAMEWORK
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight">{s.card.title}</h3>
                <div className="grid grid-cols-1 gap-3">
                  {s.card.items.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                      <span className="font-bold text-amber-800 text-xs font-mono uppercase tracking-wider">{item.label}</span>
                      <span className="text-xs sm:text-sm text-slate-800 font-body leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {s.card.type === 'checklist' && (
              <div className="space-y-5 text-left py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border ${
                  s.card.variant === 'low' ? 'bg-rose-100 border-rose-200 text-rose-800' : 'bg-emerald-100 border-emerald-200 text-emerald-800'
                }`}>
                  CHECKLIST
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight">{s.card.title}</h3>
                <div className="space-y-3">
                  {s.card.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-body leading-relaxed p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-base">{s.card.variant === 'low' ? '⚠️' : '✅'}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {s.kind === 'outro' && (
          <div className="w-full max-w-xl p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl text-center space-y-6 animate-fade-in my-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display">
              {OUTRO.titleWhite} <span className="text-purple-700">{OUTRO.titleAccent}</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-body">
              {OUTRO.paras.map((p, idx) => <p key={idx}>{p}</p>)}
            </div>
            <button
              onClick={onBackToHub}
              className="mt-4 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-semibold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
            >
              Return to Experience Hub
            </button>
          </div>
        )}
      </div>

      {/* Navigation Footer Controls (Hidden on Homepage) */}
      {s.kind !== 'home' && (
        <div className="w-full flex items-center justify-between shrink-0 pt-3 border-t border-slate-200 mt-2">
          <button
            onClick={() => go(-1)}
            disabled={current === 0}
            className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-200 cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
          >
            <span>←</span>
            <span>Previous</span>
          </button>

          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline font-medium">
            Use ← / → arrow keys to navigate
          </span>

          <button
            onClick={() => go(1)}
            disabled={current === screens.length - 1}
            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-display font-semibold tracking-wide cursor-pointer shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Next</span>
            <span>→</span>
          </button>
        </div>
      )}
    </div>
  );
}
