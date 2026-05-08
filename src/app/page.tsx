"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "Company", href: "#company" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Relay Campus", href: "#relay-campus" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const heroStats = [
  { value: "1.2M+", label: "Signals Structured" },
  { value: "85K+", label: "Knowledge Assets Indexed" },
  { value: "<2s", label: "Average AI Response Layer" },
];

const companyPoints = [
  "Communication overload creates blind spots for students and teams.",
  "Critical updates disappear in endless chat streams.",
  "Academic documents remain scattered and unsearchable.",
  "Manual organization wastes hours that should be used for learning.",
];

const capabilityCards = [
  "AI Summarization",
  "Semantic Search",
  "Intelligent Document Processing",
  "Workflow Automation",
  "Communication Intelligence",
  "Knowledge Extraction",
  "AI Productivity Infrastructure",
];

const campusFeatureCards = [
  "AI Group Summaries",
  "Assignment Tracking",
  "Smart PDF Organization",
  "Placement Updates",
  "Daily Digests",
  "AI Search",
  "AI Study Assistant",
  "Productivity Dashboard",
];

const benefits = [
  "Never miss important updates",
  "Save hours of scrolling",
  "Centralize campus workflows",
  "Organize all academic resources",
  "AI-powered productivity",
  "Faster access to information",
];

const testimonials = [
  {
    name: "Ananya, CSE Student",
    quote:
      "Relay Campus turns 1000+ noisy chat messages into one clear action plan for my week.",
  },
  {
    name: "Rahul, Placement Coordinator",
    quote:
      "We now track placement notices and deadlines in one place without missing updates.",
  },
  {
    name: "Campus Tech Club Lead",
    quote:
      "The AI summaries and digests have become our default way to keep everyone aligned.",
  },
];

const faqs = [
  {
    q: "Is Relay Campus a WhatsApp replacement?",
    a: "No. Relay Campus is an AI productivity layer that organizes communication, documents, and workflows.",
  },
  {
    q: "Who can use Relay Campus?",
    a: "Students, placement teams, class groups, and campus communities can use it to structure academic communication.",
  },
  {
    q: "How fast are the AI summaries?",
    a: "Most summaries are generated in seconds, with smart priority highlights and action items.",
  },
  {
    q: "Can campuses deploy this at scale?",
    a: "Yes. Relay Labs is designed as infrastructure for growing campuses and modern digital communities.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.28em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold tracking-tight">Relay Labs</p>
          <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </div>
          <button className="rounded-full border border-slate-900/20 px-4 py-2 text-sm transition hover:border-blue-600/30 hover:bg-blue-600/10">
            Get Early Access
          </button>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden" id="hero">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-35" />
          <div className="pointer-events-none absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-blue-600/15 blur-[130px]" />
          <div className="pointer-events-none absolute right-12 top-12 h-56 w-56 rounded-full bg-slate-900/10 blur-[120px]" />

          <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-slate-900/5 px-4 py-1 text-xs uppercase tracking-[0.24em] text-slate-600"
              >
                AI Infrastructure Company
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
              >
                AI Infrastructure for Modern Communication.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
              >
                Relay Labs builds AI-powered infrastructure that transforms chaotic
                communication, scattered documents, and information overload into
                structured workflows and searchable knowledge systems.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                  Get Early Access
                </button>
                <button className="rounded-full border border-slate-900/20 bg-slate-900/5 px-6 py-3 text-sm font-medium transition hover:border-blue-600/30 hover:bg-blue-600/10">
                  Explore Infrastructure
                </button>
              </motion.div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="glass card-hover rounded-2xl px-4 py-5"
                  >
                    <p className="text-2xl font-semibold text-gradient">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

              <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="blue-glow glass relative rounded-3xl p-5"
            >
              <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
                <span>Relay Labs Intelligence Layer</span>
                <span>Live AI</span>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-blue-600/20 bg-blue-600/10 p-4">
                  <p className="text-xs text-blue-800/80">Workflow Intelligence</p>
                  <p className="mt-1 text-sm text-blue-900">
                    Signals unified from chat streams, docs, and updates into one
                    actionable knowledge graph.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-900/10 bg-slate-900/5 p-3 text-sm">
                    Message Intelligence
                  </div>
                  <div className="rounded-xl border border-slate-900/10 bg-slate-900/5 p-3 text-sm">
                    Semantic Search
                  </div>
                  <div className="rounded-xl border border-slate-900/10 bg-slate-900/5 p-3 text-sm">
                    Document Pipeline
                  </div>
                  <div className="rounded-xl border border-slate-900/10 bg-slate-900/5 p-3 text-sm">
                    AI Automations
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-900/10 bg-white p-4">
                  <p className="text-xs text-slate-500">Knowledge Extraction Engine</p>
                  <div className="mt-2 space-y-2 text-sm text-slate-600">
                    <p>Priority entities detected and mapped to workflows.</p>
                    <p>Cross-source context retrieval in natural language.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16" id="company">
          <SectionHeading
            eyebrow="About Relay Labs"
            title="Why Relay Labs exists"
            subtitle="Modern communication systems generate more information than people can process. Relay Labs exists to build the infrastructure that turns communication chaos into clarity."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {companyPoints.map((point) => (
              <div key={point} className="glass card-hover rounded-2xl p-6">
                <p className="text-sm leading-relaxed text-slate-700 md:text-base">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Vision</p>
              <p className="mt-2 text-sm text-slate-700">
                Build intelligent communication systems for the information age.
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Approach</p>
              <p className="mt-2 text-sm text-slate-700">
                AI-native infrastructure that structures messages, documents, and tasks.
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Long-Term</p>
              <p className="mt-2 text-sm text-slate-700">
                A product ecosystem powered by shared intelligence foundations.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16" id="capabilities">
          <SectionHeading
            eyebrow="Relay Labs Capabilities"
            title="Core AI systems that power intelligent communication"
          />
          <div className="grid gap-4 md:grid-cols-6">
            {capabilityCards.map((card, index) => (
              <motion.div
                key={card}
                whileHover={{ y: -4 }}
                className={`glass card-hover rounded-2xl p-5 ${
                  index % 3 === 0 ? "md:col-span-3" : "md:col-span-2"
                }`}
              >
                <p className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-500">
                  Capability {index + 1}
                </p>
                <p className="text-lg font-medium">{card}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="blue-glow glass rounded-3xl p-8 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Transition</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Introducing the first product built on Relay Labs infrastructure.
            </h3>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16" id="relay-campus">
          <SectionHeading
            eyebrow="Flagship Product"
            title="Relay Campus"
            subtitle="Relay Campus is an AI-powered campus productivity platform that transforms noisy student WhatsApp communication into organized academic workflows."
          />
          <div className="glass rounded-3xl p-6 md:p-8">
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              This is not a messaging app. Relay Campus is an intelligent AI layer on top
              of existing student communication systems, converting unstructured updates
              into searchable, actionable academic operations.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Relay Campus Features"
            title="Purpose-built for campus productivity workflows"
          />
          <div className="grid gap-4 md:grid-cols-6">
            {campusFeatureCards.map((item, index) => {
              const spanClass = index % 3 === 0 ? "md:col-span-3" : "md:col-span-2";
              return (
                <div
                  key={item}
                  className={`glass card-hover rounded-2xl p-5 ${spanClass}`}
                >
                  <p className="text-base font-medium">{item}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="How It Works"
            title="From noisy communication to intelligent execution"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Connect Campus Communication",
              "AI Structures Everything",
              "Access Intelligent Dashboards",
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass section-border relative rounded-2xl p-6"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                  Step {i + 1}
                </p>
                <p className="text-lg font-medium">{step}</p>
                <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-blue-300/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Dashboard Preview"
            title="A futuristic command center for student productivity"
          />
          <div className="blue-glow glass rounded-3xl p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4 md:col-span-2">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  AI Generated Summaries
                </p>
                <p className="mt-3 text-sm text-slate-700">
                  Daily class summaries with highlighted tasks, deadlines, and
                  resources.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4">
                WhatsApp-style Insights
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4">
                PDF Organizer
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4">
                Assignment Tracker
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4">
                Placement Updates
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4">
                AI Search
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4">
                Analytics Widgets
              </div>
              <div className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4 md:col-span-2">
                AI Recommendations + Calendar Integration
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading eyebrow="Benefits" title="Why students choose Relay Campus" />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="glass rounded-2xl p-5">
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading eyebrow="Testimonials" title="Loved by student communities" />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="glass card-hover rounded-2xl p-5">
                <p className="text-sm leading-relaxed text-slate-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.15em] text-slate-500">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16" id="pricing">
          <SectionHeading eyebrow="Pricing" title="Simple plans for every campus stage" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Student Free", price: "$0", bullets: "Core organization + summaries" },
              { name: "Student Pro", price: "$9/mo", bullets: "Advanced AI tools + insights" },
              { name: "Campus Admin", price: "Custom", bullets: "Institution-level infrastructure" },
            ].map((plan) => (
              <div key={plan.name} className="glass card-hover rounded-2xl p-6">
                <p className="text-sm text-slate-600">{plan.name}</p>
                <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
                <p className="mt-3 text-sm text-slate-600">{plan.bullets}</p>
                <button className="mt-6 w-full rounded-full border border-slate-900/20 bg-slate-900/5 py-2 text-sm transition hover:border-blue-600/30 hover:bg-blue-600/10">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16" id="faq">
          <SectionHeading eyebrow="FAQ" title="Everything you need to know" />
          <div className="space-y-3">
            {faqs.map((item, idx) => (
              <div key={item.q} className="glass rounded-2xl p-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span>{item.q}</span>
                  <span className="text-slate-500">{openFaq === idx ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pt-3 text-sm text-slate-600"
                    >
                      {item.a}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 pt-10">
          <div className="blue-glow glass rounded-3xl px-6 py-10 text-center md:px-12">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Final CTA
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Upgrade Campus Communication with AI.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                Join Waitlist
              </button>
              <button className="rounded-full border border-slate-900/25 px-6 py-3 text-sm transition hover:border-blue-600/30 hover:bg-blue-600/10">
                Request Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/10 bg-slate-100">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 text-sm text-slate-600 md:grid-cols-5">
          <p className="font-semibold text-slate-900">Relay Labs</p>
          <p>Products</p>
          <p>Company</p>
          <p>Contact / Socials</p>
          <p>Legal</p>
        </div>
      </footer>
    </div>
  );
}
