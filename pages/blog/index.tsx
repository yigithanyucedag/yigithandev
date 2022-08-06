import Head from "next/head";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { tr } from "date-fns/locale";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Blog - Yiğithan Yücedağ</title>
      </Head>
      <section>
        <h2 className="text-3xl font-medium">Son yazılarım</h2>
        <div className="space-y-6 mt-5">
          {posts.map((post: Post) => {
            return (
              <article key={post._id}>
                <h3 className="font-semibold">
                  <Link href={`/blog/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </h3>
                <footer className="flex items-center space-x-2 text-zinc-500">
                  <time dateTime={post.date}>
                    {format(parseISO(post.date), "d LLLL yyyy", {
                      locale: tr,
                    })}
                  </time>
                  <span className="opacity-50">·</span>
                  <span>{post.readingTime.text}</span>
                </footer>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
