import { useState } from "react";

const SubscriptionPlans = () => {
    return (
        <div>
            <section className="">
                <div className="py-8 mx-auto max-w-screen-xl lg:py-16">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <PricingToggle />
                    </div>
                    <div className="sm:grid-cols-2 grid lg:grid-cols-4 gap-3">
                        <div className="flex flex-col p-6 mx-auto max-w-lg gap-3 text-white bg-richblack-800 rounded-lg border border-gray-300 w-full">
                            <div className="w-fit px-3 py-1 text-xs font-medium text-white  border shadow-sm rounded-md">
                                Starter
                            </div>
                            <h3 className="text-2xl font-semibold">Free</h3>
                            <p className="font-normal sm:text-sm ">Basic Starter Pack.</p>
                            <hr />
                            <ul role="list" className="mb-7 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Description</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Description</span>
                                </li>
                            </ul>

                            <button className="w-full text-white rounded-full bg-primary hover:opacity-75 py-1 mb-4">Get Started</button>

                            <ul role="list" className="mb-2 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Team size: <span className="text-sm" >1 developer</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Premium support: <span className="text-sm">6 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Free updates: <span className="text-sm" >6 months</span></span>
                                </li>
                            </ul>

                        </div>


                        <div className="flex flex-col p-6 mx-auto  w-full gap-3 text-white bg-richblack-800 rounded-lg border border-gray-300 ">
                            <div className="w-fit px-3 py-1 text-xs font-medium text-white  border shadow-sm rounded-md">
                                Essentials
                            </div>
                            <h3 className="text-2xl font-semibold">$ 150</h3>
                            <p className="font-normal sm:text-sm ">Advances Pack.</p>
                            <hr />
                            <ul role="list" className="mb-7 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Description</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Description</span>
                                </li>
                            </ul>

                            <button className="w-full text-white rounded-full bg-primary hover:opacity-75 py-1 mb-4">Get Started</button>

                            <DropdownSelectors />

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Team size: <span className="text-sm" >1 developer</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Premium support: <span className="text-sm">6 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Free updates: <span className="text-sm" >6 months</span></span>
                                </li>
                            </ul>

                        </div>


                        <div className="relative flex flex-col p-6 mx-auto w-full gap-3 text-white bg-gradient-to-tl from-white via-sky-500 to-sky-500 rounded-lg border-2 border-blue-300 ">
                            <span className="mt-2 absolute right-1 top-0 px-3 py-1 text-xs font-medium text-white bg-blue-200 border shadow-sm rounded-md">
                                {"Popular"}
                            </span>
                            <div className="w-fit px-3 py-1 text-xs font-medium text-white  border shadow-sm rounded-md bg-richblack-800">
                                Advanced
                            </div>
                            <h3 className="text-2xl font-semibold">$ 1050 <span className="text-xs font-normal text-gray-500">
                                / per year
                            </span>
                            </h3>
                            <p className="font-normal sm:text-sm ">Our premium plan dor your business</p>
                            <hr />
                            <ul role="list" className="mb-2 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Description</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Description</span>
                                </li>
                            </ul>

                            <button className="w-full text-white rounded-full bg-primary hover:opacity-75 py-1 mb-4">Subscribe</button>

                            <DropdownSelectors />

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Team size: <span className="text-sm" >1 developer</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Premium support: <span className="text-sm">6 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Free updates: <span className="text-sm" >6 months</span></span>
                                </li>
                            </ul>

                        </div>


                        <div className="flex flex-col p-6 mx-auto w-full gap-3 text-white bg-primary rounded-lg border border-gray-300 ">
                            <div className="w-fit px-3 py-1 text-xs font-medium text-white  border shadow-sm rounded-md bg-slate-100">
                                Architect
                            </div>
                            {/* <h3 className="text-2xl font-semibold">Free</h3> */}
                            <p className="font-normal sm:text-sm">Our most advance feature rich enterprise pack for large business amd enterprises. </p>
                            <hr />
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Description</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Description</span>
                                </li>
                            </ul>

                            <button className="w-full text-white rounded-full bg-richblack-800 py-1 mb-4">Contact sales</button>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Team size: <span className="text-sm" >1 developer</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Premium support: <span className="text-sm">6 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm">Free updates: <span className="text-sm" >6 months</span></span>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )


}


const PricingToggle: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <div className="flex gap-4 items-center bg-gray-700 rounded-xl p-1">
                {/* Monthly Option */}
                <button
                    className={`py-2 px-4 rounded-xl font-medium ${!isYearly
                        ? 'bg-richblack-800 text-white shadow-md'
                        : 'text-gray-400'
                        }`}
                    onClick={() => setIsYearly(false)}
                >
                    For Students
                </button>

                {/* Yearly Option */}
                <div className="relative">
                    <button
                        className={`py-2 px-4 rounded-xl font-medium ${isYearly
                            ? 'bg-richblack-800 text-white shadow-md'
                            : 'text-gray-400'
                            }`}
                        onClick={() => setIsYearly(true)}
                    >
                        For Companies
                    </button>

                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs bg-primary text-white py-1 px-2 rounded-xl">
                        Save 30%
                    </span>

                </div>
            </div>
        </div>
    );
};

const DropdownSelectors: React.FC = () => {
    const [selectedToken, setSelectedToken] = useState("5000 Token");
    const [selectedStorage, setSelectedStorage] = useState("100 GB");

    return (
        <div className="flex space-x-3">
            {/* Token Dropdown */}
            <div className="flex flex-col w-1/2">
                <label className="text-xs font-normal text-gray-700 mb-1">Select Token</label>
                <select
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                    className="w-full px-1 py-2 text-whitetext-sm bg-richblack-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option>5000 Token</option>
                    <option>10000 Token</option>
                    <option>20000 Token</option>
                </select>
            </div>

            {/* Storage Dropdown */}
            <div className="flex flex-col w-1/2">
                <label className="text-xs font-normal text-gray-700 mb-1 whitespace-nowrap">Select Storage</label>
                <select
                    value={selectedStorage}
                    onChange={(e) => setSelectedStorage(e.target.value)}
                    className="w-full px-1 py-2 text-whitetext-sm bg-richblack-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option>100 GB</option>
                    <option>500 GB</option>
                    <option>1 TB</option>
                </select>
            </div>
        </div>
    );
};




export default SubscriptionPlans
