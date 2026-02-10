import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="relative top-0 left-0 right-0 z-100 py-5 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="shrink-0">
          <h1 className="text-xl lg:text-4xl font-bold text-red-600">
            REACTFLIX
          </h1>
        </div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
