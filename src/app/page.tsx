import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* corner metadata, viewer-overlay style */}
      <span className="absolute top-6 left-6 font-mono text-xs text-muted tracking-wide">
        STUDY: shop-window
      </span>
      <span className="absolute top-6 right-6 font-mono text-xs text-muted tracking-wide">
        MODALITY: WEB
      </span>
      <span className="absolute bottom-6 left-6 font-mono text-xs text-muted/60 tracking-wide">
        PACS-NG/2.0
      </span>
      <span className="absolute bottom-6 right-6 font-mono text-xs text-muted/60 tracking-wide">
        1:1&nbsp;&nbsp;WL 400
      </span>

      <div className="text-center max-w-2xl space-y-6">
        <p className="font-mono text-sm text-signal tracking-widest uppercase">
          Open Source PACS
        </p>

        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          Your imaging. Your infrastructure.
          <br />
          No lock-in.
        </h1>

        <p className="text-muted text-lg max-w-xl mx-auto">
          Open source PACS for veterinary practices — choose your own viewer,
          own your own data.
        </p>

        <div className="pt-4">
          <Link
            href="/start"
            className="inline-block font-mono text-sm px-6 py-3 border border-signal text-signal hover:bg-signal hover:text-canvas transition-colors"
          >
            Let&apos;s get started →
          </Link>
        </div>

        {/* trust signal strip */}
        <div className="pt-12 flex items-center justify-center gap-6 font-mono text-xs text-muted tracking-wide">
          <span>EU-HOSTED</span>
          <span className="text-surface">/</span>
          <span>GDPR-ALIGNED</span>
          <span className="text-surface">/</span>
          <span>OPEN SOURCE</span>
        </div>
      </div>
    </main>
  );
}