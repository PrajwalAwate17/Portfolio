import { Sun } from "lucide-react";
import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full">
      <Sun className="h-6 w-6 text-yellow-300" />
    </div>
  );
};
