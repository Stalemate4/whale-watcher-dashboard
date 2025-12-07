import { Button } from "@/components/ui/button";
import { Workflow, Zap, Bell, Bot, ArrowRight, CheckCircle2 } from "lucide-react";

const integrations = [
  {
    icon: Bell,
    title: "Telegram Alerts",
    description: "Real-time whale movement notifications",
    status: "ready",
  },
  {
    icon: Bot,
    title: "Signal Bots",
    description: "Automated trading signals via Discord/X",
    status: "ready",
  },
  {
    icon: Zap,
    title: "Airdrop Automation",
    description: "Auto-trigger airdrops based on token purchases",
    status: "ready",
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Build custom automation pipelines",
    status: "ready",
  },
];

export function N8nIntegration() {
  return (
    <div className="glass-card p-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-accent/20">
          <Workflow className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">n8n Integration</h3>
          <p className="text-sm text-muted-foreground">
            Connect your automation workflows
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {integrations.map((integration) => (
          <div
            key={integration.title}
            className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <integration.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{integration.title}</h4>
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {integration.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-dashed border-border bg-secondary/20">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Connect n8n Instance</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Link your n8n server to enable automation
            </p>
          </div>
          <Button variant="glow" size="sm">
            Connect
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
