"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Calendar } from "lucide-react";

const services = [
  "Corporate Video Production", "Commercial Video", "Brand Film", "Product Video",
  "Event Videography", "Video Editing", "Motion Graphics", "Color Grading",
  "White Label Editing", "YouTube Editing", "Short Form Content",
];

const inputClass =
  "w-full bg-white rounded-xl px-4 py-3 text-[14px] text-[#0A0A0A] placeholder-[#a3a3a3] focus:outline-none focus:border-[#066766] transition-colors";
const inputStyle = { border: "1px solid var(--rule-2)" } as const;
const labelClass = "text-[11px] text-[#6b6b6b] uppercase tracking-widest font-semibold block mb-2";

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "", budget: "" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className="bg-aurora relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 dot-grid opacity-[0.3] pointer-events-none" />
      <div className="wrap relative z-10 pt-40 pb-24">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }} className="text-center mb-14">
          <p className="eyebrow mb-5">Get in Touch</p>
          <h1 className="text-[#0A0A0A] mb-5 mx-auto max-w-3xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1.0, fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}>
            Let&apos;s create something<br /><span className="grad">extraordinary.</span>
          </h1>
          <p className="lede max-w-xl mx-auto">Tell us about your project. We&apos;ll reply within 24 hours with a tailored plan.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-3xl p-12 text-center" style={{ border: "1px solid var(--rule)" }}>
                <div className="text-5xl mb-6">🎬</div>
                <h2 className="heading text-[#0A0A0A] mb-3">Message received.</h2>
                <p className="prose">We&apos;ll be in touch within 24 hours to schedule your discovery call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 space-y-5" style={{ border: "1px solid var(--rule)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Your Name *</label>
                    <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} style={inputStyle} placeholder="John Smith" />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} style={inputStyle} placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Company</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} style={inputStyle} placeholder="Your Company" />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} style={inputStyle} placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Service Required *</label>
                  <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputClass} style={inputStyle}>
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Budget Range</label>
                  <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputClass} style={inputStyle}>
                    <option value="">Select budget</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                    <option>$500 – $2,000/month (Editing)</option>
                    <option>$2,000 – $5,000/month (Editing)</option>
                    <option>$5,000+/month (Editing)</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Tell us about your project *</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} style={inputStyle} placeholder="Describe your goals, timeline, and any specific requirements…" />
                </div>
                <button type="submit" className="btn btn-solid w-full justify-center text-[15px] py-4">
                  <Send size={18} /> Send Message
                </button>
                <p className="micro text-center">We respond within 24 hours. No commitment required.</p>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="space-y-4">
            <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid var(--rule)" }}>
              <Calendar size={20} className="text-[#066766] mb-3" />
              <h3 className="font-bold text-[#0A0A0A] mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Book a Call Directly</h3>
              <p className="prose-sm mb-4">Schedule a 30-min discovery call at your convenience.</p>
              <a href="https://calendly.com/digitinize" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-xl text-[13px] font-semibold transition-all"
                style={{ background: "var(--teal-bg)", color: "var(--teal)", border: "1px solid rgba(6,103,102,0.15)" }}>
                Open Calendly →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-4" style={{ border: "1px solid var(--rule)" }}>
              <h3 className="font-bold text-[#0A0A0A]" style={{ fontFamily: "Montserrat, sans-serif" }}>Contact Info</h3>
              {[
                { icon: Mail,   label: "Email",    value: "hello@digitinize.com", href: "mailto:hello@digitinize.com" },
                { icon: Phone,  label: "WhatsApp", value: "+91 99999 99999",       href: "https://wa.me/919999999999" },
                { icon: MapPin, label: "Based in", value: "India · Serving Globally", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={16} className="text-[#066766] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="micro mb-0.5">{label}</p>
                    {href ? <a href={href} className="text-[14px] text-[#0A0A0A] hover:text-[#066766] transition-colors">{value}</a> : <p className="text-[14px] text-[#0A0A0A]">{value}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid var(--rule)" }}>
              <p className="eyebrow mb-3">Response Time</p>
              <div className="space-y-2.5">
                {[
                  { label: "Email", time: "< 24 hours" },
                  { label: "WhatsApp", time: "< 2 hours" },
                  { label: "Calendly", time: "Instant" },
                ].map(({ label, time }) => (
                  <div key={label} className="flex justify-between text-[13px]">
                    <span className="text-[#6b6b6b]">{label}</span>
                    <span className="text-[#0A0A0A] font-semibold">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
