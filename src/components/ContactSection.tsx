"use client";
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon as MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowUpIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

// FAQ Data
const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer full-stack web development, AI/ML solutions, mobile app development, and freelance consulting. I specialize in React, Next.js, Node.js, Python, and machine learning technologies."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website might take 1-2 weeks, while complex applications can take 2-3 months. I always provide detailed timelines during the initial consultation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! I work with clients worldwide. I'm experienced in remote collaboration and can accommodate different time zones. All communication is done in English."
  },
  {
    question: "What's your pricing structure?",
    answer: "I offer flexible pricing: hourly rates for smaller projects, fixed pricing for defined scopes, and retainer agreements for ongoing work. I provide detailed quotes after understanding your requirements."
  },
  {
    question: "Do you provide maintenance and support?",
    answer: "Absolutely! I offer ongoing maintenance, updates, and technical support for all projects. This includes bug fixes, feature updates, security patches, and performance optimization."
  },
  {
    question: "Can you help with existing projects?",
    answer: "Yes, I can help improve, debug, or add features to existing projects. I'm experienced in working with various codebases and can quickly understand and enhance your current systems."
  }
];

// Contact form data
const ContactSection = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFAQToggle = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
   await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);

    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    alert("Failed to send message. Try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      value: "katamonisricharan@gmail.com",
      link: "mailto:katamonisricharan@gmail.com",
      description: "I typically respond within 2 hours"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "India",
      link: "#",
      description: "Working remotely worldwide"
    },
    {
      icon: ClockIcon,
      title: "Response Time",
      value: "< 2 hours",
      link: "#",
      description: "Quick response guaranteed"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-transparent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,0.5),transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[url('/demon-pattern.svg')] bg-repeat opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6 text-center"
                >
                  <CheckIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-zinc-300">Thank you for reaching out. I'll get back to you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:border-[#FF00FF]/50 focus:outline-none focus:ring-1 focus:ring-[#FF00FF]/20 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:border-[#FF00FF]/50 focus:outline-none focus:ring-1 focus:ring-[#FF00FF]/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-lg text-white focus:border-[#FF00FF]/50 focus:outline-none focus:ring-1 focus:ring-[#FF00FF]/20 transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="web-development">Web Development</option>
                      <option value="ai-ml">AI/ML Project</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="freelance">Freelance Work</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:border-[#FF00FF]/50 focus:outline-none focus:ring-1 focus:ring-[#FF00FF]/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#00DDEB] to-[#FF00FF] text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(255,0,255,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <ArrowUpIcon className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-black/30 border border-zinc-800 rounded-lg hover:border-[#00DDEB]/50 hover:bg-black/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00DDEB]/20 to-[#FF00FF]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-[#00DDEB] group-hover:text-[#FF00FF] transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-[#00DDEB] font-medium">{info.value}</p>
                      <p className="text-sm text-zinc-400">{info.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/30 border border-zinc-800 rounded-lg overflow-hidden hover:border-[#00DDEB]/30 transition-colors duration-300"
              >
                <button
                  onClick={() => handleFAQToggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-black/50 transition-colors duration-300"
                >
                  <span className="font-medium text-white text-lg">{faq.question}</span>
                  {activeFAQ === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-[#00DDEB]" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-zinc-400" />
                  )}
                </button>
                {activeFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-zinc-800"
                  >
                    <p className="text-zinc-300 leading-relaxed pt-4 text-base">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default ContactSection; 