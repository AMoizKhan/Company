"use client";
export default function Footer() {
    return (
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img
                            className="w-auto h-9"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                            alt=""
                        />

                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                        </p>

                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M19.633 7.997c.013.175..."></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M13.397 20.997v-8.196..."></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M11.999 7.377a4.623..."></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path d="M20.533 6.111A4.605..."></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.026 2c-5.509 0-9.974..."
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                            Company
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" className="flex text-base text-black hover:text-blue-600">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-base text-black hover:text-blue-600">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-base text-black hover:text-blue-600">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-base text-black hover:text-blue-600">
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                            Help
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" className="flex text-base text-black hover:text-blue-600">
                                    Customer Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-base text-black hover:text-blue-600">
                                    Delivery Details
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-base text-black hover:text-blue-600">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-base text-black hover:text-blue-600">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                            Subscribe to newsletter
                        </p>
                        <form action="#" method="POST" className="mt-6">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="block w-full p-4 text-black placeholder-gray-500 border border-gray-200 rounded-md"
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="mt-16 mb-10 border-gray-200" />
                <p className="text-sm text-center text-gray-600">
                    © Copyright 2021, All Rights Reserved by Postcraft
                </p>
            </div>
        </section>
    );
}
