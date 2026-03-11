import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — I Can",
  description: "Privacy Policy for the I Can mobile application.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-accent">
            I Can: Track Your Performance
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Last updated: March 2026
          </p>
        </header>

        <div className="prose-policy space-y-10 text-text-secondary leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Introduction
            </h2>
            <p>
              I Can (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
              is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard your information when
              you use the I Can mobile application (&ldquo;the App&rdquo;).
            </p>
            <p className="mt-3">
              By using the App, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Information We Collect
            </h2>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">
              Account Information
            </h3>
            <p>When you create an account, we collect:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Email address</li>
              <li>Full name</li>
              <li>Age</li>
              <li>
                Country (detected from your device or provided by you)
              </li>
              <li>Sport selection</li>
            </ul>
            <p className="mt-3">
              If you sign in with Apple or Google, we receive your name and email
              address from those services. If you skip account creation, a
              temporary guest account is generated.
            </p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">
              Performance Data
            </h3>
            <p>When you use the App, we collect:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                Daily performance log entries (activity type, focus and effort
                levels, reflections, and answers to daily questions)
              </li>
              <li>Goals you create</li>
              <li>Your personal mantra</li>
              <li>Streak and consistency data</li>
            </ul>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">
              Subscription Information
            </h3>
            <p>If you subscribe to I Can Premium, we process:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                Transaction identifiers provided by Apple&apos;s StoreKit
                framework
              </li>
              <li>Subscription status and period</li>
            </ul>
            <p className="mt-3">
              We do not collect or store your payment card details. All payment
              processing is handled securely by Apple.
            </p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">
              Device Information
            </h3>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                Push notification device tokens (used solely to deliver
                notifications you have opted into)
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                Provide and maintain the App&apos;s core functionality
              </li>
              <li>
                Generate personalised AI coaching insights and performance
                reports based on your logged entries
              </li>
              <li>
                Track your performance streaks and progress toward goals
              </li>
              <li>
                Display your position on anonymised leaderboards (showing only
                your first name, sport, and country)
              </li>
              <li>
                Send push notifications (streak reminders, report readiness,
                motivational quotes) based on your preferences
              </li>
              <li>Improve and develop the App</li>
            </ul>
          </section>

          {/* AI Processing */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              AI Processing
            </h2>
            <p>
              Your daily performance log data is sent to OpenAI&apos;s API to
              generate coaching insights and performance reports. This data
              includes your activity type, ratings, reflections, goals, and
              sport. OpenAI processes this data in accordance with their API data
              usage policy, which states that API inputs and outputs are not used
              to train their models.
            </p>
            <p className="mt-3">
              We do not send your email address, password, or payment information
              to OpenAI.
            </p>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Data Storage and Security
            </h2>
            <p>
              Your data is stored on secure, encrypted servers. We use
              industry-standard security measures to protect your information,
              including:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Encrypted passwords (bcrypt hashing)</li>
              <li>
                JWT-based authentication with short-lived access tokens
              </li>
              <li>HTTPS encryption for all data in transit</li>
              <li>Rate limiting to prevent abuse</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Data Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties.
            </p>
            <p className="mt-3">
              We share data only with the following service providers, strictly
              for the purpose of operating the App:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                <span className="text-white font-medium">OpenAI</span> — to
                generate AI coaching insights (performance data only)
              </li>
              <li>
                <span className="text-white font-medium">Apple</span> — for
                authentication (Sign in with Apple) and subscription processing
              </li>
              <li>
                <span className="text-white font-medium">Google</span> — for
                authentication (Sign in with Google), if you choose this option
              </li>
              <li>
                <span className="text-white font-medium">Neon</span> — database
                hosting provider
              </li>
              <li>
                <span className="text-white font-medium">Render</span> — backend
                server hosting provider
              </li>
            </ul>
          </section>

          {/* Leaderboards */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Leaderboards
            </h2>
            <p>
              If you appear on a leaderboard, only your first name, sport,
              country, and streak are visible to other users. Your email, age,
              reflections, and performance details are never shown publicly.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Access your personal data through the App</li>
              <li>
                Update your profile information, mantra, and goals at any time
              </li>
              <li>
                Delete your account and all associated data by contacting us
              </li>
              <li>
                Opt out of push notifications through your device settings or by
                setting notification frequency to 0
              </li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              The App is intended for users aged 13 and older. We do not
              knowingly collect personal information from children under 13. If
              you believe we have inadvertently collected such information,
              please contact us so we can promptly delete it.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Data Retention
            </h2>
            <p>
              We retain your data for as long as your account is active. If you
              request account deletion, we will delete your personal data within
              30 days, except where we are required by law to retain it.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new policy within
              the App or on our website. Your continued use of the App after
              changes are posted constitutes your acceptance of the updated
              policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to
              exercise your data rights, please contact us at:
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
