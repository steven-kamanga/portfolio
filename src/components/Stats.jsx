import Image from "next/image";
import React from "react";

export default   function  Stats() {
    return (
        <div className="text-gray-200 pt-3">
            <div>
                <h2 className=" font-bold text-2xl pl-8 pb-2">
                    Frameworks & <br />
                    Languages
                </h2>
            </div>
            <div className="max-w-2xl sm:pl-8 md:pt-2 pt-0 l-3 text-white">
                <table className="table">
                    <tbody>
                    <tr className="pt-2">
                        <td>
                            <div className="flex items-center space-x-4 sm:space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image
                                            src="/web.svg"
                                            alt="logo"
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Javascript <br/> Html <br/> CSS </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <progress className="progress progress-info bg-white w-36 sm:w-80 md:w-96 lg:w-[600px]" value="88" max="100"></progress>                        </td>
                        <td className="pl-5">80%</td>
                    </tr>
                    <tr className="pt-2">
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image
                                            src="/flutter.svg"
                                            alt="logo"
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Flutter <br /> Dart</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <progress className="progress progress-info bg-white w-36 sm:w-80 md:w-96 lg:w-[600px]" value="88" max="100"></progress>                        </td>
                        <td className="pl-5">88%</td>
                    </tr>
                    <tr className="pt-2">
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image
                                            src="/nextjs.svg"
                                            alt="logo"
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">NextJs</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <progress className="progress progress-info bg-white w-36 sm:w-80 md:w-96 lg:w-[600px]" value="68" max="100"></progress></td>
                        <td className="pl-5">68%</td>
                    </tr>
                    <tr className="pt-2">
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image
                                            src="/django.svg"
                                            alt="logo"
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Django <br/> Python</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <progress className="progress progress-info bg-white w-36 sm:w-80 md:w-96 lg:w-[600px] " value="75" max="100"></progress>                        </td>
                        <td className="pl-5">83%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}