import type { TeamMember } from '@/data/types';
import { Icon } from './Icon';
import { Media } from './Media';

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="card card-hover flex h-full flex-col p-3">
      <div className="relative">
        <Media
          slot={member.image}
          alt={member.placeholder ? `Photo placeholder for ${member.role}` : `${member.name}, ${member.role}`}
          aspect="aspect-[4/5]"
          placeholderLabel="Team photo"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {member.placeholder && (
          <span className="label-xs absolute top-3 left-3 z-10 rounded-full bg-bg/90 px-3 py-1 backdrop-blur">
            Details to be confirmed
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
        <p className="label-xs text-accent-text">
          {member.role}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em]">{member.name}</h3>

        <dl className="mt-4 space-y-2 text-xs">
          <div className="flex gap-2">
            <dt className="shrink-0 text-subtle">Qualification</dt>
            <dd className="text-muted">{member.qualification}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 text-subtle">Experience</dt>
            <dd className="text-muted">{member.experience}</dd>
          </div>
        </dl>

        <div className="mt-5 flex-1 border-t border-line pt-4">
          <p className="label-xs">
            Specialisation
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {member.specialisations.map((s) => (
              <li key={s} className="chip text-[0.6875rem]">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {member.certifications.length > 0 && (
          <div className="mt-4">
            <ul className="space-y-1.5">
              {member.certifications.map((c) => (
                <li key={c} className="flex gap-2 text-xs text-subtle">
                  <Icon name="badge" size={13} className="mt-px shrink-0 text-accent-text" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
