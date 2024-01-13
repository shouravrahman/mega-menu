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
            class="mt-4 cursor-pointer md:hidden"
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
        <ul class="hidden items-center gap-8 md:flex">
          {/* <li>
            <a href="/" class="inline-block px-3 py-7">
              Home
            </a>
          </li> */}
          <Navlinks />
        </ul>
        <div class="hidden md:block">
          <Button />
        </div>

        {/* mobile menu */}
        <ul
          class={`absolute  bottom-0 h-full  w-full bg-[#08153c]  py-24 pl-4 duration-500 md:hidden ${
            isMobileMenuOpen.value ? "left-0" : "left-[-100%]"
          } `}
        >
          {/* <li>
            <a href="/" class="inline-block px-3 py-7">
              Home
            </a>
          </li> */}
          <Navlinks />
          <div class="mt-4">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
});
