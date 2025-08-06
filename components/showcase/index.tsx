"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Waitlist from "@/components/waitlist";
import ShowcaseSlides from "../showcase-slides";

const Showcase = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={
        "container min-h-[80vh] pb-32 v-stack lg:h-stack items-center justify-between space-y-20 lg:space-y-0 lg:space-x-14"
      }
    >
      <Waitlist isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <section
        className={
          "grow v-stack items-start lg:w-[60%] w-full justify-center space-y-6"
        }
      >
        <h2 className={"h2 lg:text-5xl !leading-snug tracking-wider font-bold"}>
          The most Intriguing SPACE for
          <span className={"text-primary"}> Web3</span> Gaming and
          Entertainment.
        </h2>
        <h3 className={"h3 tracking-wider leading-9"}>
          Experience the new frontier of gaming, metaverse and awesome content
        </h3>
        <Button
          size={"lg"}
          className={"font-semibold"}
          onClick={() => setIsOpen(true)}
        >
          Join the waitlist
        </Button>
      </section>

      <aside className="lg:w-[40%] w-full">
        <ShowcaseSlides />
      </aside>
    </section>
  );
};

export default Showcase;
