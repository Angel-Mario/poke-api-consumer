import { Ripple } from "primereact/ripple";
import { Link } from "react-router-dom";
import PokeIcon from "../assets/PokeIcon";

export function HeaderArticleLink({
  children,
  link,
  theme,
  button,
}: {
  children: string;
  link: string;
  theme: string;
  button: string;
}) {
  return (
    <Link to={link}>
      <article
        style={{
          backgroundColor: theme,
        }}
        className="p-ripple rounded-xl text-lg font-bold text-white"
      >
        <Ripple
          pt={{
            root: {
              style: {
                backgroundColor: button,
              },
            },
          }}
        />
        <div className="absolute flex h-full w-full flex-row-reverse overflow-hidden">
          <div className="w-14 translate-x-2 translate-y-2">
            <PokeIcon fill={button}></PokeIcon>
          </div>
        </div>
        <h1 className="sticky z-10 mx-2 my-3">{children}</h1>
      </article>
    </Link>
  );
}
