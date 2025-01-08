import { Ripple } from "primereact/ripple";
import { Link } from "react-router-dom";
import PokeIcon from "../assets/PokeIcon";
import { twMerge } from "tailwind-merge";

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
        className={twMerge(
          "p-ripple h-11 w-fit min-w-20 rounded-xl text-lg font-bold text-gray-100 sm:me-0 sm:h-fit sm:w-full",
          children === "Types" ? "me-6" : "",
        )}
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
        <div className="absolute flex h-11 w-full flex-row-reverse overflow-hidden sm:h-full">
          <div className="w-11 translate-x-2 translate-y-2 sm:w-14">
            <PokeIcon fill={button}></PokeIcon>
          </div>
        </div>
        <h1 className="sticky z-10 mx-2 my-3 line-clamp-1">{children}</h1>
      </article>
    </Link>
  );
}
