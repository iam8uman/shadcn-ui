import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import img from "@/../public/log.jpg";

const Card = () => {
  return (
    <>
      <div>
        <div className="card flex justify-center align-middle m-5 p-3 max-w-sm ">
          <div className="cardHeader bg-muted  ">
            <h1 className="text-xl font-semibold font-serif text-center mt-3">
              Card Header
            </h1>
            <div className="img rounded-lg flex justify-center m-3 max-h-60 bg-contain sm: max-h-full! ">
              <Image
                src="/log.jpg"
                alt="hero"
                className="rounded-lg hover:zoom-in-50"
                width={300}
                height={300}
              />
            </div>
            <p className="cardFooter mx-5 text-sm text-left">
              ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat
              perspiciatis non aspernatur quasi. Culpa aliquid, ducimus
              molestias nisi veritatis necessitatibus! Cupiditate, voluptatum!
              Ut, maxime illum. Repudiandae aliquam excepturi debitis.
            </p>
            <div className="flex gap-5 justify-around m-3">
              <Button variant="outline" className="btn">
                Click me
              </Button>
              <Button variant="destructive" className="btn">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <form className="flex items-center space-x-6">
        <div className="shrink-0">
          <Image
            className="h-16 w-16 object-cover rounded-full"
            src={img}
            alt="Current profile photo"
          />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          />
        </label>
      </form>
    </>
  );
};

export default Card;
