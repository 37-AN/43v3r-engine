import { WalletConnection } from "@/components/wallet/WalletConnection";
import { TokenInteraction } from "@/components/token/TokenInteraction";
import { Card } from "@/components/ui/card";
import DashboardAnalytics from "@/components/dashboard/DashboardAnalytics";
import MonitoringTab from "@/components/dashboard/MonitoringTab";
import ProductionTab from "@/components/dashboard/ProductionTab";
import MesDataTab from "@/components/dashboard/MesDataTab";
import RefinedMetricsDashboard from "@/components/dashboard/RefinedMetricsDashboard";
import AppSidebar from "@/components/AppSidebar";
import ConnectionStatus from "@/components/status/ConnectionStatus";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function Index() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex-1 p-4 md:p-8 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">System Status</h2>
              <ConnectionStatus />
            </section>

            <section className="space-y-4 md:space-y-6">
              <div className="grid gap-4 md:gap-8 md:grid-cols-2">
                <Card className="p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">Wallet Connection</h3>
                  <WalletConnection />
                </Card>

                <Card className="p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">Token Operations</h3>
                  <TokenInteraction />
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Refined MES Metrics</h2>
              <RefinedMetricsDashboard />
            </section>

            <section>
              <DashboardAnalytics />
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">System Monitoring</h2>
              <MonitoringTab />
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Production Management</h2>
              <ProductionTab />
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">MES Data Analysis</h2>
              <MesDataTab />
            </section>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}