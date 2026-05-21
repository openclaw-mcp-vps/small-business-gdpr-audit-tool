export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          GDPR Audits for{" "}
          <span className="text-[#58a6ff]">Small Businesses</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Scan your website in minutes. Identify GDPR violations — missing cookie banners, privacy policies, and more — then fix them with our step-by-step remediation guides.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Your Audit — $14/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for the first scan. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Automated Scanning", desc: "Crawls your site for cookie banners, privacy policies, and data collection issues." },
            { title: "Severity Scores", desc: "Each violation is rated by risk level so you know what to fix first." },
            { title: "Remediation Guides", desc: "Step-by-step instructions and ready-to-use templates for every issue found." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited website scans",
              "Full GDPR violation reports",
              "Severity scoring per issue",
              "Privacy policy templates",
              "Cookie banner templates",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What does the GDPR audit check?",
              a: "We scan for missing cookie consent banners, absent or incomplete privacy policies, third-party trackers without disclosure, and insecure data collection forms."
            },
            {
              q: "Do I need technical knowledge to fix the issues?",
              a: "No. Every violation comes with a plain-language explanation and a step-by-step guide. We also provide copy-paste templates for privacy policies and cookie notices."
            },
            {
              q: "Is this tool only for EU businesses?",
              a: "GDPR applies to any business that processes data of EU residents, regardless of where the business is located. If you have EU visitors, you need to comply."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} GDPR Audit Tool. Not legal advice.
      </footer>
    </main>
  );
}
