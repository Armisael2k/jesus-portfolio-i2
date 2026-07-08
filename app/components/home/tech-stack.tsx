import { useEffect, useId, useRef, useState } from "react";
import Chip from "@/components/ui/chip";
import techHighlights, { extendedTechStack } from "@/data/techs";

export default function TechStack() {
  const [showFullStack, setShowFullStack] = useState(false);
  const fullStackId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showFullStack) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setShowFullStack(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowFullStack(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showFullStack]);

  return (
    <div ref={containerRef} className="relative border border-ctp-surface0 bg-ctp-base shadow-xl rounded-xl h-fit p-5 w-full md:w-sm">
      <div className="mb-4">
        <p className="text-ctp-text font-medium">Stack Highlights</p>
        <p className="mt-1 text-sm text-ctp-subtext0">Selected from the stack I use most in production work.</p>
      </div>
      <div className="flex flex-col gap-3">
        {techHighlights.map((group) => (
          <div key={group.title}>
            <p className="mb-1.5 text-sm text-ctp-text">{group.title}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  className={
                    group.title === "Industrial"
                      ? "border-ctp-red/40 bg-ctp-red/10 text-xs text-ctp-text"
                      : "bg-ctp-mantle! border-ctp-surface0 text-xs"
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-4 text-sm text-ctp-subtext0 hover:text-ctp-text transition-colors cursor-pointer"
        aria-expanded={showFullStack}
        aria-controls={fullStackId}
        aria-haspopup="true"
        onClick={() => setShowFullStack((current) => !current)}
      >
        {showFullStack ? "Close full stack" : "View full stack"}
      </button>
      {showFullStack && (
        <div
          id={fullStackId}
          className="absolute left-0 right-0 top-full z-30 mt-2 max-h-[min(70vh,28rem)] overflow-y-auto rounded-xl border border-ctp-surface0 bg-ctp-base p-4 shadow-xl md:left-auto md:w-[30rem]"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {extendedTechStack.map((group) => (
              <div key={group.title}>
                <p className="mb-1.5 text-sm text-ctp-subtext0">{group.title}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      className={
                        group.title === "Industrial"
                          ? "border-ctp-red/40 bg-ctp-red/10 text-xs text-ctp-text"
                          : "bg-ctp-mantle/60! border-ctp-surface0/70 text-xs text-ctp-subtext0"
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
