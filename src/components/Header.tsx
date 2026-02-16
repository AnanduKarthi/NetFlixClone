import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="relative top-0 left-0 right-0 z-100 py-5 ">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="shrink-0">
          <h1 className="text-xl lg:text-4xl font-bold text-red-600">
            REACTFLIX
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          {/* Show the user button when the user is signed in */}
          <SignedIn>
            <SearchBar />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
