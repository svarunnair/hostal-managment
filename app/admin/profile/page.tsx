"use client";

import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  CalendarDays,
  LogOut,
  Pencil,
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
    <div className="min-h-screen bg-gray-50/50 p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your admin profile and account information.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {/* Profile Header */}
          <div className="bg-gray-900 px-6 py-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              {/* Avatar */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-gray-900">
                VA
              </div>

              {/* Name */}
              <div className="text-white">
                <h2 className="text-2xl font-bold">{admin.name}</h2>

                <p className="mt-1 text-sm text-gray-300">@{admin.username}</p>

                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {admin.role}
                </div>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Account Information
                </h3>

                <p className="text-sm text-gray-500">
                  Your administrator account details.
                </p>
              </div>

              <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Pencil className="h-4 w-4" />
                Edit
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Full Name */}
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Full Name</p>

                    <p className="mt-1 font-medium text-gray-900">
                      {admin.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Username */}
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Username</p>

                    <p className="mt-1 font-medium text-gray-900">
                      {admin.username}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                    <Mail className="h-4 w-4 text-gray-600" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Email Address</p>

                    <p className="mt-1 font-medium text-gray-900">
                      {admin.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                    <Phone className="h-4 w-4 text-gray-600" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Phone Number</p>

                    <p className="mt-1 font-medium text-gray-900">
                      {admin.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Role */}
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                    <ShieldCheck className="h-4 w-4 text-gray-600" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Account Role</p>

                    <p className="mt-1 font-medium text-gray-900">
                      {admin.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Joined Date */}
              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                    <CalendarDays className="h-4 w-4 text-gray-600" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Joined Date</p>

                    <p className="mt-1 font-medium text-gray-900">
                      {admin.joinedDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logout Section */}
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Sign out</h3>

                <p className="text-sm text-gray-500">
                  Sign out from your administrator account.
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
