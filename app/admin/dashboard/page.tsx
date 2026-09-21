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
  <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
    {/* Top Navbar */}
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white px-6 shadow-xs backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white font-bold shadow-xs">
          H
        </div>
        <span className="text-lg font-bold tracking-tight text-slate-900">
          HostelManager
        </span>
      </div>

      {/* Search & Actions */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search hostels, rooms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 shadow-2xs"
          />
        </div>

        <button className="relative rounded-xl border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
        </button>

        <div
          onClick={() => router.push("/admin/profile")}
          className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-sm cursor-pointer shadow-xs hover:bg-slate-800 transition-colors"
        >
          A
        </div>
      </div>
    </header>

    {/* Main Content Area */}
    <main className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Dashboard Overview
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your hostels, PGs, rooms, and occupancy status.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
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
              onClick={() => handleSelected(stat)}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  {stat.title}
                </span>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.color} text-white shadow-xs group-hover:scale-105 transition-transform`}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-4">
                <div className="text-2xl font-extrabold tracking-tight text-slate-900">
                  {stat.value}
                </div>
                <div className="mt-1 flex items-center text-xs font-semibold text-emerald-600">
                  <TrendingUp className="mr-1 h-3.5 w-3.5" />
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
        <div className="lg:col-span-2 rounded-2xl border border-slate-200/80 bg-white shadow-xs overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4.5 bg-white">
            <h2 className="font-bold text-slate-900">Your Properties & PGs</h2>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-slate-50/80 text-[11px] font-bold tracking-wider text-slate-500 uppercase border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3.5">Property Name</th>
                  <th className="px-6 py-3.5">Type</th>
                  <th className="px-6 py-3.5">Occupancy</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Starting Rent</th>
                  <th className="px-6 py-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {properties.map((property, idx) => {
                  const percentage = Math.round(
                    (property.occupied / property.totalRooms) * 100,
                  );
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-slate-900">
                        {property.name}
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200/60">
                          {property.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-16 bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/50">
                            <div
                              className="bg-slate-900 h-2 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600 font-medium font-mono">
                            {property.occupied}/{property.totalRooms}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                            property.status === "Active"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                              : property.status === "Full"
                                ? "bg-blue-50 text-blue-700 border border-blue-200/60"
                                : "bg-amber-50 text-amber-700 border border-amber-200/60"
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
                      <td className="px-6 py-4 text-slate-900 font-bold">
                        {property.rent}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer">
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
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
            <h3 className="font-bold text-slate-900 mb-4">
              Room Availability Breakdown
            </h3>
            <div className="space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-50"></div>
                  <span className="text-sm font-medium text-slate-700">
                    Single Sharing
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-900">
                  8 Vacant
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-blue-50"></div>
                  <span className="text-sm font-medium text-slate-700">
                    Double Sharing
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-900">
                  12 Vacant
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500 ring-4 ring-amber-50"></div>
                  <span className="text-sm font-medium text-slate-700">
                    Triple Sharing
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-900">
                  5 Vacant
                </span>
              </div>
            </div>

            <button className="mt-5 w-full rounded-xl border border-slate-200/80 bg-white py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-2xs cursor-pointer">
              Manage All Rooms
            </button>
          </div>

          {/* Quick Actions Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
            <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 border border-slate-200/70 rounded-xl hover:bg-slate-50 hover:border-slate-300 text-slate-700 transition-all shadow-2xs active:scale-95 cursor-pointer group">
                <BedDouble className="h-5 w-5 mb-2 text-slate-800 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Add New Room</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border border-slate-200/70 rounded-xl hover:bg-slate-50 hover:border-slate-300 text-slate-700 transition-all shadow-2xs active:scale-95 cursor-pointer group">
                <Users className="h-5 w-5 mb-2 text-slate-800 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Check-in Tenant</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);
}
