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
    title: "推推",
    user: "郭柏霆",
    date: "2025/12/29",
    body: "喜歡介面，資料修改跟福利查詢都很直覺",
  },
  {
    leadEmoji: "👍",
    user: "丹尼爾123",
    date: "2025/12/29",
    body: "繁體中文介面看得很親切，文字大小跟排版都很舒服",
  },
  {
    title: "很方便～",
    user: "Anikitsai",
    date: "2025/12/29",
    body: "註冊會員簡單，馬上就能管理自己的優惠內容，很方便",
  },
  {
    title: "讚",
    user: "我可歌可泣奧進口額唷唷",
    date: "2025/12/29",
    body: "新系統的流暢度很不錯，滑動介面很滑順",
  },
  {
    title: "讚",
    user: "漂亮怪",
    date: "2025/12/29",
    body: "資訊查詢功能很齊全，想找介紹都有",
  },
  {
    title: "商品資訊非常齊全，連蛋糕跟飲品的資訊都寫得清清楚楚",
    user: "sp98383120",
    date: "2025/12/29",
    body: "商品資訊非常齊全，連蛋糕跟飲品的資訊都寫得清清楚楚",
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
          <h2 className="mt-1 text-lg font-semibold text-zinc-100">
            使用者回饋
          </h2>
          <p className="mt-1 max-w-xl text-sm text-zinc-500">
            節錄自台灣 App Store 使用者評論（評分皆為 5 星）。
          </p>
        </div>
        <a
          href={appStoreHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-zinc-600 bg-zinc-900/50 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800/80 sm:self-start"
        >
          31俱樂部 · App Store（台灣）
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
