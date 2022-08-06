import React from "react";
import { IconType } from "react-icons";

interface Props {
  url: string;
  Icon: IconType;
}

export default function SocialButton({ url, Icon }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="block group w-12 h-12 bg-zinc-100 dark:bg-zinc-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-600 transition-all duration-200 ease-in-out"
      rel="noreferrer"
    >
      <Icon className="w-full h-full text-zinc-600 dark:text-zinc-300 dark:group-hover:text-zinc-300 group-hover:text-blue-900" />
    </a>
  );
}
