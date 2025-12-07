import { Bell, AlertTriangle, TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  type: "whale" | "trend" | "signal" | "warning";
  title: string;
  description: string;
  time: string;
  priority: "high" | "medium" | "low";
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "whale",
    title: "Major ETH Accumulation",
    description: "3 whale wallets accumulated 5,000+ ETH in the last hour",
    time: "Just now",
    priority: "high",
  },
  {
    id: "2",
    type: "signal",
    title: "Buy Signal: SOL",
    description: "Technical indicators suggest strong upward momentum",
    time: "5 min ago",
    priority: "high",
  },
  {
    id: "3",
    type: "trend",
    title: "Volume Spike Detected",
    description: "BTC trading volume up 340% in the last 15 minutes",
    time: "12 min ago",
    priority: "medium",
  },
  {
    id: "4",
    type: "warning",
    title: "Large Transfer Alert",
    description: "$50M USDT moved from unknown wallet to Binance",
    time: "18 min ago",
    priority: "medium",
  },
];

const iconMap = {
  whale: Bell,
  trend: TrendingUp,
  signal: Zap,
  warning: AlertTriangle,
};

const colorMap = {
  whale: "text-primary bg-primary/20",
  trend: "text-accent bg-accent/20",
  signal: "text-success bg-success/20",
  warning: "text-warning bg-warning/20",
};

export function AlertsPanel() {
  return (
    <div className="glass-card p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Active Alerts</h3>
        <span className="text-sm text-muted-foreground">
          {mockAlerts.filter((a) => a.priority === "high").length} high priority
        </span>
      </div>

      <div className="space-y-3 max-h-[350px] overflow-y-auto scrollbar-thin">
        {mockAlerts.map((alert, index) => {
          const Icon = iconMap[alert.type];
          return (
            <div
              key={alert.id}
              className={cn(
                "p-4 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer",
                alert.priority === "high"
                  ? "border-primary/50 bg-primary/5"
                  : "border-border bg-secondary/30"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className={cn("p-2 rounded-lg", colorMap[alert.type])}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-medium text-sm truncate">{alert.title}</h4>
                    {alert.priority === "high" && (
                      <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {alert.description}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-2">
                    {alert.time}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
