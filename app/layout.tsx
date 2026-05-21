import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Audit Tool – GDPR Compliance for Small Businesses",
  description: "Automated GDPR compliance audits for small businesses. Scan your website, identify violations, and get step-by-step remediation guides."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="11c0875b-efd6-4b30-be07-825c470ccda0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
