import type { Metadata } from "next";
import { ArrowRight, Building2, Check, UsersRound, Zap } from "lucide-react";
import { Footer, Header } from "../components/Chrome";

export const metadata: Metadata = {
  title: "Collab.ai Pricing",
  description:
    "Simple Collab.ai pricing tiers for individuals, teams, and enterprise organizations.",
};

const tiers = [
  {
    name: "Free",
    summary: "For trying Collab.ai with a small room or student project.",
    price: "$0",
    note: "Limited monthly credits",
    icon: Zap,
    features: [
      "Limited AI credit use",
      "1 shared room",
      "Up to 3 collaborators",
      "Basic shared agent chat",
      "Read-only file context",
    ],
  },
  {
    name: "Team",
    summary: "For small groups using Collab.ai on real shared work.",
    price: "$30/month",
    note: "Higher monthly credits",
    icon: UsersRound,
    featured: true,
    features: [
      "More AI credits per month",
      "Multiple shared rooms",
      "More collaborators per room",
      "Shared file and repo context",
      "Approval-gated write proposals",
      "Saved room history",
    ],
  },
  {
    name: "Enterprise",
    summary: "For organizations that need controls, scale, and support.",
    price: "$80/month",
    note: "Usage and support tailored to your team",
    icon: Building2,
    features: [
      "Custom AI credit limits",
      "Expanded rooms and collaborators",
      "Advanced approval policies",
      "Workspace-level controls",
      "Audit logs and activity history",
      "Priority onboarding and support",
    ],
  },
];

export default function Pricing() {
  return (
    <main>
      <Header />
      <section className="page-hero pricing-hero">
        <p className="eyebrow">Pricing</p>
        <h1>
          Start small.
          <br />
          <span>Scale with the room.</span>
        </h1>
        <p className="lede">
          Collab.ai pricing is built around credits, rooms, and collaboration
          controls. Begin with a limited free tier, then move up when your team
          needs more shared work and governance.
        </p>
      </section>

      <section className="pricing-grid" aria-label="Collab.ai pricing tiers">
        {tiers.map((tier) => {
          const Icon = tier.icon;

          return (
            <article
              className={tier.featured ? "pricing-card featured" : "pricing-card"}
              key={tier.name}
            >
              <div className="pricing-card-header">
                <Icon size={28} />
                <h2>{tier.name}</h2>
                <p>{tier.summary}</p>
              </div>
              <div className="price-line">
                <strong>{tier.price}</strong>
                <span>{tier.note}</span>
              </div>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a className="button secondary" href="/waitlist">
                Join waitlist
                <ArrowRight size={17} />
              </a>
            </article>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}
