"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <header
      className={
        "lg:hidden h-stack items-center justify-between container py-10 relative"
      }
    >
      {isOpen && (
        <section
          className={
            "h-stack items-start justify-between absolute bg-[#CECECF] top-0 left-0 right-0 p-10 border-b rounded-b-2xl"
          }
        >
          <nav>
            <ul
              className={
                "v-stack space-y-4 font-semibold h-auto transition-all duration-300"
              }
            >
              <li>
                <Link
                  className={"hover:text-primary transition-colors"}
                  title={"Joystick Labs"}
                  href={"/"}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setIsSubMenuOpen((prev) => !prev)}>
                <div
                  className={
                    "h-stack items-center space-x-2 hover:text-primary transition-colors"
                  }
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`${isSubMenuOpen ? "rotate-180" : "rotate-0"} transition-all duration-300`}
                    size={20}
                  />
                </div>

                {isSubMenuOpen && (
                  <div className={"ml-5 mt-2 w-full p-2 rounded-md"}>
                    <ul className={"v-stack space-y-2 text-sm"}>
                      <li>
                        <Link
                          href={"https://docsend.com/view/prunafbvmgg8xuye"}
                          target={"_blank"}
                        >
                          White Paper
                        </Link>
                      </li>
                      <li>
                        <Link href={"#!"}>Documentation</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link
                  className={"hover:text-primary transition-colors"}
                  title={"Ecosystem - Joystick Labs"}
                  onClick={() => setIsOpen(false)}
                  href={"/ecosystem"}
                >
                  Ecosystem
                </Link>
              </li>

              <li>
                <Link href={"#!"}>
                  <Button>Launch App</Button>
                </Link>
              </li>
            </ul>
          </nav>

          <Button
            size={"icon"}
            variant={"link"}
            onClick={() => setIsOpen(false)}
          >
            <X className={"text-primary"} />
          </Button>
        </section>
      )}

      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt={"joystick labs"}
          width={120}
          height={50}
        />
      </Link>

      <Button variant={"link"} size={"icon"} onClick={() => setIsOpen(true)}>
        <Image src={"/menu.png"} alt={"menu"} width={40} height={40} />
      </Button>
    </header>
  );
};

export default HeaderMobile;
