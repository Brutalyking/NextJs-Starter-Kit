"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Inbox,
  FileX,
  SearchX,
  FolderOpen,
  Database,
  type LucideIcon,
} from "lucide-react";

export type EmptyStateVariant =
  | "default"
  | "search"
  | "folder"
  | "file"
  | "database";

const variantIcons: Record<EmptyStateVariant, LucideIcon> = {
  default: Inbox,
  search: SearchX,
  folder: FolderOpen,
  file: FileX,
  database: Database,
};

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom icon component to display */
  icon?: LucideIcon;
  /** Predefined variant for common empty states */
  variant?: EmptyStateVariant;
  /** Main title text */
  title?: string;
  /** Description text below the title */
  description?: string;
  /** Optional action element (button, link, etc.) */
  action?: React.ReactNode;
  /** Size of the empty state */
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    container: "py-6",
    iconWrapper: "h-12 w-12",
    icon: "h-6 w-6",
    title: "text-sm",
    description: "text-xs",
  },
  md: {
    container: "py-10",
    iconWrapper: "h-16 w-16",
    icon: "h-8 w-8",
    title: "text-base",
    description: "text-sm",
  },
  lg: {
    container: "py-16",
    iconWrapper: "h-20 w-20",
    icon: "h-10 w-10",
    title: "text-lg",
    description: "text-base",
  },
};

export function EmptyState({
  icon,
  variant = "default",
  title = "No data found",
  description = "There's nothing to display at the moment.",
  action,
  size = "md",
  className,
  ...props
}: EmptyStateProps) {
  const IconComponent = icon || variantIcons[variant];
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
      {/* Animated icon container */}
      <div
        className={cn(
          "relative mb-4 flex items-center justify-center rounded-full",
          "bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
          "shadow-inner shadow-gray-300/50 dark:shadow-gray-950/50",
          "ring-1 ring-gray-200/50 dark:ring-gray-700/50",
          sizes.iconWrapper,
        )}
      >
        {/* Decorative circles */}
        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-gray-200/30 to-transparent dark:from-gray-700/30" />
        <div className="absolute -inset-1 rounded-full bg-linear-to-br from-gray-100/20 via-transparent to-gray-200/20 dark:from-gray-700/20 dark:to-gray-800/20 blur-sm" />

        <IconComponent
          className={cn(
            "relative z-10 text-gray-400 dark:text-gray-500",
            sizes.icon,
          )}
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "mb-1.5 font-semibold tracking-tight",
          "text-gray-700 dark:text-gray-200",
          sizes.title,
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "max-w-sm text-gray-500 dark:text-gray-400",
          sizes.description,
        )}
      >
        {description}
      </p>

      {/* Optional action */}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
