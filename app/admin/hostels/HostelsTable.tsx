"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, MapPin, Phone, Search, Edit } from "lucide-react";

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
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by hostel name or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-900 outline-none focus:border-black transition shadow-sm"
        />
      </div>

      {/* Table Display */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        {filteredHostels.length === 0 ? (
          <div className="py-16 text-center text-gray-500">
            <p className="text-base font-semibold text-gray-800">
              No hostels found
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Hostel Name</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Contact</th>
                  <th className="px-6 py-4">Monthly Rent</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredHostels.map((hostel) => (
                  <tr
                    key={hostel._id}
                    className="hover:bg-gray-50/60 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      <div className="flex items-center gap-3">
                        <Building2 className="h-4 w-4 text-gray-500" />
                        {hostel.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {hostel.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-mono text-xs">
                      <div className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-gray-400" />
                        {hostel.contactNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      ₹{hostel.monthlyRent.toLocaleString("en-IN")}/mo
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() =>
                          router.push(`/admin/hostels/${hostel._id}`)
                        }
                        className="p-1.5 text-gray-500 hover:text-black rounded-md"
                      >
                        <Edit className="h-4 w-4" />
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
