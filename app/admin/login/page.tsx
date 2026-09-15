import LoginForm from "@/componets/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
