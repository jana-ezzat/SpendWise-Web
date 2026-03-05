import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Receipt,
  Wallet,
  Grid2X2,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Expenses", icon: Receipt, path: "/expenses" },
  { label: "Budget", icon: Wallet, path: "/budget" },
  { label: "Categories", icon: Grid2X2, path: "/categories" },
  { label: "Settings", icon: Settings, path: "/settings" },
];



const AppSidebar = () => {
  const [activeItem, setActiveItem] = useState("Budget");
  const navigate = useNavigate();

  return (
    <Sidebar className="w-64 h-full bg-white border-none shadow-sm">
      <SidebarHeader className="p-6 pb-4">
        <h1 className="text-xl font-bold text-rose-800">SpendWise</h1>
        <p className="text-sm text-rose-400 font-medium">Track your expenses</p>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarMenu>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  onClick={() => {
                    setActiveItem(item.label);
                    navigate(item.path);
                  }} 
                  className={`flex items-center gap-4 w-full px-6 py-5.5 rounded-lg transition-all
                    ${
                      isActive
                        ? "bg-gradient-to-r from-pink-400 to-rose-600 text-white hover:text-white font-semibold shadow-md"
                        : "text-gray-600 hover:bg-pink-50 hover:text-rose-500"
                    }`}>
                  <Icon size={18} />
                  {item.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
