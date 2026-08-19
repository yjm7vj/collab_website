import { GitPullRequest, Mail, MapPin } from "lucide-react";

export const repoUrl = "https://github.com/yjm7vj/collab_ai";

export function Header() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>
            <Mail size={14} />
            hello@collab.ai
          </span>
          <a href={repoUrl} target="_blank" rel="noreferrer">
            <GitPullRequest size={14} />
            GitHub
          </a>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="/" aria-label="Collab.ai home">
          <span className="brand-mark">
            <img src="/favicon.svg" alt="" />
          </span>
          <strong>Collab.ai</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/how-it-works">How it works</a>
          <a href={repoUrl} target="_blank" rel="noreferrer">
            Repo
          </a>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Collab.ai</strong>
        <p>Multiplayer AI for shared rooms, shared decisions, and real files.</p>
      </div>
      <span>
        <MapPin size={16} />
        University of Virginia
      </span>
    </footer>
  );
}
