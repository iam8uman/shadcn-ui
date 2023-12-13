import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import img from "../../../public/log.jpg";
import { Card } from "@/components/ui/card";
import { CardDemo } from "@/components/Card";
import './About.module.css'

export default function page() {
  return (
    <>
      <div className="flex mx-20 flex-row gap-10 bg-muted alpha">
        <div className="w-full  text-center bg-muted">
          <AspectRatio ratio={16 / 9} className="">
            <h1 className=" p-5 mx-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl sm:text-2xl md:text-xl">
              Welcome to the Why Suman Code Academy!
            </h1>
            <p className="mx-10 p-5 text-sm sm:text-2xl md:text-3xl">
              Learn to code by watching our videos Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nesciunt culpa nostrum praesentium
              sit. Laborum voluptatum alias saepe eligendi in dolores molestias
              quod. Est, officia tenetur nobis adipisci alias eaque laboriosam?
            </p>
              <Button variant="outline" className="mx-3">Get Started</Button>
              <Button variant="destructive">Get Started</Button>
          </AspectRatio>
        </div>
        <div className="img m-4 rounded-md ">
          <Image src={img} alt="hero" width={500} height={500} />
        </div>
      </div>
    

      <div className="flex flex-wrap justify-center gap-7 m-5 p-4">
        <CardDemo className=" hover:rotate-3 delay-200 duration-100"/>
        <CardDemo/>
        <CardDemo/>
        <CardDemo/>
        <CardDemo/>
        <CardDemo/>
        <CardDemo/>
        </div>
    </>
  );
}
