import { component$, useSignal } from "@builder.io/qwik";
import { links } from "./data";

export default component$(() => {
  const heading = useSignal("");

  return (
    <div class="flex flex-col items-start font-medium md:flex-row md:items-center md:justify-between">
      {links.map((link) => (
        <div key={link.name}>
          <div class="group px-3 text-left md:cursor-pointer">
            <div class="group flex items-center justify-around gap-2">
              <h1
                class="py-7 text-sm uppercase hover:text-[#ec4067]"
                onClick$={() => (heading.value = link.name)}
              >
                {link.name}
              </h1>
              {link.submenu && (
                <img
                  class="z-50 bg-transparent group-hover:rotate-180 "
                  src="arrow-down.svg"
                  alt=""
                  height={10}
                  width={20}
                />
              )}
            </div>
            {link.submenu && (
              <div>
                <div class="absolute top-20 hidden max-w-[60vw]  hover:md:block group-hover:md:block">
                  <div class="py-3">
                    <div class="absolute left-3 mt-1 h-4 w-4 rotate-45 border-l border-t border-[#ec4067] bg-[#08153c]"></div>
                  </div>
                  <div class="grid grid-cols-2 gap-10 rounded border-t border-[#ec4067] bg-[#08153c] p-4">
                    {link.sublinks.map((slinks) => (
                      <div key={slinks?.Head}>
                        {slinks?.Head && (
                          <h1 class="my-6 flex items-center text-left text-lg font-semibold uppercase hover:text-[#ec4067]">
                            <a
                              class="hover:text-[#ec4067]"
                              href={slinks?.headlink}
                            >
                              {slinks?.Head}
                            </a>
                            <img
                              src="arrow-forward-circle.svg"
                              alt="arrow"
                              class="ml-2 text-white"
                              height={50}
                              width={50}
                            />
                          </h1>
                        )}
                        {slinks?.desc && (
                          <p class="my-6 text-lg font-semibold">
                            {slinks.desc}
                          </p>
                        )}

                        {slinks.links.map((slink) => (
                          <li
                            class="my-2 text-sm text-gray-700"
                            key={slink.name}
                          >
                            <a class="hover:text-[#ec4067]" href={slink.link}>
                              {slink.name}
                            </a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* mobile */}

          <div
            class={`${
              heading.value === link.name ? "md:hidden" : "hidden"
            } bg-inherit`}
          >
            {link.sublinks?.map((slinks) => (
              <div key={slinks?.Head}>
                {slinks?.Head && (
                  <div>
                    <h1 class="py-2 pl-6 pr-5 text-lg font-semibold md:pr-0">
                      {slinks?.Head}
                    </h1>
                  </div>
                )}

                <div>
                  {slinks.links.map((slink) => (
                    <li class="py-2 pl-10" key={slink.name}>
                      <a href={slink.link}>{slink.name}</a>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});
