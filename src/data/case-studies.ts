import cowbellHero from "@/assets/clients/cowbell-hero.jpeg";
import cowbellEffortless from "@/assets/clients/cowbell-effortless.jpeg";
import cowbellCreamy from "@/assets/clients/cowbell-creamy.jpeg";
import nilaxHero from "@/assets/clients/nilax-hero.jpeg";
import nilaxLifestyle from "@/assets/clients/nilax-lifestyle.jpeg";
import maltinaHero from "@/assets/clients/maltina-hero.jpeg";

export type CaseStudy = {
  slug: string;
  title: string;
  brand: string;
  industry: string;
  projectType: "Graphic Design" | "Photography" | "Graphic Design & Photography";
  campaignType: string;
  tags: string[];
  summary: string;
  hero: string;
  deliverables: { title: string; text: string }[];
  gallery: { src: string; caption: string }[];
  approach: {
    objective: string;
    direction: string;
    impact: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cowbell-chocolate",
    title: "Unlock A Smile — Cowbell Chocolate",
    brand: "Cowbell Chocolate Nigeria",
    industry: "FMCG · Food & Beverage",
    projectType: "Graphic Design & Photography",
    campaignType: "Social Media & Marketing Visuals",
    tags: ["Graphic Design", "Photography", "Marketing Campaign"],
    summary:
      "A warm, family-first visual campaign celebrating the everyday joy of Cowbell Chocolate — built around hero pack-shots, lifestyle moments and bold typographic posters for social and retail.",
    hero: cowbellHero,
    deliverables: [
      { title: "Hero Campaign Posters", text: "Flagship pack-shot key visuals for retail and digital activation." },
      { title: "Social Media Graphics", text: "Feed and story creatives optimised for Instagram, Facebook and X." },
      { title: "Lifestyle Photography", text: "Warm, in-the-moment imagery showing the product in real consumer life." },
      { title: "Marketing Visuals", text: "Above-the-line and below-the-line brand visuals for the launch quarter." },
    ],
    gallery: [
      { src: cowbellHero, caption: "Unlock A Smile — hero pack visual" },
      { src: cowbellEffortless, caption: "Effortless Goodness, Everyday — lifestyle still" },
      { src: cowbellCreamy, caption: "Creamy Goodness, Non-Stop — consumer moment" },
    ],
    approach: {
      objective:
        "Cowbell wanted to refresh their flagship chocolate drink with a campaign that felt warm, premium and unmistakably family-oriented across every touchpoint.",
      direction:
        "We anchored the system on rich chocolate browns and the brand's signature orange, paired with cinematic product photography and intimate lifestyle moments. The typography was kept bold and playful to land emotion fast on a small screen.",
      impact:
        "The new visual system gave Cowbell a coherent look across retail, social and OOH — lifting recall in feed and giving the sales team premium-feeling assets that finally matched the quality of the product.",
    },
  },
  {
    slug: "fbc-nilax",
    title: "FBC Nilax — Acne Control Launch",
    brand: "FBC Nilax",
    industry: "Beauty · Skincare",
    projectType: "Graphic Design & Photography",
    campaignType: "Product Launch Campaign",
    tags: ["Graphic Design", "Photography", "Product Launch"],
    summary:
      "A futuristic launch system for FBC Nilax Acne Control face wash — combining a hero CGI-style product visual with real lifestyle photography of customers experiencing the product.",
    hero: nilaxHero,
    deliverables: [
      { title: "Hero Product Visual", text: "Premium key visual with floating bubbles and brand-colour grid lighting." },
      { title: "Lifestyle Photography", text: "Authentic in-bathroom moments showing real consumers using the product." },
      { title: "Social Media Graphics", text: "Launch announcements, benefit cards and reel covers." },
      { title: "Marketing Campaign Visuals", text: "Adaptations for paid social, e-commerce and retailer assets." },
    ],
    gallery: [
      { src: nilaxHero, caption: "Nilax — hero product key visual" },
      { src: nilaxLifestyle, caption: "Real consumers, real reactions" },
    ],
    approach: {
      objective:
        "Launch FBC Nilax into a crowded skincare market with a visual identity that felt clinical, premium and emotionally desirable — without leaning on stock photography.",
      direction:
        "We built a deep-violet visual world for the hero product story, then balanced it with bright, naturally-lit lifestyle photography so the brand felt both scientific and human.",
      impact:
        "The dual-track system gave FBC a launch toolkit that performed equally well on premium retail placements and high-velocity social ads.",
    },
  },
  {
    slug: "maltina-classic",
    title: "Maltina Classic — Liquid Gold",
    brand: "Maltina",
    industry: "Beverage · Malt Drink",
    projectType: "Photography",
    campaignType: "Product Photography",
    tags: ["Photography", "Product Photography", "Marketing Campaign"],
    summary:
      "A bold, splash-driven product campaign for Maltina Classic — engineered to make the bottle feel cinematic, premium and unmistakably refreshing in every frame.",
    hero: maltinaHero,
    deliverables: [
      { title: "Hero Product Photography", text: "High-impact splash hero shot for OOH, digital and retail." },
      { title: "Marketing Campaign Visuals", text: "Adaptations for social feed, story and paid placements." },
      { title: "E-commerce Imagery", text: "Clean cut-outs and lifestyle variants for retailer listings." },
    ],
    gallery: [
      { src: maltinaHero, caption: "Maltina Classic — liquid gold splash" },
    ],
    approach: {
      objective:
        "Reposition the classic Maltina bottle as a premium, modern refreshment hero that could anchor a full marketing campaign.",
      direction:
        "We lit the bottle against a moody amber backdrop and built a controlled liquid splash around it to sell motion, freshness and craft in a single frame.",
      impact:
        "The hero frame became the campaign's centrepiece, scaling cleanly from billboard down to a 1:1 social tile without losing impact.",
    },
  },
];

export const featuredCaseStudy = caseStudies[0];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}