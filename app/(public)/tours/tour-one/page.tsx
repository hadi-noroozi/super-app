import Image from "next/image";
import Link from "next/link";

import Tabs from '@/components/tabs';
import Accordion from '@/components/accordion';

export default function tourOne() {
  const accordionItems = [
    {
      title: 'Day1',
      content: `Airport pick-up,
                Transfer to accommodation,
                Reception and welcome,
                Evening tour,
                Dinner at a traditional restaurant`
    },
    {
      title: 'Day 2',
      content: `
        Local breakfast, complete blood count, urine test, pelvic and abdominal ultrasound, radiology, electrocardiogram and echocardiography, optometry and vision testing, herbal teas, medical consultation, outdoor lunch
      `
    },
    {
      title: 'Day 3',
      content: `
        Masouleh,
        Visit to the terraced houses,
        Traditional market,
        Lunch at a traditional Masouleh restaurant,
        Foman and shopping,
        Traditional cookies,
        Return and dinner
      `
    },
    {
      title: 'Day4',
      content: `
      Breakfast,
      Walking,
      Around the accommodation,
      Visit to the green roof and,
      the cable car and,
      the beach (optional),
      Lunch and dinner at a nearby hotel or restaurant     
      `
    },
    {
      title: 'Day 5',
      content: `
        Breakfast,
        Visit the area,
        Free,
        Visit the aquarium,
        And entertainment,
        Lunch of barbecue ribs,
        Boat ride,
        Jet ski,
        Beach visit Return and dinner      
      `
    },
    {
      title: 'Day 6',
      content: `
        Breakfast,
        Visit,
        Saravan Forest Park,
        Visit,
        Ecotourism,
        and Rasht Museum,
        Gyadah Rah,
        Cultural and Bazaar,
        Rasht,
        Lunch Rib Kebab Return to Hotel     
      `
    },
    {
      title: 'Day 7',
      content: `
      Breakfast,
      Airport Transfer,
      End of Trip      
      `
    },
  ];

  const tabs = [
      {
          id: 'timing',
          label: 'Timing',
          content: (
            <div className="flex items-center flex-wrap">
              <div className="w-full sm:w-auto flex items-center ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="ml-2 text-lightGray200"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
                strokeWidth="1.5" d="M13.627 3.038 3.203 6.273C.73 7.04.693 10.528 3.15 11.347l2.864.954c.796.265 1.42.89 1.686 1.686l.954 2.863c.82 2.457 4.302 2.416 5.074-.053l3.235-10.424c.636-2.05-1.285-3.971-3.336-3.335"></path></svg>
                <div className="w-full sm:w-auto ">
                  <div className="flex items-centermy-2.5 my-2.5 font-iransansFD">
                    <p className="text-sm sm:px-3 px-1 font-normal text-textDetails">
                      <span className="font-medium  text-xs text-textMainBody mx-1">Start Date:</span>
                      <span className="text-textMainBody text-sm">Wednesday 23 April 2025</span>
                    </p>
                  </div>
                  <div className="flex items-centermy-2.5 my-2.5 font-iransansFD">
                    <p className="text-sm sm:px-3 px-1 font-normal text-textDetails">
                      <span className="font-medium  text-xs text-textMainBody mx-1">Start Time:</span>
                      <span className="text-textMainBody text-sm">23:00 </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full sm:w-auto  ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" 
                className="ml-2 text-lightGray200"><path stroke="currentColor" strokeLinecap="round" 
                strokeLinejoin="round" strokeWidth="1.5" 
                d="m6.37 16.965 10.424-3.235c2.474-.766 2.51-4.255.053-5.074l-2.864-.954a2.67 
                2.67 0 0 1-1.685-1.686l-.955-2.863c-.82-2.458-4.302-2.416-5.074.053L3.034 
                13.63C2.398 15.68 4.32 17.6 6.37 16.965"></path></svg>
                <div className="w-full sm:w-auto">
                  <div className="flex items-centermy-2.5 my-2.5 font-iransansFD">
                    <p className="text-sm sm:px-3 px-1 font-normal text-textDetails">
                    <span className="font-medium  text-xs text-textMainBody mx-1">Return Date:</span>
                    <span className="text-textMainBody text-sm">Wednesday 30 April 2025</span>
                    </p>
                  </div>
                  <div className="flex items-centermy-2.5 my-2.5 font-iransansFD">
                    <p className="text-sm sm:px-3 px-1 font-normal text-textDetails">
                    <span className="font-medium  text-xs text-textMainBody mx-1">Return Time:</span>
                    <span className="text-textMainBody text-sm">23:00 </span>
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          ),
      },
      {
        id: 'residence',
        label: 'Residence',
        content: (
          <div className="px-3 pb-3">
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
        ),
      },
      {
        id: 'plans',
        label: 'Plans',
        content: (
          <Accordion items={accordionItems} />
        ),
      }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <div className="grid">
        <div className="w-100 flex flex-col">
          <Image
            width={400}
            height={400}
            alt="test"
            src={"/images/destination/Rasht.webp"}
            className="h-[300px] w-92 object-cover rounded-xl" />

          <h2 className="yekanbakh font-light text-lg mt-4">
            Baqdad to Gilan - recreational-therapy VIP tour
          </h2>

          <div className="flex flex row justify-between yekanbakh ">
            <div className="text-gray-400 text-xs flex gap-x-1 whitespace-nowrap overflow-hidden text-ellipsis">
              <span>Wednesday 23 April 2025 </span>
              to
              <span>Tuesday 30 April 2025</span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-start items-end gap-x-2 mt-3">
            <span className="flex flex-col mr-6 gap-x-2 text-sm">
              <span className="text-xs text-gray-400">Tour guide</span>
              <span> Youtopin Company </span>
            </span>
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

        <hr className="border-teal-800 my-6 w-100" />

        <div className="flex flex-col gap-y-3 text-sm">
          <div className="flex flex-row justify-start gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em" fill="none"
              viewBox="0 0 20 20" className="w-6 h-6 text-white ml-2 ">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                d="M17.292 11.042A7.294 7.294 0 0 1 10 18.333a7.294 7.294 0 0 1-7.291-7.291A7.294 
                    7.294 0 0 1 10 3.75a7.294 7.294 0 0 1 7.292 7.292M10 6.667v4.166"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                d="M7.5 1.667h5"></path>
            </svg>
            <span>Travel duration:</span>
            <span>7 days and 6 nights</span>
          </div>
          <div className="flex flex-row justify-start gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em" fill="none"
              viewBox="0 0 20 20" className="w-6 h-6 text-white ml-2 ">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                d="M6.667 1.667v2.5M13.334 1.667v2.5M2.917 7.575h14.166M17.5 7.083v7.083c0 2.5-1.25 
                4.167-4.167 4.167H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 
                4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                d="M9.996 11.417h.008M6.912 11.417h.008M6.912 13.917h.008"></path>
            </svg>
            <span>Start date:</span>
            <span>Wednesday 23 April 2025</span>
          </div>
          <div className="flex flex-row justify-start gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em" fill="none"
              viewBox="0 0 20 20" className="w-6 h-6 text-white ml-2 ">
              <path stroke="currentColor" d="M10 11.192a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"></path>
              <path stroke="currentColor" d="M3.017 7.075C4.658-.142 15.35-.133 16.983 7.083c.959 
              4.233-1.675 7.817-3.983 10.034a4.33 4.33 0 0 1-6.008 0c-2.3-2.217-4.934-5.809-3.975-10.042Z"></path>
            </svg>
            <span>Origin:</span>
            <span>Baqdad</span>
          </div>
          <div className="flex flex-row justify-start gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em" fill="none"
              viewBox="0 0 20 20" className="w-6 h-6 text-white ml-2 ">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                d="M4.167 11.905c-1.543.68-2.5 1.63-2.5 2.678 0 2.071 3.73 3.75 8.333 
              3.75s8.333-1.679 8.333-3.75c0-1.049-.957-1.997-2.5-2.678M15 6.667c0 
              3.386-3.75 5-5 7.5-1.25-2.5-5-4.114-5-7.5a5 5 0 1 1 10 0m-4.167 0a.833.833 
              0 1 1-1.666 0 .833.833 0 0 1 1.666 0"></path>
            </svg>
            <span>Destination:</span>
            <span>Gilan</span>
          </div>
          <div className="flex flex-row justify-start gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em" fill="none"
              viewBox="0 0 20 20" className="w-6 h-6 text-white ml-2 ">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                d="M1.667 18.334h16.666"></path>
              <path stroke="currentColor" strokeLinejoin="round" strokeMiterlimit="10"
                d="M2.459 18.333 2.5 8.308c0-.508.242-.991.642-1.308l5.833-4.542a1.676 
              1.676 0 0 1 2.05 0l5.833 4.534c.409.316.642.8.642 1.316v10.025"></path>
              <path stroke="currentColor" strokeLinejoin="round" strokeMiterlimit="10"
                d="M10.833 14.167H9.166c-.691 0-1.25.558-1.25 1.25v2.916h4.167v-2.916c0-.692-.558-1.25-1.25-1.25ZM7.917 
              11.458H6.25a.836.836 0 0 1-.833-.833v-1.25c0-.459.375-.834.833-.834h1.667c.458 0 
              .833.375.833.834v1.25a.836.836 0 0 1-.833.833ZM13.75 11.458h-1.667a.836.836 0 0 
              1-.833-.833v-1.25c0-.459.375-.834.833-.834h1.667c.458 0 .833.375.833.834v1.25a.836.836 
              0 0 1-.833.833Z"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                d="m15.833 5.834-.025-2.5h-3.666"></path>
            </svg>
            <span>Type of accommodation:</span>
            <span>Hotels</span>
          </div>
          <div className="flex flex-row justify-start gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em" fill="none"
              viewBox="0 0 20 20" className="w-6 h-6 text-white ml-2 ">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                d="M14.584 17.917H6.417c-1.417 0-2.583-1.1-2.583-2.454V4.538c0-1.346 
              1.158-2.455 2.583-2.455h8.166c1.417 0 2.584 1.1 2.584 2.455v10.925c0 
              1.353-1.158 2.454-2.584 2.454"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                d="M15.917 11.25H5.084c-.692 0-1.25-.558-1.25-1.25V8.334c0-.692.558-1.25 
              1.25-1.25h10.833c.691 0 1.25.558 1.25 1.25V10c0 .692-.559 1.25-1.25 1.25"></path>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M7.579 14.75h.007M13.412 14.75h.008"></path><path stroke="currentColor" strokeLinecap="round"
                  strokeLinejoin="round" d="M8.417 4.584h4.166"></path>
            </svg>
            <span>Type of transportation:</span>
            <span>Land & Air transportation</span>
          </div>
          <div className="flex flex-row justify-start gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em" fill="none"
              viewBox="0 0 20 20" className="w-6 h-6 text-white ml-2 ">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.5 10.417a7.913 7.913 0 0 1-7.917 7.916 7.913 7.913 0 0 1-7.916-7.916A7.913 7.913 0 0 1 9.583 2.5c1.092 0 2.133.217 3.083.617a3.4 3.4 0 0 0-.166 1.05c0 .625.175 1.216.483 1.716.167.284.383.542.633.759a3.27 3.27 0 0 0 3.259.683c.4.95.625 2 .625 3.092"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M19.167 4.167q0 .4-.1.775a3.1 3.1 0 0 1-.384.941c-.4.675-1.041 1.2-1.808 1.442a3.267 3.267 0 0 1-3.258-.683 3 3 0 0 1-.634-.759 3.27 3.27 0 0 1-.483-1.716q.002-.55.167-1.05A3.329 3.329 0 0 1 15.834.834c.983 0 1.874.425 2.474 1.108a3.32 3.32 0 0 1 .859 2.225M17.075 4.15h-2.483M15.834 2.934v2.491"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.167 8.908c0-.775.633-1.408 1.408-1.408s1.408.633 1.408 1.408c0 1.567-2.225 1.734-2.716 3.225-.1.309.158.617.483.617h2.233"></path><path stroke="currentColor" strokeLinecap="round" d="M6.667 7.5v5.208"></path>
            </svg>
            <span>Age group:</span>
            <span>3 to 90 years old</span>
          </div>
          <div className="flex flex-row justify-start gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em" fill="none"
              viewBox="0 0 20 20" className="w-6 h-6 text-white ml-2 ">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 5.967a.5.5 0 0 0-.158 0 2.144 2.144 0 0 1-2.067-2.15c0-1.192.958-2.15 2.15-2.15a2.15 2.15 0 0 1 .075 4.3M14.142 12.033c1.141.192 2.4-.008 3.283-.6 1.175-.783 1.175-2.066 0-2.85-.892-.591-2.167-.791-3.308-.591M4.975 5.967a.5.5 0 0 1 .159 0A2.144 2.144 0 0 0 7.2 3.817c0-1.192-.958-2.15-2.15-2.15a2.15 2.15 0 0 0-.075 4.3M5.834 12.033c-1.142.192-2.4-.008-3.284-.6-1.175-.783-1.175-2.066 0-2.85.892-.591 2.167-.791 3.309-.591M10 12.192a.5.5 0 0 0-.158 0 2.144 2.144 0 0 1-2.067-2.15c0-1.192.958-2.15 2.15-2.15a2.15 2.15 0 0 1 2.15 2.15c-.008 1.166-.925 2.116-2.075 2.15M7.575 14.817c-1.175.783-1.175 2.067 0 2.85 1.333.891 3.517.891 4.85 0 1.175-.784 1.175-2.067 0-2.85-1.325-.883-3.517-.883-4.85 0"></path>
            </svg>
            <span>Tour capacity:</span>
            <span>36 Person</span>
          </div>
          <div className="flex flex-row justify-start gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em" fill="none"
              viewBox="0 0 20 20" className="w-6 h-6 text-white ml-2 ">
              <path stroke="currentColor" strokeMiterlimit="10" d="M10 5a1.667 1.667 0 1 0 0-3.333A1.667 1.667 0 0 0 10 5Z"></path><path stroke="currentColor" strokeLinejoin="round" d="M5.92 14.503s-.374.785.439 1.21 1.284-.406 1.284-.406l1.167-2.358.128-1.559 1.436.458 1.435 1.791s.84.669 1.385.143c.545-.525.381-.987.164-1.258l-1.65-2.035-1.377-.62-.198-.094.357-1.615h2.93s.747.072.747-.634-.755-.721-.774-.721h-1.475l-1.501-1.401s-1.362-1.12-2.522.368c-.342 1.686-.785 3.665-.809 4.022-.023.357-.128 2.565-.198 2.73s-.969 1.98-.969 1.98Z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.167 8.334 15 14.167M7.087 10.834l-1.05-.316s-.284-.307-.181-1.134.373-3.55.373-3.55l1.271.334"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.667 10c1.234-.185 3.796-.778 4.166-1.666M6.667 5.833c.46 0 .833-.186.833-.416S7.127 5 6.667 5s-.833.187-.833.417.373.416.833.416M1.667 18.334l3.325-1.852h6.248l2.82-2.378h3.585l.688-.77"></path>
            </svg>
            <span>difficulty:</span>
            <span>1 per 5</span>
          </div>
          <div className="flex flex-row flex-wrap gap-2 mt-3 text-xs">
            <span className="bg-teal-900 px-2 py-0.5 rounded">
              Adventure tour
            </span>
            <span className="bg-teal-900 px-2 py-0.5 rounded">
              Beach tour
            </span>
            <span className="bg-teal-900 px-2 py-0.5 rounded">
              Nature tour
            </span>
            <span className="bg-teal-900 px-2 py-0.5 rounded">
              Therapy tour
            </span>
            <span className="bg-teal-900 px-2 py-0.5 rounded">
              Jungle tour
            </span>
            <span className="bg-teal-900 px-2 py-0.5 rounded">
              Off-road tour
            </span>
          </div>
        </div>

        <hr className="border-teal-800 my-6 w-100" />

        <div className="flex flex-col gap-y-2 justify-between yekanbakh">

          <div className="flex flex row justify-start gap-x-6 items-center">
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

          <div className="flex flex row justify-start gap-x-6 items-center">
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

        <hr className="border-teal-800 my-6 w-100" />

        <div className=" flex flex-row justify-start gap-x-8 items-center mb-6">
            <div className="flex flex-col gap-2 text-xs text-gray-300">
                <span></span>
                <span>Tour price per person</span>
            </div>
            <div className="flex flex-col gap-1">
                <span></span>
                <span className="text-lg text-[#cea958] ml-auto">from $ 2,399</span>
            </div>
        </div>          

        <Tabs tabs={tabs} defaultTab="timing" />        

      </div>
    </div>
  );
}
