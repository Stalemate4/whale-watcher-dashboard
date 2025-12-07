import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { time: "00:00", value: 3200 },
  { time: "04:00", value: 3350 },
  { time: "08:00", value: 3180 },
  { time: "12:00", value: 3420 },
  { time: "16:00", value: 3580 },
  { time: "20:00", value: 3450 },
  { time: "24:00", value: 3620 },
];

export function TokenChart() {
  return (
    <div className="glass-card p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">ETH Price</h3>
          <p className="text-3xl font-bold font-mono mt-2">$3,620.45</p>
          <p className="text-sm text-success mt-1">+5.23% (24h)</p>
        </div>
        <div className="flex gap-2">
          {["1H", "24H", "7D", "30D"].map((period) => (
            <button
              key={period}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                period === "24H"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(160, 84%, 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(160, 84%, 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
              domain={["dataMin - 100", "dataMax + 100"]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222, 47%, 8%)",
                border: "1px solid hsl(222, 47%, 16%)",
                borderRadius: "8px",
                color: "hsl(210, 40%, 98%)",
              }}
              formatter={(value: number) => [`$${value}`, "Price"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(160, 84%, 45%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
