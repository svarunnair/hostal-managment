import SignupForm from "@/componets/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </main>
  );
}