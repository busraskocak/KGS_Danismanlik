import { useLang } from "@/lib/i18n";

export function MissionVision() {
    const { t } = useLang();
  return (
     
    <section className="relative border-t border-border bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-aqua">
            {t("missionVision.badge")}
          </p>

          <h2 className="mt-2 font-display text-4xl md:text-6xl">
            {t("missionVision.title")}
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          <div className="group relative flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-card md:p-10">
           
            <h3 className="font-display text-2xl md:text-3xl">
              {t("missionVision.missionTitle")}
            </h3>

            <p className="text-base leading-8 text-muted-foreground text-justify">
              {t("missionVision.missionText")}
            </p>

            <div className="mt-auto h-px w-0 bg-aqua transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="group relative flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-card md:p-10">
           

            <h3 className="font-display text-2xl md:text-3xl">
              {t("missionVision.visionTitle")}
            </h3>

            <p className="text-base leading-8 text-muted-foreground text-justify">
              {t("missionVision.visionText")}
            </p>

            <div className="mt-auto h-px w-0 bg-aqua transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}