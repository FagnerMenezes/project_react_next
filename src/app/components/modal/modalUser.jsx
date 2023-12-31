"use client";
import { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Example({ children, title, isOpen = false }) {
  const [open, setOpen] = useState(isOpen);
  //console.log(open);
  const cancelButtonRef = useRef(null);
  const handleOpen = () => setOpen(!open);
  //   function openModal() {
  //     setOpen(true);
  //   }

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 h-full "
          initialFocus={cancelButtonRef}
          onClose={() => setOpen(true)}
          backdrop={true}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 decoration-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto bg-slate-100">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  className="
                relative 
                transform 
                overflow-hidden 
                bg-red-300
                rounded-lg 
                text-left 
                shadow-xl 
                transition-all 
                sm:my-8 
                sm:w-1/2
                h-full"
                >
                  <div className="dark:bg-slate-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 h-full">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          {title}
                        </Dialog.Title>
                        <div className="mt-2 divide-slate-500">{children}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <a
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      href="/users"
                    >
                      Voltar
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
