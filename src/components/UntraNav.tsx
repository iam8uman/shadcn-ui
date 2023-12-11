import React from "react";
import Theme from "./Theme";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const UltraNav = () => {
  return (
    <div className=" flex justify-around  p-2">
      <div className="icon flex ">
        <Avatar className="m-2">
          <AvatarImage src="https://github.com/iam8uman.png" alt="@iam8uman" />
          <AvatarFallback>SS</AvatarFallback>
        </Avatar>
        <h2 className="font-bold my-4 hidden sm:flex">WhySumanCode?</h2>
      </div>
      <div className="flex-row gap-5 hidden sm:flex">
        <ul className="flex flex-row gap-6 my-4 text-sm">
          <li className="mx-5">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-5">
            <Link href="/about">About Us</Link>
          </li>
          <li className="mx-5">
            <Link href="/blog/hello-world">Blog Post</Link>
          </li>
          <li className="mx-5 hover:font-semibold transition 2s">
            <Link href="/blog/hello-world">Contact</Link>
          </li>
        </ul>
      </div>{" "}
      <Theme />
    </div>
  );
};

export default UltraNav;
