import React from "react";
import Image from "next/image";

const OurMission = () => {
  return (
    <section
      className={
        "container v-stack lg:h-stack items-center justify-between pt-32 lg:space-x-32 space-y-14 lg:space-y-0"
      }
    >
      <section className={"block lg:hidden"}>
        <Image src={"/vr.png"} width={700} height={300} alt={"vr"} />
      </section>
      <section className={"v-stack space-y-10"}>
        <h1 className={"h1 text-primary text-center"}>OUR MISSION</h1>
        <span className={"tracking-widest font-semibold text-xl"}>
          To create products that will enhance web3 gaming experiences. Create
          more exposure to web3 games, products etc.
        </span>
      </section>

      <section className={"hidden lg:block"}>
        <Image src={"/vr.png"} width={700} height={300} alt={"vr"} />
      </section>
    </section>
  );
};

export default OurMission;
