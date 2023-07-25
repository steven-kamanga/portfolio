import Image from "next/image";
import React from "react";

export default   function  Stats() {
    return (
        <section>
            <div className="w-1/6 sm:pl-10 pl-3 text-white">
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
                            <progress className="progress progress-info bg-white w-36 sm:w-72" value="88" max="100"></progress>                        </td>
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
                            <progress className="progress progress-info bg-white w-36 sm:w-72" value="88" max="100"></progress>                        </td>
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
                            <progress className="progress progress-info bg-white w-36 sm:w-72" value="68" max="100"></progress>                        </td>
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
                                    <div className="font-bold">Django</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <progress className="progress progress-info bg-white w-36 sm:w-72" value="75" max="100"></progress>                        </td>
                        <td className="pl-5">75%</td>
                    </tr>

                    </tbody>

                </table>
            </div>
        </section>
    )
}