import Link from "next/link"
import Button from "../../_components/ui/button"
import Image from "next/image"

const Section2 = () => {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-[1.5fr_2fr] font-Mont w-full text-white/70 gap-6 transition-all duration-500 ">
        <div className="relative bg-liteport/4 max-w-[70%] sm:max-w-[40%] md:max-w-[47%] lg:max-w-[100%] min-h-[215.75px] border-2  rounded-xl border-liteport/25 mr-12">
          <Image
            fill
            src="/Dalle.png"
            alt="arinzechukwu's image"
            className="flex object-fill shrink-0 grow-0 "
          />
        </div>

        <div className="flex flex-col w-full">
          <h6 className="pb-3 font-semibold text-xl capitalize">
            Front-End web developer
          </h6>
          <p className="text-sm lg:text-lg leading-relaxed tracking-wide">
            Applying computer engineering principles for effective debugging,
            memory management, and front-end integration with back-end services,
            while optimizing performance and user experience.
          </p>
          <br />
          <p className="mt-2 mb-3 lg:text-lg text-sm leading-relaxed tracking-wide">
            I create responsive, visually appealing designs with interactive
            features that work across all browsers and are accessible to
            everyone.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/resume">
              <Button
                className="py-3 relative hover:text-white/70"
                outline={false}
              >
                Resume
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="py-3" outline={true}>
                Hire
              </Button>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Section2