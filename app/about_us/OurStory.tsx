import { Texts } from "@/data/data";
import hero from "../../public/about-hero.png"
const OurStory = () => {
  return (
    <section >
      <div className="mt-[100px]  p-2 sm:p-0 flex container mx-auto sm:justify-between flex-col  sm:flex-row justify-center items-center  ">
      <div className="max-w-[544px]">
        <div className="sm:text-[54px] text-4xl font-[510] ">Our Story</div>
        <div className="mt-10 space-y-4 max-w-[500px] tracking-wide leading-7         ">
          {Texts.map((text) => (
            <p key={text.id}>{text.title}</p>
          ))}
        </div>
      </div>
      <div className="max-w-[705px] mt-4 sm:mt-0">
        <img src={hero.src} alt="about" />
      </div>
      </div>
    </section>
  );
};

export default OurStory;
