const TRAITS = [
  {
    title: "More serious than funny",
    lead: "Networks and the business-critical apps and data that fly across them are serious business!",
    points: [
      "We may look for opportunities to be light-hearted, but never when it comes to core functions.",
      "It may be tempting in things like error messages, but the person on the other end is probably in a very different headspace at that moment.",
      "Never make it seem like we are taking an issue or an error lightly.",
    ],
  },
  {
    title: "Fairly casual",
    lead: "We take things pretty seriously, but we don't take on a formal tone.",
    points: [
      "Be clear and direct in a casual, friendly way.",
      "Always write in first person, from our point of view.",
      "Don't use complex words or phrases when simple ones will do.",
    ],
  },
  {
    title: "Always respectful",
    lead: "We always talk “on the same level”.",
    points: [
      "Never patronize or condescend to our users.",
      "Never be irreverent or sarcastic.",
      "Never blame our users for anything, make them feel dumb, or make them feel they've done something wrong.",
    ],
  },
  {
    title: "A bit enthusiastic",
    lead: "Console Connect is an exciting platform that offers our users opportunity and potential.",
    points: [
      "There is room to be excited about our brand, products and services.",
      "Get to the point and talk clearly, without too many buzz words.",
    ],
  },
]

export function ToneTraits() {
  return (
    <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
      {TRAITS.map((t, i) => (
        <div key={t.title} className="flex flex-col rounded-lg border bg-card p-5">
          <div className="mb-2 flex size-7 items-center justify-center rounded-full bg-accent font-mono text-xs font-semibold text-accent-foreground">
            {i + 1}
          </div>
          <h3 className="text-base font-semibold tracking-tight">{t.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t.lead}</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm marker:text-primary">
            {t.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
