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
        <h2 className="text-3xl font-semibold">Son yazılarım</h2>
        <div className="space-y-6 mt-5">
          {posts.map((post: Post) => {
            return (
              <article key={post._id}>
                {post.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.tags.map((tag: string) => (
                      <Link key={tag} href={`/blog/tag/${tag}`}>
                        <a className="bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-sm font-medium rounded-full hover:bg-blue-100 dark:hover:bg-blue-600 transition-all duration-200 ease-in-out text-zinc-600 dark:text-zinc-300 dark:group-hover:text-zinc-300 group-hover:text-blue-900">
                          {tag}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
                <h3 className="font-semibold text-xl mt-1">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </a>
                  </Link>
                </h3>
                <p className="opacity-80">{post.subtitle}</p>
                <footer className="flex items-center space-x-2 opacity-70 text-sm mt-2">
                  <time dateTime={post.date}>
                    {format(parseISO(post.date), "d LLLL yyyy", {
                      locale: tr,
                    })}
                  </time>
                  <span className="opacity-50">·</span>
                  <span>
                    {Math.round(post.readingTime.minutes)} dakikalık okuma
                  </span>
                </footer>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
