import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Placing an order is simple! Add your favorite items to your bag, click 'Proceed to Checkout', and you'll be redirected to WhatsApp with your order details pre-filled. We'll then confirm availability and provide payment details."
  },
  {
    question: "What are your delivery options?",
    answer: "We offer doorstep delivery across Nairobi and shipping throughout Kenya. Standard delivery within Nairobi takes 1-2 business days, while outside Nairobi typically takes 2-3 business days."
  },
  {
    question: "Do you have a physical store?",
    answer: "Currently, we operate exclusively online to bring you the best prices and unique designs. However, we do host occasional pop-up events in Nairobi—follow us on Instagram to stay updated!"
  },
  {
    question: "How do I know my size?",
    answer: "We have a comprehensive Size Guide available on every product page. If you're still unsure, feel free to chat with us via the live chat or WhatsApp for personalized recommendations."
  },
  {
    question: "What is your return policy?",
    answer: "We want you to love your Wave Kenya pieces. We accept returns or exchanges within 7 days of delivery, provided the items are unworn and in their original packaging with tags attached."
  },
  {
    question: "Can I customize an outfit?",
    answer: "Many of our signature pieces can be tailored to your specific measurements. Reach out to us via WhatsApp to discuss customization options for our luxury collection."
  }
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground font-light max-w-lg mx-auto">
              Everything you need to know about our modern African luxury collection, ordering process, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/40 px-6 rounded-lg bg-secondary/10"
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <div className="mt-20 text-center p-12 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="font-serif text-2xl mb-2">Still have questions?</h3>
            <p className="text-muted-foreground font-light mb-8">
              We're here to help! Reach out to us directly via WhatsApp or Phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/254759556794" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-none uppercase tracking-widest text-xs font-bold hover:bg-primary/90 transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a 
                href="tel:+254759556794"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-none uppercase tracking-widest text-xs font-bold hover:bg-primary/5 transition-colors"
              >
                Call Support
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
