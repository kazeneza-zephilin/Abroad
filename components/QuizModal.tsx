"use client";

import { useState } from "react";
import Link from "next/link";

type QuizStep = {
  id: string;
  question: string;
  options: string[];
};

const quizSteps: QuizStep[] = [
  {
    id: "destination",
    question: "Which country are you most interested in studying in?",
    options: ["Canada", "United Kingdom", "Germany", "Australia", "United States", "Not sure yet"],
  },
  {
    id: "level",
    question: "What is your current education level?",
    options: [
      "Completed secondary school (A-levels / equivalent)",
      "Completed a Bachelor's degree",
      "Completed a Master's degree",
      "Currently enrolled in university",
    ],
  },
  {
    id: "english",
    question: "What is your English proficiency level?",
    options: [
      "I have an IELTS / TOEFL score",
      "I have a Duolingo score",
      "English is my first language",
      "I have not taken an English test yet",
    ],
  },
  {
    id: "budget",
    question: "What is your approximate annual budget for tuition and living expenses?",
    options: [
      "Under $8,000",
      "$8,000 – $15,000",
      "$15,000 – $25,000",
      "Over $25,000",
      "I am looking for a fully-funded scholarship",
    ],
  },
  {
    id: "timeline",
    question: "When do you plan to start studying?",
    options: [
      "This year (2025)",
      "January 2026 intake",
      "September 2026 intake",
      "Not sure — still planning",
    ],
  },
  {
    id: "passport",
    question: "Do you currently have a valid passport?",
    options: ["Yes, it is valid for at least 2 more years", "Yes, but it expires soon", "No — I have not applied yet"],
  },
  {
    id: "rejection",
    question: "Have you ever had a visa application rejected?",
    options: ["No", "Yes — once", "Yes — more than once"],
  },
  {
    id: "contact",
    question: "How should we reach you with your results?",
    options: [],
  },
];

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentStep = quizSteps[step];
  const progress = ((step) / (quizSteps.length - 1)) * 100;
  const isContactStep = currentStep.id === "contact";

  function handleOption(option: string) {
    setAnswers((prev) => ({ ...prev, [currentStep.id]: option }));
    if (step < quizSteps.length - 1) {
      setTimeout(() => setStep((s) => s + 1), 300);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setStep(0);
    setAnswers({});
    setName("");
    setPhone("");
    setSubmitted(false);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 quiz-overlay"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl quiz-modal">
        {/* Header */}
        <div className="bg-primary px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-red-200 text-xs font-medium uppercase tracking-wider">
              Eligibility Check
            </p>
            <p className="text-white font-bold text-lg">
              {submitted ? "Your Results" : `Step ${step + 1} of ${quizSteps.length}`}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Close quiz"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div className="h-1 bg-red-100">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          {submitted ? (
            /* Results */
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Thanks, {name}. We have your profile.
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                Based on your answers, a consultant will review your profile and contact you within one business day with honest options — not a sales pitch.
              </p>
              <div className="bg-neutral-50 rounded-xl p-4 mb-6 text-left space-y-2">
                {Object.entries(answers).map(([key, value]) => (
                  <div key={key} className="flex gap-2 text-sm">
                    <span className="text-neutral-400 capitalize w-24 flex-shrink-0">{key}:</span>
                    <span className="text-neutral-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/250788000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Message Us on WhatsApp Now
                </a>
                <button onClick={handleClose} className="text-sm text-neutral-500 hover:text-neutral-700">
                  Close
                </button>
              </div>
            </div>
          ) : isContactStep ? (
            /* Contact form */
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {currentStep.question}
              </h3>
              <p className="text-sm text-neutral-500 mb-6">
                We will review your profile and send you personalised options within one business day.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="quiz-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Full name
                  </label>
                  <input
                    id="quiz-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="quiz-phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    WhatsApp number
                  </label>
                  <input
                    id="quiz-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+250 7XX XXX XXX"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary w-full text-base py-4">
                Get My Results
              </button>
              <p className="text-xs text-neutral-400 text-center mt-3">
                We do not share your information with third parties.
              </p>
            </form>
          ) : (
            /* Question + options */
            <>
              <h3 className="text-xl font-bold text-neutral-900 mb-6">
                {currentStep.question}
              </h3>
              <div className="space-y-3">
                {currentStep.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOption(option)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                      answers[currentStep.id] === option
                        ? "border-primary bg-red-50 text-primary"
                        : "border-neutral-200 text-neutral-700 hover:border-primary/50 hover:bg-red-50 hover:text-primary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Back button */}
              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-5 text-sm text-neutral-400 hover:text-neutral-600 flex items-center gap-1 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
