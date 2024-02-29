import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import "../styles/testimonial.scss";

const testimonials = [
  {
    name: "Chika Okonkwo",
    company: "Anbe",
    description:
      "Working with Katalyst Technologies has been a game-changer for our business. Their custom software development services helped us streamline our operations and enhance our productivity. We highly recommend their expertise to any organization seeking innovative IT solutions.",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709034092/1043_ah7rtl.jpg",
  },

  {
    name: "Adewale Adekunle",
    company: "H2O Water Delivery",
    description:
      "We are immensely grateful for the exceptional IT infrastructure management services delivered by Katalyst Technologies. Their comprehensive approach ensured that our systems were secure, reliable, and optimized for performance. It has been a pleasure working with such a competent team.",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709034709/290_qnpjlo.jpg",
  },
  {
    name: "Ngozi Onuoha",
    company: "Online Banker Reporting System",
    description:
      "Katalyst Technologies played a pivotal role in our digital transformation journey. Their strategic consulting services provided invaluable insights, enabling us to modernize our operations and stay ahead of the curve. We commend their professionalism and commitment to excellence.",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709034185/1392_ldt8zi.jpg",
  },
  {
    name: "Emeka Nwachukwu",
    company: "TechGenius Solutions",
    description:
      "Katalyst Technologies exceeded our expectations with their e-commerce solutions. Their team has a unique attention to detail and dedication to delivering a seamless online shopping experience significantly boosted our sales and customer satisfaction. We highly endorse their services .",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709034699/doctor-consulting-patient-giving-recommendation-african-american-doctor-during-his-work-with-patients-explaining-recipes-drug-daily-hard-work-health-lives-saving-during-epidemic_fehwz7.jpg",
  },
  {
    name: "Aisha Mohammed",
    company: "HealthCare Innovations",
    description:
      "We are immensely impressed by the data analytics and business intelligence solutions provided by Katalyst Technologies. Their insights-driven approach empowered us to make data-driven decisions, leading to improved patient outcomes and operational efficiency. Kudos to their team for their expertise and professionalism.",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709034167/african-woman-working-psychology-clinic-waiving-saying-hello-happy-smiling-friendly-welcome-gesture_lwod4y.jpg",
  },
  {
    name: "Olufemi Okeke",
    company: "Global Logistics Network",
    description:
      "Katalyst Technologies played a crucial role in our digital transformation journey. Their strategic consulting services helped us navigate complex challenges and leverage emerging technologies to optimize our logistics operations. We are grateful for their partnership and highly recommend their services to others.",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709034792/business-man-relaxing-after-finishing-task-taking-break-startup-office-employee-feeling-carefree-sitting-with-hands-head-relax-daydream-after-job-is-done-peaceful-adult_1_v2ljxf.jpg",
  },
];

export default function Example() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="flex">
        <button className="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
      <div>
      <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container ">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name}>
                  <div className={`bg-red-500 p-10 lg:w-[1200px] mx-2`}>
                    <Testify data={testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    {/*    <div className="">
          {testimonials.map((testimonial) => (
              <div key={testimonial.name}>
                <Testify data={testimonial} />
              </div>
          ))}
        </div>*/}
      </div>
    </div>
  );
}


function Testify(props) {
  return (
    <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
        <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
          <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
            <Image
              width={400}
              height={400}
              priority={true}
              className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
              src={props.data.image}
              alt=""
            />
          </div>
        </div>
        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
          <figure className="relative isolate pt-6 sm:pt-12">
            <svg
              viewBox="0 0 162 128"
              fill="none"
              aria-hidden="true"
              className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
            >
              <path
                id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
              />
              <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
            </svg>
            <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <p>{props.data.description}</p>
            </blockquote>
            <figcaption className="mt-8 text-base">
              <div className="font-semibold text-white">{props.data.name}</div>
              <div className="mt-1 text-gray-400">{props.data.company}</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
