import { SiteTopNav } from "@/app/components/SiteTopNav";

export function SiteHeaderFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <SiteTopNav />

      <main className="flex-1 pt-14">{children}</main>
    </div>
  );
}
