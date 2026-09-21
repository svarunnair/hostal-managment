import Hostel from "@/models/hostel";
import { connectDB } from "@/lib/mongooDb";
import HostelsTable from "./HostelsTable"; // Import Client Component
import { Plus } from "lucide-react";
import Link from "next/link";


async function getHostels() {
  await connectDB();
  const hostels = await Hostel.find().lean();


  return hostels.map((hostel) => ({
    ...hostel,
    _id: hostel._id.toString(),
  }));
}

export default async function HostelsPage() {
  const hostels = await getHostels();

return (
  <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-8 space-y-8 font-sans antialiased">
    {/* Page Header */}
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Hostels Directory
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          View and manage all registered hostels and PGs in your database.
        </p>
      </div>

      <Link
        href="/admin/hostels/new"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-800 active:scale-95 transition-all cursor-pointer self-start md:self-auto"
      >
        <Plus className="h-4 w-4" /> Add New Hostel
      </Link>
    </div>

    {/* Interactive Client Table Component */}
    <HostelsTable initialHostels={hostels} />
  </div>
);
}
