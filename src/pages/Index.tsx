import { Header } from "@/components/dashboard/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { WhaleActivityFeed } from "@/components/dashboard/WhaleActivityFeed";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { TokenChart } from "@/components/dashboard/TokenChart";
import { N8nIntegration } from "@/components/dashboard/N8nIntegration";
import { TopWhales } from "@/components/dashboard/TopWhales";
import { 
  Wallet, 
  TrendingUp, 
  Activity, 
  DollarSign, 
  Waves,
  BarChart3 
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Whale Movement <span className="text-gradient-primary">Dashboard</span>
          </h1>
          <p className="text-muted-foreground">
            Track real-time whale activity, market signals, and automate your trading workflows
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Tracked Whales"
            value="1,247"
            change="+23 this week"
            changeType="positive"
            icon={Wallet}
          />
          <StatsCard
            title="24h Volume"
            value="$2.4B"
            change="+12.5%"
            changeType="positive"
            icon={TrendingUp}
          />
          <StatsCard
            title="Active Alerts"
            value="47"
            change="8 high priority"
            changeType="neutral"
            icon={Activity}
          />
          <StatsCard
            title="Total Value Tracked"
            value="$18.7B"
            change="-2.1%"
            changeType="negative"
            icon={DollarSign}
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <TokenChart />
          </div>
          <div>
            <AlertsPanel />
          </div>
        </div>

        {/* Whale Activity & n8n Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <WhaleActivityFeed />
          <N8nIntegration />
        </div>

        {/* Top Whales Table */}
        <TopWhales />

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
            <Waves className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Powered by real-time blockchain data
            </span>
            <BarChart3 className="w-4 h-4 text-accent" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
