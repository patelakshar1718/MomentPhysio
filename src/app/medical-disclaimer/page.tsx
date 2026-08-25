import { LegalPage, LegalSection } from '@/components/LegalPage';
import { site } from '@/config/site';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Medical Disclaimer',
  description:
    'Medical disclaimer for Movement Team Physio Sports Fitness — the scope and limits of the information published on this website.',
  path: '/medical-disclaimer',
});

export default function MedicalDisclaimerPage() {
  return (
    <LegalPage
      video="hero-about"
      eyebrow="Legal"
      title="Medical Disclaimer"
      lede="What this website is — and what it is not. Please read this before acting on anything published here."
      updated="24 August 2026"
    >
      <LegalSection heading="General information only">
        <p>
          Information on this website is provided for general informational purposes and does not
          constitute medical advice, diagnosis or treatment. It is not a substitute for a
          consultation with a qualified healthcare professional who has assessed you in person.
        </p>
        <p>
          Nothing on this website creates a clinician–patient relationship. That relationship begins
          only when you attend an assessment at one of our centres.
        </p>
      </LegalSection>

      <LegalSection heading="No guarantees of outcome">
        <p>
          Physiotherapy, rehabilitation, recovery and training outcomes vary between individuals and
          depend on factors including your condition, history, adherence, and circumstances outside
          our control. We do not guarantee pain relief, recovery within any particular timeframe, a
          permanent cure, or any specific performance result.
        </p>
        <p>
          Where this website describes what a service is <em>designed to</em> do, that is a
          description of intent and method — not a promise of result.
        </p>
      </LegalSection>

      <LegalSection heading="Assessment comes first">
        <p>
          All treatments and recovery modalities are provided only where appropriate following
          professional assessment and applicable safety protocols. A service being listed on this
          website does not mean it is suitable for you. Following assessment, a clinician may decide
          a particular modality is not appropriate in your case, and that decision takes precedence
          over anything published here.
        </p>
      </LegalSection>

      <LegalSection heading="Recovery modalities and contraindications">
        <p>
          Several recovery modalities offered at our centres carry contraindications. These include
          but are not limited to cold water immersion, sauna, TECAR therapy, pneumatic compression,
          dry needling, cupping and IASTM.
        </p>
        <p>Circumstances that may make a modality unsuitable include:</p>
        <ul>
          <li>Cardiovascular, circulatory or blood pressure conditions</li>
          <li>Pregnancy</li>
          <li>Certain implanted electronic devices, including pacemakers</li>
          <li>Use of blood-thinning medication</li>
          <li>Active infection, open wounds or recent surgery</li>
          <li>Neurological conditions affecting sensation</li>
          <li>Suspected or diagnosed blood clots</li>
        </ul>
        <p>
          You must disclose your relevant medical history before your first session. Screening is
          carried out before any modality is used, and no recovery equipment may be used
          unsupervised.
        </p>
      </LegalSection>

      <LegalSection heading="Recovery and wellness scope">
        <p>
          Recovery modalities are offered as recovery and wellness services. They are not presented
          as treatments for any disease, and we make no claim that any of them cure, heal or manage
          medical conditions.
        </p>
      </LegalSection>

      <LegalSection heading="Post-operative and referred care">
        <p>
          Post-operative rehabilitation is delivered within the protocol and timeline set by your
          treating surgeon. Please bring your operative notes and post-operative instructions. Where
          our assessment and your surgeon&rsquo;s protocol differ, the surgeon&rsquo;s protocol
          governs.
        </p>
      </LegalSection>

      <LegalSection heading="Seek immediate help where needed">
        <p>
          If you are experiencing a medical emergency, severe or worsening symptoms, chest pain,
          breathing difficulty, loss of sensation, or symptoms following a significant injury,
          contact emergency services or attend a hospital immediately. Do not wait for a
          physiotherapy appointment.
        </p>
      </LegalSection>

      <LegalSection heading="Questions">
        <p>
          If anything here is unclear, please ask before booking. Contact us at{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{' '}
          <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
