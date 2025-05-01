import React from "react";

export default function AboutJourney() {
  return (
    <section id="journey" className="bg-white py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full bg-red-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-red-600">
            Our Journey
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Global Textile Leader Since 1973
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            The company's influence extends across more than 120 countries and
            regions, making it a global leader in textiles and commodity
            trading.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              What We Do
            </h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Export Services
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Exporting garments, fabrics, textiles, bags, and cases to
                    customers worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Agency Services
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Offering commodity agency services and domestic sales with
                    exceptional customer support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl bg-gray-50 p-8 shadow-lg">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Our Strengths
            </h3>
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="text-lg font-medium text-gray-900">
                    Global Brand Presence
                  </h4>
                </div>
                <p className="text-gray-600">
                  Over 20 registered brands in more than 30 countries worldwide.
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="text-lg font-medium text-gray-900">
                    Public Listed Company
                  </h4>
                </div>
                <p className="text-gray-600">
                  Listed on the Shanghai Stock Exchange (Stock Code: 600981)
                  since 2004.
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="text-lg font-medium text-gray-900">
                    Global Recognition
                  </h4>
                </div>
                <p className="text-gray-600">
                  Our commitment to honest business and excellent service has
                  earned us widespread recognition both at home and abroad.
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-red-600/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
