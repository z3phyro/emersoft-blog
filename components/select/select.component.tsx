import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment } from "react";

interface Props {
  className?: string;
  selected: string;
  setSelected: (value: string) => void;
  options: string[];
  placeholder?: string;
}
export default function Select({ selected, setSelected, options, className, placeholder }: Props) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={`relative ${className || ""}`}>
        <Listbox.Button className="relative h-[42px] w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          {selected ? (
            <span className="block truncate">{selected}</span>
          ) : (
            <span className="block truncate text-gray-600">{placeholder || "Select option"}</span>
          )}
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {selected && (
              <Listbox.Option
                key={"clear"}
                className={({ active }) =>
                  `relative select-none py-2 pl-10 pr-4 cursor-pointer ${active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={""}>
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                      Clear filter
                    </span>
                  </>
                )}
              </Listbox.Option>
            )}
            {options.map((option) => (
              <Listbox.Option
                key={option}
                className={({ active }) =>
                  `relative select-none py-2 pl-10 pr-4 cursor-pointer ${active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={option}>
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                      {option}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
