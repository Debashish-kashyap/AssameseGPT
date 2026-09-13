import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({
  src,
  alt = "Avatar",
  fallback = "AG",
  className,
  size = "md",
}: AvatarProps) {
  const [error, setError] = React.useState(false);

  const sizeClass = {
    sm: "h-7 w-7 text-xs",
    md: "h-9 w-9 text-sm",
    lg: "h-12 w-12 text-base",
  }[size];

  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full font-medium select-none items-center justify-center bg-muted text-muted-foreground ring-1 ring-border",
        sizeClass,
        className
      )}
    >
      {src && !error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
}
