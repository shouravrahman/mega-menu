import { component$, useSignal } from "@builder.io/qwik";
import Navlinks from "./navlinks";
import Button from "./button";

export default component$(() => {
  const isMobileMenuOpen = useSignal(false);
  return (
    <nav class="bg-[#000433] hover:bg-[#08153c]">
      <div class="flex items-center justify-between px-4 py-2 font-medium">
        <div class="z-50 flex w-full justify-between  md:w-auto">
          <img
            src="logo-dark.png"
            alt="logo"
            class="aspect-3/2  invert md:cursor-pointer"
            width={80}
            height={80}
          />
          <div
            onClick$={() => {
              isMobileMenuOpen.value = !isMobileMenuOpen.value;
            }}
            class="mt-4 cursor-pointer duration-500 md:hidden"
          >
            {isMobileMenuOpen.value ? (
              <img
                src="close-circle-outline.svg"
                alt="logo"
                width={30}
                height={30}
              />
            ) : (
              <img src="grid-outline.svg" alt="logo" width={30} height={30} />
            )}
          </div>
        </div>
        <ul class="hidden items-center gap-8 transition-all duration-500 ease-in-out md:flex">
          <Navlinks />
        </ul>
        <div class="hidden md:block">
          <Button />
        </div>

        {/* mobile menu */}
        <ul
          class={`absolute  bottom-0 h-full  w-full bg-[#08153c]  py-24 pl-4 transition-all duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen.value ? "left-0" : "left-[-100%]"
          } `}
        >
          <Navlinks />
          <div class="mt-4">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
});
