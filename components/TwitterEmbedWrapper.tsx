import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { TwitterTweetEmbedProps } from "react-twitter-embed/dist/components/TwitterTweetEmbed";
import { usePrefersColorScheme } from "@anatoliygatt/use-prefers-color-scheme";

export default function TwitterEmbedWrapper(props: TwitterTweetEmbedProps) {
  const preferredColorScheme = usePrefersColorScheme();

  return (
    <TwitterTweetEmbed
      options={{ theme: preferredColorScheme }}
      //workaround: force component to render by passing a dummy key
      key={preferredColorScheme === "dark" ? "1" : "2"}
      {...props}
    />
  );
}
