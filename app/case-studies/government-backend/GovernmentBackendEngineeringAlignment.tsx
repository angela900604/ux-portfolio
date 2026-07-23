import { GovernmentBackendRoleChartLightbox } from "./GovernmentBackendRoleChartLightbox";

export function GovernmentBackendEngineeringAlignment() {
  return (
    <div className="w-full space-y-6">
      <h2 className="max-w-3xl text-lg font-semibold leading-snug tracking-tight text-zinc-100 sm:text-xl">
        How I aligned design with engineering
      </h2>

      <figure className="space-y-4">
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
          I defined a clear set of principles for access: which roles could see
          which features, and how permissions should differ. If a role had no
          access to a feature, that feature simply did not appear in their
          sidebar.
        </p>
        <GovernmentBackendRoleChartLightbox />
      </figure>
    </div>
  );
}
