import { motion } from "framer-motion";

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export const ThemeSwitcher = ({ currentTheme, onThemeChange }: ThemeSwitcherProps) => {
  const themes = [
    { id: "jungle", label: "/jungle-theme", emoji: "🌴" },
    { id: "moon", label: "/moon-theme", emoji: "🌝" },
    { id: "light", label: "/light-theme", emoji: "🤍" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed top-6 left-6 z-50"
    >
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
        /Choose your theme
      </div>
      <div className="flex flex-col gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={`theme-btn text-left ${
              currentTheme === theme.id ? "bg-foreground text-background" : ""
            }`}
          >
            <span className="mr-2">{theme.emoji}</span>
            {theme.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
};
