"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  XCircle,
  WifiOff,
  ServerCrash,
  ShieldAlert,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { Button } from "./button";

export type ErrorStateVariant =
  | "default"
  | "critical"
  | "network"
  | "server"
  | "permission";

const variantConfig: Record<
  ErrorStateVariant,
  { icon: LucideIcon; color: string; bgGradient: string; ringColor: string }
> = {
  default: {
    icon: AlertCircle,
    color: "text-amber-500 dark:text-amber-400",
    bgGradient:
      "from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/30",
    ringColor: "ring-amber-200/50 dark:ring-amber-700/50",
  },
  critical: {
    icon: XCircle,
    color: "text-red-500 dark:text-red-400",
    bgGradient:
      "from-red-50 to-red-100 dark:from-red-950/40 dark:to-red-900/30",
    ringColor: "ring-red-200/50 dark:ring-red-700/50",
  },
  network: {
    icon: WifiOff,
    color: "text-blue-500 dark:text-blue-400",
    bgGradient:
      "from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/30",
    ringColor: "ring-blue-200/50 dark:ring-blue-700/50",
  },
  server: {
    icon: ServerCrash,
    color: "text-purple-500 dark:text-purple-400",
    bgGradient:
      "from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/30",
    ringColor: "ring-purple-200/50 dark:ring-purple-700/50",
  },
  permission: {
    icon: ShieldAlert,
    color: "text-orange-500 dark:text-orange-400",
    bgGradient:
      "from-orange-50 to-orange-100 dark:from-orange-950/40 dark:to-orange-900/30",
    ringColor: "ring-orange-200/50 dark:ring-orange-700/50",
  },
};

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom icon component to display */
  icon?: LucideIcon;
  /** Predefined variant for common error states */
  variant?: ErrorStateVariant;
  /** Main error title */
  title?: string;
  /** Error message/description */
  message?: string;
  /** Optional retry callback */
  onRetry?: () => void;
  /** Retry button label */
  retryLabel?: string;
  /** Whether the retry action is loading */
  isRetrying?: boolean;
  /** Optional custom action element */
  action?: React.ReactNode;
  /** Size of the error state */
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    container: "py-6",
    iconWrapper: "h-12 w-12",
    icon: "h-6 w-6",
    title: "text-sm",
    message: "text-xs",
  },
  md: {
    container: "py-10",
    iconWrapper: "h-16 w-16",
    icon: "h-8 w-8",
    title: "text-base",
    message: "text-sm",
  },
  lg: {
    container: "py-16",
    iconWrapper: "h-20 w-20",
    icon: "h-10 w-10",
    title: "text-lg",
    message: "text-base",
  },
};

export function ErrorState({
  icon,
  variant = "default",
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again.",
  onRetry,
  retryLabel = "Try again",
  isRetrying = false,
  action,
  size = "md",
  className,
  ...props
}: ErrorStateProps) {
  const config = variantConfig[variant];
  const IconComponent = icon || config.icon;
  const sizes = sizeClasses[size];

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        sizes.container,
        className,
      )}
      {...props}
    >
      {/* Animated icon container with color-coded styling */}
      <div
        className={cn(
          "relative mb-4 flex items-center justify-center rounded-full",
          "bg-gradient-to-br shadow-inner",
          config.bgGradient,
          "ring-1",
          config.ringColor,
          sizes.iconWrapper,
        )}
      >
        {/* Decorative pulse ring */}
        <div
          className={cn(
            "absolute inset-0 rounded-full opacity-50",
            "animate-pulse bg-gradient-to-tr from-white/20 to-transparent",
          )}
        />

        {/* Subtle glow effect */}
        <div
          className={cn(
            "absolute -inset-2 rounded-full blur-md opacity-30",
            config.bgGradient,
          )}
        />

        <IconComponent
          className={cn("relative z-10", config.color, sizes.icon)}
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "mb-1.5 font-semibold tracking-tight",
          "text-gray-800 dark:text-gray-100",
          sizes.title,
        )}
      >
        {title}
      </h3>

      {/* Message */}
      <p
        className={cn(
          "max-w-sm text-gray-600 dark:text-gray-400",
          sizes.message,
        )}
      >
        {message}
      </p>

      {/* Actions */}
      {(onRetry || action) && (
        <div className="mt-5 flex items-center gap-3">
          {onRetry && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRetry}
              disabled={isRetrying}
              className="gap-2"
            >
              <RefreshCw
                className={cn("h-4 w-4", isRetrying && "animate-spin")}
              />
              {retryLabel}
            </Button>
          )}
          {action}
        </div>
      )}
    </div>
  );
}
