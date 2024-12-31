import Tailwind from "primereact/passthrough/tailwind";
import { twMerge } from "tailwind-merge";

const TailwindDesign = Tailwind;
(TailwindDesign.progressbar = {
  root: {
    className: twMerge(
      "overflow-hidden relative",
      "border-0 h-1 bg-gray-200 rounded-md dark:bg-gray-800",
    ),
    label: "hidden w-0",
  },
}),
  (TailwindDesign.inputtext = {
    root: () => ({
      className: twMerge(
        "m-0",
        "font-sans text-gray-600 border border-gray-300 transition-colors duration-200 appearance-none rounded-lg",
        "p-3 text-base",
      ),
    }),
  }),
  (TailwindDesign.panel = {
    header: () => ({
      className: twMerge(
        "flex items-center justify-between", // flex and alignments
        "border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg", // borders and colors
        "py-3 px-5", // condition
      ),
    }),
    toggler: {
      className: twMerge(
        "inline-flex items-center justify-center overflow-hidden relative no-underline", // alignments
        "w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out", // widths, borders, and transitions
        "hover:text-gray-900 hover:border-transparent hover:bg-gray-200", // hover
        "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]", // focus
      ),
    },
    content: {
      className: twMerge(
        "p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg",
      ),
    },
  });

export const TAILWINDVALUE = {
  ripple: true,
  unstyled: true,
  pt: TailwindDesign,
  ptOptions: {
    mergeSections: true,
    mergeProps: true,
    classNameMergeFunction: twMerge,
  },
};
