import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";

interface WhaleActivity {
  id: string;
  wallet: string;
  action: "buy" | "sell" | "transfer";
  token: string;
  amount: string;
  usdValue: string;
  time: string;
}

const mockActivities: WhaleActivity[] = [
  {
    id: "1",
    wallet: "0x7a16...3f9b",
    action: "buy",
    token: "ETH",
    amount: "1,250",
    usdValue: "$4.2M",
    time: "2 min ago",
  },
  {
    id: "2",
    wallet: "0x3b82...9c4a",
    action: "sell",
    token: "BTC",
    amount: "85",
    usdValue: "$8.1M",
    time: "5 min ago",
  },
  {
    id: "3",
    wallet: "0x9f21...7d8e",
    action: "transfer",
    token: "USDT",
    amount: "15,000,000",
    usdValue: "$15M",
    time: "8 min ago",
  },
  {
    id: "4",
    wallet: "0x5c47...2a1f",
    action: "buy",
    token: "SOL",
    amount: "45,000",
    usdValue: "$6.8M",
    time: "12 min ago",
  },
  {
    id: "5",
    wallet: "0x8d93...6b5c",
    action: "sell",
    token: "ETH",
    amount: "2,100",
    usdValue: "$7.1M",
    time: "15 min ago",
  },
];

export function WhaleActivityFeed() {
  return (
    <div className="glass-card p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Live Whale Activity</h3>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
          <span className="text-sm text-muted-foreground">Live</span>
        </div>
      </div>
      
      <div className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin">
        {mockActivities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "p-2 rounded-lg",
                  activity.action === "buy" && "bg-success/20",
                  activity.action === "sell" && "bg-destructive/20",
                  activity.action === "transfer" && "bg-accent/20"
                )}
              >
                {activity.action === "buy" && (
                  <ArrowUpRight className="w-5 h-5 text-success" />
                )}
                {activity.action === "sell" && (
                  <ArrowDownRight className="w-5 h-5 text-destructive" />
                )}
                {activity.action === "transfer" && (
                  <Wallet className="w-5 h-5 text-accent" />
                )}
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm">{activity.wallet}</span>
                  <span
                    className={cn(
                      "text-xs px-2 py-0.5 rounded-full font-medium uppercase",
                      activity.action === "buy" && "bg-success/20 text-success",
                      activity.action === "sell" && "bg-destructive/20 text-destructive",
                      activity.action === "transfer" && "bg-accent/20 text-accent"
                    )}
                  >
                    {activity.action}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {activity.amount} {activity.token}
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-semibold font-mono">{activity.usdValue}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
