import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — I Can",
  description: "Terms of Service for the I Can mobile application.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="I Can logo"
                width={36}
                height={36}
              />
              <span className="text-lg font-bold text-white">I Can</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="mt-2 text-lg text-accent">
            I Can: Track Your Performance
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Last updated: March 2026
          </p>
        </header>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the I Can mobile application
              (&ldquo;the App&rdquo; or &ldquo;Service&rdquo;), you agree to these
              Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, do not
              use the App.
            </p>
          </section>

          {/* 2. Description of Service */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Description of Service
            </h2>
            <p>
              I Can is a performance tracking and coaching app for athletes. It
              lets you:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Log daily performance (training, games, rest days)</li>
              <li>Set personal goals</li>
              <li>Use mental tools (e.g. breathing exercises)</li>
              <li>Receive AI coaching insights and performance reports</li>
              <li>Compete on anonymised leaderboards by streak</li>
            </ul>
            <p className="mt-3">
              Some features require a paid subscription (&ldquo;I Can
              Premium&rdquo;).
            </p>
          </section>

          {/* 3. Account Requirements */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Account Requirements
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>You must be at least 13 years old to use the App.</li>
              <li>
                You must provide accurate information and keep it up to date.
              </li>
              <li>
                You are responsible for all activity under your account and for
                keeping your password (if applicable) secure.
              </li>
              <li>
                A guest account may be used to try the App, but a full account is
                required to subscribe and restore purchases.
              </li>
            </ul>
          </section>

          {/* 4. Subscription and Payment */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Subscription and Payment
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                I Can Premium is a paid subscription offered through
                Apple&apos;s App Store.
              </li>
              <li>
                Payment is processed by Apple. Refund requests must be made
                through Apple.
              </li>
              <li>
                Subscription auto-renews unless you cancel at least 24 hours
                before the end of the current period. You can manage and cancel
                in your device&apos;s Subscription settings.
              </li>
              <li>
                A free trial may be offered. If you do not cancel before it ends,
                you will be charged for the next subscription period.
              </li>
              <li>
                Prices may change. Any change will apply to future renewals after
                you have been notified.
              </li>
            </ul>
          </section>

          {/* 5. Acceptable Use */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Use the App for any illegal purpose or in violation of any laws</li>
              <li>Share false, misleading, or offensive content</li>
              <li>Attempt to access other users&apos; accounts or data</li>
              <li>
                Use bots, scrapers, or other automated tools to access or abuse
                the Service
              </li>
              <li>
                Reverse engineer, decompile, or attempt to extract the
                App&apos;s source code
              </li>
              <li>
                Resell, sublicense, or otherwise commercially exploit the App or
                its content
              </li>
              <li>Interfere with or disrupt the App, servers, or networks</li>
            </ul>
            <p className="mt-3">
              We may suspend or terminate your account if you breach these Terms.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Intellectual Property
            </h2>
            <p>
              The App, including its design, text, graphics, layout, and
              software, is owned by I Can or its licensors and is protected by
              copyright and other intellectual property rights. You may not copy,
              modify, or distribute any part of the App without our prior written
              consent.
            </p>
          </section>

          {/* 7. AI-Generated Content */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. AI-Generated Content
            </h2>
            <p>
              AI coaching insights and reports are generated from your
              performance data and may be inaccurate or incomplete. They are for
              guidance only and do not replace professional medical,
              psychological, or coaching advice. Use them at your own discretion.
            </p>
          </section>

          {/* 8. Disclaimer of Warranties */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Disclaimer of Warranties
            </h2>
            <p>
              The App is provided &ldquo;as is&rdquo; and &ldquo;as
              available,&rdquo; without warranties of any kind, express or
              implied, including but not limited to fitness for a particular
              purpose, accuracy, reliability, or availability. We do not
              guarantee that the App will be error-free or uninterrupted.
            </p>
          </section>

          {/* 9. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, I Can and its affiliates,
              directors, employees, and agents shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including loss of profits, data, or goodwill, arising from:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Your use or inability to use the App</li>
              <li>Any unauthorised access to your data</li>
              <li>Any third-party conduct or content</li>
              <li>Any bugs, viruses, or other harmful components</li>
            </ul>
            <p className="mt-3">
              Our total liability to you for any claims arising from these
              Terms or the App shall not exceed the amount you paid us in the
              twelve (12) months before the claim.
            </p>
          </section>

          {/* 10. Indemnification */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless I Can and its
              affiliates, directors, employees, and agents from any claims,
              losses, damages, or expenses (including reasonable legal fees)
              arising from your use of the App, your breach of these Terms, or
              your violation of any third-party rights.
            </p>
          </section>

          {/* 11. Termination */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Termination
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                You may stop using the App and delete your account at any time.
              </li>
              <li>
                We may suspend or terminate your access with or without notice if
                you breach these Terms or for other operational or legal
                reasons.
              </li>
              <li>
                On termination, your right to use the App ends, but provisions
                that by their nature should survive (including Sections 6–10)
                will remain in effect.
              </li>
            </ul>
          </section>

          {/* 12. Changes to the Service and Terms */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Changes to the Service and Terms
            </h2>
            <p>
              We may change the App, its features, or these Terms at any time.
              Material changes to the Terms will be communicated through the App
              or our website. Continued use of the App after the changes take
              effect means you accept the updated Terms.
            </p>
          </section>

          {/* 13. Governing Law */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              13. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of England and Wales, without
              regard to conflict of law principles. Any disputes shall be
              resolved in the courts of that jurisdiction.
            </p>
          </section>

          {/* 14. Severability */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              14. Severability
            </h2>
            <p>
              If any part of these Terms is found to be unenforceable, the rest
              of the Terms remain in effect.
            </p>
          </section>

          {/* 15. Entire Agreement */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              15. Entire Agreement
            </h2>
            <p>
              These Terms, together with our{" "}
              <Link href="/privacy" className="text-accent hover:text-accent-highlight transition-colors">
                Privacy Policy
              </Link>{" "}
              and any other referenced policies, constitute the entire agreement
              between you and I Can regarding the App and replace any prior
              agreements.
            </p>
          </section>

          {/* 16. Contact */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              16. Contact
            </h2>
            <p>
              For questions about these Terms, contact us at:
            </p>
            <p className="mt-3">
              Email:{" "}
              <a
                href="mailto:contact@alsancar.co.uk"
                className="text-accent hover:text-accent-highlight transition-colors"
              >
                contact@alsancar.co.uk
              </a>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
