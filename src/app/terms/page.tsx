import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Digitinize",
  description: "The terms that govern your use of the Digitinize website and engagement of our video production and editing services.",
  alternates: { canonical: "https://digitinize.com/terms" },
};

export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 2026"
      intro="These terms govern your use of the Digitinize website and the engagement of our video production and editing services. By using our site or working with us, you agree to them."
      sections={[
        {
          heading: "Services",
          body: [
            "Digitinize provides video production and post-production services. The specific scope, deliverables, timelines, and fees for any engagement are defined in a separate proposal or statement of work agreed between you and Digitinize.",
          ],
        },
        {
          heading: "Quotes & payment",
          body: [
            "Quotes are valid for 30 days unless stated otherwise. Payment terms are set out in your proposal. Production projects are typically billed per project; editing engagements may be monthly.",
          ],
        },
        {
          heading: "Revisions & delivery",
          body: [
            "Revision rounds and turnaround times are defined in your agreement. Final deliverables are released on completion of the agreed payment milestones.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "On full payment, ownership of the final commissioned deliverables transfers to you, unless otherwise agreed. Digitinize retains the right to feature non-confidential work in its portfolio unless you request otherwise in writing.",
          ],
        },
        {
          heading: "Confidentiality",
          body: [
            "We treat your materials and project details as confidential and are happy to sign a mutual NDA. For white-label engagements, we never contact your clients or disclose our involvement.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "Our liability for any engagement is limited to the fees paid for that engagement. We are not liable for indirect or consequential losses.",
          ],
        },
      ]}
    />
  );
}
