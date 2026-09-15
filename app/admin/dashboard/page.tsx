"use client";

import React, { useState } from "react";
import {
  Building2,
  BedDouble,
  Users,
  DollarSign,
  TrendingUp,
  Plus,
  Search,
  Bell,
  Home,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  // Sample Summary Data
  const stats = [
    {
      title: "Total Hostels & PGs",
      value: "12",
      change: "+2 this month",
      icon: Building2,
      color: "bg-blue-500",
    },
    {
      title: "Total Rooms",
      value: "148",
      change: "85% Occupied",
      icon: BedDouble,
      color: "bg-indigo-500",
    },
    {
      title: "Active Residents",
      value: "320",
      change: "+14 new check-ins",
      icon: Users,
      color: "bg-emerald-500",
    },
    {
      title: "Monthly Revenue",
      value: "₹4,25,000",
      change: "+12% vs last month",
      icon: DollarSign,
      color: "bg-amber-500",
    },
  ];

  // Sample Properties Data
  const properties = [
    {
      name: "Starlight Mens PG",
      type: "PG",
      totalRooms: 20,
      occupied: 18,
      status: "Active",
      rent: "₹7,500/mo",
    },
    {
      name: "Greenwood Womens Hostel",
      type: "Hostel",
      totalRooms: 45,
      occupied: 40,
      status: "Active",
      rent: "₹6,000/mo",
    },
    {
      name: "Cozy Stay Executive PG",
      type: "PG",
      totalRooms: 15,
      occupied: 15,
      status: "Full",
      rent: "₹9,000/mo",
    },
    {
      name: "Apex Student Residency",
      type: "Hostel",
      totalRooms: 30,
      occupied: 22,
      status: "Maintenance",
      rent: "₹5,500/mo",
    },
  ];


  const handleSelected = (start: any) => {  
    console.log('start-----',start)
    if (start?.title === "Total Hostels & PGs") {
      console.log("Starlight Mens PG selected");
      router.push("/admin/hostels");
    }
    }


  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-800">
      {/* Top Navbar */}
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white font-bold">
            H 
          </div>
          <span className="text-lg font-bold text-gray-900">HostelManager</span>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search hostels, rooms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-black focus:bg-white transition"
            />
          </div>

          <button className="relative rounded-lg border p-2 text-gray-600 hover:bg-gray-100 transition">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <div 
          onClick={() => router.push("/admin/profile")}
          className="h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
            A
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-6 max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard Overview
            </h1>
            <p className="text-sm text-gray-500">
              Manage your hostels, PGs, rooms, and occupancy status.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition">
              <Plus className="h-4 w-4" /> Add Property / PG
            </button>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                onClick={()=>handleSelected(stat)}
                className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </span>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.color} text-white`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="mt-1 flex items-center text-xs font-medium text-emerald-600">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    {stat.change}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Split: Property List & Quick Actions */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Properties Table (Spans 2 Columns) */}
          <div className="lg:col-span-2 rounded-xl border bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="font-semibold text-gray-900">
                Your Properties & PGs
              </h2>
              <button className="text-sm text-blue-600 hover:underline font-medium">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3">Property Name</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Occupancy</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Starting Rent</th>
                    <th className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {properties.map((property, idx) => {
                    const percentage = Math.round(
                      (property.occupied / property.totalRooms) * 100,
                    );
                    return (
                      <tr key={idx} className="hover:bg-gray-50/50">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {property.name}
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                            {property.type}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-black h-2 rounded-full"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-600 font-medium">
                              {property.occupied}/{property.totalRooms}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              property.status === "Active"
                                ? "bg-emerald-50 text-emerald-700"
                                : property.status === "Full"
                                  ? "bg-blue-50 text-blue-700"
                                  : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            {property.status === "Active" && (
                              <CheckCircle2 className="h-3 w-3" />
                            )}
                            {property.status === "Maintenance" && (
                              <AlertCircle className="h-3 w-3" />
                            )}
                            {property.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700 font-medium">
                          {property.rent}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-1 rounded text-gray-400 hover:text-gray-700">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Stats / Recent Activity Panel */}
          <div className="space-y-6">
            {/* Room Availability Card */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">
                Room Availability Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Single Sharing
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    8 Vacant
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Double Sharing
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    12 Vacant
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Triple Sharing
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    5 Vacant
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                Manage All Rooms
              </button>
            </div>

            {/* Quick Actions Card */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-4 border rounded-xl hover:bg-gray-50 text-gray-700 transition">
                  <BedDouble className="h-6 w-6 mb-2 text-gray-800" />
                  <span className="text-xs font-medium">Add New Room</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border rounded-xl hover:bg-gray-50 text-gray-700 transition">
                  <Users className="h-6 w-6 mb-2 text-gray-800" />
                  <span className="text-xs font-medium">Check-in Tenant</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
