/** Competitor landscape — Taiwan invoice apps (Traditional Chinese). */
export function CompetitorLandscapeTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-700/40 bg-zinc-900/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <table
        className="min-w-[920px] w-full text-left text-sm"
        lang="zh-Hant"
      >
        <thead>
          <tr className="border-b border-zinc-700/50 bg-zinc-800/55">
            <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wide text-zinc-400">
              研究對象
            </th>
            <th className="px-4 py-3.5 text-center text-[11px] font-semibold tracking-wide text-zinc-400 whitespace-nowrap">
              星等／評論
            </th>
            <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wide text-zinc-400">
              產品定位
            </th>
            <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wide text-zinc-400">
              目標用戶
            </th>
            <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wide text-zinc-400">
              優勢
            </th>
            <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wide text-zinc-400">
              劣勢
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
          <tr className="align-top odd:bg-zinc-950/20">
            <td className="px-4 py-3.5 font-medium text-zinc-100">
              統一發票兌獎
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                官方
              </span>
            </td>
            <td className="px-4 py-3.5">
              <MetricBadge score="2.5" reviews="約 9K 則評論" />
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              官方雲端發票；強調{" "}
              <span className="text-violet-300/95">穩定、正確、安全</span>
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              在意資料安全、官方認證、基礎管理功能
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              資料安全性高；雲端基礎功能完整
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              功能單一；缺少消費分析；介面待加強；系統不穩；紙本掃描受限
            </td>
          </tr>
          <tr className="align-top odd:bg-zinc-950/20">
            <td className="px-4 py-3.5 font-medium text-zinc-100">
              發票存摺
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                第三方
              </span>
            </td>
            <td className="px-4 py-3.5">
              <MetricBadge score="4.8" reviews="約 320K 則評論" />
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              多功能第三方；<span className="text-violet-300/95">黏著與回流</span>{" "}
              導向
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              熟悉數位工具、在意消費管理與點數兌換
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              資料視覺化清晰；開獎音效利於無障礙；多裝置與桌面小工具
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              進階功能偏複雜；宣導活動多、介面易擁擠
            </td>
          </tr>
          <tr className="align-top odd:bg-zinc-950/20">
            <td className="px-4 py-3.5 font-medium text-zinc-100">
              雲端發票
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                第三方
              </span>
            </td>
            <td className="px-4 py-3.5">
              <MetricBadge score="4.8" reviews="約 240K 則評論" />
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              雲端管理與 <span className="text-violet-300/95">消費分析</span> 見長
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              重效率、清爽介面、進階管理需求
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              介面乾淨、新手友善；桌面小工具快速切換條碼
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              部分功能缺維護或實用度不足
            </td>
          </tr>
          <tr className="align-top odd:bg-zinc-950/20">
            <td className="px-4 py-3.5 font-medium text-zinc-100">
              LINE 發票管家
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                LINE 生態
              </span>
            </td>
            <td className="px-4 py-3.5">
              <div className="mx-auto w-fit min-w-[7rem] rounded-lg border border-zinc-600/35 bg-zinc-800/40 px-4 py-3 text-center ring-1 ring-inset ring-white/[0.03]">
                <span className="text-sm font-medium text-zinc-500">—</span>
                <span className="mt-1 block text-[11px] text-zinc-500">
                  無獨立 App Store 評分
                </span>
              </div>
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              嵌入 LINE；強調{" "}
              <span className="text-violet-300/95">無縫整合</span>
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              重度 LINE 使用者、偏好簡單操作與生態整合服務
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              免另下載；社交感強；整合 LINE Pay 與 LINE 點數
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              核心功能偏基礎；進階依賴其他 LINE 服務；無原生桌面小工具
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
    <div className="mx-auto w-fit min-w-[7.25rem] rounded-lg border border-violet-500/20 bg-violet-950/25 px-4 py-3 text-center ring-1 ring-inset ring-violet-400/[0.06]">
      <span className="text-[15px] leading-none text-violet-400/85" aria-hidden>
        {"\u2605"}
      </span>
      <span className="mt-1 block text-2xl font-semibold tabular-nums leading-none tracking-tight text-zinc-100">
        {score}
      </span>
      <span className="mt-2 block text-[11px] font-medium text-zinc-500">
        {reviews}
      </span>
    </div>
  );
}
