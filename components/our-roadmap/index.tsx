import React from "react";
import Image from "next/image";

const phaseOne = [
  "Paper Writing",
  "Platform UI Design",
  "Website Live",
  "Platform Development",
];

const phaseTwo = ["Early Testing", "Seed/Private Sale", "MVP Launch"];

const phaseThree = ["Public Testing", "Public Sale", "Exchange Listing"];

const phaseFour = [
  "Game Development",
  "Platform Main Launch",
  "Staking 1.0",
  "Intro. To Roadmap 2.0",
];

const OurRoadmap = () => {
  return (
    <section className={"relative pt-40 v-stack space-y-20"}>
      <h2 className={"text-primary h2 text-center"}>OUR ROADMAP</h2>

      <section
        className={
          "h-stack space-x-10 lg:space-x-36 items-stretch justify-center z-10 px-3"
        }
      >
        <section className={"grid grid-cols-1 gap-y-36"}>
          <div></div>
          <div></div>
          <div className={"v-stack space-y-2 mt-24"}>
            <span className={"text-primary pl-6 font-semibold"}>Phase Two</span>
            {phaseTwo.map((d) => (
              <div key={d} className={"h-stack items-center space-x-2"}>
                <Image
                  src={"/controller-sm.png"}
                  width={25}
                  height={20}
                  alt={"controller-icon"}
                />

                <span className={"font-semibold text-sm lg:text-lg"}>{d}</span>
              </div>
            ))}
          </div>
          <div></div>
          <div className={"v-stack space-y-2"}>
            <span className={"text-primary pl-6 font-semibold"}>
              Phase Four
            </span>
            {phaseFour.map((d) => (
              <div key={d} className={"h-stack items-center space-x-2"}>
                <Image
                  src={"/controller-sm.png"}
                  width={25}
                  height={20}
                  alt={"controller-icon"}
                />

                <span className={"font-semibold text-sm lg:text-lg"}>{d}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={"v-stack space-y-3"}>
          {Array(5)
            .fill("x")
            .map((_, i) => (
              <div key={i} className={"v-stack space-y-3"}>
                <div className={"w-2 lg:w-3 h-52 rounded-lg bg-black"}></div>
                <div
                  className={"w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-black"}
                ></div>
              </div>
            ))}
        </section>

        <section className={"grid grid-cols-1 gap-y-24"}>
          <div></div>
          <div className={"v-stack space-y-2"}>
            <span className={"text-primary pl-6 font-semibold"}>Phase One</span>
            {phaseOne.map((d) => (
              <div key={d} className={"h-stack items-center space-x-2"}>
                <Image
                  src={"/controller-sm.png"}
                  width={25}
                  height={20}
                  alt={"controller-icon"}
                />

                <span className={"font-semibold text-sm lg:text-lg"}>{d}</span>
              </div>
            ))}
          </div>
          <div className={"v-stack space-y-2"}>
            <span className={"text-primary pl-6 font-semibold"}>
              Phase Three
            </span>
            {phaseThree.map((d) => (
              <div key={d} className={"h-stack items-center space-x-2"}>
                <Image
                  src={"/controller-sm.png"}
                  width={25}
                  height={20}
                  alt={"controller-icon"}
                />

                <span className={"font-semibold text-sm lg:text-lg"}>{d}</span>
              </div>
            ))}
          </div>
          <div></div>
        </section>
      </section>

      <div
        className={
          "absolute v-stack items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 min-w-[60vh]"
        }
      >
        <Image
          src={"/controller.png"}
          alt={"controller"}
          width={2000}
          height={2000}
        />
      </div>
    </section>
  );
};

export default OurRoadmap;
