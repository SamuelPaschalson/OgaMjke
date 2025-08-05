import Showcase from "@/components/showcase";
import BlurEllipse from "@/components/blur-ellipse";
import AboutUs from "@/components/about-us";
import OurMission from "@/components/our-mission";
import OurProducts from "@/components/our-products";
import OurRoadmap from "@/components/our-roadmap";
import PoweredBy from "@/components/powered-by";

export default function Home() {
  return (
    <section>
      <Showcase />

      <section className={"w-full relative"}>
        <BlurEllipse className={"top-52 left-40"} />

        <AboutUs />

        <OurMission />
        <BlurEllipse className={"top-[50rem] right-40"} />
        <BlurEllipse className={"top-[70rem] right-[40rem]"} />
        <OurProducts />
        <OurRoadmap />
        <PoweredBy />
      </section>
    </section>
  );
}
