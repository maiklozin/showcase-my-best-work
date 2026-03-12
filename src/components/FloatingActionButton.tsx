import { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const floatingActionButtonStyle = {
  bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
} satisfies CSSProperties;

type FloatingActionButtonProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  visible?: boolean;
} & (
  | {
      onClick: () => void;
      to?: never;
      type?: "button" | "submit" | "reset";
    }
  | {
      onClick?: never;
      to: string;
      type?: never;
    }
);

const FloatingActionButton = ({
  ariaLabel,
  children,
  className,
  style,
  visible = true,
  ...props
}: FloatingActionButtonProps) => {
  const resolvedClassName = cn(
    "fixed right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-[0_12px_30px_hsl(var(--background)/0.45)] backdrop-blur-md transition-all duration-300 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:right-6",
    visible
      ? "translate-y-0 opacity-100"
      : "pointer-events-none translate-y-4 opacity-0",
    className,
  );

  const resolvedStyle = { ...floatingActionButtonStyle, ...style };
  const hiddenProps = visible ? {} : { "aria-hidden": true as const, tabIndex: -1 };

  if ("to" in props) {
    return (
      <Link
        to={props.to}
        aria-label={ariaLabel}
        title={ariaLabel}
        className={resolvedClassName}
        style={resolvedStyle}
        {...hiddenProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={props.onClick}
      className={resolvedClassName}
      style={resolvedStyle}
      {...hiddenProps}
    >
      {children}
    </button>
  );
};

export default FloatingActionButton;
