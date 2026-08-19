import type { Metadata } from "next";
import {
  ArrowRight,
  FileCode2,
  MessageSquare,
  ShieldCheck,
  Vote,
  Workflow,
} from "lucide-react";
import { Footer, Header } from "./components/Chrome";

export const metadata: Metadata = {
  title: "Collab.ai | Multiplayer AI Rooms",
  description:
    "A simple introduction to Collab.ai, the multiplayer AI room for shared agents, shared files, and approval-gated writes.",
};

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Multiplayer AI for shared work</p>
          <h1>
            One room.
            <br />
            <span>One agent.</span>
          </h1>
          <p className="lede">
            Collab.ai lets several people talk with the same AI agent in one
            shared conversation. The agent understands who said what, works on
            shared files, and asks the room to approve important writes before
            they happen.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/waitlist">
              <ArrowRight size={18} />
              Learn more
            </a>
            <a className="button secondary" href="/how-it-works">
              See basics
            </a>
          </div>
        </div>

        <div className="product-visual" aria-label="Collab.ai shared room illustration">
          <div className="room-panel">
            <div className="room-header">
              <span>room: launch-docs</span>
              <span className="status-dot">live</span>
            </div>
            <div className="messages">
              <p>
                <b>Ari:</b> Can we tighten the intro?
              </p>
              <p>
                <b>Mina:</b> Also check the README examples.
              </p>
              <p className="agent">
                <b>Agent:</b> I can update both. Proposal ready.
              </p>
            </div>
            <div className="vote-box">
              <Vote size={24} />
              <div>
                <strong>Write proposal</strong>
                <span>2 approvals needed before editing files</span>
              </div>
            </div>
          </div>
          <div className="file-card">
            <FileCode2 size={26} />
            <span>README.md</span>
          </div>
        </div>
      </section>

      <section className="intro" id="why">
        <h2>How Collab.ai stands out</h2>
        <p>
          It is built around the hard part of group AI work: many humans can
          speak at once, while one agent still has to keep a single reliable
          turn and one shared truth.
        </p>
      </section>

      <section className="features" id="how" aria-label="Core capabilities">
        <article>
          <MessageSquare size={28} />
          <h3>Shared conversation</h3>
          <p>
            Messages are attributed by speaker, then folded into one room-level
            exchange the agent can understand.
          </p>
        </article>
        <article>
          <ShieldCheck size={28} />
          <h3>Human approval</h3>
          <p>
            Document and workspace writes become proposals first, with voting
            policies the room can configure.
          </p>
        </article>
        <article>
          <Workflow size={28} />
          <h3>Durable turns</h3>
          <p>
            Long votes resume cleanly because turn state is stored instead of
            waiting on a live request.
          </p>
        </article>
      </section>

      <section className="details">
        <div>
          <h2>Built for real files</h2>
          <p>
            Rooms can work with a shared document, a local folder through the
            browser, or a GitHub repository. Reads are designed to stay useful,
            while writes remain visible and governed.
          </p>
        </div>
        <a className="text-link" href="/waitlist">
          Learn more
          <ArrowRight size={17} />
        </a>
      </section>
      <Footer />
    </main>
  );
}
