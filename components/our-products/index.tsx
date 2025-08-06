"use client";

import React from "react";
import Image from "next/image";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

const data = [
  {
    id: nanoid(),
    title: "Freetyl Dapp",
    image: "/freetyl.png",
    content:
      "FREETYL is a Discover, Play, Stream and Connect platform for gamers, content creators and game developers. Freetyl Dapp isn’t just a streaming platform , it is a streaming revelation, offering an all-in-one interface where game discovery, gameplay and community engagement blend seamlessly.",
  },
  {
    id: nanoid(),
    title: "Joysticklabs Games",
    image: "/jsk-games.png",
    content:
      "Immerse yourself in captivating adventures and simulations, crafted by the Joysticklabs team for users entertainment. The games will range from 2D to 3D games of different genres",
  },
  {
    id: nanoid(),
    title: "BR Academy",
    image: "/back-room-academy.png",
    content:
      "Explore comprehensive courses and workshops led by industry experts, empowering developers, investors, and enthusiasts to thrive in the world of web 3 gaming.",
  },
];

const OurProducts = () => {
  return (
    <section className={"container pt-52 v-stack space-y-20"}>
      <h1 className={"text-center text-primary h1 text-4xl"}>OUR PRODUCTS</h1>

      <section className={"grid grid-cols-1 lg:grid-cols-3 gap-10"}>
        {data.map((d, index) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0 + index * 0.5 }}
            className="flex items-stretch"
          >
            <div
              className={
                "border border-gray-500 bg-gray-500/10 v-stack space-y-7 p-7 rounded-3xl"
              }
            >
              <div className={"h-fit w-fit p-7 bg-gray-950 rounded-3xl"}>
                <Image src={d.image} width={60} height={60} alt={d.title} />
              </div>

              <span className={"text-xl font-semibold"}>{d.title}</span>
              <p className={"font-medium"}>{d.content}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default OurProducts;
