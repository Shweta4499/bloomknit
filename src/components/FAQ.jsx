import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Orders are processed within 1–2 business days and delivered in 5–7 business days across India.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only ship within India. International shipping is coming soon!",
  },
  {
    question: "What is your return policy?",
    answer:
      "Returns are accepted within 7 days for damaged or incorrect items. Contact us with photos for assistance.",
  },
  {
    question: "Can I request a custom design?",
    answer:
      "Yes! We accept custom orders. Just share your idea via WhatsApp or our contact form.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, Credit/Debit Cards, Net Banking, and payments via Razorpay.",
  },
  {
    question: "How can I contact support?",
    answer: "Use our Contact page or WhatsApp. We typically respond within a few hours.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 py-20 ">
      <h2 className="text-3xl font-bold text-center mb-10">❓ Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm bg-yellow-50"
            >
            <button
              className="w-full flex justify-between items-center px-5 py-4 text-left"
              onClick={() => toggle(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>

            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
