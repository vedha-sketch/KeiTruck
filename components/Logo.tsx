interface LogoProps {
  className?: string;
  dark?: boolean;
}

export default function Logo({ className, dark = false }: LogoProps) {
  return (
    <div
      className={`flex flex-col leading-none drop-shadow-lg ${className ?? ""}`}
      style={
        !dark
          ? {
              textShadow:
                "0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.15)",
            }
          : {}
      }
    >
      <span
        className={`font-display text-sm font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-ink" : "text-white"
        }`}
      >
        Normal Robotics
      </span>
    </div>
  );
}
