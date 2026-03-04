import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import SearchBar from "./SearchBar";
import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
        <div className="shrink-0">
          <Link to="/">
            <h1 className="text-xl font-bold tracking-tight text-red-600 md:text-3xl lg:text-4xl">
              REACTFLIX
            </h1>
          </Link>
        </div>

        <div className="flex min-h-[40px] items-center gap-4 md:gap-6">
          <SignedOut>
            <div className="flex items-center gap-3 text-sm">
              <SignInButton />
              <SignUpButton />
            </div>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="hidden md:block">
                <SearchBar />
              </div>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
