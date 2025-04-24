
import React from "react";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  {
    name: "Red",
    value: "0 68% 50%",
    class: "bg-red-500",
  },
  {
    name: "Purple",
    value: "265 89% 78%",
    class: "bg-[#9b87f5]",
  },
  {
    name: "Blue",
    value: "217 91% 60%",
    class: "bg-blue-500",
  },
  {
    name: "Green",
    value: "142 76% 36%",
    class: "bg-green-600",
  },
  {
    name: "Orange",
    value: "24 95% 53%",
    class: "bg-orange-500",
  },
];

export function ThemePicker() {
  const setTheme = (hsl: string) => {
    document.documentElement.style.setProperty("--primary", hsl);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="fixed top-4 right-4 p-2 rounded-full glass hover:bg-white/10 transition z-50">
          <Palette className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <div className="grid grid-cols-2 gap-2 p-2">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => setTheme(theme.value)}
              className={cn(
                "w-full h-8 rounded-md cursor-pointer",
                theme.class
              )}
              title={theme.name}
            />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
