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

const baseStyles = "px-5 py-2 rounded-2xl font-medium transition-all";

const variants: Record<string, string> = {
  primary:
    baseStyles +
    " border border-slate bg-softwhite hover:bg-slate hover:text-softwhite",
  secondary:
    baseStyles +
    " border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-softwhite",
  blush:
    baseStyles +
    " bg-blush text-charcoal cursor-pointer border-none hover:bg-blush/80",
  icon: "p-2 rounded-full text-charcoal dark:text-white bg-transparent border-none hover:bg-charcoal/10 transition-all", // for icon-only buttons
  sage: "px-6 py-2 rounded font-medium bg-sage dark:bg-sage text-white hover:opacity-90 transition border-none", // for sage colored submit
  contrastBlush:
    baseStyles +
    " bg-softwhite text-charcoal border border-charcoal hover:bg-slate hover:text-softwhite", // high contrast for blush backgrounds
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
