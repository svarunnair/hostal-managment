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
  <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-8 font-sans antialiased">
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="p-2.5 bg-white border border-slate-200/80 rounded-xl hover:bg-slate-100/80 active:scale-95 transition-all shadow-2xs cursor-pointer"
          title="Go back"
        >
          <ArrowLeft className="h-5 w-5 text-slate-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Add New Hostel
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Enter details to create a new property in your database.
          </p>
        </div>
      </div>

      {/* Form Container Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-xs">
        {error && (
          <div className="mb-6 flex items-start gap-3 p-4 text-sm font-medium text-rose-700 bg-rose-50 border border-rose-200/60 rounded-xl">
            <AlertCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
            <div>{error}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Hostel Name */}
          <div>
            <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
              Hostel / PG Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative group">
              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-slate-900" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Starlight Mens PG"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 shadow-2xs"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
              Location <span className="text-rose-500">*</span>
            </label>
            <div className="relative group">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-slate-900" />
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Koramangala, Bangalore"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 shadow-2xs"
              />
            </div>
          </div>

          {/* Rent & Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                Monthly Rent (₹) <span className="text-rose-500">*</span>
              </label>
              <div className="relative group">
                <IndianRupee className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-slate-900" />
                <input
                  type="number"
                  name="monthlyRent"
                  required
                  min="0"
                  value={formData.monthlyRent}
                  onChange={handleChange}
                  placeholder="8500"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 shadow-2xs font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                Contact Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative group">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-slate-900" />
                <input
                  type="text"
                  maxLength={10}
                  name="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 shadow-2xs font-mono"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
              Description{" "}
              <span className="text-slate-400 font-normal lowercase">
                (optional)
              </span>
            </label>
            <div className="relative group">
              <FileText className="absolute left-3.5 top-3 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-slate-900" />
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="Sharing options, food policy, amenities..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 shadow-2xs resize-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => router.back()}
              className="w-1/2 rounded-xl border border-slate-200/80 bg-white py-2.5 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-slate-800 disabled:opacity-50 active:scale-95 transition-all cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Saving...</span>
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
