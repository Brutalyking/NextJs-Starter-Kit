"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { toastMessages } from "@/shared/constants/toast-messages";

export function SonnerTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast(toastMessages.default.eventCreated)}
      >
        Default
      </Button>

      <Button
        variant="outline"
        onClick={() => toast.success(toastMessages.success.eventCreated)}
      >
        Success
      </Button>

      <Button
        variant="outline"
        onClick={() => toast.info(toastMessages.info.arriveEarly)}
      >
        Info
      </Button>

      <Button
        variant="outline"
        onClick={() => toast.warning(toastMessages.warning.tooEarly)}
      >
        Warning
      </Button>

      <Button
        variant="outline"
        onClick={() => toast.error(toastMessages.error.eventFailed)}
      >
        Error
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast.promise(
            () =>
              new Promise<{ name: string }>((resolve) =>
                setTimeout(() => resolve({ name: "Event" }), 2000),
              ),
            {
              loading: toastMessages.promise.loading,
              success: toastMessages.promise.success,
              error: toastMessages.promise.error,
            },
          );
        }}
      >
        Promise
      </Button>
    </div>
  );
}
