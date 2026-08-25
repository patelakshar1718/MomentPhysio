import Link from 'next/link';
import { LegalPage, LegalSection } from '@/components/LegalPage';
import { site } from '@/config/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for using the Movement Team Physio Sports Fitness website and booking services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <LegalPage
      video="hero-about"
      eyebrow="Legal"
      title="Terms & Conditions"
      lede="The terms that apply to this website and to enquiries made through it."
      updated="24 August 2026"
    >
      <LegalSection heading="Template notice">
        <p>
          <strong className="text-fg">
            These terms are a starting template and have not been reviewed by a lawyer.
          </strong>{' '}
          Booking, cancellation, payment and refund terms in particular need to be replaced with
          your actual policies before launch.
        </p>
      </LegalSection>

      <LegalSection heading="Using this website">
        <p>
          By using this website you agree to these terms. If you do not agree with them, please do
          not use the site.
        </p>
        <p>
          We try to keep the information here accurate and current, but we do not warrant that it is
          complete or error-free, and it may change without notice.
        </p>
      </LegalSection>

      <LegalSection heading="Enquiries are not confirmed bookings">
        <p>
          Submitting the booking form is a request, not a confirmed appointment. An appointment
          exists only once a member of our team has contacted you and confirmed a specific time and
          centre.
        </p>
        <p>
          We may decline or postpone a booking where, following screening or assessment, a service
          is not appropriate for you.
        </p>
      </LegalSection>

      <LegalSection heading="Appointments, cancellation and payment">
        <p>
          <strong className="text-fg">To be completed.</strong> Insert your actual policies here,
          including: notice required to cancel or reschedule, charges for late cancellation or
          non-attendance, session durations, package validity and expiry, accepted payment methods,
          and your refund position.
        </p>
      </LegalSection>

      <LegalSection heading="Your responsibilities">
        <ul>
          <li>Disclose relevant medical history, conditions, medication and injuries honestly.</li>
          <li>Tell us during a session if something causes pain or does not feel right.</li>
          <li>Follow the instructions and safety directions given by our staff.</li>
          <li>Do not use recovery equipment unsupervised.</li>
          <li>Tell us promptly if your circumstances or health change.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Health and safety">
        <p>
          Physical training and certain recovery modalities carry inherent risks. Our staff work to
          reduce those risks through screening, supervision and appropriate progression, but risk
          cannot be eliminated entirely. Please read the{' '}
          <Link href="/medical-disclaimer">medical disclaimer</Link>, which forms part of these
          terms.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The content, design and branding of this website belong to {site.legalName}, except where
          third-party material is used under licence. Please do not reproduce it without permission.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          To the extent permitted by law, we are not liable for indirect or consequential loss
          arising from use of this website. Nothing in these terms limits liability that cannot be
          limited by law, including liability for death or personal injury caused by negligence.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the laws of India, and the courts of {site.city},{' '}
          {site.region} have jurisdiction over any dispute.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
