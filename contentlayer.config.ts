import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";

// Node currently can’t pick up on the default exports by `@remark-embedder`.
import fauxRemarkEmbedder from "@remark-embedder/core";
//@ts-ignore
const remarkEmbedder = fauxRemarkEmbedder.default;

const TwitterTransformer = {
  name: "Twitter",
  // shouldTransform can also be async
  shouldTransform(url: string) {
    const { host, pathname } = new URL(url);

    return (
      ["twitter.com", "www.twitter.com"].includes(host) &&
      pathname.includes("/status/")
    );
  },
  // getHTML can also be async
  getHTML(url: string) {
    let id = /([^\/]+$)/.exec(url)?.[1];
    return `<twitterembed id="${id}"/>`;
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `posts/*.mdx`,
  fields: {
    date: {
      type: "date",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    subtitle: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    url: {
      type: "string",
      resolve: (post) => `/blog/${post.slug}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => {
        return readingTime(doc.body.raw);
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [[remarkEmbedder, { transformers: [TwitterTransformer] }]],
  },
});
