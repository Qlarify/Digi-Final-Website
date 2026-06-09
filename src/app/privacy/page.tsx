import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Digitinize",
  description: "How Digitinize collects, uses, and protects the personal information you share with us.",
  alternates: { canonical: "https://digitinize.com/privacy" },
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 2026"
      intro="Digitinize respects your privacy. This policy explains what information we collect when you use our website or engage our services, how we use it, and the choices you have."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you submit an enquiry, book a discovery call, or download a resource, we collect the details you provide — typically your name, email, phone number, company, and project details.",
            "We also collect basic analytics data (pages visited, device, and approximate location) to understand how our site is used and improve it.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use your information to respond to enquiries, deliver and improve our services, send relevant updates you've opted into, and meet our legal obligations.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "Data sharing",
          body: [
            "We share information only with trusted service providers who help us operate (for example, scheduling, email, and analytics tools), and only as needed to provide our services. All partners are bound by confidentiality obligations.",
          ],
        },
        {
          heading: "Data retention & security",
          body: [
            "We retain personal information only as long as necessary for the purposes described here, and we apply reasonable technical and organizational measures to protect it.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You may request access to, correction of, or deletion of your personal information at any time by emailing us. You can also unsubscribe from any marketing communication using the link in the email.",
          ],
        },
      ]}
    />
  );
}
