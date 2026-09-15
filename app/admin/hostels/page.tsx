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
    <div className="min-h-screen bg-gray-50/50 p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Hostels Directory
          </h1>
          <p className="text-sm text-gray-500">
            View and manage all registered hostels and PGs in your database.
          </p>
        </div>

        <Link
          href="/admin/hostels/new"
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          <Plus className="h-4 w-4" /> Add New Hostel
        </Link>
      </div>

      {/* Pass initial server data into the Interactive Client Table */}
      <HostelsTable initialHostels={hostels} />
    </div>
  );
}
