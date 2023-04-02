import { MagnifyingGlassIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import SelectMenu from "./Child/SelectMenu";
import RangeParts from "./Child/RangeParts";
import RangeYears from "./Child/RangeYears";

const SearchGrpAdv = ({ setAdvSearch }) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="mt-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 rounded-md ring-1 shadow-sm ring-gray-300 px-3 py-2">
          <div className="sm:col-span-4 mt-1">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 sr-only"
            >
              First name
            </label>
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search for lego sets"
              />
            </div>
          </div>

          <div className="sm:col-span-2 mt-1">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900 sr-only"
            >
              Last name
            </label>
            <SelectMenu />
          </div>

          <div className="sm:col-span-3 mt-1 p-2">
            <RangeParts />
          </div>

          <div className="sm:col-span-3 mt-1 p-2">
            <RangeYears />
          </div>
          <div className="sm:col-start-5 sm:col-span-2 mt-3 mb-2">
            <button
              type="button"
              className="block w-full sm:w-5/6 float-right rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <button
            onClick={()=> {setAdvSearch(false)}}
            type="button"
            className="col-start-7 flex mt-1 py-2 rounded-md text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            <ArrowUpIcon className="w-5 h-5" aria-hidden="true" />
            Basic Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchGrpAdv;
