import React from "react"
import { Button } from "@/components/ui/button"

export default function Settings() {
  return (
    <div className="p-8 bg-pink-50 min-h-screen">
      
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-pink-900">Settings</h1>
        <p className="text-gray-500">
          Manage your app preferences and data
        </p>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-red-200">
        
        <h2 className="text-xl font-bold text-red-600 mb-4">
          Danger Zone
        </h2>

        <div className="bg-red-50 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          <div>
            <h3 className="font-semibold text-gray-800">
              Clear All Data
            </h3>
            <p className="text-gray-500 text-sm">
              Permanently delete all expenses, categories, and settings. 
              This action cannot be undone.
            </p>
          </div>

          <Button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white">
            Clear All Data
          </Button>

        </div>
      </div>

      {/* About Section */}
      <div className="mt-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl p-6 text-white shadow-md">
        
        <h2 className="text-xl font-bold mb-2">
          About SpendWise
        </h2>

        <p className="text-sm opacity-90 mb-2">
          Version 1.0.0
        </p>

        <p className="text-sm opacity-90">
          A clean and minimal expense tracking app.
        </p>

        <p className="text-sm opacity-90 mt-2">
          Data is stored locally in your browser and never sent to any server.
        </p>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-gray-500 text-sm">Total Expenses</p>
          <h3 className="text-2xl font-bold text-pink-600">0</h3>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-gray-500 text-sm">Categories</p>
          <h3 className="text-2xl font-bold text-pink-600">5</h3>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-gray-500 text-sm">Monthly Budget</p>
          <h3 className="text-2xl font-bold text-pink-600">$5000</h3>
        </div>

      </div>

    </div>
  )
}