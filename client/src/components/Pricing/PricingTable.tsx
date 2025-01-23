import React from "react";

const PricingTable: React.FC = () => {
    const features = [
        { name: "Feature 1", starter: true, essentials: true, advanced: true },
        { name: "Feature 2", starter: true, essentials: true, advanced: true },
        { name: "Feature 3", starter: false, essentials: true, advanced: true },
        { name: "Feature 4", starter: false, essentials: false, advanced: true },
        { name: "Feature 5", starter: false, essentials: false, advanced: false },
        { name: "Feature 6", starter: false, essentials: false, advanced: false },
        { name: "Feature 7", starter: false, essentials: false, advanced: false },
    ];

    return (
        <div className="overflow-x-auto my-6 w-full">
            <table className="min-w-full border border-gray-300 text-left bg-white rounded-lg">
                <thead className="bg-background">
                    <tr>
                        <th className="px-6 py-4 text-sm font-medium text-gray-700">Feature Name</th>
                        <th className="px-6 py-4 text-sm font-medium text-gray-700">Starter</th>
                        <th className="px-6 py-4 text-sm font-medium text-gray-700">Essentials</th>
                        <th className="px-6 py-4 text-sm font-medium text-gray-700">Advanced</th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, index) => (
                        <tr
                            key={index}
                            className={`border-t border-gray-300 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                        >
                            <td className="px-6 py-4 text-sm text-gray-800">{feature.name}</td>
                            <td className="px-6 py-4 text-left">
                                {feature.starter ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-primary"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    "—"
                                )}
                            </td>
                            <td className="px-6 py-4 text-left">
                                {feature.essentials ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-primary"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    "—"
                                )}
                            </td>
                            <td className="px-6 py-4 text-left">
                                {feature.advanced ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-primary text-left"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    "—"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PricingTable;
