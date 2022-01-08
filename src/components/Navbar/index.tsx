import { NAV_MAX_WIDTH } from "@/lib/constants";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import classNames from "classnames";
import { useMemo } from "react";
const Navbar: React.FC = () => {
  const history = useRouter();

  return (
    <header className="navbar">
      <nav className={`container flex items-center ${NAV_MAX_WIDTH} py-4`}>
        <Link href="/">
          <a className="text-xl hover:no-underline font-bold">Tailwind starter</a>
        </Link>
        <div className="ml-5">
          <LinkItem path={history.pathname} href="/works">
            Link 1
          </LinkItem>
          <LinkItem path={history.pathname} href="/contact">
            Link 2
          </LinkItem>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

const LinkItem: React.FC<{ path: string; href: string }> = ({
  href,
  path,
  children
}) => {
  const activeLink = useMemo(() => {
    return href === path;
  }, [path, href]);
  return (
    <Link href={href}>
      <a
        className={`${classNames(
          "p-2 text-sm md:text-base font-system rounded",
          {
            "bg-primary text-inverted": activeLink
          }
        )}`}
      >
        {children}
      </a>
    </Link>
  );
};
