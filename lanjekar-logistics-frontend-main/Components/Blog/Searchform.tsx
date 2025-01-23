import React from "react";
import { CiSearch } from "react-icons/ci";

type SearchFormProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Searchform = ({ searchQuery, setSearchQuery }: SearchFormProps) => {
  return (
    <div className="w-full relative flex items-center py-2 px-3 gap-3 border border-black">
      <CiSearch className="text-[25px] font-normal cursor-pointer" />
      <input
        type="text"
        className="w-full relative h-full outline-none"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchform;
