import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Card from '@/components/PhotoCard'

const page = () => {
  return (
    <div className="flex flex-wrap justify-center">
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
    </div>
  );
};

export default page;
