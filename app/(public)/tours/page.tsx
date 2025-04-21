import Image from "next/image";
import Link from "next/link";

import Tabs from '@/components/tabs';
import TourForm from "@/components/tour-form";

export default async function Home() {

    const tabs = [
        {
            id: 'tour,hotel,ticket',
            label: 'Tour, Hotel, Ticket',
            content: <TourForm type={1} />,
        },
        {
            id: 'tour',
            label: 'Tour',
            content: <TourForm type={2} />,
        },
    ];


    return (
        <div className="w-full">
            <div className="grid">
                <div className="mx-auto form">
                    <h1 className="text-xl font-bold mb-3 text-[#cea958]">Tours</h1>
                    <Tabs tabs={tabs} defaultTab="tour,hotel,ticket" />
                </div>

                <div className="main flex flex-col overflow-hidden">

                    <div className="flex flex-row justify-between items-center mt-6 mb-3">
                        <h2 className="yekanbakh text-xl text-[#CEA958]">Specially recommended tours</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-2">
                        <Link href="/tours/tour-one" className="flex flex-col rounded-lg border-1 border-teal-800 p-3">

                            <div className="flex flex-col ">
                                <h3 className="yekanbakh font-light">
                                    Baqdad to Gilan - recreational-therapy VIP tour
                                </h3>
                                <div className="flex flex row justify-between yekanbakh ">
                                    <div className="text-gray-400 text-xs flex gap-x-1 whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span>Wednesday 23 April 2025 </span>
                                        to
                                        <span>Tuesday 30 April 2025</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-3">
                                    <div className="flex flex-col  mr-auto">
                                        <h4 className="text-md">
                                            Setareh Hotel Chamkhale
                                        </h4>
                                        <div className="text-gray-400 text-sm">
                                            5 Star
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-x-2 mt-auto">
                                            <span className="flex yekanbakh text-sm gap-x-1 text-yellow-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 48 48">
                                                    <linearGradient id="SVGID_1_" x1="9.463" x2="32.329" y1="7.636" y2="38.968" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0" stopColor="#fede00" />
                                                        <stop offset=".519" stopColor="#fecc00" />
                                                        <stop offset="1" stopColor="#ffb700" />
                                                    </linearGradient>
                                                    <path fill="url(#SVGID_1_)" d="M22.1,4.4c0.6-1,2-0.9,2.5,0.2c1.5,3.5,3,7.1,4.7,10.2l0.3,0.5c0.2,0.4,0.7,0.7,1.2,0.7h0.6c4.6,0,8.4,1,12.8,2.2c1.1,0.3,1.4,1.8,0.4,2.5c-3.5,2.4-5.6,3.8-8.7,7.3c-0.1,0.1-0.2,0.2-0.3,0.4c-0.3,0.4-0.4,1-0.2,1.4c0.6,1.5,1.9,4.6,2.3,5.9c0.7,2.2,1.4,4.7,1.9,7.1c0.3,1.2-1.1,2.1-2.1,1.4c-3.2-2.1-8.6-5.5-12.8-6.9c-0.2-0.1-0.8-0.2-0.8-0.2s-7.2,3.5-13.5,7.1c-1.1,0.6-2.4-0.4-2-1.7c0,0,0,0,0-0.1c1.7-4.8,4.6-9.1,5.5-12.5c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.7-0.3-1.3-0.9-1.5c-1.7-0.6-5-1.9-7.3-3.7c-0.9-0.7-2.1-1.8-3-2.8c-0.8-0.8-0.3-2.2,0.9-2.3c0.6-0.1,1.2-0.1,1.8-0.3C7.5,18,11,16,15.4,16H16c0,0,0.7-2.1,1.8-4.2C18.2,10.8,20.5,7.2,22.1,4.4z" />
                                                </svg>
                                                <span>
                                                    4.6
                                                </span>
                                            </span>
                                            <span className="yekanbakh text-sm gap-x-1 text-gray-400">
                                                ( 154 review )
                                            </span>
                                        </div>
                                    </div>
                                    <Image
                                        width={400}
                                        height={400}
                                        alt="test"
                                        src={"/images/hotels/kadous.webp"}
                                        className="w-1/3 h-[70px] object-cover rounded-md" />
                                </div>
                                <div className="flex flex-row mt-3">
                                    <div className="flex flex-col  mr-auto">
                                        <h4 className="text-md">
                                            Danse Hotel Kiashahr
                                        </h4>
                                        <div className="text-gray-400 text-sm">
                                            4 Star
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-x-2 mt-auto">
                                            <span className="flex yekanbakh text-sm gap-x-1 text-yellow-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 48 48">
                                                    <linearGradient id="SVGID_1_" x1="9.463" x2="32.329" y1="7.636" y2="38.968" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0" stopColor="#fede00" />
                                                        <stop offset=".519" stopColor="#fecc00" />
                                                        <stop offset="1" stopColor="#ffb700" />
                                                    </linearGradient>
                                                    <path fill="url(#SVGID_1_)" d="M22.1,4.4c0.6-1,2-0.9,2.5,0.2c1.5,3.5,3,7.1,4.7,10.2l0.3,0.5c0.2,0.4,0.7,0.7,1.2,0.7h0.6c4.6,0,8.4,1,12.8,2.2c1.1,0.3,1.4,1.8,0.4,2.5c-3.5,2.4-5.6,3.8-8.7,7.3c-0.1,0.1-0.2,0.2-0.3,0.4c-0.3,0.4-0.4,1-0.2,1.4c0.6,1.5,1.9,4.6,2.3,5.9c0.7,2.2,1.4,4.7,1.9,7.1c0.3,1.2-1.1,2.1-2.1,1.4c-3.2-2.1-8.6-5.5-12.8-6.9c-0.2-0.1-0.8-0.2-0.8-0.2s-7.2,3.5-13.5,7.1c-1.1,0.6-2.4-0.4-2-1.7c0,0,0,0,0-0.1c1.7-4.8,4.6-9.1,5.5-12.5c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.7-0.3-1.3-0.9-1.5c-1.7-0.6-5-1.9-7.3-3.7c-0.9-0.7-2.1-1.8-3-2.8c-0.8-0.8-0.3-2.2,0.9-2.3c0.6-0.1,1.2-0.1,1.8-0.3C7.5,18,11,16,15.4,16H16c0,0,0.7-2.1,1.8-4.2C18.2,10.8,20.5,7.2,22.1,4.4z" />
                                                </svg>
                                                <span>
                                                    4.1
                                                </span>
                                            </span>
                                            <span className="yekanbakh text-sm gap-x-1 text-gray-400">
                                                ( 151 review )
                                            </span>
                                        </div>
                                    </div>
                                    <Image
                                        width={400}
                                        height={400}
                                        alt="test"
                                        src={"/images/hotels/shabestan.webp"}
                                        className="w-1/3 h-[70px] object-cover rounded-md" />
                                </div>
                            </div>

                            <hr className="border-teal-800 my-3" />

                            <div className="flex flex-col gap-y-2">
                                <div className="flex flex-col gap-y-2 justify-between yekanbakh">

                                    <div className="flex flex row justify-between items-center">
                                        <div className="flex flex-row gap-2 items-center">
                                            <Image
                                                width={400}
                                                height={400}
                                                alt="test"
                                                src={"/images/airplane-company/Qatar-airways.png"}
                                                className="w-7 h-7 object-cover rounded-full" />
                                            <span className="text-sm">
                                                Qatar Airways
                                            </span>
                                        </div>
                                        <div className="flex flex-row gap-x-1">
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    19:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Baqdad
                                                </span>
                                            </div>
                                            <span className="relative flex items-center justify-between stops grow text-grays-200 flex-grow mx-2" 
                                                data-v-5f0fa26b="" data-v-e6eb54ae="">
                                                <span className="stops__subtitle text-2 text-grays-400" data-v-5f0fa26b=""></span>
                                                <span className="start__point" data-v-5f0fa26b=""></span>
                                                <span className="stops__point" data-v-5f0fa26b=""></span>
                                            </span>
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    21:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Gilan
                                                </span>
                                            </div>                                        
                                        </div>
                                    </div>

                                    <div className="flex flex row justify-between items-center">
                                        <div className="flex flex-row gap-2 items-center">
                                            <Image
                                                width={400}
                                                height={400}
                                                alt="test"
                                                src={"/images/airplane-company/Qatar-airways.png"}
                                                className="w-7 h-7 object-cover rounded-full" />
                                            <span className="text-sm">
                                                Qatar Airways
                                            </span>
                                        </div>
                                        <div className="flex flex-row gap-x-1">
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    19:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Gilan
                                                </span>
                                            </div>
                                            <span className="relative flex items-center justify-between stops grow text-grays-200 flex-grow mx-2" 
                                                data-v-5f0fa26b="" data-v-e6eb54ae="">
                                                <span className="stops__subtitle text-2 text-grays-400" data-v-5f0fa26b=""></span>
                                                <span className="start__point" data-v-5f0fa26b=""></span>
                                                <span className="stops__point" data-v-5f0fa26b=""></span>
                                            </span>
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    21:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Baqdad
                                                </span>
                                            </div>                                        
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <hr className="border-teal-800 my-3" />

                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-col gap-2 text-xs text-gray-300">
                                    <span></span>
                                    <span>Tour price per person</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span></span>
                                    <span className="text-lg text-[#cea958] ml-auto">from $ 2,399</span>
                                </div>
                            </div>

                        </Link>

                        <Link href="/tours/tour-one" className="flex flex-col rounded-lg border-1 border-teal-800 p-3">

                            <div className="flex flex-col ">
                                <h3 className="yekanbakh font-light">
                                    Baqdad to Gilan - recreational Special tour | under 50
                                </h3>
                                <div className="flex flex row justify-between yekanbakh ">
                                    <div className="text-gray-400 text-xs flex gap-x-1 whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span>Sunday 20 April 2025 </span>
                                        to
                                        <span>Sunday 27 April 2025</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-3">
                                    <div className="flex flex-col  mr-auto">
                                        <h4 className="text-md">
                                            Setareh Hotel Chamkhale
                                        </h4>
                                        <div className="text-gray-400 text-sm">
                                            5 Star
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-x-2 mt-auto">
                                            <span className="flex yekanbakh text-sm gap-x-1 text-yellow-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 48 48">
                                                    <linearGradient id="SVGID_1_" x1="9.463" x2="32.329" y1="7.636" y2="38.968" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0" stopColor="#fede00" />
                                                        <stop offset=".519" stopColor="#fecc00" />
                                                        <stop offset="1" stopColor="#ffb700" />
                                                    </linearGradient>
                                                    <path fill="url(#SVGID_1_)" d="M22.1,4.4c0.6-1,2-0.9,2.5,0.2c1.5,3.5,3,7.1,4.7,10.2l0.3,0.5c0.2,0.4,0.7,0.7,1.2,0.7h0.6c4.6,0,8.4,1,12.8,2.2c1.1,0.3,1.4,1.8,0.4,2.5c-3.5,2.4-5.6,3.8-8.7,7.3c-0.1,0.1-0.2,0.2-0.3,0.4c-0.3,0.4-0.4,1-0.2,1.4c0.6,1.5,1.9,4.6,2.3,5.9c0.7,2.2,1.4,4.7,1.9,7.1c0.3,1.2-1.1,2.1-2.1,1.4c-3.2-2.1-8.6-5.5-12.8-6.9c-0.2-0.1-0.8-0.2-0.8-0.2s-7.2,3.5-13.5,7.1c-1.1,0.6-2.4-0.4-2-1.7c0,0,0,0,0-0.1c1.7-4.8,4.6-9.1,5.5-12.5c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.7-0.3-1.3-0.9-1.5c-1.7-0.6-5-1.9-7.3-3.7c-0.9-0.7-2.1-1.8-3-2.8c-0.8-0.8-0.3-2.2,0.9-2.3c0.6-0.1,1.2-0.1,1.8-0.3C7.5,18,11,16,15.4,16H16c0,0,0.7-2.1,1.8-4.2C18.2,10.8,20.5,7.2,22.1,4.4z" />
                                                </svg>
                                                <span>
                                                    4.6
                                                </span>
                                            </span>
                                            <span className="yekanbakh text-sm gap-x-1 text-gray-400">
                                                ( 154 review )
                                            </span>
                                        </div>
                                    </div>
                                    <Image
                                        width={400}
                                        height={400}
                                        alt="test"
                                        src={"/images/hotels/kadous.webp"}
                                        className="w-1/3 h-[70px] object-cover rounded-md" />
                                </div>
                            </div>

                            <hr className="border-teal-800 my-3" />

                            <div className="flex flex-col gap-y-2">
                                <div className="flex flex-col gap-y-2 justify-between yekanbakh">

                                    <div className="flex flex row justify-between items-center">
                                        <div className="flex flex-row gap-2 items-center">
                                            <Image
                                                width={400}
                                                height={400}
                                                alt="test"
                                                src={"/images/airplane-company/Emirates.png"}
                                                className="w-7 h-7 object-cover rounded-full" />
                                            <span className="text-sm">
                                            Emirates Airways
                                            </span>
                                        </div>
                                        <div className="flex flex-row gap-x-1">
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    01:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Baqdad
                                                </span>
                                            </div>
                                            <span className="relative flex items-center justify-between stops grow text-grays-200 flex-grow mx-2" 
                                                data-v-5f0fa26b="" data-v-e6eb54ae="">
                                                <span className="stops__subtitle text-2 text-grays-400" data-v-5f0fa26b=""></span>
                                                <span className="start__point" data-v-5f0fa26b=""></span>
                                                <span className="stops__point" data-v-5f0fa26b=""></span>
                                            </span>
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    3:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Gilan
                                                </span>
                                            </div>                                        
                                        </div>
                                    </div>

                                    <div className="flex flex row justify-between items-center">
                                        <div className="flex flex-row gap-2 items-center">
                                            <Image
                                                width={400}
                                                height={400}
                                                alt="test"
                                                src={"/images/airplane-company/Emirates.png"}
                                                className="w-7 h-7 object-cover rounded-full" />
                                            <span className="text-sm">
                                            Emirates Airways
                                            </span>
                                        </div>
                                        <div className="flex flex-row gap-x-1">
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    00:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Gilan
                                                </span>
                                            </div>
                                            <span className="relative flex items-center justify-between stops grow text-grays-200 flex-grow mx-2" 
                                                data-v-5f0fa26b="" data-v-e6eb54ae="">
                                                <span className="stops__subtitle text-2 text-grays-400" data-v-5f0fa26b=""></span>
                                                <span className="start__point" data-v-5f0fa26b=""></span>
                                                <span className="stops__point" data-v-5f0fa26b=""></span>
                                            </span>
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    02:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Baqdad
                                                </span>
                                            </div>                                        
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <hr className="border-teal-800 my-3" />

                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-col gap-2 text-xs text-gray-300">
                                    <span className="text-[#cea958]">Remaining capacity 10 people</span>
                                    <span>Tour price per person</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="ml-auto">
                                        <span className="px-1 pb-0.5 rounded text-xs bg-red-700 mr-1">
                                            10%
                                        </span>
                                        <span className="text-gray-400 text-sm px-1 text-md line-through">
                                        $ 1760
                                        </span>
                                    </span>
                                    <span className="text-lg text-[#cea958] ml-auto">from $ 1,599</span>
                                </div>
                            </div>

                        </Link>              

                        <Link href="/tours/tour-one" className="flex flex-col rounded-lg border-1 border-teal-800 p-3">

                            <div className="flex flex-col ">
                                <h3 className="yekanbakh font-light">
                                    Baqdad to Gilan - recreational basic tour
                                </h3>
                                <div className="flex flex row justify-between yekanbakh ">
                                    <div className="text-gray-400 text-xs flex gap-x-1 whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span>Wednesday 23 April 2025 </span>
                                        to
                                        <span>Tuesday 30 April 2025</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-3">
                                    <div className="flex flex-col  mr-auto">
                                        <h4 className="text-md">
                                            Danse Hotel Kiashahr
                                        </h4>
                                        <div className="text-gray-400 text-sm">
                                            4 Star
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-x-2 mt-auto">
                                            <span className="flex yekanbakh text-sm gap-x-1 text-yellow-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 48 48">
                                                    <linearGradient id="SVGID_1_" x1="9.463" x2="32.329" y1="7.636" y2="38.968" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0" stopColor="#fede00" />
                                                        <stop offset=".519" stopColor="#fecc00" />
                                                        <stop offset="1" stopColor="#ffb700" />
                                                    </linearGradient>
                                                    <path fill="url(#SVGID_1_)" d="M22.1,4.4c0.6-1,2-0.9,2.5,0.2c1.5,3.5,3,7.1,4.7,10.2l0.3,0.5c0.2,0.4,0.7,0.7,1.2,0.7h0.6c4.6,0,8.4,1,12.8,2.2c1.1,0.3,1.4,1.8,0.4,2.5c-3.5,2.4-5.6,3.8-8.7,7.3c-0.1,0.1-0.2,0.2-0.3,0.4c-0.3,0.4-0.4,1-0.2,1.4c0.6,1.5,1.9,4.6,2.3,5.9c0.7,2.2,1.4,4.7,1.9,7.1c0.3,1.2-1.1,2.1-2.1,1.4c-3.2-2.1-8.6-5.5-12.8-6.9c-0.2-0.1-0.8-0.2-0.8-0.2s-7.2,3.5-13.5,7.1c-1.1,0.6-2.4-0.4-2-1.7c0,0,0,0,0-0.1c1.7-4.8,4.6-9.1,5.5-12.5c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.7-0.3-1.3-0.9-1.5c-1.7-0.6-5-1.9-7.3-3.7c-0.9-0.7-2.1-1.8-3-2.8c-0.8-0.8-0.3-2.2,0.9-2.3c0.6-0.1,1.2-0.1,1.8-0.3C7.5,18,11,16,15.4,16H16c0,0,0.7-2.1,1.8-4.2C18.2,10.8,20.5,7.2,22.1,4.4z" />
                                                </svg>
                                                <span>
                                                    4.1
                                                </span>
                                            </span>
                                            <span className="yekanbakh text-sm gap-x-1 text-gray-400">
                                                ( 151 review )
                                            </span>
                                        </div>
                                    </div>
                                    <Image
                                        width={400}
                                        height={400}
                                        alt="test"
                                        src={"/images/hotels/shabestan.webp"}
                                        className="w-1/3 h-[70px] object-cover rounded-md" />
                                </div>
                            </div>

                            <hr className="border-teal-800 my-3" />

                            <div className="flex flex-col gap-y-2">
                                <div className="flex flex-col gap-y-2 justify-between yekanbakh">

                                    <div className="flex flex row justify-between items-center">
                                        <div className="flex flex-row gap-2 items-center">
                                            <Image
                                                width={400}
                                                height={400}
                                                alt="test"
                                                src={"/images/airplane-company/qeshm.jpg"}
                                                className="w-7 h-7 object-cover rounded-full" />
                                            <span className="text-sm">
                                                Qeshm Airways
                                            </span>
                                        </div>
                                        <div className="flex flex-row gap-x-1">
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    11:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Baqdad
                                                </span>
                                            </div>
                                            <span className="relative flex items-center justify-between stops grow text-grays-200 flex-grow mx-2" 
                                                data-v-5f0fa26b="" data-v-e6eb54ae="">
                                                <span className="stops__subtitle text-2 text-grays-400" data-v-5f0fa26b=""></span>
                                                <span className="start__point" data-v-5f0fa26b=""></span>
                                                <span className="stops__point" data-v-5f0fa26b=""></span>
                                            </span>
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    13:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Gilan
                                                </span>
                                            </div>                                        
                                        </div>
                                    </div>

                                    <div className="flex flex row justify-between items-center">
                                        <div className="flex flex-row gap-2 items-center">
                                            <Image
                                                width={400}
                                                height={400}
                                                alt="test"
                                                src={"/images/airplane-company/qeshm.jpg"}
                                                className="w-7 h-7 object-cover rounded-full" />
                                            <span className="text-sm">
                                                Qeshm Airways
                                            </span>
                                        </div>
                                        <div className="flex flex-row gap-x-1">
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    11:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Gilan
                                                </span>
                                            </div>
                                            <span className="relative flex items-center justify-between stops grow text-grays-200 flex-grow mx-2" 
                                                data-v-5f0fa26b="" data-v-e6eb54ae="">
                                                <span className="stops__subtitle text-2 text-grays-400" data-v-5f0fa26b=""></span>
                                                <span className="start__point" data-v-5f0fa26b=""></span>
                                                <span className="stops__point" data-v-5f0fa26b=""></span>
                                            </span>
                                            <div className="flex flex-col text-center">
                                                <span>
                                                    13:45
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    Baqdad
                                                </span>
                                            </div>                                        
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <hr className="border-teal-800 my-3" />

                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-col gap-2 text-xs text-gray-300">
                                    <span className="text-[#cea958]">Remaining capacity 10 people</span>
                                    <span>Tour price per person</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="ml-auto">
                                        <span className="px-1 pb-0.5 rounded text-xs bg-red-700 mr-1">
                                            10%
                                        </span>
                                        <span className="text-gray-400 text-sm px-1 text-md line-through">
                                        $ 1,000
                                        </span>
                                    </span>
                                    <span className="text-lg text-[#cea958] ml-auto">from $ 899</span>
                                </div>
                            </div>

                        </Link>       
                    </div>

                </div>
            </div>



        </div>


    );
}
