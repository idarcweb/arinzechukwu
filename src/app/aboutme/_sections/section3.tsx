import { BsAwardFill, BsCheck, BsHeadphones } from "react-icons/bs";
import { PiBird, PiCurrencyDollarSimpleDuotone } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { BiBook, BiFootball } from "react-icons/bi";
import JourneyCard from "../_card/journeyCard";
import Interests from "../_card/interests";

const Section3 = () => {
  return (
    <section className="grid w-full grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-10 duration-500 transition-all">
      <div className="flex flex-col gap-6 w-full duration-500 transition-all">
        <h1 className="text-white/70 font-semibold font-Mont tracking-wide">
          My Journey
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <JourneyCard
            id={1}
            text="Experience"
            journey="2 year job"
            icon={BsAwardFill}
            bg={true}
          />
          <JourneyCard
            id={2}
            text="completed"
            journey="12+ Projects"
            icon={BsCheck}
            bg={false}
          />
          <JourneyCard
            id={3}
            text="available"
            journey="Freelance"
            icon={PiBird}
            bg={false}
          />
          <JourneyCard
            id={4}
            text="24/7"
            journey="Support"
            icon={LiaHandsHelpingSolid}
            bg={false}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full duration-500 transition-all">
        <h1 className="text-white/70 font-semibold font-Mont tracking-wide ">
          My Interests
        </h1>
        <div className="flex items-center gap-6 flex-wrap">
          <Interests text="Music" icon={BsHeadphones} />
          <Interests text="Football" icon={BiFootball} />
          <Interests
            text="Cryptocurrencies"
            icon={PiCurrencyDollarSimpleDuotone}
          />
          <Interests text="Read" icon={BiBook} />
        </div>
      </div>
    </section>
  );
};

export default Section3;
