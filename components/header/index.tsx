import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../language-switcher";

export default function HeaderComponent() {
    return (
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent">
            <div className="max-w-[400px] mx-auto px-6">
                <div className="flex justify-between h-20">
                    <div className="flex items-center justify-between">
                        <a href="#" className="flex items-center">
                            <Image
                            className="dark:invert h-10 w-20"
                            src="/next.svg"
                            alt="Next.js logo"
                            width={60}
                            height={38}
                            priority
                            />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center gap-x-3">
                            <Link href="/login" className="text-white hover:text-gray-200 text-sm font-medium fill-[#CEA958] text-[#CEA958]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-7 h-7">
                                    <path d="M24 4C12.972066 4 4 12.972074 4 24C4 35.027926 12.972066 44 24 44C35.027934 44 44 35.027926 44 24C44 12.972074 35.027934 4 24 4 z M 24 7C33.406615 7 41 14.593391 41 24C41 33.406609 33.406615 41 24 41C14.593385 41 7 33.406609 7 24C7 14.593391 14.593385 7 24 7 z M 24 12C22.125 12 20.528815 12.757133 19.503906 13.910156C18.478997 15.063179 18 16.541667 18 18C18 19.458333 18.478997 20.936821 19.503906 22.089844C20.528815 23.242867 22.125 24 24 24C25.875 24 27.471185 23.242867 28.496094 22.089844C29.521003 20.936821 30 19.458333 30 18C30 16.541667 29.521003 15.063179 28.496094 13.910156C27.471185 12.757133 25.875 12 24 12 z M 24 15C25.124999 15 25.778816 15.367867 26.253906 15.902344C26.728997 16.436821 27 17.208333 27 18C27 18.791667 26.728997 19.563179 26.253906 20.097656C25.778816 20.632133 25.124999 21 24 21C22.875001 21 22.221184 20.632133 21.746094 20.097656C21.271003 19.563179 21 18.791667 21 18C21 17.208333 21.271003 16.436821 21.746094 15.902344C22.221184 15.367867 22.875001 15 24 15 z M 17.300781 26C15.500781 26 14 27.500781 14 29.300781L14 30.400391C14 32.38002 15.237554 34.115912 17.023438 35.271484C18.80932 36.427056 21.204902 37.099609 24 37.099609C26.795098 37.099609 29.19068 36.427056 30.976562 35.271484C32.762446 34.115912 34 32.38002 34 30.400391L34 29.300781C34 27.500781 32.499219 26 30.699219 26L17.300781 26 z M 17.300781 29L30.699219 29C30.899219 29 31 29.100781 31 29.300781L31 30.400391C31 31.120761 30.536772 31.984478 29.347656 32.753906C28.15854 33.523334 26.304902 34.099609 24 34.099609C21.695098 34.099609 19.84146 33.523334 18.652344 32.753906C17.463228 31.984478 17 31.120761 17 30.400391L17 29.300781C17 29.100781 17.100781 29 17.300781 29 z" />
                                </svg>
                            </Link>
                            <Link href="/" className="text-white hover:text-gray-200 text-sm font-medium fill-[#CEA958] text-[#CEA958]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-7 h-7">
                                    <path d="M11.5 6C8.4802259 6 6 8.4802259 6 11.5L6 36.5C6 39.519774 8.4802259 42 11.5 42L36.5 42C39.519774 42 42 39.519774 42 36.5L42 11.5C42 8.4802259 39.519774 6 36.5 6L11.5 6 z M 11.5 9L36.5 9C37.898226 9 39 10.101774 39 11.5L39 36.5C39 37.898226 37.898226 39 36.5 39L11.5 39C10.101774 39 9 37.898226 9 36.5L9 11.5C9 10.101774 10.101774 9 11.5 9 z M 14.5 14 A 1.50015 1.50015 0 1 0 14.5 17L33.5 17 A 1.50015 1.50015 0 1 0 33.5 14L14.5 14 z M 14.5 22.5 A 1.50015 1.50015 0 1 0 14.5 25.5L33.5 25.5 A 1.50015 1.50015 0 1 0 33.5 22.5L14.5 22.5 z M 14.5 31 A 1.50015 1.50015 0 1 0 14.5 34L33.5 34 A 1.50015 1.50015 0 1 0 33.5 31L14.5 31 z"  />
                                </svg>
                            </Link>
                            {/* <LanguageSwitcher/> */}
                        </div>
                        {/* <div className="flex items-center md:hidden">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            
            <div className="md:hidden hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 bg-opacity-90">
                    <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                        About
                    </Link>
                    <Link href="/shop" className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                        Shop
                    </Link>
                    <Link href="/courses" className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                        Courses
                    </Link>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5 space-y-3">
                            <Link href="/login" className="block w-full text-center text-white bg-gray-700 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">
                                Login
                            </Link>
                        </div>
                        <div className="mt-3 px-5">
                            <Link href="/register" className="block w-full text-center bg-white text-indigo-600 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}