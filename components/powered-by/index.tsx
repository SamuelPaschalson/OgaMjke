import React from "react";
import { nanoid } from "nanoid";
import Image from "next/image";

const data = [
  {
    id: nanoid(),
    name: "near",
    image: "/near.png",
  },
  {
    id: nanoid(),
    name: "ninja game build",
    image: "/ngb.png",
  },
  {
    id: nanoid(),
    name: "bandzai",
    image: "/bandzai.png",
  },
  {
    id: nanoid(),
    name: "livepeer",
    image: "/livepeer.png",
  },
  {
    id: nanoid(),
    name: "trikon.png",
    image: "/trikon.png",
  },
  {
    id: nanoid(),
    name: "nexal",
    image: "/nexal.png",
  },
];

const PoweredBy = () => {
  return (
    <section className={"container pt-52 v-stack space-y-20"}>
      <h1 className={"text-center text-primary h1 text-4xl"}>POWERED BY</h1>

      <section className={"grid grid-cols-2 lg:grid-cols-3 gap-20"}>
        {data.map((d) => (
          <Image
            src={d.image}
            alt={d.name}
            key={d.id}
            width={150}
            height={100}
          />
        ))}
      </section>
    </section>
  );
};

export default PoweredBy;
