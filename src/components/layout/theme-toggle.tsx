"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="h-8 w-8 text-muted-foreground hover:text-foreground"
      title={`Current theme: ${theme}. Click to change.`}
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4 text-neutral-200" />
      ) : theme === "light" ? (
        <Sun className="h-4 w-4 text-amber-500" />
      ) : (
        <Laptop className="h-4 w-4 text-blue-400" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
