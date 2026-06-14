import type { RevenuePoint } from "@petbackend/orders";

const WIDTH = 600;
const HEIGHT = 200;
const PADDING = 24;

export default function RevenueChart({ data }: { data: RevenuePoint[] }) {
  const max = Math.max(1, ...data.map((d) => d.revenue));
  const stepX = data.length > 1 ? (WIDTH - PADDING * 2) / (data.length - 1) : 0;

  const points = data.map((d, i) => {
    const x = PADDING + i * stepX;
    const y = HEIGHT - PADDING - (d.revenue / max) * (HEIGHT - PADDING * 2);
    return { x, y, ...d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1]?.x ?? PADDING} ${HEIGHT - PADDING} L ${PADDING} ${HEIGHT - PADDING} Z`;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full h-48" preserveAspectRatio="none">
        <line x1={PADDING} y1={HEIGHT - PADDING} x2={WIDTH - PADDING} y2={HEIGHT - PADDING} stroke="#e5e7eb" strokeWidth="1" />

        {points.length > 0 && (
          <>
            <path d={areaPath} fill="#f97316" fillOpacity="0.1" />
            <path d={linePath} fill="none" stroke="#f97316" strokeWidth="2" />
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="#f97316" />
            ))}
          </>
        )}
      </svg>

      <div className="flex justify-between text-xs text-muted mt-2 px-1">
        <span>{formatDate(data[0]?.date)}</span>
        <span>{formatDate(data[data.length - 1]?.date)}</span>
      </div>
    </div>
  );
}

function formatDate(date?: string) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
