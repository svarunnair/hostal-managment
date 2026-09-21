"use client";

import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  CalendarDays,
  LogOut,
  Pencil,
  AtSign,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  // Demo admin details
  const admin = {
    name: "Varun Admin",
    username: "admin",
    email: "admin@hostelmanager.com",
    phone: "+91 98765 43210",
    role: "Super Admin",
    joinedDate: "January 15, 2026",
  };

const handleLogout = () => {
  const confirmed = window.confirm("Are you sure you want to log out?");
  if (!confirmed) return;

  // Later: clear the authentication session/cookie here
  router.push("/admin/login");
};
return (
  <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-8 font-sans antialiased">
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          My Profile
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your admin profile and account information.
        </p>
      </div>

      {/* Profile Card Container */}
      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs">
        {/* Profile Header Banner */}
        <div className="bg-slate-900 px-6 py-8 md:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-slate-900 shadow-md ring-4 ring-white/10">
              VA
            </div>

            {/* Admin Info */}
            <div className="text-white">
              <h2 className="text-2xl font-bold tracking-tight">
                {admin.name}
              </h2>
              <p className="mt-0.5 text-sm text-slate-300 font-mono">
                @{admin.username}
              </p>

              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-xs border border-white/10">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span className="capitalize">{admin.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Account Information Section */}
        <div className="p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Account Information
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Your administrator account details.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all cursor-pointer self-start sm:self-auto"
            >
              <Pencil className="h-3.5 w-3.5" />
              <span>Edit Profile</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Full Name */}
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-2xs border border-slate-200/60">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Full Name
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-900">
                    {admin.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Username */}
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-2xs border border-slate-200/60">
                  <AtSign className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Username
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-900 font-mono">
                    {admin.username}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-2xs border border-slate-200/60">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-900">
                    {admin.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-2xs border border-slate-200/60">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Phone Number
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-900 font-mono">
                    {admin.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Role */}
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-2xs border border-slate-200/60">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Account Role
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-900 capitalize">
                    {admin.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Joined Date */}
            <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600 shadow-2xs border border-slate-200/60">
                  <CalendarDays className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Joined Date
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-900 font-mono">
                    {admin.joinedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Banner */}
        <div className="border-t border-slate-100 bg-rose-50/30 px-6 py-5 md:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Sign out</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Sign out from your administrator account on this session.
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-xs font-bold text-white shadow-2xs hover:bg-rose-700 active:scale-95 transition-all cursor-pointer"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
