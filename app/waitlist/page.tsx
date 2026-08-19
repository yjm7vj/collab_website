import type { Metadata } from "next";
import { Footer, Header } from "../components/Chrome";
import { WaitlistForm } from "./WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Collab.ai Waitlist",
  description:
    "Request updates about Collab.ai, a multiplayer AI room for shared agents and approval-gated work.",
};

export default function Waitlist() {
  return (
    <main>
      <Header />
      <section className="waitlist-page">
        <div className="waitlist-copy">
          <p className="eyebrow">Learn more</p>
          <h1>
            Join the Collab.ai
            <br />
            <span>waitlist.</span>
          </h1>
          <p className="lede">
            Tell us who you are and where you work or study. We will use this
            list to share product updates, early access opportunities, and
            research conversations.
          </p>
        </div>

        <WaitlistForm />
      </section>
      <Footer />
    </main>
  );
}
