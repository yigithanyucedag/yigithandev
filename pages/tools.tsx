import { allTools, Tool } from "contentlayer/generated";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
  const tools = allTools.sort((a, b) => a.order - b.order);
  return { props: { tools } };
}

export default function Tools({ tools }: { tools: Tool[] }) {
  return (
    <>
      <NextSeo title="Ekipmanlar" />
      <section>
        <h2 className="text-3xl font-semibold">Ekipmanlar</h2>
        <div className="gap-5 mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool: Tool) => {
            return (
              <div
                key={tool._id}
                className="flex flex-col justify-center bg-zinc-100 dark:bg-zinc-800 p-3 rounded-md"
              >
                <figure className="aspect-square overflow-hidden rounded-md">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="h-full w-full object-contain"
                  />
                </figure>
                <header className="mt-2">
                  <h5 className="opacity-80 text-sm mb-0.5 text-center">
                    {tool.brand}
                  </h5>
                  <h3 className="font-medium text-center">{tool.title}</h3>
                </header>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
