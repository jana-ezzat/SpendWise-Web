import React from "react";
import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./components/layout/Sidebar";
import Budget from "./pages/Budget";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <main className="flex-1 bg-rose-50">
            <Routes>
              <Route path="/budget" element={<Budget />} />
              <Route path="/dashboard" element={<Dashboard/>} />

            </Routes>
          </main>
        </div>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
