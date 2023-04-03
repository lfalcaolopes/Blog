import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

function ScrollableArea({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea.Root className=" overflow-hidden">
      <ScrollArea.Viewport className="w-full h-full rounded mb-4">{children}</ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 rounded-lg bg-custom-off-white transition-colors duration-[160ms] ease-out hover:bg-gray-300 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="flex-1 bg-custom-dark-grey rounded-lg relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

export default ScrollableArea;
