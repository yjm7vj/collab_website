import type { Metadata } from "next";
import { BookOpen, GraduationCap, UsersRound } from "lucide-react";
import { Footer, Header } from "../components/Chrome";

export const metadata: Metadata = {
  title: "About Collab.ai",
  description:
    "Collab.ai is a University of Virginia student project focused on making AI collaboration safer and easier for groups.",
};

export default function About() {
  return (
    <main>
      <Header />
      <section className="page-hero">
        <p className="eyebrow">About the project</p>
        <h1>
          Making AI collaboration
          <br />
          <span>clear, shared, and accountable.</span>
        </h1>
        <p className="lede">
          Collab.ai helps groups work with one shared agent, one shared context,
          and clear approval before important changes happen.
        </p>
      </section>

      <section className="split-section">
        <div>
          <h2>Mission</h2>
          <p>
            The mission is to make group work with AI more transparent,
            accountable, and practical. Teams should be able to share context,
            make decisions together, and let an agent help with real documents
            or code without losing control of what changes.
          </p>
        </div>
        <div className="plain-card">
          <GraduationCap size={30} />
          <h3>University roots</h3>
          <p>
            Collab.ai was founded by two University of Virginia computer science
            students exploring how collaborative software changes when an AI
            agent joins the room.
          </p>
        </div>
      </section>

      <section className="values">
        <article>
          <UsersRound size={28} />
          <h3>Shared by default</h3>
          <p>Everyone in the room sees the same conversation, decisions, and agent activity.</p>
        </article>
        <article>
          <BookOpen size={28} />
          <h3>Plainly explainable</h3>
          <p>The product favors clear proposals and room-level approvals over hidden automation.</p>
        </article>
        <article>
          <GraduationCap size={28} />
          <h3>Built to learn</h3>
          <p>The project is small, direct, and research-minded: solve the hard coordination problem first.</p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
