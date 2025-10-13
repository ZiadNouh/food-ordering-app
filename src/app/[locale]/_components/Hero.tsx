import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="md:py-12">
          <h1>Slice into Happiness</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            dolore cupiditate provident dicta porro ut quam non ducimus
            molestias temporibus delectus est, assumenda, repudiandae tempore
          </p>
          <div>
            <Link
              href={`/${Routes.MENU}`}
              className={`${buttonVariants({
                size: "lg",
              })} space-x-2 !px-4 !rounded-full uppercase`}
            >
              Order Now
              <ArrowRightCircle className="!w-5 !h-5" />
            </Link>
            <Link
              href={`${Routes.ABOUT}`}
              className="flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold"
            >
              Learn More
              <ArrowRightCircle className={`!w-5 !h-5`} />
            </Link>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            src={"/assets/images/pizza.png"}
            alt="peperoni pizza"
            loading="eager"
            priority
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
