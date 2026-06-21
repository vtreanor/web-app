import Link from "next/link";

const viewers = [
  {
    name: "dcm4chee-arc UI",
    tag: "LIVE",
    description: "The open source PACS interface — browse studies, no install required.",
    href: "https://pacs-ui.techirl.eu",
    external: true,
  },
  {
    name: "OHIF Viewer",
    tag: "LIVE",
    description: "Lightweight, zero-install, browser-native DICOM viewer.",
    href: "https://ohif.techirl.eu",
    external: true,
  },
  {
    name: "Weasis",
    tag: "ADVANCED",
    description: "Our production viewer of choice — native app, full DICOM conformance.",
    href: "/technology#weasis",
    external: false,
  },
];

export default function Start() {
  return (
    <main className="relative min-h-[80vh] px-6 py-20">
      <span className="absolute top-6 left-6 font-mono text-xs text-muted tracking-wide">
        STUDY: viewer-select
      </span>
      <span className="absolute top-6 right-6 font-mono text-xs text-muted tracking-wide">
        MODALITY: WEB
      </span>

      <div className="max-w-5xl mx-auto text-center space-y-4 mb-16">
        <p className="font-mono text-sm text-signal tracking-widest uppercase">
          Choose a viewer
        </p>
        <h1 className="font-display text-3xl md:text-5xl font-bold">
          See it for yourself
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          No single vendor, no lock-in. Explore the same open source tools
          we run in production.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {viewers.map((viewer) => (
          <Link
            key={viewer.name}
            href={viewer.href}
            target={viewer.external ? "_blank" : undefined}
            rel={viewer.external ? "noopener noreferrer" : undefined}
            className="group border border-surface hover:border-signal bg-surface/50 p-6 flex flex-col justify-between transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-muted tracking-wide">
                  {viewer.tag}
                </span>
                <span className="font-mono text-xs text-signal opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
              <h2 className="font-display text-xl font-bold mb-2">
                {viewer.name}
              </h2>
              <p className="text-muted text-sm">{viewer.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}