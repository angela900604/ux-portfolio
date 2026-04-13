/** Competitor landscape — Taiwan invoice apps (Traditional Chinese cells). */
export function CompetitorLandscapeTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-800/90">
      <table
        className="min-w-[920px] w-full text-left text-sm"
        lang="zh-Hant"
      >
        <thead className="bg-zinc-900 text-xs uppercase tracking-wider text-zinc-400">
          <tr>
            <th className="px-3 py-3 font-medium">研究對象</th>
            <th className="px-3 py-3 font-medium text-center whitespace-nowrap">
              App Store
            </th>
            <th className="px-3 py-3 font-medium">產品定位</th>
            <th className="px-3 py-3 font-medium">目標用戶</th>
            <th className="px-3 py-3 font-medium">優勢</th>
            <th className="px-3 py-3 font-medium">劣勢</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800/90 text-zinc-300">
          <tr className="align-top">
            <td className="px-3 py-3 font-medium text-zinc-100">
              統一發票兌獎
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                官方
              </span>
            </td>
            <td className="px-3 py-3">
              <MetricBadge score="2.5" reviews="約 9K 則評論" />
            </td>
            <td className="px-3 py-3 text-zinc-400">
              官方雲端發票；強調{" "}
              <span className="text-sky-300/95">穩定、正確、安全</span>
            </td>
            <td className="px-3 py-3 text-zinc-400">
              在意資料安全、官方認證、基礎管理功能
            </td>
            <td className="px-3 py-3 text-zinc-400">
              資料安全性高；雲端基礎功能完整
            </td>
            <td className="px-3 py-3 text-zinc-400">
              功能單一；缺少消費分析；UX 待加強；系統不穩；紙本掃描受限
            </td>
          </tr>
          <tr className="align-top">
            <td className="px-3 py-3 font-medium text-zinc-100">
              發票存摺
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                第三方
              </span>
            </td>
            <td className="px-3 py-3">
              <MetricBadge score="4.8" reviews="約 320K 則評論" />
            </td>
            <td className="px-3 py-3 text-zinc-400">
              多功能第三方；<span className="text-sky-300/95">黏著與回流</span>{" "}
              導向
            </td>
            <td className="px-3 py-3 text-zinc-400">
              熟悉數位工具、在意消費管理與點數兌換
            </td>
            <td className="px-3 py-3 text-zinc-400">
              資料視覺化清晰；開獎音效利於無障礙；多裝置 barcode widget
            </td>
            <td className="px-3 py-3 text-zinc-400">
              進階功能偏複雜；宣導活動多、介面易擁擠
            </td>
          </tr>
          <tr className="align-top">
            <td className="px-3 py-3 font-medium text-zinc-100">
              雲端發票
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                第三方
              </span>
            </td>
            <td className="px-3 py-3">
              <MetricBadge score="4.8" reviews="約 240K 則評論" />
            </td>
            <td className="px-3 py-3 text-zinc-400">
              雲端管理與 <span className="text-sky-300/95">消費分析</span> 見長
            </td>
            <td className="px-3 py-3 text-zinc-400">
              重效率、清爽介面、進階管理需求
            </td>
            <td className="px-3 py-3 text-zinc-400">
              介面乾淨、新手友善；桌面 widget 快速切換條碼
            </td>
            <td className="px-3 py-3 text-zinc-400">
              部分功能缺維護或實用度不足
            </td>
          </tr>
          <tr className="align-top">
            <td className="px-3 py-3 font-medium text-zinc-100">
              LINE 發票管家
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                LINE 生態
              </span>
            </td>
            <td className="px-3 py-3">
              <div className="mx-auto w-fit rounded-xl border border-zinc-600/80 bg-zinc-900/60 px-4 py-3 text-center">
                <span className="text-sm font-medium text-zinc-400">—</span>
                <span className="mt-1 block text-[11px] text-zinc-500">
                  無獨立 App Store 評分
                </span>
              </div>
            </td>
            <td className="px-3 py-3 text-zinc-400">
              嵌入 LINE；強調{" "}
              <span className="text-sky-300/95">無縫整合</span>
            </td>
            <td className="px-3 py-3 text-zinc-400">
              重度 LINE 使用者、偏好簡單操作與生態整合服務
            </td>
            <td className="px-3 py-3 text-zinc-400">
              免另下載；社交感強；整合 LINE Pay 與 LINE 點數
            </td>
            <td className="px-3 py-3 text-zinc-400">
              核心功能偏基礎；進階依賴其他 LINE 服務；無原生桌面 widget
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MetricBadge({
  score,
  reviews,
}: {
  score: string;
  reviews: string;
}) {
  return (
    <div className="mx-auto flex w-fit min-w-[8.25rem] flex-col items-center rounded-xl border-2 border-amber-400/50 bg-gradient-to-b from-amber-500/25 to-amber-950/40 px-5 py-3.5 text-center shadow-[0_0_32px_-6px_rgba(251,191,36,0.45)]">
      <span className="text-xl leading-none text-amber-200" aria-hidden>
        {"\u2605"}
      </span>
      <span className="mt-1 text-4xl font-bold tabular-nums leading-none tracking-tight text-amber-50">
        {score}
      </span>
      <span className="mt-2 text-xs font-semibold text-amber-100/90">
        {reviews}
      </span>
    </div>
  );
}
