import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "blush"
    | "icon"
    | "sage"
    | "contrastBlush";
  className?: string;
}

const baseStyles =
  "px-5 py-2 rounded-2xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2";

const variants: Record<string, string> = {
  primary:
    baseStyles +
    " border border-accent bg-accent text-surface shadow-sm hover:bg-accentHover",
  secondary:
    baseStyles +
    " border border-slate/70 bg-surface text-slate hover:border-accent hover:text-accent dark:bg-transparent dark:border-white/50 dark:text-white dark:hover:border-sage dark:hover:text-sage",
  blush:
    baseStyles +
    " bg-blush text-charcoal cursor-pointer border border-blushHover hover:bg-blushHover",
  icon: "p-2 rounded-full text-charcoal dark:text-white bg-transparent border-none hover:bg-charcoal/10 transition-all", // for icon-only buttons
  sage: "px-6 py-2 rounded-full font-medium bg-sage text-charcoal hover:bg-sageHover transition border border-sage/70", // for sage colored submit
  contrastBlush:
    baseStyles +
    " bg-surface text-charcoal border border-slate/70 hover:border-accent hover:text-accent dark:bg-transparent dark:border-white/50 dark:text-white dark:hover:border-sage dark:hover:text-sage", // high contrast for blush backgrounds
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles = `${
    variants[variant] || variants["primary"]
  } ${className}`.trim();
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
