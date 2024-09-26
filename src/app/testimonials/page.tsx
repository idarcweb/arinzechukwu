import Image from "next/image";
import Page from "../_components/layouts/pageLayout";
import StarRating from "../_components/ui/starRating";
import { testimonials } from "@/data";
import { BsQuote } from "react-icons/bs";

const page = () => {
  return (
    <Page text="" title="Testimonials" px="md:px-12">
      <div className="flex mxd:flex-row items-center justify-center flex-wrap gap-8 w-full duration-500 transition-all">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            src={testimonial.img}
            comment={testimonial.quote}
            name={testimonial.name}
            occupation={testimonial.title}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </Page>
  );
};

export default page;

type CardsProps = {
  src: string;
  rating: number;
  name: string;
  occupation: string;
  comment: string;
};

function Card({ src, rating, name, occupation, comment }: CardsProps) {
  return (
    <div className="text-base relative flex flex-col text-white/70 font-Mont w-[80vw] sm:w-[60vw] lg:w-[30vw] rounded-xl bg-darkport/30 px-6 py-6 shadow-lg mxd:scale-90 duration-500 transition-all">
      <span className="rounded-full overflow-hidden w-16 h-16 absolute -left-6  top-6 border border-portblack">
        <Image src={src} alt="client image" fill className=" opacity-70" />
      </span>
      <div className="ml-6">
        <div className="flex items-baseline justify-between">
          <div>
            <h1 className="font-semibold text-lg font-Fredoka">{name}</h1>
            <p className="italic text-xs text-liteport/70 font-light">
              {occupation}
            </p>
          </div>
          <div>
            <StarRating rating={rating} />
          </div>
        </div>

        <p className="mt-6 duration-500 transition-all text-sm font-light leading-5 ">
          <BsQuote />
          {comment}
        </p>
      </div>
    </div>
  );
}
