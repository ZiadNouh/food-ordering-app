import MainHeading from "@/components/main-heading";
import { Routes } from "@/constants/enums";

async function About() {
  return (
    <section className="section-gap" id={Routes.ABOUT}>
      <div className="container text-center">
        <MainHeading subTitle={"our story"} title={"about us"} />
        <div className="text-accent max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>{"one"}</p>
          <p>{"two"}</p>
          <p>{"three"}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
