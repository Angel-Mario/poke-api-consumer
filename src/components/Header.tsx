import { HeaderArticleLink } from "./HeaderArticleLink";
import { HeaderNav } from "./HeaderNav";
import { HeadArticles } from "../utils/consts.ts";

export default function Header() {
  return (
    <header className="flex w-0 flex-col sm:w-3/12 [@media(min-width:990px)]:w-5/12">
      <HeaderNav />
      <section className="mx-3 mt-5 inline-grid grid-cols-1 gap-3 [@media(min-width:990px)]:grid-cols-2">
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
    </header>
  );
}
