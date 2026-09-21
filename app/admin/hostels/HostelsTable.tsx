"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, MapPin, Phone, Search, Edit, Sparkles } from "lucide-react";

interface Hostel {
  _id: string;
  name: string;
  location: string;
  description?: string;
  monthlyRent: number;
  contactNumber: string;
}

export default function HostelsTable({
  initialHostels,
}: {
  initialHostels: Hostel[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Handle instant client-side search filtering
  const filteredHostels = initialHostels.filter(
    (hostel) =>
      hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hostel.location.toLowerCase().includes(searchQuery.toLowerCase()),
  );

return (
  <div className="space-y-6">
    {/* Search Bar & Stats Header */}
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative flex-1 max-w-md group">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-slate-900" />
        <input
          type="text"
          placeholder="Search by hostel name or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 shadow-2xs"
        />
      </div>

      <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-semibold text-slate-600 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-slate-500 font-normal">Showing</span>
        <span className="font-bold text-slate-900 font-mono">
          {filteredHostels.length}
        </span>
        <span className="text-slate-500 font-normal">
          of {initialHostels.length} Hostels
        </span>
      </div>
    </div>

    {/* Table Card Container */}
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
      {filteredHostels.length === 0 ? (
        <div className="py-20 text-center px-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 mb-4 ring-8 ring-slate-50">
            <Building2 className="h-6 w-6" />
          </div>
          <p className="text-base font-bold text-slate-900">No hostels found</p>
          <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
            We couldn't find anything matching your search. Try adjusting
            keywords or clear the field.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 text-[11px] font-bold tracking-wider text-slate-500 uppercase border-b border-slate-200">
                <th className="px-6 py-3.5">Hostel Name</th>
                <th className="px-6 py-3.5">Location</th>
                <th className="px-6 py-3.5">Contact</th>
                <th className="px-6 py-3.5">Monthly Rent</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredHostels.map((hostel) => (
                <tr
                  key={hostel._id}
                  className="group hover:bg-slate-50/80 transition-colors duration-150"
                >
                  {/* Hostel Name */}
                  <td className="px-6 py-4 font-medium text-slate-900">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all duration-200 shadow-2xs">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                          {hostel.name}
                        </p>
                        {hostel.description && (
                          <p className="text-xs text-slate-500 line-clamp-1 font-normal mt-0.5">
                            {hostel.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Location */}
                  <td className="px-6 py-4 text-slate-600">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200/60">
                      <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      {hostel.location}
                    </span>
                  </td>

                  {/* Contact */}
                  <td className="px-6 py-4 text-slate-600">
                    <div className="inline-flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/50">
                        <Phone className="h-3 w-3" />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 font-mono">
                        {hostel.contactNumber}
                      </span>
                    </div>
                  </td>

                  {/* Monthly Rent */}
                  <td className="px-6 py-4">
                    <div className="inline-flex items-baseline gap-1">
                      <span className="text-base font-extrabold text-slate-900 tracking-tight">
                        ₹{hostel.monthlyRent.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        /mo
                      </span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() =>
                        router.push(`/admin/hostels/${hostel._id}`)
                      }
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-900 hover:text-white hover:border-slate-900 active:scale-95 transition-all cursor-pointer"
                      title="Edit Hostel"
                    >
                      <Edit className="h-3.5 w-3.5" />
                      <span>Edit</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
);
}
