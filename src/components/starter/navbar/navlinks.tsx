// @ts-ignore
import { component$, useSignal } from "@builder.io/qwik";
// import { links as navigationLinks } from "./data";

// Define types for the data
interface Link {
  name: string;
  submenu?: boolean;
  sublinks?: Sublink[];
  link?: string;
  hasFeatured?: boolean;
}

interface Sublink {
  Head?: string;
  headlink?: string;
  desc?: string;
  links: Link[];
}

// Main component
export default component$(() => {
  // State for heading
  const heading = useSignal("");

  return (
    // Main container
    <div class="flex flex-col items-start font-medium md:flex-row md:items-center md:justify-between">
      {/* First Link - How We Help */}
      <div>
        <div class="group px-3 text-left md:cursor-pointer">
          <div class="group flex items-center justify-around gap-2">
            <h1
              class="py-7 text-sm uppercase hover:text-[#ec4067]"
              onClick$={() =>
                heading.value !== "How We Help"
                  ? (heading.value = "How We Help")
                  : (heading.value = "")
              }
            >
              How We Help
            </h1>
            <img
              class="z-50 bg-transparent duration-300 group-hover:rotate-180"
              src="arrow-down.svg"
              alt=""
              height={10}
              width={20}
            />
          </div>
          <div>
            <div class="absolute top-20 hidden max-w-[60vw]  duration-300 hover:md:block group-hover:md:block">
              <div class="py-3">
                <div class="absolute left-3 mt-1 h-4 w-4 rotate-45 border-l border-t border-[#ec4067] bg-[#08153c]"></div>
              </div>
              <div class="grid grid-cols-2 gap-10 rounded border-t border-[#ec4067] bg-[#08153c] p-4">
                <div class="group">
                  <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize group-hover:text-[#ec4067]">
                    <a class="hover:text-[#ec4067]" href="#">
                      Website Redesign
                    </a>
                    <img
                      src="arrow-forward-circle.svg"
                      alt="arrow"
                      class="ml-2 -rotate-45 text-white duration-200 group-hover:rotate-0"
                      height={40}
                      width={40}
                    />
                  </h1>
                  <p class="my-6 text-lg font-semibold">
                    Elevate your brand with website redesign services that take
                    your website from “good enough” to your industry’s gold
                    standard.
                  </p>
                  <li class="my-2 text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Web Design
                    </a>
                  </li>
                  <li class="my-2 text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Web Development
                    </a>
                  </li>
                  <li class="my-2 text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Wordpress
                    </a>
                  </li>
                  <li class="my-2 text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Shopify
                    </a>
                  </li>
                </div>
                <div class="group">
                  <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize group-hover:text-[#ec4067]">
                    <a class="hover:text-[#ec4067]" href="#">
                      Website Support
                    </a>
                    <img
                      src="arrow-forward-circle.svg"
                      alt="arrow"
                      class="ml-2 -rotate-45 text-white duration-200 group-hover:rotate-0"
                      height={40}
                      width={40}
                    />
                  </h1>
                  <p class="my-6 text-lg font-semibold">
                    Enhance and protect your existing site with dedicated
                    website support that plans, executes, and measures
                    improvements.
                  </p>
                  <li class="my-2 text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      CRO
                    </a>
                  </li>
                  <li class="my-2 text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Landing Pages
                    </a>
                  </li>
                  <li class="my-2 text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Website Analytics
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class={`${
            heading.value === "How We Help" ? "md:hidden" : "hidden"
          } bg-inherit`}
        >
          <div>
            <div>
              <h1 class="py-2 pl-6 pr-5 text-lg font-semibold md:pr-0">
                Website Redesign
              </h1>
              <li class="py-2 pl-10">
                <a href="#">Web Design</a>
              </li>
              <li class="py-2 pl-10">
                <a href="#">Web Development</a>
              </li>
              <li class="py-2 pl-10">
                <a href="#">Wordpress</a>
              </li>
              <li class="py-2 pl-10">
                <a href="#">Shopify</a>
              </li>
            </div>
            <div>
              <h1 class="py-2 pl-6 pr-5 text-lg font-semibold md:pr-0">
                Website Support
              </h1>
              <li class="py-2 pl-10">
                <a href="#">CRO</a>
              </li>
              <li class="py-2 pl-10">
                <a href="#">Landing Pages</a>
              </li>
              <li class="py-2 pl-10">
                <a href="#">Website Analytics</a>
              </li>
            </div>
          </div>
        </div>
      </div>

      {/* Second Link - Work */}
      <div>
        <h1 class="mx-4 py-7 text-sm uppercase hover:text-[#ec4067]">Work</h1>
      </div>

      {/* Third Link - About */}
      <div>
        <h1 class="mx-4 py-7 text-sm uppercase hover:text-[#ec4067]">About</h1>
      </div>

      {/* Fourth Link - Resources */}
      <div>
        <div class="group px-3 text-left md:cursor-pointer">
          <div class="group flex items-center justify-around gap-2">
            <h1
              class="py-7 text-sm uppercase hover:text-[#ec4067]"
              onClick$={() =>
                heading.value !== "Resources"
                  ? (heading.value = "Resources")
                  : (heading.value = "")
              }
            >
              Resources
            </h1>
            <img
              class="z-50 bg-transparent duration-300 group-hover:rotate-180"
              src="arrow-down.svg"
              alt=""
              height={10}
              width={20}
            />
          </div>
          <div>
            <div class="absolute top-20 hidden max-w-[60vw]  duration-300 hover:md:block group-hover:md:block">
              <div class="py-3">
                <div class="absolute left-3 mt-1 h-4 w-4 rotate-45 border-l border-t border-[#ec4067] bg-[#08153c]"></div>
              </div>
              <div class="grid grid-cols-2 gap-10 rounded border-t border-[#ec4067] bg-[#08153c] p-4">
                <div>
                  <div class="group">
                    <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize group-hover:text-[#ec4067]">
                      <a class="hover:text-[#ec4067]" href="#">
                        Blog
                      </a>
                    </h1>
                  </div>
                  <div class="group">
                    <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize group-hover:text-[#ec4067]">
                      <a class="hover:text-[#ec4067]" href="#">
                        Resources
                      </a>
                    </h1>
                  </div>
                  <div class="group">
                    <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize group-hover:text-[#ec4067]">
                      <a class="hover:text-[#ec4067]" href="#">
                        Project Calculator
                      </a>
                    </h1>
                  </div>
                  <div class="group">
                    <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize group-hover:text-[#ec4067]">
                      <a class="hover:text-[#ec4067]" href="#">
                        ROI Calculator
                      </a>
                    </h1>
                  </div>
                </div>
                <div>
                  <div>Featured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          class={`${
            heading.value === "Resources" ? "md:hidden" : "hidden"
          } bg-inherit`}
        >
          <div>
            <div>
              <h1 class="py-2 pl-6 pr-5 text-lg font-semibold md:pr-0">Blog</h1>
            </div>
            <div>
              <h1 class="py-2 pl-6 pr-5 text-lg font-semibold md:pr-0">
                Resources
              </h1>
            </div>
            <div>
              <h1 class="py-2 pl-6 pr-5 text-lg font-semibold md:pr-0">
                Project Calculator
              </h1>
            </div>
            <div>
              <h1 class="py-2 pl-6 pr-5 text-lg font-semibold md:pr-0">
                ROI Calculator
              </h1>
            </div>
          </div>
        </div> */}
      </div>

      {/* Fifth Link - Contact Us */}
      <div>{/* Add your HTML structure for the "Contact Us" link */}</div>
    </div>
  );
});
