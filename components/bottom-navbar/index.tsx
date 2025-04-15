'use client'

import Link from "next/link";
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';


export default function BottonNavbarComponent() {

    // Inside you client component
    const activeSegment = useSelectedLayoutSegment();

    // const link = [
    //     {
    //         id: 1,
    //         label: 'Home',
    //         icon: '/home.svg',
    //         path: '/',
    //         activeSegment: '',
    //     },
    //     {
    //         id: 2,
    //         label: 'About',
    //         icon: '/about.svg',            
    //         path: '/about',
    //         activeSegment: 'about',
    //     },
    //     {
    //         id: 3,
    //         label: 'Next',
    //         icon: '/next.svg',            
    //         path: '/',
    //         activeSegment: null,
    //     },
    //     {
    //         id: 4,
    //         label: 'Shop',
    //         icon: '/shop.svg',              
    //         path: '/shop',
    //         activeSegment: 'shop',
    //     },
    //     {
    //         id: 5,
    //         label: 'Courses',
    //         icon: '/courses.svg',              
    //         path: '/courses',
    //         activeSegment: 'courses',
    //     },        
    // ];


    return (
    //   <div classNameName="block md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-cyan-950 dark:border-cyan-800">
    //     <div classNameName="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">

    //         {link.map((item) => (
    //             <Link
    //                 key={item.id}
    //                 href={item.path}
    //                 classNameName='inline-flex flex-col items-center justify-center px-5 group'
    //                 >
    //                 <div classNameName={activeSegment === item.activeSegment ? '' : 'opacity-20'}>
    //                 <Image
    //                     classNameName="dark:invert h-7 w-7"
    //                     src={item.icon}
    //                     alt={item.label}
    //                     width={30}
    //                     height={30}
    //                     priority
    //                 />
    //                 </div>

    //             </Link>
    //         ))}

    //     </div>
    //   </div>

    <div className="sticky bottom-3 p-4 px-6 m-2 flex items-center justify-between border-gray-200 dark:bg-teal-900 shadow-3xl text-[#CEA958] rounded-2xl cursor-pointer max-w-[380px] sm:mx-auto ">
        <Link href={'/hotels'} className={activeSegment == 'hotels' ? 'flex flex-col items-center transition ease-in duration-200 hover:opacity-100' : 'flex flex-col items-center transition ease-in duration-200 hover:opacity-100 opacity-50'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 48 48"
                stroke="currentColor">
                <path d="M23.951172 4 A 1.50015 1.50015 0 0 0 23.070312 4.3222656L8.8730469 15.521484C7.0935305 16.919676 6 19.100391 6 21.400391L6 40.5C6 41.133333 6.2367979 41.80711 6.7148438 42.285156C7.1928895 42.763202 7.8666667 43 8.5 43L18.5 43C19.133333 43 19.80711 42.763202 20.285156 42.285156C20.763202 41.80711 21 41.133333 21 40.5L21 30.5C21 30.218182 21.218182 30 21.5 30L26.5 30C26.781818 30 27 30.218182 27 30.5L27 40.5C27 41.133333 27.236798 41.80711 27.714844 42.285156C28.19289 42.763202 28.866667 43 29.5 43L39.5 43C40.133333 43 40.80711 42.763202 41.285156 42.285156C41.763202 41.80711 42 41.133333 42 40.5L42 21.400391C42 19.155946 41.012069 16.901298 39.087891 15.490234L24.929688 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562L37.271484 17.876953 A 1.50015 1.50015 0 0 0 37.3125 17.910156C38.388318 18.699095 39 20.044835 39 21.400391L39 40L30 40L30 30.5C30 28.581818 28.418182 27 26.5 27L21.5 27C19.581818 27 18 28.581818 18 30.5L18 40L9 40L9 21.400391C9 20.100391 9.7060794 18.680715 10.726562 17.878906 A 1.50015 1.50015 0 0 0 10.728516 17.876953L24 7.4101562 z" fill="currentColor" />
            </svg>
        </Link>
        <Link href={'/explore'} className={activeSegment == 'explore' ? 'flex flex-col items-center transition ease-in duration-200 hover:opacity-100' : 'flex flex-col items-center transition ease-in duration-200 hover:opacity-100 opacity-50'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 48 48"
                stroke="currentColor">
                <path d="M20.5 6C12.509634 6 6 12.50964 6 20.5C6 28.49036 12.509634 35 20.5 35C23.956359 35 27.133709 33.779044 29.628906 31.75L39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453L31.75 29.628906C33.779044 27.133709 35 23.956357 35 20.5C35 12.50964 28.490366 6 20.5 6 z M 20.5 9C26.869047 9 32 14.130957 32 20.5C32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016C26.405717 30.776199 23.602614 32 20.5 32C14.130953 32 9 26.869043 9 20.5C9 14.130957 14.130953 9 20.5 9 z" fill="currentColor" />
            </svg>
        </Link>
        <Link href={'/'} className="flex flex-col items-center hover:text-white">
            <div className={"absolute bottom-2 shadow-2xl text-center flex fill-[#CEA958] items-center justify-center rounded-full border-3 text-3xl border-[#CEA958] hover:bg-teal-800 hover:border-teal-800 bg-teal-700 w-16 h-16 p-2 text-white transition ease-in duration-200 "}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 48 48"
                    stroke="#CEA958">
                    <path d="M18.5 25h-9C7.57 25 6 23.43 6 21.5v-9C6 10.57 7.57 9 9.5 9h9c1.93 0 3.5 1.57 3.5 3.5v9C22 23.43 20.43 25 18.5 25zM9.5 12C9.225 12 9 12.225 9 12.5v9C9 21.775 9.225 22 9.5 22h9c.275 0 .5-.225.5-.5v-9c0-.275-.225-.5-.5-.5H9.5zM18.5 43h-9C7.57 43 6 41.43 6 39.5v-9C6 28.57 7.57 27 9.5 27h9c1.93 0 3.5 1.57 3.5 3.5v9C22 41.43 20.43 43 18.5 43zM9.5 30C9.225 30 9 30.225 9 30.5v9C9 39.775 9.225 40 9.5 40h9c.275 0 .5-.225.5-.5v-9c0-.275-.225-.5-.5-.5H9.5zM36.5 43h-9c-1.93 0-3.5-1.57-3.5-3.5v-9c0-1.93 1.57-3.5 3.5-3.5h9c1.93 0 3.5 1.57 3.5 3.5v9C40 41.43 38.43 43 36.5 43zM27.5 30c-.275 0-.5.225-.5.5v9c0 .275.225.5.5.5h9c.275 0 .5-.225.5-.5v-9c0-.275-.225-.5-.5-.5H27.5zM34 24.862c-.896 0-1.792-.341-2.475-1.023l-6.364-6.364c-1.364-1.364-1.364-3.585 0-4.949l6.364-6.364c1.365-1.365 3.584-1.365 4.949 0l6.364 6.364c1.364 1.364 1.364 3.585 0 4.949l-6.364 6.364C35.792 24.521 34.896 24.862 34 24.862zM34 8.136c-.128 0-.256.049-.354.146l-6.364 6.364c-.194.195-.194.512 0 .707l6.364 6.364c.195.195.512.195.707 0l6.364-6.364c.194-.195.194-.512 0-.707l-6.364-6.364C34.256 8.185 34.128 8.136 34 8.136z" fill="#CEA958" />
                </svg>
                {activeSegment == null && <span className="animate-ping absolute inline-flex h-full w-full rounded-full border-4 opacity-50"></span>}
            </div>
        </Link>
        <Link href={'/wallet'} className={activeSegment == 'wallet' ? 'flex flex-col items-center transition ease-in duration-200 hover:opacity-100' : 'flex flex-col items-center transition ease-in duration-200 hover:opacity-100 opacity-50'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 48 48"
                stroke="currentColor">
                <path d="M9.5 9C5.9290921 9 3 11.929092 3 15.5L3 32.5C3 36.070908 5.9290921 39 9.5 39L38.5 39C42.070908 39 45 36.070908 45 32.5L45 15.5C45 11.929092 42.070908 9 38.5 9L9.5 9 z M 9.5 12L38.5 12C40.445092 12 42 13.554908 42 15.5L42 32.5C42 34.445092 40.445092 36 38.5 36L9.5 36C7.5549079 36 6 34.445092 6 32.5L6 15.5C6 13.554908 7.5549079 12 9.5 12 z M 11 18C9.895 18 9 18.895 9 20L9 22C9 23.105 9.895 24 11 24L15 24C16.105 24 17 23.105 17 22L17 20C17 18.895 16.105 18 15 18L11 18 z M 10.5 28 A 1.50015 1.50015 0 1 0 10.5 31L13.5 31 A 1.50015 1.50015 0 1 0 13.5 28L10.5 28 z M 18.5 28 A 1.50015 1.50015 0 1 0 18.5 31L21.5 31 A 1.50015 1.50015 0 1 0 21.5 28L18.5 28 z M 26.5 28 A 1.50015 1.50015 0 1 0 26.5 31L29.5 31 A 1.50015 1.50015 0 1 0 29.5 28L26.5 28 z M 34.5 28 A 1.50015 1.50015 0 1 0 34.5 31L37.5 31 A 1.50015 1.50015 0 1 0 37.5 28L34.5 28 z" fill="currentColor" />
            </svg>
        </Link>
        <Link href={'/profile'} className={activeSegment == 'profile' ? 'flex flex-col items-center transition ease-in duration-200 hover:opacity-100' : 'flex flex-col items-center transition ease-in duration-200 hover:opacity-100 opacity-50'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 48 48"
                stroke="currentColor">
                <path d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 24 7C27.883764 7 31 10.116238 31 14C31 17.883762 27.883764 21 24 21C20.116236 21 17 17.883762 17 14C17 10.116238 20.116236 7 24 7 z M 12.5 28C10.035294 28 8 30.035294 8 32.5L8 33.699219C8 36.640523 9.8723857 39.275984 12.71875 41.089844C15.565114 42.903703 19.455814 44 24 44C28.544186 44 32.434886 42.903703 35.28125 41.089844C38.127614 39.275984 40 36.640523 40 33.699219L40 32.5C40 30.035294 37.964706 28 35.5 28L12.5 28 z M 12.5 31L35.5 31C36.435294 31 37 31.564706 37 32.5L37 33.699219C37 35.357914 35.921604 37.124406 33.667969 38.560547C31.414333 39.996687 28.055814 41 24 41C19.944186 41 16.585667 39.996687 14.332031 38.560547C12.078396 37.124406 11 35.357914 11 33.699219L11 32.5C11 31.564706 11.564706 31 12.5 31 z" fill="currentColor" />
            </svg>
        </Link>
    </div>    
    );
}
  