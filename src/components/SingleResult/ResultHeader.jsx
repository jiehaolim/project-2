const ResultHeader = ({ result }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      {/* LEGO details */}
      <div className="lg:max-w-lg lg:self-end">
        <div className="font-medium text-gray-500">Theme: {result.theme}</div>
        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {result.set_num + " " + result.name}
          </h1>
        </div>

        <section aria-labelledby="information-heading" className="mt-4">
          <h2 id="information-heading" className="sr-only">
            Lego set information
          </h2>

          <div className="flex items-center">
            <p className="text-lg text-gray-900 sm:text-xl">
              Year released: {result.year}
            </p>
          </div>

          <div className="mt-4 space-y-6">
            <p className="text-base text-gray-500">
              No of parts: {result.num_parts}{" "}
              {result.num_parts > 1 ? "parts" : "part"}
            </p>
          </div>
        </section>
      </div>

      {/* LEGO image */}
      <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
          <img
            src={result.set_img_url}
            alt={result.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* LEGO form */}
      <div className="mt-6 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" className="sr-only">
            LEGO options
          </h2>
          <div className="grid grid-col-2 gap-x-2 auto-cols-fr">
            <div className="col-start-1 col-span-1">
              <form>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add to Collection
                </button>
              </form>
            </div>
            <div className="col-start-2 col-span-1 col-end-2">
              <form>
                <a href={result.set_url}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  View on Rebrickable
                </a>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResultHeader;
