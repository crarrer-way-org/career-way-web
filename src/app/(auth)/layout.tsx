import { ThemeToggle } from "@/components/theme-toggle";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen bg-secondary">
      <ThemeToggle />
      {children}
    </main>
  );
};

export default AuthLayout;
