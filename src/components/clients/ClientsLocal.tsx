import React from "react";

const ClientsLocal = () => {
  const buyingHouses = [
    "Vogue sourcing",
    "A M London",
    "Tex-Design",
    "Pure Cotton",
    "Runway",
    "Crossline",
    "Gms",
    "Indigo Fashion",
    "Metro Maker",
    "New Flame",
    "Macton",
    "Rich Cotton",
    "Multimood",
    "Tusuka Group",
    "Twelve-Tex",
    "GmbH",
    "Laila Group",
    "Bysl Group",
    "Sgengda Bangladesh",
  ];

  const factories = [
    "Mohammadi Group",
    "Fashion Power",
    "Renaissance Group",
    "Civic",
    "Impressive",
    "Natural Group",
    "AJ Group",
    "Matrix Apparel",
    "Pretty Group",
    "Ha-meem Group",
    "Network Group",
    "Standard Group",
    "Akh",
    "Dekko Babylon",
    "Starling",
    "Nipa Group",
    "Park Jone",
    "Park Star",
    "Free Star",
    "Beximco",
    "FCI Ltd.",
    "East West",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="mb-2 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Our Local Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-4">
            We're proud to collaborate with Bangladesh's{" "}
            <span className="text-red-600">
              leading buying houses and manufacturing facilities
            </span>
          </h2>
        </div>

        {/* Buying Houses Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <h3 className="text-2xl font-bold text-red-600 px-6">
              Buying Houses
            </h3>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {buyingHouses.map((house, index) => (
              <div
                key={index}
                className="relative overflow-hidden group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 text-center">
                  <p className="font-medium text-lg text-gray-800 group-hover:text-white transition-colors duration-300">
                    {house}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Factories Section */}
        <div>
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <h3 className="text-2xl font-bold text-red-600 px-6">Factories</h3>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {factories.map((factory, index) => (
              <div
                key={index}
                className="relative overflow-hidden group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 text-center">
                  <p className="font-medium text-lg text-gray-800 group-hover:text-white transition-colors duration-300">
                    {factory}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLocal;
