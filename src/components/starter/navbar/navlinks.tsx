// @ts-ignore
import { $, QwikJSX, component$, useSignal } from "@builder.io/qwik";
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
interface SingleLink {
  href: string;
  title: string;
  classes?: string;
}
// Main component
export default component$(() => {
  // State for heading
  const heading = useSignal("");

  const handleClick = $((link: string) => {
    if (heading.value === link) {
      heading.value = ""; // Close the link if double-clicked
    } else {
      heading.value = link;
    }
  });

  return (
    <div class="flex flex-col items-start font-medium md:flex-row md:items-center md:justify-between">
      {/* First Link - How We Help */}
      <div>
        <div class="group px-3 text-left transition-all duration-1000 ease-in-out md:cursor-pointer">
          <div class="group flex items-center justify-around gap-2">
            <h1
              class="py-7 text-sm uppercase hover:text-[#ec4067]"
              //
              onClick$={() => handleClick("How We Help")}
            >
              How We Help
            </h1>
            <Icon
              src="arrow-down.svg"
              alt="arrow"
              classes="z-50 bg-transparent duration-300 group-hover:rotate-180"
              height={10}
              width={20}
            />
          </div>
          <div>
            <div class="absolute top-20 hidden max-w-[60vw]  hover:md:block group-hover:md:block">
              <div class="py-3">
                <div class="absolute left-3 z-40 mt-1 h-4 w-4 rotate-45 border-l border-t border-[#ec4067] bg-[#08153c]"></div>
              </div>
              <div class="relative grid grid-cols-2 gap-4 rounded-lg border-t border-[#ec4067] bg-[#08153c] p-4">
                <div class=" px-4 py-4">
                  <h1 class=" my-6 flex items-center text-left text-lg font-semibold capitalize">
                    <a class="hover:text-[#ec4067]" href="#">
                      Website Redesign
                    </a>
                    <Icon
                      src="arrow-forward-circle.svg"
                      alt="arrow"
                      classes="ml-2 -rotate-45 text-white duration-200 hover:rotate-0"
                      height={30}
                      width={30}
                    />
                  </h1>
                  <p class="my-6 text-lg font-semibold">
                    Elevate your brand with website redesign services that take
                    your website from “good enough” to your industry’s gold
                    standard.
                  </p>
                  <li class="my-2 flex text-sm text-gray-700">
                    <a class=" hover:text-[#ec4067]" href="#">
                      Web Design
                    </a>
                    <Icon
                      src="arrow-down.svg"
                      alt="arrow"
                      classes="ml-2 -rotate-90 fill-white duration-200 hover:rotate-0"
                      height={15}
                      width={20}
                    />
                  </li>
                  <li class="my-2 flex text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Web Development
                    </a>
                    <Icon
                      src="arrow-down.svg"
                      alt="arrow"
                      classes="ml-2 -rotate-90 fill-white duration-200 hover:rotate-0"
                      height={15}
                      width={20}
                    />
                  </li>
                  <li class="my-2 flex text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Wordpress
                    </a>
                    <Icon
                      src="arrow-down.svg"
                      alt="arrow"
                      classes="ml-2 -rotate-90 fill-white duration-200 hover:rotate-0"
                      height={15}
                      width={20}
                    />
                  </li>
                  <li class="my-2 flex  text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Shopify
                    </a>
                    <Icon
                      src="arrow-down.svg"
                      alt="arrow"
                      classes="ml-2 -rotate-90 fill-white duration-200 hover:rotate-0"
                      height={15}
                      width={20}
                    />
                  </li>
                </div>
                <div class="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2  transform border-l-[1px] border-gray-700"></div>
                <div class="group px-8 py-8">
                  <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize group-hover:text-[#ec4067]">
                    <a class="hover:text-[#ec4067]" href="#">
                      Website Support
                    </a>

                    <Icon
                      src="arrow-forward-circle.svg"
                      alt="arrow"
                      classes="ml-2 -rotate-45 text-white duration-200 hover:rotate-0"
                      height={30}
                      width={30}
                    />
                  </h1>
                  <p class="my-6 text-lg font-semibold">
                    Enhance and protect your existing site with dedicated
                    website support that plans, executes, and measures
                    improvements.
                  </p>
                  <li class="my-2 flex text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      CRO
                    </a>
                    <Icon
                      src="arrow-down.svg"
                      alt="arrow"
                      classes="ml-2 -rotate-90 fill-white duration-200 hover:rotate-0"
                      height={15}
                      width={20}
                    />
                  </li>
                  <li class="my-2 flex text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Landing Pages
                    </a>
                    <Icon
                      src="arrow-down.svg"
                      alt="arrow"
                      classes="ml-2 -rotate-90 fill-white duration-200 hover:rotate-0"
                      height={15}
                      width={20}
                    />
                  </li>
                  <li class=" my-2 flex text-sm text-gray-700">
                    <a class="hover:text-[#ec4067]" href="#">
                      Website Analytics
                    </a>
                    <Icon
                      src="arrow-down.svg"
                      alt="arrow"
                      classes="ml-2 -rotate-90 fill-white duration-200 hover:rotate-0"
                      height={15}
                      width={20}
                    />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile menu for how we help */}
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
              <SingleSubMenuLink href="#" title="Web Development" />
              <SingleSubMenuLink href="#" title="Web Design" />
              <SingleSubMenuLink href="#" title="Wordpress" />
              <SingleSubMenuLink href="#" title="Shopify" />
            </div>
            <div>
              <h1 class="py-2 pl-6 pr-5 text-lg font-semibold md:pr-0">
                Website Support
              </h1>
              <SingleSubMenuLink href="#" title="CRO" />
              <SingleSubMenuLink href="#" title="Landing Pages" />
              <SingleSubMenuLink href="#" title="Website Analytics" />
            </div>
          </div>
        </div>
      </div>

      <SingleMainNavLink href="#" title="Work" />

      {/* third Link - Resources */}
      <div>
        <div class="group px-3 text-left md:cursor-pointer">
          <div class="group flex items-center justify-around gap-2">
            <h1
              class="py-7 text-sm uppercase hover:text-[#ec4067]"
              // onClick$={() =>
              //   heading.value !== "Resources"
              //     ? (heading.value = "Resources")
              //     : (heading.value = "")
              // }
              onClick$={() => handleClick("Resources")}
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
            <div class="absolute top-20 hidden max-w-[50vw]  duration-300 hover:md:block group-hover:md:block">
              <div class="py-3">
                <div class="absolute left-3 mt-1 h-4 w-4 rotate-45 border-l border-t border-[#ec4067] bg-[#08153c]"></div>
              </div>
              <div class="grid grid-cols-2 gap-10 rounded-lg border-t border-[#ec4067] bg-[#08153c] px-8 py-8 ">
                <div>
                  <div class="group">
                    <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize hover:text-[#ec4067]">
                      <a class="hover:text-[#ec4067]" href="#">
                        Blog
                      </a>
                      <img
                        src="arrow-forward-circle.svg"
                        alt="arrow"
                        class="ml-2 -rotate-45 text-white duration-200 hover:rotate-0"
                        height={30}
                        width={30}
                      />
                    </h1>
                  </div>
                  <div class="group">
                    <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize group-hover:text-[#ec4067]">
                      <a class="hover:text-[#ec4067]" href="#">
                        Resources
                      </a>
                      <img
                        src="arrow-forward-circle.svg"
                        alt="arrow"
                        class="ml-2 -rotate-45 text-white duration-200 hover:rotate-0"
                        height={30}
                        width={30}
                      />
                    </h1>
                  </div>
                  <div class="group">
                    <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize group-hover:text-[#ec4067]">
                      <a class="hover:text-[#ec4067]" href="#">
                        Project Calculator
                      </a>
                      <img
                        src="arrow-forward-circle.svg"
                        alt="arrow"
                        class="ml-2 -rotate-45 text-white duration-200 hover:rotate-0"
                        height={30}
                        width={30}
                      />
                    </h1>
                  </div>
                  <div class="group">
                    <h1 class="my-6 flex items-center text-left text-lg font-semibold capitalize group-hover:text-[#ec4067]">
                      <a class="hover:text-[#ec4067]" href="#">
                        ROI Calculator
                      </a>
                      <img
                        src="arrow-forward-circle.svg"
                        alt="arrow"
                        class="ml-2 -rotate-45 text-white duration-200 hover:rotate-0"
                        height={30}
                        width={30}
                      />
                    </h1>
                  </div>
                </div>

                <div class="flex flex-col items-center justify-around rounded-lg bg-gradient-to-r from-purple-900 to-pink-500 px-4 py-2 text-center text-white">
                  <a
                    class="self-start text-sm font-semibold uppercase text-white"
                    href="#"
                  >
                    Featured
                  </a>
                  <a class="px-4 text-2xl text-white" href="#">
                    The Ultimate Website Redesign Project Plan and Worksheet.
                  </a>
                  <a
                    class="flex items-center justify-center self-end text-white duration-100 hover:scale-90"
                    href="#"
                  >
                    Read Now{" "}
                    <img
                      src="arrow-down.svg"
                      alt="arrow"
                      class="ml-2 -rotate-90 fill-white duration-200 hover:rotate-0"
                      height={20}
                      width={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div
          class={`${
            heading.value === "Resources" ? "md:hidden" : "hidden"
          } bg-inherit`}
        >
          <div>
            <SingleSubMenuLink
              href="#"
              title="Blog"
              classes="py-2 pl-4 pr-5 text-lg font-semibold md:pr-0"
            />

            <SingleSubMenuLink
              href="#"
              title="Resources"
              classes="py-2 pl-4 pr-5 text-lg font-semibold md:pr-0"
            />
            <SingleSubMenuLink
              href="#"
              title="Project Calculator"
              classes="py-2 pl-4 pr-5 text-lg font-semibold md:pr-0"
            />
            <SingleSubMenuLink
              href="#"
              title="ROI Calculator"
              classes="py-2 pl-4 pr-5 text-lg font-semibold md:pr-0"
            />
          </div>
        </div>
      </div>

      <SingleMainNavLink href="#" title="About" />
      <SingleMainNavLink href="#" title="Contact" />
    </div>
  );
});

const SingleSubMenuLink = ({
  href,
  title,
  classes,
}: SingleLink): QwikJSX.Element => {
  return (
    <li class={`py-2 pl-10 ${classes}`}>
      <a href={href}>{title}</a>
    </li>
  );
};
const SingleMainNavLink = ({ href, title }: SingleLink): QwikJSX.Element => {
  return (
    <div>
      <a href={href} class="  ">
        <h1 class="mx-4 py-7 text-sm uppercase text-white hover:text-[#ec4067]">
          {title}
        </h1>
      </a>
    </div>
  );
};
interface IconProps {
  src: string;
  alt: string;
  classes?: string;
  height?: number;
  width?: number;
}

const Icon = ({ src, alt, classes, height, width }: IconProps) => {
  return (
    <img
      src={src}
      alt={alt}
      class={`ml-2 fill-white duration-200  ${classes}`}
      height={height}
      width={width}
    />
  );
};
