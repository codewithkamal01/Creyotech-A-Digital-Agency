const responses = {
  website:
    "🌐 We design modern, high-performance websites optimized for speed, SEO, and conversions.",

  mobile:
    "📱 We build Android, iOS, and cross-platform mobile applications tailored to your business.",

  ai:
    "🤖 We create AI-powered assistants, automation systems, and intelligent business tools.",

  marketing:
    "📈 Our digital marketing services include SEO, GEO, PPC, branding, and social media growth.",

  automation:
    "⚙️ We automate repetitive workflows to save time and improve operational efficiency.",

  saas:
    "☁️ We design and develop scalable SaaS platforms for startups and enterprises.",

  pricing:
    "💰 Pricing depends on your project scope. We provide transparent quotations with milestone-based billing.",

  proposal:
    "📄 Click 'Request Proposal' anytime and our team will prepare a customized proposal for your business.",

  greeting:
    "👋 Hello! How can I help you today?",

  default:
    "I'm still learning 😊. Try asking about websites, AI, mobile apps, pricing, marketing, automation, or proposals.",
};

export function getBotReply(message) {
  const msg = message.toLowerCase();

  if (/hello|hi|hey/.test(msg)) return responses.greeting;

  if (/website|web/.test(msg)) return responses.website;

  if (/mobile|app|android|ios/.test(msg)) return responses.mobile;

  if (/ai|artificial/.test(msg)) return responses.ai;

  if (/marketing|seo|geo/.test(msg)) return responses.marketing;

  if (/automation/.test(msg)) return responses.automation;

  if (/saas|software/.test(msg)) return responses.saas;

  if (/price|pricing|cost|budget/.test(msg)) return responses.pricing;

  if (/proposal|quote/.test(msg)) return responses.proposal;

  return responses.default;
}