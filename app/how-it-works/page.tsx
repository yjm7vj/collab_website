import type { Metadata } from "next";
import {
  Bot,
  CheckCircle2,
  Database,
  FileCode2,
  MessageSquare,
  PauseCircle,
  UsersRound,
  Vote,
} from "lucide-react";
import { Footer, Header } from "../components/Chrome";

export const metadata: Metadata = {
  title: "How Collab.ai Works",
  description:
    "A plain-language guide to Collab.ai rooms, shared agent turns, voting, workspaces, and durable state.",
};

export default function HowItWorks() {
  return (
    <main>
      <Header />
      <section className="page-hero">
        <p className="eyebrow">How it works</p>
        <h1>
          A room talks.
          <br />
          <span>The agent coordinates.</span>
        </h1>
        <p className="lede">
          Collab.ai turns a busy group chat into one orderly AI turn at a time.
          It keeps track of who spoke, what the agent is doing, and which file
          changes need approval.
        </p>
      </section>

      <section className="diagram-section">
        <div className="section-heading">
          <h2>The basic flow</h2>
          <p>Several people can speak, but the agent still works from one clear queue.</p>
        </div>
        <div className="flow-diagram" aria-label="Room to agent flow diagram">
          <div className="flow-node">
            <UsersRound size={26} />
            <strong>People in a room</strong>
            <span>Ari, Mina, and Sam type at the same time.</span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">
            <MessageSquare size={26} />
            <strong>Tagged messages</strong>
            <span>Each message keeps the speaker name attached.</span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">
            <Bot size={26} />
            <strong>One agent turn</strong>
            <span>The AI answers the room and takes one action at a time.</span>
          </div>
        </div>
      </section>

      <section className="explain-grid">
        <article>
          <h3>1. Messages do not interrupt the agent</h3>
          <p>
            If someone types while the agent is already working, that message
            goes into an inbox. The agent picks it up on the next turn, so
            nothing gets lost or awkwardly split mid-response.
          </p>
        </article>
        <article>
          <h3>2. Risky actions become proposals</h3>
          <p>
            Reading a document can happen automatically. Changing a document,
            editing a file, or deleting a file can be gated behind a vote. The
            room sees what the agent wants to do before it happens.
          </p>
        </article>
        <article>
          <h3>3. Votes can take time</h3>
          <p>
            A vote may take minutes. Collab.ai stores the paused turn, returns
            control to the room, and resumes later when enough people approve or
            deny the proposal.
          </p>
        </article>
      </section>

      <section className="approval-section">
        <div>
          <h2>What approval looks like</h2>
          <p>
            Think of the agent like a teammate who can draft the change, but
            has to ask before touching shared work. The room can keep that rule
            strict, loosen it for trusted flows, or make the agent read-only.
          </p>
        </div>
        <div className="approval-card">
          <div className="proposal-line">
            <FileCode2 size={22} />
            <span>edit README.md</span>
          </div>
          <div className="vote-row">
            <span><CheckCircle2 size={18} /> Ari approved</span>
            <span><CheckCircle2 size={18} /> Mina approved</span>
            <span><PauseCircle size={18} /> Sam has not voted</span>
          </div>
          <div className="threshold">
            <Vote size={22} />
            <strong>Strict majority reached</strong>
          </div>
        </div>
      </section>

      <section className="architecture">
        <div className="section-heading">
          <h2>Under the hood</h2>
          <p>The technical architecture keeps the room state in one place.</p>
        </div>
        <div className="stack-diagram">
          <div className="stack-node">Browser room UI</div>
          <div className="stack-line" />
          <div className="stack-node">Cloudflare Worker</div>
          <div className="stack-line" />
          <div className="stack-node accent">Room Durable Object</div>
          <div className="stack-storage">
            <span><Database size={18} /> Transcript</span>
            <span><Database size={18} /> Members</span>
            <span><Database size={18} /> Votes</span>
            <span><Database size={18} /> Paused turns</span>
          </div>
          <div className="stack-sources">
            <span><Bot size={18} /> AI model</span>
            <span><FileCode2 size={18} /> Local folder</span>
            <span><FileCode2 size={18} /> Shared repository</span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
