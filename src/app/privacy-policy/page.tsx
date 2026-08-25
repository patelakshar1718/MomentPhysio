import { LegalPage, LegalSection } from '@/components/LegalPage';
import { site } from '@/config/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How Movement Team Physio Sports Fitness collects, uses and protects personal information submitted through this website.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      video="hero-about"
      eyebrow="Legal"
      title="Privacy Policy"
      lede="What we collect through this website, why, and what happens to it."
      updated="24 August 2026"
    >
      <LegalSection heading="Template notice">
        <p>
          <strong className="text-fg">
            This policy is a starting template and has not been reviewed by a lawyer.
          </strong>{' '}
          Before launch, have it checked against India&rsquo;s Digital Personal Data Protection Act,
          2023 and any professional obligations that apply to the handling of health information.
          Health data carries obligations that a generic website policy does not cover.
        </p>
      </LegalSection>

      <LegalSection heading="Who we are">
        <p>
          {site.legalName} operates this website and the centres described on it, in {site.city},{' '}
          {site.region}, India.
        </p>
      </LegalSection>

      <LegalSection heading="What this website collects">
        <p>
          This website is a static site. It does not run analytics, advertising trackers, or
          third-party profiling scripts, and it does not set cookies of its own.
        </p>
        <p>The only personal information the site handles is what you type into the booking form:</p>
        <ul>
          <li>Your name</li>
          <li>Your phone number</li>
          <li>Your email address, if you provide one</li>
          <li>The service and goal you selected</li>
          <li>Your preferred centre, date and time</li>
          <li>Anything you write in the additional information field</li>
        </ul>
      </LegalSection>

      <LegalSection heading="How the booking form works">
        <p>
          The booking form does not send data to a server we control. When you submit it, your
          answers are formatted into a message and handed to WhatsApp or to your email application,
          which you then choose to send. Nothing leaves your device until you send it.
        </p>
        <p>
          This means your enquiry is transmitted and stored according to WhatsApp&rsquo;s or your
          email provider&rsquo;s own terms and privacy policies. We receive it as an ordinary
          message.
        </p>
        <p>
          Please do not include detailed medical information in the form. Bring that to your
          assessment, where it can be recorded properly and confidentially.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party content on this site">
        <ul>
          <li>
            <strong className="text-fg">Google Maps</strong> — the contact page embeds Google Maps.
            Google may set cookies and collect data when those maps load, under its own privacy
            policy.
          </li>
          <li>
            <strong className="text-fg">Google Reviews</strong> — reviews shown on this site are
            fetched when the site is built and stored as static content. Your browser does not
            contact Google to display them.
          </li>
          <li>
            <strong className="text-fg">Google Fonts</strong> — typefaces are self-hosted from this
            domain, so no request is made to Google when you load a page.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Clinical records">
        <p>
          Information you provide during an assessment or treatment is handled separately from this
          website, as part of your clinical record, in line with professional confidentiality
          obligations. Ask us directly for details of how those records are kept.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          You may ask what personal information we hold about you, ask for it to be corrected, or
          ask us to delete it where we are not required to retain it. Contact{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>
          If this policy changes, the updated version will be published on this page with a new
          date at the top.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
