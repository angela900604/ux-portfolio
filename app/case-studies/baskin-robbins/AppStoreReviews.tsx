type AppStoreReview = {
  title?: string;
  /** Optional leading emoji (e.g. 👍) shown above the star row */
  leadEmoji?: string;
  user: string;
  date: string;
  body: string;
};

const REVIEWS: AppStoreReview[] = [
  {
    title: "Highly recommended",
    user: "郭柏霆",
    date: "2025/12/29",
    body: "Love the interface—updating details and checking perks feels very intuitive.",
  },
  {
    leadEmoji: "👍",
    user: "丹尼爾123",
    date: "2025/12/29",
    body: "The Traditional Chinese UI feels familiar; the type size and layout are easy on the eyes.",
  },
  {
    title: "So convenient",
    user: "Anikitsai",
    date: "2025/12/29",
    body: "Signing up is simple, and I can manage my offers right away—very convenient.",
  },
  {
    title: "Great",
    user: "我可歌可泣奧進口額唷唷",
    date: "2025/12/29",
    body: "The new system runs smoothly; scrolling and swiping feel great.",
  },
  {
    title: "Great",
    user: "漂亮怪",
    date: "2025/12/29",
    body: "Information lookup is comprehensive—I can find the details I need.",
  },
  {
    title: "Product info is thorough—cakes and drinks are all clearly described",
    user: "sp98383120",
    date: "2025/12/29",
    body: "Product info is thorough—cakes and drinks are all clearly described.",
  },
];

function StarRow() {
  return (
    <div
      className="flex gap-0.5 text-[#FF9500]"
      aria-label="5 out of 5 stars"
      role="img"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="text-[15px] leading-none" aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: AppStoreReview }) {
  return (
    <div className="rounded-2xl border border-zinc-800/80 bg-[#1a1a1a] p-4 sm:p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          {review.leadEmoji ? (
            <p className="mb-1 text-lg leading-none">{review.leadEmoji}</p>
          ) : null}
          {review.title ? (
            <p className="font-semibold text-zinc-100 leading-snug">
              {review.title}
            </p>
          ) : null}
          <div className={review.title || review.leadEmoji ? "mt-2" : ""}>
            <StarRow />
          </div>
        </div>
        <div className="shrink-0 text-right text-xs text-zinc-500">
          <p className="tabular-nums">{review.date}</p>
          <p className="mt-0.5 max-w-[140px] truncate text-zinc-500" title={review.user}>
            {review.user}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{review.body}</p>
    </div>
  );
}

export function AppStoreReviewsSection({ appStoreHref }: { appStoreHref: string }) {
  return (
    <div className="mt-12 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            App Store
          </p>
          <h3 className="mt-1 text-zinc-100">
            User feedback
          </h3>
          <p className="mt-1 max-w-xl text-sm text-zinc-500">
            Excerpts from Taiwan App Store reviews (all ratings are 5 stars).
          </p>
        </div>
        <a
          href={appStoreHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-zinc-600 bg-zinc-900/50 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800/80 sm:self-start"
        >
          31 Club · App Store (Taiwan)
          <span aria-hidden className="text-zinc-500">
            ↗
          </span>
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {REVIEWS.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}
