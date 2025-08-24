import React, { useState } from "react";
import { GiAcorn } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// —— Fake, reusable sample data (non‑medical / general business) ——
const teamMembers = [
  {
    name: "Avery Brooks",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
    bio: `I lead branding and creative strategy across web, social, and print.\n\n— —\n\nI love turning fuzzy ideas into crisp visuals and customer moments. Outside of work: coffee tasting, indie films, and city photography.`,
    style: "border-blue-300 bg-blue-50 hover:shadow-blue-300/50",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=2400')",
  },
  {
    name: "Kai Morgan",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800",
    bio: `Organizer-in-chief. I coordinate timelines, budgets, and cross‑team communication so launches feel calm and predictable.\n\n— —\n\nI’m obsessed with color‑coded boards, crisp handoffs, and celebrating wins. Weekend hobbies: trail runs and crossword battles.`,
    style: "border-blue-300 bg-blue-50 hover:shadow-blue-300/50",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d1?q=80&w=2400')",
  },
  {
    name: "Remy Chen",
    role: "Full‑Stack Developer",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800",
    bio: `I build fast, accessible web apps with React on the front and Python/Node on the back.\n\n— —\n\nI care about performance, delightful micro‑interactions, and clean APIs. When not coding: mechanical keyboards and jazz piano.`,
    style: "border-blue-300 bg-blue-50 hover:shadow-blue-300/50",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400')",
  },
  {
    name: "Sloane Rivera",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800",
    bio: `Words with purpose. I plan editorial calendars, UX copy, and SEO that actually reads like a human wrote it.\n\n— —\n\nI love crisp headlines, helpful CTAs, and brand voice guides. Side quests: pottery and street food adventures.`,
    style: "border-blue-300 bg-blue-50 hover:shadow-blue-300/50",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=2400')",
  },
  {
    name: "Jules Patel",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1544005316-04ce1f3b5a57?q=80&w=800",
    bio: `Designing simple, elegant flows for complex problems.\n\n— —\n\nFigma fanatic, prototyping nerd, and accessibility advocate. Favorite things: microcopy, grids, and a good 8px rhythm.`,
    style: "border-blue-300 bg-blue-50 hover:shadow-blue-300/50",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1496302662116-45b4f9c8238a?q=80&w=2400')",
  },
  {
    name: "Riley Quinn",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800",
    bio: `I connect products to people with positioning, lifecycle campaigns, and analytics.\n\n— —\n\nAsk me about launch playbooks, UTM hygiene, and delightful onboarding emails. Off the clock: cycling and bouldering.`,
    style: "border-blue-300 bg-blue-50 hover:shadow-blue-300/50",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2400')",
  },
];

// —— Component ——
export default function OurTeamBlueTemplate() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-blue-900 text-blue-50">
      {/* Hero / Banner */}
      <div
        className="w-full border-b-4 h-80 md:h-96 bg-cover bg-center relative shadow-2xl"
        style={{
          backgroundImage:
            "url('https://rare-gallery.com/uploads/posts/349940-4k-wallpaper.jpg')",
          backgroundPosition: "center 70% ",
        }}
      >
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-full border-2 border-blue-300/80 bg-blue-800/60 backdrop-blur px-6 py-3 shadow-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Our Team
            </h1>
          </div>
        </div>
      </div>

      {/* Team grid */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20">
        <p className="text-blue-100/90 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Meet the people who plan, design, build, and launch your ideas. This is a
          reusable template—swap the names, roles, images, and bios to match any
          business or portfolio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((m, i) => (
            <motion.button
              key={m.name}
              onClick={() => setSelectedMember(m)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className={`text-left cursor-pointer rounded-3xl p-6 shadow-lg border-2 transition-all duration-300 ${m.style}`}
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-24 h-24 rounded-2xl object-cover shadow-md"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-blue-900">
                  {m.name}
                </h3>
                <p className="text-sm font-medium text-blue-700/80">
                  {m.role}
                </p>
              </div>
              <p className="mt-4 text-blue-900/80 line-clamp-3 bg-white/70 rounded-xl p-3">
                {m.bio.replaceAll("— —", "—")}
              </p>
            </motion.button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-blue-300 bg-blue-800/60 px-6 py-3 font-semibold hover:bg-blue-700/70 hover:shadow-lg transition"
          >
            Talk to our team
          </Link>
        </div>
      </section>

      {/* Modal: Expanded profile */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-blue-200"
              style={{
                backgroundImage: selectedMember.backgroundImage || undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-900/75 to-blue-900/90" />
              <div className="relative p-6 sm:p-10 text-blue-50">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-28 h-28 rounded-2xl object-cover border-4 border-white/80 shadow-lg"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-extrabold">
                      {selectedMember.name}
                    </h3>
                    <p className="text-blue-200 font-medium">{selectedMember.role}</p>
                  </div>
                </div>

                <div className="mt-6 max-h-72 overflow-y-auto rounded-2xl bg-white/90 p-4 text-blue-900 leading-7">
                  {selectedMember.bio.split("\n").map((line, idx) => (
                    <p key={idx} className="mb-3">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="rounded-xl px-5 py-2.5 font-semibold bg-white text-blue-900 border border-blue-200 hover:bg-blue-50"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    className="rounded-xl px-5 py-2.5 font-semibold bg-blue-200/90 text-blue-900 hover:bg-blue-200"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="text-center text-blue-200/80 pb-10">
        <p className="font-semibold tracking-wide">Built with care • Ready for any industry</p>
      </footer>
    </div>
  );
}
