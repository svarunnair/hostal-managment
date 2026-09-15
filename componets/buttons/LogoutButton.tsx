"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const confirmLogout = () => {
    // Later: clear the authentication session/cookie here
    setShowConfirm(false);
    router.push("/admin/login");
  };

  return (
    <>
      <button onClick={() => setShowConfirm(true)}>Logout</button>

      {showConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowConfirm(false)}
        >
          <div
            className="w-[320px] rounded-xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-gray-900">
              Confirm logout
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Are you sure you want to log out?
            </p>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
