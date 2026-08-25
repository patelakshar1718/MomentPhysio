'use client';

import { useEffect, useId, useState } from 'react';
import { locations, site } from '@/config/site';
import { bookingMailto, formatBookingMessage, whatsappLink, type BookingPayload } from '@/lib/whatsapp';
import { Icon } from './Icon';

const SERVICES = [
  'Physiotherapy',
  'Recovery',
  'Personal Training',
  'Sports Performance',
  'Mobility',
  'Marathon Training',
  'HYROX Training',
  'Not Sure',
];

const GOALS = [
  'Injury recovery',
  'Pain or movement concern',
  'Fitness',
  'Strength',
  'Mobility',
  'Recovery',
  'Sports performance',
  'Marathon',
  'HYROX',
  'General wellness',
];

const STEPS = ['Service', 'Goal', 'Details', 'Done'] as const;

const EMPTY: BookingPayload = {
  service: '',
  goal: '',
  name: '',
  phone: '',
  email: '',
  preferredDate: '',
  preferredTime: '',
  location: locations[0]?.name ?? '',
  notes: '',
};

type Errors = Partial<Record<keyof BookingPayload, string>>;

export function BookingForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BookingPayload>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const uid = useId();

  // A program card can deep-link with ?program=hyrox-performance — use it to
  // pre-select the service so the visitor does not answer a question twice.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const program = params.get('program');
    if (!program) return;
    const map: Record<string, string> = {
      'injury-recovery': 'Physiotherapy',
      'athlete-recovery': 'Recovery',
      'strength-conditioning': 'Personal Training',
      'marathon-performance': 'Marathon Training',
      'hyrox-performance': 'HYROX Training',
      'mobility-program': 'Mobility',
      'personal-performance': 'Personal Training',
    };
    const service = map[program];
    if (service) setData((d) => ({ ...d, service }));
  }, []);

  function update<K extends keyof BookingPayload>(key: K, value: BookingPayload[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validateDetails(): boolean {
    const next: Errors = {};

    if (!data.name.trim()) next.name = 'Please enter your name.';

    const digits = data.phone.replace(/\D/g, '');
    if (!digits) next.phone = 'Please enter a phone number.';
    else if (digits.length < 10) next.phone = 'That phone number looks too short.';

    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      next.email = 'Please check the email address.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submit(channel: 'whatsapp' | 'email') {
    if (!validateDetails()) return;

    const target =
      channel === 'whatsapp' ? whatsappLink(formatBookingMessage(data)) : bookingMailto(data);

    // Opened before the state change so the click is still a trusted gesture —
    // popup blockers reject window.open from an async continuation.
    window.open(target, '_blank', 'noopener,noreferrer');
    setStep(3);
  }

  return (
    <div className="card overflow-hidden">
      {/* Progress */}
      <div className="border-b border-line bg-elev-2 px-6 py-5 sm:px-8">
        <ol className="flex items-center gap-2 sm:gap-3">
          {STEPS.map((label, i) => {
            const state = i < step ? 'done' : i === step ? 'current' : 'upcoming';
            return (
              <li key={label} className="flex flex-1 items-center gap-2 sm:gap-3">
                <span
                  aria-current={state === 'current' ? 'step' : undefined}
                  className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors ${
                    state === 'done'
                      ? 'border-accent bg-accent text-accent-on'
                      : state === 'current'
                        ? 'border-accent text-accent-text'
                        : 'border-line text-subtle'
                  }`}
                >
                  {state === 'done' ? <Icon name="check" size={14} /> : i + 1}
                </span>
                <span
                  className={`hidden font-display text-[0.625rem] font-bold tracking-[0.14em] uppercase sm:block ${
                    state === 'upcoming' ? 'text-subtle' : 'text-fg'
                  }`}
                >
                  {label}
                </span>
                {i < STEPS.length - 1 && (
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="p-6 sm:p-8">
        {/* ── Step 1 ─────────────────────────────────────────────────── */}
        {step === 0 && (
          <fieldset>
            <legend className="text-xl font-semibold tracking-[-0.025em]">What are you looking for?</legend>
            <p className="mt-2 text-sm text-muted">
              Not sure yet? Pick “Not Sure” — the assessment will work it out.
            </p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {SERVICES.map((option) => (
                <label
                  key={option}
                  className={`flex cursor-pointer items-center gap-3 border p-4 transition-colors ${
                    data.service === option
                      ? 'border-accent bg-accent-soft'
                      : 'border-line hover:border-line-strong'
                  }`}
                >
                  <input
                    type="radio"
                    name={`${uid}-service`}
                    value={option}
                    checked={data.service === option}
                    onChange={() => update('service', option)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                      data.service === option ? 'border-accent bg-accent' : 'border-line-strong'
                    }`}
                  />
                  <span className="text-sm font-medium">{option}</span>
                </label>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                disabled={!data.service}
                onClick={() => setStep(1)}
                className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
                <Icon name="arrowRight" size={16} />
              </button>
            </div>
          </fieldset>
        )}

        {/* ── Step 2 ─────────────────────────────────────────────────── */}
        {step === 1 && (
          <fieldset>
            <legend className="text-xl font-semibold tracking-[-0.025em]">What is your primary goal?</legend>
            <p className="mt-2 text-sm text-muted">
              This tells us who should carry out your assessment.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {GOALS.map((option) => (
                <label
                  key={option}
                  className={`cursor-pointer border px-4 py-2.5 text-sm transition-colors ${
                    data.goal === option
                      ? 'border-accent bg-accent-soft text-accent-text'
                      : 'border-line text-muted hover:border-line-strong'
                  }`}
                >
                  <input
                    type="radio"
                    name={`${uid}-goal`}
                    value={option}
                    checked={data.goal === option}
                    onChange={() => update('goal', option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="mt-8 flex justify-between gap-3">
              <button type="button" onClick={() => setStep(0)} className="btn btn-secondary">
                Back
              </button>
              <button
                type="button"
                disabled={!data.goal}
                onClick={() => setStep(2)}
                className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
                <Icon name="arrowRight" size={16} />
              </button>
            </div>
          </fieldset>
        )}

        {/* ── Step 3 ─────────────────────────────────────────────────── */}
        {step === 2 && (
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              submit('whatsapp');
            }}
          >
            <h3 className="text-xl font-semibold tracking-[-0.025em]">Your details</h3>
            <p className="mt-2 text-sm text-muted">
              We will contact you to confirm a time. Fields marked * are required.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field
                id={`${uid}-name`}
                label="Full name *"
                value={data.name}
                onChange={(v) => update('name', v)}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                id={`${uid}-phone`}
                label="Phone *"
                type="tel"
                value={data.phone}
                onChange={(v) => update('phone', v)}
                error={errors.phone}
                autoComplete="tel"
                inputMode="tel"
              />
              <div className="sm:col-span-2">
                <Field
                  id={`${uid}-email`}
                  label="Email"
                  type="email"
                  value={data.email}
                  onChange={(v) => update('email', v)}
                  error={errors.email}
                  autoComplete="email"
                  inputMode="email"
                />
              </div>
              <Field
                id={`${uid}-date`}
                label="Preferred date"
                type="date"
                value={data.preferredDate}
                onChange={(v) => update('preferredDate', v)}
                min={new Date().toISOString().split('T')[0]}
              />
              <Field
                id={`${uid}-time`}
                label="Preferred time"
                type="time"
                value={data.preferredTime}
                onChange={(v) => update('preferredTime', v)}
              />

              {locations.length > 1 && (
                <div className="sm:col-span-2">
                  <label
                    htmlFor={`${uid}-location`}
                    className="mb-2 block label-xs"
                  >
                    Preferred centre
                  </label>
                  <select
                    id={`${uid}-location`}
                    value={data.location}
                    onChange={(e) => update('location', e.target.value)}
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-accent"
                  >
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name}, {loc.locality}
                      </option>
                    ))}
                    <option value="No preference">No preference</option>
                  </select>
                </div>
              )}

              <div className="sm:col-span-2">
                <label
                  htmlFor={`${uid}-notes`}
                  className="mb-2 block label-xs"
                >
                  Additional information
                </label>
                <textarea
                  id={`${uid}-notes`}
                  rows={4}
                  value={data.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  placeholder="Injury history, symptoms, training background, race date — anything useful."
                  className="w-full resize-y rounded-xl border border-line bg-bg px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-subtle focus:border-accent"
                />
              </div>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-subtle">
              Submitting opens WhatsApp with your answers filled in, so you can send them to us in
              one tap. Please do not include sensitive medical details here — bring those to your
              assessment instead.
            </p>

            <div className="mt-7 flex flex-col justify-between gap-3 sm:flex-row">
              <button type="button" onClick={() => setStep(1)} className="btn btn-secondary">
                Back
              </button>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => submit('email')} className="btn btn-secondary">
                  <Icon name="mail" size={16} />
                  Send by email
                </button>
                <button type="submit" className="btn btn-primary">
                  <Icon name="whatsapp" size={17} />
                  Send on WhatsApp
                </button>
              </div>
            </div>
          </form>
        )}

        {/* ── Step 4 ─────────────────────────────────────────────────── */}
        {step === 3 && (
          <div className="py-6 text-center" role="status" aria-live="polite">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-on">
              <Icon name="check" size={26} />
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">Thank you, {data.name || 'there'}.</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Our team will contact you to confirm your 1-to-1 assessment. If the WhatsApp window
              did not open, call us directly on{' '}
              <a href={`tel:${site.phone.tel}`} className="text-accent-text underline underline-offset-2">
                {site.phone.display}
              </a>
              .
            </p>

            <button
              type="button"
              onClick={() => {
                setData(EMPTY);
                setErrors({});
                setStep(0);
              }}
              className="btn btn-secondary mt-8"
            >
              Make another booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: string;
  autoComplete?: string;
  inputMode?: 'tel' | 'email' | 'text';
  min?: string;
};

function Field({ id, label, value, onChange, type = 'text', error, ...rest }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block label-xs"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full border bg-bg px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-subtle ${
          error ? 'border-red-500' : 'border-line focus:border-accent'
        }`}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
