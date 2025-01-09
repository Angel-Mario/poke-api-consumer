import { HeaderArticleLink } from "./HeaderArticleLink";
import { HeaderNav } from "./HeaderNav";
import { HeadArticles } from "../../utils/consts.ts";
import { ScrollPanel } from "primereact/scrollpanel";

export default function Header() {
  return (
    <header className="flex w-full flex-col sm:h-screen sm:w-4/12 navBar:w-5/12 xl:w-3/12">
      <HeaderNav />
      <ScrollPanel style={{ width: "100%", height: "100%" }}>
        <section className="mx-2 mt-2 flex w-fillAvailable flex-row gap-3 sm:mx-3 sm:mt-5 sm:inline-grid sm:grid-cols-1 navBar:grid-cols-2">
          {HeadArticles.data.map((article) => (
            <HeaderArticleLink
              children={article.children}
              theme={article.theme}
              button={article.button}
              link={article.link}
              key={article.theme}
            ></HeaderArticleLink>
          ))}
        </section>
      </ScrollPanel>
    </header>
  );
}
