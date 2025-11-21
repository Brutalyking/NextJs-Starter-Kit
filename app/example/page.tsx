import { ThemeToggle } from "@/components/ThemeToggle";
import DialogExamples from "@/examples/dialog";
import ComprehensiveFormExample from "@/examples/form";
import { SonnerTypes } from "@/examples/toast";

export default function page() {
  return (
    <div className=" container  flex items-center justify-center flex-col mx-auto my-8 gap-8">
      <div>
        <div className=" p-4 flex flex-col items-center justify-center gap-5 w-full">
          <h1>
            Theme Togglers (See components/ThemeToggle.tsx for implementation)
          </h1>
          <span>Click Small Variant:</span>
          <ThemeToggle variant="click-small" />

          <span>Slide Variant:</span>
          <ThemeToggle variant="slide" />
        </div>

        <div className="flex flex-col gap-2 mb-4 p-4 bg-white dark:bg-gray-950 rounded-2xl shadow-2xl dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-800 items-center justify-center transition-colors duration-300">
          <h1 className="text-gray-900 dark:text-gray-100">
            Toast Notifications (See examples/toast.tsx for implementation)
          </h1>
          <SonnerTypes />
        </div>
        <div>
          <span>
            Dialog Examples (See examples/dialog.tsx for implementation)
          </span>
          <DialogExamples />
        </div>

        <ComprehensiveFormExample />
      </div>
    </div>
  );
}
