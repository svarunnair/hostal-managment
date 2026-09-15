"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  MapPin,
  Phone,
  IndianRupee,
  FileText,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import axios from "axios";

export default function AddHostelPage() {
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    monthlyRent: "",
    contactNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Generic Input Handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    // Axios automatically stringifies objects and sets 'Content-Type: application/json'
    const response = await axios.post("/api/hostels", {
      ...formData,
      monthlyRent: Number(formData.monthlyRent),
    });

    // Axios stores the response payload directly in response.data
    const data = response.data;

    console.log("data33", data);

    // Refresh server component cache and redirect to listings
    router.refresh();
    router.replace("/admin/hostels");
  } catch (err: any) {
    // Axios handles non-2xx HTTP responses by throwing an error automatically
    const errorMessage =
      err.response?.data?.message || err.message || "Failed to add hostel";
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-50/50 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="p-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition shadow-sm"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Add New Hostel</h1>
            <p className="text-sm text-gray-500">
              Enter details to create a new property in your database.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          {error && (
            <div className="mb-6 p-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Hostel Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Hostel / PG Name *
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Starlight Mens PG"
                  className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-4 text-sm text-gray-900 outline-none focus:border-black transition"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Koramangala, Bangalore"
                  className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-4 text-sm text-gray-900 outline-none focus:border-black transition"
                />
              </div>
            </div>

            {/* Rent & Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Monthly Rent (₹) *
                </label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="number"
                    name="monthlyRent"
                    required
                    min="0"
                    value={formData.monthlyRent}
                    onChange={handleChange}
                    placeholder="8500"
                    className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-4 text-sm text-gray-900 outline-none focus:border-black transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Contact Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    maxLength={10}
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="+919876543210"
                    className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-4 text-sm text-gray-900 outline-none focus:border-black transition"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Description (Optional)
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Sharing options, food policy, amenities..."
                  className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-4 text-sm text-gray-900 outline-none focus:border-black transition resize-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => router.back()}
                className="w-1/2 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-1/2 flex items-center justify-center gap-2 rounded-lg bg-black py-2.5 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50 transition cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Property"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
