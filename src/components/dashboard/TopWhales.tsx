import { ExternalLink, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Whale {
  rank: number;
  address: string;
  label?: string;
  holdings: string;
  change24h: number;
  lastActivity: string;
}

const mockWhales: Whale[] = [
  {
    rank: 1,
    address: "0x7a16ff8270133f063aab6c9977183d9e72f98817",
    label: "Jump Trading",
    holdings: "$892M",
    change24h: 12.5,
    lastActivity: "2 min ago",
  },
  {
    rank: 2,
    address: "0x3b82ff8270133f063aab6c9977183d9e72f98817",
    label: "Wintermute",
    holdings: "$654M",
    change24h: -5.2,
    lastActivity: "8 min ago",
  },
  {
    rank: 3,
    address: "0x9f21ff8270133f063aab6c9977183d9e72f98817",
    label: "Unknown",
    holdings: "$421M",
    change24h: 8.7,
    lastActivity: "15 min ago",
  },
  {
    rank: 4,
    address: "0x5c47ff8270133f063aab6c9977183d9e72f98817",
    label: "Alameda",
    holdings: "$387M",
    change24h: -2.1,
    lastActivity: "23 min ago",
  },
  {
    rank: 5,
    address: "0x8d93ff8270133f063aab6c9977183d9e72f98817",
    label: "Galaxy Digital",
    holdings: "$312M",
    change24h: 15.3,
    lastActivity: "31 min ago",
  },
];

export function TopWhales() {
  return (
    <div className="glass-card p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Top Tracked Whales</h3>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-muted-foreground border-b border-border">
              <th className="pb-3 font-medium">#</th>
              <th className="pb-3 font-medium">Wallet</th>
              <th className="pb-3 font-medium text-right">Holdings</th>
              <th className="pb-3 font-medium text-right">24h Change</th>
              <th className="pb-3 font-medium text-right">Last Active</th>
            </tr>
          </thead>
          <tbody>
            {mockWhales.map((whale, index) => (
              <tr
                key={whale.address}
                className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="py-4 font-mono text-muted-foreground">
                  {whale.rank}
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm">
                      {whale.address.slice(0, 6)}...{whale.address.slice(-4)}
                    </span>
                    {whale.label && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent">
                        {whale.label}
                      </span>
                    )}
                    <ExternalLink className="w-3 h-3 text-muted-foreground hover:text-primary cursor-pointer" />
                  </div>
                </td>
                <td className="py-4 text-right font-mono font-semibold">
                  {whale.holdings}
                </td>
                <td className="py-4 text-right">
                  <div
                    className={cn(
                      "inline-flex items-center gap-1 font-mono text-sm",
                      whale.change24h >= 0 ? "text-success" : "text-destructive"
                    )}
                  >
                    {whale.change24h >= 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {Math.abs(whale.change24h)}%
                  </div>
                </td>
                <td className="py-4 text-right text-sm text-muted-foreground">
                  {whale.lastActivity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
