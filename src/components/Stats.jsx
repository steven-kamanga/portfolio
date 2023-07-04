import Image from "next/image";
import React from "react";

export default   function  Stats() {
    return (
        <section>
            <div className="w-1/6">
                <table className="table">
                    <tbody>
                    <tr>
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
                            <progress className="progress progress-info bg-white w-56" value="68" max="100"></progress>                        </td>
                        <td>68%</td>
                    </tr>
                    <tr>
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
                            <progress className="progress progress-info bg-white w-56" value="75" max="100"></progress>                        </td>
                        <td>75%</td>
                    </tr>
                    </tbody>

                </table>
            </div>
        </section>
    )
}