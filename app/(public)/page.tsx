// import Image from "next/image";

// export default function Home() {
//   return (
//     <div classNameName="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main classNameName="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           classNameName="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol classNameName="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li classNameName="mb-2">
//             Get started by editing{" "}
//             <code classNameName="bg-black/[.05] dark:bg-cyan-800/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div classNameName="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             classNameName="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               classNameName="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             classNameName="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer classNameName="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           classNameName="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           classNameName="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           classNameName="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// import TestClientComponent from "@/components/test-client-component";
// import TestServerComponent from "@/components/test-server-component";
import Image from "next/image";
import Link from "next/link";

// SSR : Add {cache:'no-store'} to await fetch
// SSG : Add {cache:'force-cache'} to await fetch
// ISR : Add {next: {revalidate: 60}} to await fetch

// const getData = async () => {
//   const data = await fetch('https://api.escuelajs.co/api/v1/products', {next: {revalidate: 60}});
//   return data.json();
// }

export default async function Home() {
  // const data = await getData();
  // console.log(data);
  
  return (
    <div className="w-full">
      
      {/* <div classNameName="iransans text-center mb-0">صفحه اصلی</div>
      <p>{data[0].title}</p>
      <Image
        width={400}
        height={400}
        alt="test"
        src={"/images/bg/03.jpg"}
        classNameName="w-98"
      />
      <TestServerComponent/>
      <TestClientComponent/> */}
      <div className="grid gap-3">

        <div className="flex flex-column menu w-full">
          <div className="w-full grid grid-cols-4 gap-2 items-center justify-center  text-gray-500 cursor-pointer">
            <Link href=""
              className="flex flex-col items-center justify-center w-18 h-18 rounded-xl text-[#CEA958] cursor-pointer p-2 hover:text-gray-400 hover:bg-[#181a1c] transition ease-in duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 48 48"
                    stroke="currentColor">
                    <path d="M23.951172 4 A 1.50015 1.50015 0 0 0 23.070312 4.3222656L8.8730469 15.521484C7.0935305 16.919676 6 19.100391 6 21.400391L6 40.5C6 41.133333 6.2367979 41.80711 6.7148438 42.285156C7.1928895 42.763202 7.8666667 43 8.5 43L18.5 43C19.133333 43 19.80711 42.763202 20.285156 42.285156C20.763202 41.80711 21 41.133333 21 40.5L21 30.5C21 30.218182 21.218182 30 21.5 30L26.5 30C26.781818 30 27 30.218182 27 30.5L27 40.5C27 41.133333 27.236798 41.80711 27.714844 42.285156C28.19289 42.763202 28.866667 43 29.5 43L39.5 43C40.133333 43 40.80711 42.763202 41.285156 42.285156C41.763202 41.80711 42 41.133333 42 40.5L42 21.400391C42 19.155946 41.012069 16.901298 39.087891 15.490234L24.929688 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562L37.271484 17.876953 A 1.50015 1.50015 0 0 0 37.3125 17.910156C38.388318 18.699095 39 20.044835 39 21.400391L39 40L30 40L30 30.5C30 28.581818 28.418182 27 26.5 27L21.5 27C19.581818 27 18 28.581818 18 30.5L18 40L9 40L9 21.400391C9 20.100391 9.7060794 18.680715 10.726562 17.878906 A 1.50015 1.50015 0 0 0 10.728516 17.876953L24 7.4101562 z" fill="currentColor" />
                </svg>
              <p className="text-sm mt-1 yekanbakh">Residence</p>
            </Link>
            <Link href=""
              className="flex flex-col items-center justify-center w-18 h-18 rounded-lg text-[#CEA958]  hover:text-gray-400 hover:bg-[#181a1c] cursor-pointer  p-2 transition ease-in duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 48 48"
                    stroke="currentColor">
                    <path d="M15.476562 9.9785156 A 1.50015 1.50015 0 0 0 15.259766 10L14.044922 10C10.089532 10 6.5372738 12.46129 5.1484375 16.164062 A 1.50015 1.50015 0 0 0 5.1074219 16.291016L4.1328125 19.814453C3.3327664 20.228953 2.6134827 20.787517 2.0253906 21.488281C0.69185645 23.077307 2.9605947e-16 25.272943 0 27.824219L0 32.5 A 1.50015 1.50015 0 0 0 1.2539062 33.980469L6.3203125 34.824219C6.5265931 35.391025 6.8328753 35.928684 7.2539062 36.402344C8.1121484 37.367867 9.4583337 38 11 38C12.541666 38 13.887852 37.367867 14.746094 36.402344C15.122381 35.979021 15.395525 35.500561 15.599609 35L34.400391 35C34.604475 35.500561 34.877619 35.979021 35.253906 36.402344C36.112148 37.367867 37.458334 38 39 38C40.541666 38 41.887852 37.367867 42.746094 36.402344C43.122381 35.979021 43.395525 35.500561 43.599609 35L46.5 35 A 1.50015 1.50015 0 0 0 48 33.5L48 25.5C48 24.121843 47.164299 22.937695 45.990234 22.369141C45.975564 21.120489 45.019849 20.047611 43.775391 19.910156L36.535156 19.105469L33.986328 13.123047 A 1.50015 1.50015 0 0 0 33.947266 13.039062C33.931808 13.008171 33.910525 12.981685 33.894531 12.951172 A 1.50015 1.50015 0 0 0 33.5 10L29.5 10 A 1.50015 1.50015 0 0 0 29.265625 10.017578C29.18566 10.014073 29.107867 10 29.027344 10L24.746094 10 A 1.50015 1.50015 0 0 0 24.259766 10L15.746094 10 A 1.50015 1.50015 0 0 0 15.476562 9.9785156 z M 17 13L23 13L23 19L17 19L17 13 z M 26 13L29.027344 13C29.976368 13 30.835944 13.532337 31.261719 14.380859C31.261719 14.380859 31.263672 14.382812 31.263672 14.382812L33.230469 19L26 19L26 13 z M 14 13.007812L14 19L7.5 19C7.4894675 19 7.4792741 19.00191 7.46875 19.001953L7.9667969 17.199219C8.9198422 14.684262 11.311825 13.026868 14 13.007812 z M 7.5 22L15.253906 22 A 1.50015 1.50015 0 0 0 15.740234 22L24.253906 22 A 1.50015 1.50015 0 0 0 24.740234 22L35.130859 22 A 1.50015 1.50015 0 0 0 35.742188 22.037109L43 22.84375L43 23.5 A 1.50015 1.50015 0 0 0 44.5 25C44.795045 25 45 25.204955 45 25.5L45 32L43.900391 32C43.73843 31.133217 43.367133 30.296326 42.746094 29.597656C41.887852 28.632133 40.541666 28 39 28C37.458334 28 36.112148 28.632133 35.253906 29.597656C34.632867 30.296326 34.26157 31.133217 34.099609 32L15.900391 32C15.73843 31.133217 15.367133 30.296326 14.746094 29.597656C13.887852 28.632133 12.541666 28 11 28C9.4583337 28 8.1121484 28.632133 7.2539062 29.597656C6.6920321 30.229765 6.3481851 30.977777 6.1640625 31.755859L3 31.228516L3 27.824219C3 25.813495 3.5412529 24.34899 4.3242188 23.416016C5.1071846 22.483041 6.1239168 22 7.5 22 z M 11 31C11.791666 31 12.195482 31.242867 12.503906 31.589844C12.81233 31.936821 13 32.458333 13 33C13 33.541667 12.81233 34.063179 12.503906 34.410156C12.195482 34.757133 11.791666 35 11 35C10.208334 35 9.8045176 34.757133 9.4960938 34.410156C9.1876697 34.063179 9 33.541667 9 33C9 32.458333 9.1876698 31.936821 9.4960938 31.589844C9.8045176 31.242867 10.208334 31 11 31 z M 39 31C39.791666 31 40.195482 31.242867 40.503906 31.589844C40.81233 31.936821 41 32.458333 41 33C41 33.541667 40.81233 34.063179 40.503906 34.410156C40.195482 34.757133 39.791666 35 39 35C38.208334 35 37.804518 34.757133 37.496094 34.410156C37.18767 34.063179 37 33.541667 37 33C37 32.458333 37.18767 31.936821 37.496094 31.589844C37.804518 31.242867 38.208334 31 39 31 z" fill="currentColor" />
              </svg>
              
              <p className="text-sm mt-1 yekanbakh">Taxi</p>
            </Link>
            <Link href=""
              className="flex flex-col items-center justify-center w-18 h-18 rounded-lg hover:text-gray-400 hover:bg-[#181a1c] text-[#CEA958]  cursor-pointer  p-2  transition ease-in duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 48 48"
                    stroke="currentColor">
                    <path xmlns="http://www.w3.org/2000/svg" d="M24 5.0507812C22.795727 5.0507812 21.591071 5.44092 20.595703 6.2246094 A 1.50015 1.50015 0 0 0 20.595703 6.2265625L8.859375 15.474609C7.0554772 16.896241 6 19.068584 6 21.365234L6 38.5C6 40.967501 8.0324991 43 10.5 43L37.5 43C39.967501 43 42 40.967501 42 38.5L42 21.365234C42 19.068584 40.944523 16.896241 39.140625 15.474609L27.404297 6.2265625 A 1.50015 1.50015 0 0 0 27.404297 6.2246094C26.408929 5.4409169 25.204273 5.0507813 24 5.0507812 z M 24 8.0429688C24.545227 8.0429688 25.091196 8.2217207 25.548828 8.5820312L37.285156 17.830078C38.369258 18.684447 39 19.985885 39 21.365234L39 38.5C39 39.346499 38.346499 40 37.5 40L10.5 40C9.6535009 40 9 39.346499 9 38.5L9 21.365234C9 19.985885 9.6307412 18.684447 10.714844 17.830078L22.451172 8.5820312C22.908804 8.2217206 23.454773 8.0429688 24 8.0429688 z M 23.976562 17.978516 A 1.50015 1.50015 0 0 0 22.5 19.5L22.5 25L17 25 A 1.50015 1.50015 0 1 0 17 28L22.5 28L22.5 33.5 A 1.50015 1.50015 0 1 0 25.5 33.5L25.5 28L31 28 A 1.50015 1.50015 0 1 0 31 25L25.5 25L25.5 19.5 A 1.50015 1.50015 0 0 0 23.976562 17.978516 z" fill="currentColor"/>
                </svg>
              <p className="text-sm mt-1 yekanbakh">Hospital</p>
            </Link>    
            <Link href=""
              className="flex flex-col items-center justify-center w-18 h-18 rounded-lg text-[#CEA958]  hover:text-gray-400 hover:bg-[#181a1c] cursor-pointer  p-2  transition ease-in duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 48 48"
                    stroke="currentColor">
                    <path xmlns="http://www.w3.org/2000/svg" d="M33.484375 4.984375 A 1.50015 1.50015 0 0 0 32.439453 7.5605469L37.878906 13L6.5 13 A 1.50015 1.50015 0 1 0 6.5 16L37.878906 16L32.439453 21.439453 A 1.50015 1.50015 0 1 0 34.560547 23.560547L42.560547 15.560547 A 1.50015 1.50015 0 0 0 42.560547 13.439453L34.560547 5.4394531 A 1.50015 1.50015 0 0 0 33.484375 4.984375 z M 14.470703 23.986328 A 1.50015 1.50015 0 0 0 13.439453 24.439453L5.4394531 32.439453 A 1.50015 1.50015 0 0 0 5.4394531 34.560547L13.439453 42.560547 A 1.50015 1.50015 0 1 0 15.560547 40.439453L10.121094 35L41.5 35 A 1.50015 1.50015 0 1 0 41.5 32L10.121094 32L15.560547 26.560547 A 1.50015 1.50015 0 0 0 14.470703 23.986328 z" fill="currentColor"/>
                </svg>
              <p className="text-sm mt-1 yekanbakh">Deposit</p>
            </Link>

            <Link href=""
              className="flex flex-col items-center justify-center w-18 h-18 rounded-xl text-[#CEA958]  cursor-pointer  p-2 hover:text-gray-400 hover:bg-[#181a1c] transition ease-in duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 48 48"
                    stroke="currentColor">
                    <path d="M24 4C23.098214 4 22.318385 4.4308638 21.748047 4.9511719C21.177709 5.47148 20.743371 6.1017295 20.353516 6.8007812C19.573804 8.1988851 18.982066 9.8992818 18.496094 11.583984C18.302817 12.25401 18.359292 12.273773 18.203125 12.914062C18.144162 12.815076 18.12474 12.701758 18.060547 12.605469C17.557539 11.850957 16.75 11 15.5 11C14.175 11 13.213004 11.845238 12.488281 12.789062C11.763558 13.732888 11.165744 14.921518 10.597656 16.304688C9.4614811 19.071027 8.4861414 22.618893 7.6640625 26.160156C6.0199048 33.242682 5.015625 40.287109 5.015625 40.287109 A 1.50015 1.50015 0 0 0 6.5 42L17.5 42 A 1.50015 1.50015 0 0 0 18.970703 40.794922C18.970703 40.794922 19.455402 38.410544 20.443359 36.085938C20.937338 34.923634 21.562363 33.796474 22.214844 33.050781C22.867325 32.305088 23.430556 32 24 32C24.569444 32 25.132675 32.305088 25.785156 33.050781C26.437637 33.796474 27.062662 34.923634 27.556641 36.085938C28.544598 38.410544 29.029297 40.794922 29.029297 40.794922 A 1.50015 1.50015 0 0 0 30.5 42L41.5 42 A 1.50015 1.50015 0 0 0 42.988281 40.306641C42.988281 40.306641 42.232482 34.512778 40.964844 28.681641C40.331024 25.766072 39.576443 22.843575 38.677734 20.546875C38.22838 19.398525 37.754795 18.407453 37.15625 17.597656C36.557705 16.78786 35.71875 16 34.5 16C33.275 16 32.338993 16.70912 31.691406 17.449219C31.44675 17.728826 31.32479 18.060125 31.126953 18.365234C30.865752 16.705538 30.896224 16.272796 30.396484 14.15625C29.851631 11.848635 29.172392 9.5256162 28.263672 7.65625C27.809312 6.7215669 27.302015 5.8933887 26.638672 5.2207031C25.975329 4.5480176 25.0625 4 24 4 z M 24 7C24.0625 7 24.196546 7.014482 24.503906 7.3261719C24.811267 7.6378613 25.1985 8.2159331 25.564453 8.96875C26.296358 10.474384 26.960869 12.651365 27.478516 14.84375C28.513808 19.228519 29.009766 23.666016 29.009766 23.666016 A 1.50015 1.50015 0 0 0 31.955078 23.863281C31.955078 23.863281 32.310015 22.46849 32.925781 21.125C33.233664 20.453255 33.612431 19.810682 33.949219 19.425781C34.204816 19.13367 34.345562 19.061532 34.423828 19.033203C34.47303 19.074188 34.581818 19.161933 34.742188 19.378906C35.073329 19.826922 35.49037 20.632725 35.884766 21.640625C36.673557 23.656425 37.418976 26.483928 38.035156 29.318359C39.084048 34.14326 39.532639 37.66219 39.716797 39L31.59375 39C31.408055 38.181806 31.196392 36.980022 30.318359 34.914062C29.749838 33.576366 29.031113 32.203526 28.042969 31.074219C27.054825 29.944912 25.680556 29 24 29C22.319444 29 20.945175 29.944912 19.957031 31.074219C18.968887 32.203526 18.250162 33.576366 17.681641 34.914062C16.803608 36.980022 16.591945 38.181806 16.40625 39L8.3046875 39C8.514976 37.588054 9.1783475 32.903306 10.585938 26.839844C11.388858 23.381107 12.351019 19.928973 13.371094 17.445312C13.881131 16.203482 14.416128 15.204611 14.867188 14.617188C15.137343 14.265356 15.303077 14.135469 15.404297 14.070312C15.439907 14.10776 15.474306 14.13431 15.564453 14.269531C15.811445 14.64002 16.099889 15.295761 16.326172 15.974609C16.778738 17.332307 17.019531 18.746094 17.019531 18.746094 A 1.50015 1.50015 0 0 0 19.982422 18.728516C19.982422 18.728516 20.47585 15.54661 21.378906 12.416016C21.830434 10.850719 22.394946 9.3011149 22.974609 8.2617188C23.264444 7.7420225 23.560572 7.356645 23.769531 7.1660156C23.97849 6.9753862 24.026786 7 24 7 z" fill="currentColor" />
                </svg>
              <p className="text-sm mt-1 yekanbakh">Tourism</p>
            </Link>
            <Link href=""
              className="flex flex-col items-center justify-center w-18 h-18 rounded-lg text-[#CEA958]  hover:text-gray-400 hover:bg-[#181a1c] cursor-pointer  p-2 transition ease-in duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 48 48"
                    stroke="currentColor">
                    <path d="M36.886719 7.0976562C35.596746 7.155645 34.325741 7.6941814 33.382812 8.6894531 A 1.50015 1.50015 0 0 0 33.380859 8.6914062L28.597656 13.755859L13.644531 9.3144531L13.691406 9.3300781C11.99063 8.7626393 10.095367 9.2648505 8.8984375 10.617188C7.6020481 12.081559 7.9093591 14.334884 9.4023438 15.496094 A 1.50015 1.50015 0 0 0 9.453125 15.533203L19.855469 22.962891L14.914062 28.080078L12.955078 27.476562C11.294976 26.749339 9.3416963 27.081256 8.0292969 28.347656C6.6704667 29.657072 6.6889705 31.84522 8.0039062 33.160156 A 1.50015 1.50015 0 0 0 8.1933594 33.320312L9.4472656 34.216797L9.6757812 33.880859C8.628274 35.42899 8.8296213 37.527232 10.150391 38.849609C11.47159 40.170808 13.569119 40.373703 15.119141 39.330078L14.787109 39.554688L15.681641 40.808594 A 1.50015 1.50015 0 0 0 15.841797 40.998047C17.157605 42.313855 19.345037 42.330877 20.654297 40.972656C21.918295 39.661258 22.251134 37.710812 21.525391 36.050781L20.921875 34.087891L26.039062 29.146484L33.46875 39.548828 A 1.50015 1.50015 0 0 0 33.503906 39.599609C34.664855 41.092762 36.919407 41.400779 38.384766 40.103516 A 1.50015 1.50015 0 0 0 38.386719 40.103516C39.73856 38.90553 40.237815 37.009864 39.671875 35.310547L39.6875 35.357422L35.246094 20.404297L40.310547 15.621094 A 1.50015 1.50015 0 0 0 40.3125 15.619141C42.302764 13.733551 42.468229 10.540639 40.609375 8.4941406 A 1.50015 1.50015 0 0 0 40.509766 8.3925781C39.486747 7.4626943 38.176692 7.0396675 36.886719 7.0976562 z M 37.011719 10.148438C37.534401 10.123527 38.043778 10.285338 38.414062 10.587891C39.03485 11.349768 38.976892 12.749216 38.25 13.439453L32.515625 18.857422 A 1.50015 1.50015 0 0 0 32.107422 20.375L36.810547 36.212891 A 1.50015 1.50015 0 0 0 36.826172 36.259766C37.016232 36.830449 36.854642 37.451408 36.396484 37.857422C36.258343 37.979717 36.028064 37.952723 35.875 37.757812L27.470703 25.986328 A 1.50015 1.50015 0 0 0 25.208984 25.779297L18.175781 32.568359 A 1.50015 1.50015 0 0 0 17.783203 34.089844L18.664062 36.951172 A 1.50015 1.50015 0 0 0 18.755859 37.179688C19.042541 37.753051 18.936598 38.431575 18.494141 38.890625C18.365836 39.023727 18.144352 39.011357 17.988281 38.876953L16.378906 36.621094 A 1.50015 1.50015 0 0 0 14.318359 36.25L13.443359 36.841797L13.443359 36.839844C13.067747 37.093372 12.591222 37.048254 12.271484 36.728516C11.951197 36.407838 11.908199 35.932097 12.160156 35.560547 A 1.50015 1.50015 0 0 0 12.160156 35.558594L12.751953 34.683594 A 1.50015 1.50015 0 0 0 12.380859 32.623047L10.125 31.013672C9.99014 30.857286 9.9761199 30.636099 10.109375 30.507812 A 1.50015 1.50015 0 0 0 10.111328 30.505859C10.570101 30.063166 11.248273 29.959098 11.822266 30.246094 A 1.50015 1.50015 0 0 0 12.050781 30.337891L14.912109 31.21875 A 1.50015 1.50015 0 0 0 16.433594 30.826172L23.222656 23.792969 A 1.50015 1.50015 0 0 0 23.015625 21.53125L11.244141 13.126953C11.047095 12.972188 11.021366 12.744594 11.144531 12.605469C11.549601 12.147805 12.171016 11.985223 12.742188 12.175781 A 1.50015 1.50015 0 0 0 12.789062 12.191406L28.626953 16.894531 A 1.50015 1.50015 0 0 0 30.144531 16.486328L35.5625 10.751953C35.916607 10.379042 36.461324 10.174668 37.011719 10.148438 z" fill="currentColor" />
              </svg>
              
              <p className="text-sm mt-1 yekanbakh">Ticket</p>
            </Link>
            <Link href=""
              className="flex flex-col items-center justify-center w-18 h-18 rounded-lg hover:text-gray-400 hover:bg-[#181a1c] text-[#CEA958]  cursor-pointer  p-2  transition ease-in duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 48 48"
                    stroke="currentColor">
                    <path d="M16 8C12.980226 8 10.5 10.480226 10.5 13.5L10.5 34.5C10.5 37.519774 12.980226 40 16 40L32 40C35.019774 40 37.5 37.519774 37.5 34.5L37.5 15.5 A 1.50015 1.50015 0 0 0 37.060547 14.439453L31.060547 8.4394531 A 1.50015 1.50015 0 0 0 30 8L16 8 z M 16 11L29.378906 11L34.5 16.121094L34.5 34.5C34.5 35.898226 33.398226 37 32 37L16 37C14.601774 37 13.5 35.898226 13.5 34.5L13.5 13.5C13.5 12.101774 14.601774 11 16 11 z M 20 19C18.343 19 17 20.343 17 22L17 30C17 31.657 18.343 33 20 33L28 33C29.657 33 31 31.657 31 30L31 22C31 20.343 29.657 19 28 19L20 19 z" fill="currentColor" />
                </svg>
              <p className="text-sm mt-1 yekanbakh">Sim Card</p>
            </Link>    
            <Link href=""
              className="flex flex-col items-center justify-center w-18 h-18 rounded-lg text-[#CEA958]  hover:text-gray-400 hover:bg-[#181a1c] cursor-pointer  p-2  transition ease-in duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 48 48"
                    stroke="currentColor">
                    <path d="M21.5 2C17.375499 2 14 5.3754991 14 9.5C14 10.376199 14.160242 11.21629 14.439453 12L10.5 12C9.673 12 9 11.327 9 10.5C9 9.673 9.673 9 10.5 9L12.025391 9C12.080391 7.945 12.301828 6.936 12.673828 6L10.5 6C8.1306239 6 6.203695 7.8471637 6.0332031 10.173828 A 1.50015 1.50015 0 0 0 6 10.5L6 13.5L6 37.5C6 39.967501 8.0324991 42 10.5 42L37.5 42C39.967501 42 42 39.967501 42 37.5L42 16.5C42 14.173334 40.187046 12.25488 37.912109 12.041016C37.96386 11.700419 38 11.354257 38 11C38 7.1515984 34.848402 4 31 4C29.709498 4 28.502164 4.3603387 27.460938 4.9765625C26.088523 3.1720469 23.92938 2 21.5 2 z M 21.5 5C23.078762 5 24.445465 5.8117606 25.248047 7.0273438C24.462683 8.1583354 24 9.5274286 24 11C24 11.339877 24.032354 11.672613 24.080078 12L17.779297 12C17.29273 11.283638 17 10.434944 17 9.5C17 6.9965009 18.996501 5 21.5 5 z M 31 7C33.227598 7 35 8.7724016 35 11C35 11.347188 34.953074 11.680521 34.869141 12L27.130859 12C27.046926 11.680521 27 11.347188 27 11C27 8.7724016 28.772402 7 31 7 z M 9 15L37.5 15C38.346499 15 39 15.653501 39 16.5L39 37.5C39 38.346499 38.346499 39 37.5 39L10.5 39C9.6535009 39 9 38.346499 9 37.5L9 15 z M 33.5 24 A 2.5 2.5 0 0 0 33.5 29 A 2.5 2.5 0 0 0 33.5 24 z" fill="currentColor" />
                </svg>
              <p className="text-sm mt-1 yekanbakh">Wallet</p>
            </Link>           
          </div> 
        </div>

        <div className="flex flex-col gap-y-2 banner">
          <Image
            width={400}
            height={400}
            alt="test"
            src={"/images/banner/01.jpg"}
            className="h-[80px] w-full object-cover rounded-lg"
          />  
          <Image
            width={400}
            height={400}
            alt="test"
            src={"/images/banner/08.gif"}
            className="h-[80px] w-full object-cover rounded-lg"
          />                  
        </div>

        <div className="main flex flex-col overflow-hidden">
          <div className="destinations overflow-hidden mt-6">
            <h2 className="yekanbakh text-lg mb-2 text-[#CEA958]">Most Visited Destinations</h2>
            <div className="max-w-[380px] flex overflow-x-auto no-scrollbar gap-x-2 pb-0.5">
              <Link href="" className="relative min-w-[120px]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/destination/tehran.webp"}
                  className="h-[130px] w-[120px] object-cover rounded-lg"/>
                <span className="absolute w-[120px] mx-auto text-center bottom-0 left-0 bg-[#CEA958]/80 text-black yekanbakh pt-1 rounded-b-lg">
                  Tehran
                </span>
              </Link>
              <Link href="" className="relative min-w-[120px]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/destination/kordan.webp"}
                  className="h-[130px] w-[120px] object-cover rounded-lg"/>
                <span className="absolute w-[120px] mx-auto text-center bottom-0 left-0 bg-[#CEA958]/80 text-black yekanbakh pt-1 rounded-b-lg">
                  Kordan
                </span>
              </Link>
              <Link href="" className="relative min-w-[120px]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/destination/mashad.webp"}
                  className="h-[130px] w-[120px] object-cover rounded-lg"/>
                <span className="absolute w-[120px] mx-auto text-center bottom-0 left-0 bg-[#CEA958]/80 text-black yekanbakh pt-1 rounded-b-lg">
                  Mashhad
                </span>
              </Link>
              <Link href="" className="relative min-w-[120px]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/destination/isfahan.webp"}
                  className="h-[130px] w-[120px] object-cover rounded-lg"/>
                <span className="absolute w-[120px] mx-auto text-center bottom-0 left-0 bg-[#CEA958]/80 text-black yekanbakh pt-1 rounded-b-lg">
                  Isfahan
                </span>
              </Link>
              <Link href="" className="relative min-w-[120px]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/destination/ramsar.webp"}
                  className="h-[130px] w-[120px] object-cover rounded-lg"/>
                <span className="absolute w-[120px] mx-auto text-center bottom-0 left-0 bg-[#CEA958]/80 text-black yekanbakh pt-1 rounded-b-lg">
                  Ramsar
                </span>
              </Link>
              <Link href="" className="relative min-w-[120px]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/destination/chalus.webp"}
                  className="h-[130px] w-[120px] object-cover rounded-lg"/>
                <span className="absolute w-[120px] mx-auto text-center bottom-0 left-0 bg-[#CEA958]/80 text-black yekanbakh pt-1 rounded-b-lg">
                  Chalus
                </span>
              </Link>
              <Link href="" className="relative min-w-[120px]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/destination/kish.webp"}
                  className="h-[130px] w-[120px] object-cover rounded-lg"/>
                <span className="absolute w-[120px] mx-auto text-center bottom-0 left-0 bg-[#CEA958]/80 text-black yekanbakh pt-1 rounded-b-lg">
                  Kish
                </span>
              </Link>
              <Link href="" className="relative min-w-[120px]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/destination/qeshm.webp"}
                  className="h-[130px] w-[120px] object-cover rounded-lg"/>
                <span className="absolute w-[120px] mx-auto text-center bottom-0 left-0 bg-[#CEA958]/80 text-black yekanbakh pt-1 rounded-b-lg">
                  Qeshm
                </span>
              </Link> 
              <Link href="" className="relative min-w-[120px]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/destination/karaj.webp"}
                  className="h-[130px] w-[120px] object-cover rounded-lg"/>
                <span className="absolute w-[120px] mx-auto text-center bottom-0 left-0 bg-[#CEA958]/80 text-black yekanbakh pt-1 rounded-b-lg">
                  Karaj
                </span>
              </Link>                          
            </div>
          </div>

          <div className="Residences overflow-hidden mt-6">
            <div className="flex flex-row justify-between items-center mb-2">
              <h2 className="yekanbakh text-lg text-[#CEA958]">Tehran Best Residence</h2>
              <Link href="" className="text-white flex items-center text-sm">
              See All
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="ml-1 w-3 h-3">
                <path d="M18.484375 2.984375 A 1.50015 1.50015 0 0 0 17.439453 5.5605469L35.878906 24L17.439453 42.439453 A 1.50015 1.50015 0 1 0 19.560547 44.560547L39.060547 25.060547 A 1.50015 1.50015 0 0 0 39.060547 22.939453L19.560547 3.4394531 A 1.50015 1.50015 0 0 0 18.484375 2.984375 z" fill="currentColor"/>
              </svg>
              </Link>
            </div>
            
            <div className="max-w-[380px] flex overflow-x-auto no-scrollbar gap-x-2 pb-0.5">
              <Link href="" className="relative max-w-[300px] h-[290px] rounded-lg border-1 border-[#CEA958]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/residences/03.jpg"}
                  className="w-full h-[160px] object-cover rounded-t-lg"/>
                <div className="p-2 flex flex-col gap-y-2">
                  <div className="flex flex-row items-center justify-between">
                    <span className="flex yekanbakh text-sm gap-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 48 48">
                        <linearGradient id="SVGID_1_" x1="9.463" x2="32.329" y1="7.636" y2="38.968" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#fede00"/>
                          <stop offset=".519" stopColor="#fecc00"/>
                          <stop offset="1" stopColor="#ffb700"/>
                        </linearGradient>
                        <path fill="url(#SVGID_1_)" d="M22.1,4.4c0.6-1,2-0.9,2.5,0.2c1.5,3.5,3,7.1,4.7,10.2l0.3,0.5c0.2,0.4,0.7,0.7,1.2,0.7h0.6c4.6,0,8.4,1,12.8,2.2c1.1,0.3,1.4,1.8,0.4,2.5c-3.5,2.4-5.6,3.8-8.7,7.3c-0.1,0.1-0.2,0.2-0.3,0.4c-0.3,0.4-0.4,1-0.2,1.4c0.6,1.5,1.9,4.6,2.3,5.9c0.7,2.2,1.4,4.7,1.9,7.1c0.3,1.2-1.1,2.1-2.1,1.4c-3.2-2.1-8.6-5.5-12.8-6.9c-0.2-0.1-0.8-0.2-0.8-0.2s-7.2,3.5-13.5,7.1c-1.1,0.6-2.4-0.4-2-1.7c0,0,0,0,0-0.1c1.7-4.8,4.6-9.1,5.5-12.5c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.7-0.3-1.3-0.9-1.5c-1.7-0.6-5-1.9-7.3-3.7c-0.9-0.7-2.1-1.8-3-2.8c-0.8-0.8-0.3-2.2,0.9-2.3c0.6-0.1,1.2-0.1,1.8-0.3C7.5,18,11,16,15.4,16H16c0,0,0.7-2.1,1.8-4.2C18.2,10.8,20.5,7.2,22.1,4.4z"/>                      
                      </svg> 
                      <span >
                        4.7
                      </span>
                    </span>
                    <span className="yekanbakh text-sm gap-x-1 text-gray-400">
                      154 review
                    </span>
  
                  </div>
                  <h3 className="yekanbakh font-light whitespace-nowrap overflow-hidden text-ellipsis">Radin three-bedroom duplex villa with summer pool</h3>
                  <div className="flex flex-row items-center justify-center gap-x-2">
                    <span className="flex flex-row items-center text-xs text-gray-400 gap-x-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4">
                        <path d="M24 2C14.629252 2 7 9.6292523 7 19C7 22.903564 9.3597691 27.575514 12.148438 32.224609C14.937105 36.873704 18.245794 41.372227 20.4375 44.222656C22.213546 46.532406 25.786454 46.532406 27.5625 44.222656C29.754779 41.372139 33.062759 36.873719 35.851562 32.224609C38.640366 27.5755 41 22.903564 41 19C41 9.6292523 33.370748 2 24 2 z M 24 5C31.749252 5 38 11.250748 38 19C38 21.540436 35.968243 26.199 33.279297 30.681641C30.590351 35.164281 27.334315 39.598049 25.183594 42.394531C24.56364 43.200781 23.434407 43.200781 22.814453 42.394531C20.664159 39.59796 17.409535 35.164296 14.720703 30.681641C12.031871 26.198986 10 21.540436 10 19C10 11.250748 16.250748 5 24 5 z M 24 11.005859C23.777 11.005734 23.554141 11.079109 23.369141 11.224609L17.761719 15.640625C17.280719 16.020625 17 16.599891 17 17.212891L17 25C17 25.552 17.448 26 18 26L21 26C21.552 26 22 25.552 22 25L22 21C22 20.448 22.448 20 23 20L25 20C25.552 20 26 20.448 26 21L26 25C26 25.552 26.448 26 27 26L30 26C30.552 26 31 25.552 31 25L31 17.212891C31 16.599891 30.719281 16.021578 30.238281 15.642578L24.630859 11.224609C24.445859 11.078609 24.223 11.005984 24 11.005859 z" fill="currentColor"/>
                      </svg>
                      <span>
                        Velenjak, Tehran
                      </span>
                    </span>
                    <span className="text-gray-500">
                      |
                    </span>
                    <span className="flex flex-row items-center text-xs text-gray-400 gap-x-0.5">
                      <span>2 rooms, </span>
                      <span>8 beds, </span>
                      <span>10 guests</span>
                    </span>
                  </div>
                  <div className="flex flex row justify-between yekanbakh">
                    <div className="text-gray-400 text-sm">
                      From 
                      <span className="text-gray-300 text-sm px-1 text-md line-through">
                        9,800,000
                      </span>
                      <span className="text-[#CEA958] font-bold px-1 text-md">
                        8,820,000
                      </span> 
                      IRR per Night
                    </div>
                  </div>
                </div>
                <span className="absolute top-0 left-0 px-2 pt-1 rounded-tl-md rounded-br-md text-sm yekanbakh bg-[#CEA958] text-black">
                  10%
                </span>
              </Link>

              <Link href="" className="relative max-w-[300px] h-[290px] rounded-lg border-1 border-[#CEA958]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/residences/02.png"}
                  className="w-full h-[160px] object-cover rounded-t-lg"/>
                <div className="p-2 flex flex-col gap-y-2">
                  <div className="flex flex-row items-center justify-between">
                    <span className="flex yekanbakh text-sm gap-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 48 48">
                        <linearGradient id="SVGID_1_" x1="9.463" x2="32.329" y1="7.636" y2="38.968" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#fede00"/>
                          <stop offset=".519" stopColor="#fecc00"/>
                          <stop offset="1" stopColor="#ffb700"/>
                        </linearGradient>
                        <path fill="url(#SVGID_1_)" d="M22.1,4.4c0.6-1,2-0.9,2.5,0.2c1.5,3.5,3,7.1,4.7,10.2l0.3,0.5c0.2,0.4,0.7,0.7,1.2,0.7h0.6c4.6,0,8.4,1,12.8,2.2c1.1,0.3,1.4,1.8,0.4,2.5c-3.5,2.4-5.6,3.8-8.7,7.3c-0.1,0.1-0.2,0.2-0.3,0.4c-0.3,0.4-0.4,1-0.2,1.4c0.6,1.5,1.9,4.6,2.3,5.9c0.7,2.2,1.4,4.7,1.9,7.1c0.3,1.2-1.1,2.1-2.1,1.4c-3.2-2.1-8.6-5.5-12.8-6.9c-0.2-0.1-0.8-0.2-0.8-0.2s-7.2,3.5-13.5,7.1c-1.1,0.6-2.4-0.4-2-1.7c0,0,0,0,0-0.1c1.7-4.8,4.6-9.1,5.5-12.5c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.7-0.3-1.3-0.9-1.5c-1.7-0.6-5-1.9-7.3-3.7c-0.9-0.7-2.1-1.8-3-2.8c-0.8-0.8-0.3-2.2,0.9-2.3c0.6-0.1,1.2-0.1,1.8-0.3C7.5,18,11,16,15.4,16H16c0,0,0.7-2.1,1.8-4.2C18.2,10.8,20.5,7.2,22.1,4.4z"/>                      
                      </svg> 
                      <span >
                        4.7
                      </span>
                    </span>
                    <span className="yekanbakh text-sm gap-x-1 text-gray-400">
                      154 review
                    </span>
  
                  </div>
                  <h3 className="yekanbakh font-light whitespace-nowrap overflow-hidden text-ellipsis">Radin three-bedroom duplex villa with summer pool</h3>
                  <div className="flex flex-row items-center justify-center gap-x-2">
                    <span className="flex flex-row items-center text-xs text-gray-400 gap-x-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4">
                        <path d="M24 2C14.629252 2 7 9.6292523 7 19C7 22.903564 9.3597691 27.575514 12.148438 32.224609C14.937105 36.873704 18.245794 41.372227 20.4375 44.222656C22.213546 46.532406 25.786454 46.532406 27.5625 44.222656C29.754779 41.372139 33.062759 36.873719 35.851562 32.224609C38.640366 27.5755 41 22.903564 41 19C41 9.6292523 33.370748 2 24 2 z M 24 5C31.749252 5 38 11.250748 38 19C38 21.540436 35.968243 26.199 33.279297 30.681641C30.590351 35.164281 27.334315 39.598049 25.183594 42.394531C24.56364 43.200781 23.434407 43.200781 22.814453 42.394531C20.664159 39.59796 17.409535 35.164296 14.720703 30.681641C12.031871 26.198986 10 21.540436 10 19C10 11.250748 16.250748 5 24 5 z M 24 11.005859C23.777 11.005734 23.554141 11.079109 23.369141 11.224609L17.761719 15.640625C17.280719 16.020625 17 16.599891 17 17.212891L17 25C17 25.552 17.448 26 18 26L21 26C21.552 26 22 25.552 22 25L22 21C22 20.448 22.448 20 23 20L25 20C25.552 20 26 20.448 26 21L26 25C26 25.552 26.448 26 27 26L30 26C30.552 26 31 25.552 31 25L31 17.212891C31 16.599891 30.719281 16.021578 30.238281 15.642578L24.630859 11.224609C24.445859 11.078609 24.223 11.005984 24 11.005859 z" fill="currentColor"/>
                      </svg>
                      <span>
                        Velenjak, Tehran
                      </span>
                    </span>
                    <span className="text-gray-500">
                      |
                    </span>
                    <span className="flex flex-row items-center text-xs text-gray-400 gap-x-0.5">
                      <span>2 rooms, </span>
                      <span>8 beds, </span>
                      <span>10 guests</span>
                    </span>
                  </div>
                  <div className="flex flex row justify-between yekanbakh">
                    <div className="text-gray-400 text-sm">
                      From 
                      <span className="text-gray-200 text-sm px-1 text-md line-through">
                        9,800,000
                      </span>
                      <span className="text-[#CEA958] font-bold px-1 text-md">
                        8,820,000
                      </span> 
                      IRR per Night
                    </div>
                  </div>                                   
                </div>
                <span className="absolute top-0 left-0 px-2 pt-1 rounded-tl-md rounded-br-md text-sm yekanbakh bg-[#CEA958] text-black">
                  10%
                </span>               
              </Link>     

              <Link href="" className="relative max-w-[300px] h-[290px] rounded-lg border-1 border-[#CEA958]">
                <Image
                  width={400}
                  height={400}
                  alt="test"
                  src={"/images/residences/01.jpg"}
                  className="w-full h-[160px] object-cover rounded-t-lg"/>
                <div className="p-2 flex flex-col gap-y-2">
                  <div className="flex flex-row items-center justify-between">
                    <span className="flex yekanbakh text-sm gap-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 48 48">
                        <linearGradient id="SVGID_1_" x1="9.463" x2="32.329" y1="7.636" y2="38.968" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#fede00"/>
                          <stop offset=".519" stopColor="#fecc00"/>
                          <stop offset="1" stopColor="#ffb700"/>
                        </linearGradient>
                        <path fill="url(#SVGID_1_)" d="M22.1,4.4c0.6-1,2-0.9,2.5,0.2c1.5,3.5,3,7.1,4.7,10.2l0.3,0.5c0.2,0.4,0.7,0.7,1.2,0.7h0.6c4.6,0,8.4,1,12.8,2.2c1.1,0.3,1.4,1.8,0.4,2.5c-3.5,2.4-5.6,3.8-8.7,7.3c-0.1,0.1-0.2,0.2-0.3,0.4c-0.3,0.4-0.4,1-0.2,1.4c0.6,1.5,1.9,4.6,2.3,5.9c0.7,2.2,1.4,4.7,1.9,7.1c0.3,1.2-1.1,2.1-2.1,1.4c-3.2-2.1-8.6-5.5-12.8-6.9c-0.2-0.1-0.8-0.2-0.8-0.2s-7.2,3.5-13.5,7.1c-1.1,0.6-2.4-0.4-2-1.7c0,0,0,0,0-0.1c1.7-4.8,4.6-9.1,5.5-12.5c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.7-0.3-1.3-0.9-1.5c-1.7-0.6-5-1.9-7.3-3.7c-0.9-0.7-2.1-1.8-3-2.8c-0.8-0.8-0.3-2.2,0.9-2.3c0.6-0.1,1.2-0.1,1.8-0.3C7.5,18,11,16,15.4,16H16c0,0,0.7-2.1,1.8-4.2C18.2,10.8,20.5,7.2,22.1,4.4z"/>                      
                      </svg> 
                      <span >
                        4.7
                      </span>
                    </span>
                    <span className="yekanbakh text-sm gap-x-1 text-gray-400">
                      154 review
                    </span>
  
                  </div>
                  <h3 className="yekanbakh font-light whitespace-nowrap overflow-hidden text-ellipsis">Radin three-bedroom duplex villa with summer pool</h3>
                  <div className="flex flex-row items-center justify-center gap-x-2">
                    <span className="flex flex-row items-center text-xs text-gray-400 gap-x-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4">
                        <path d="M24 2C14.629252 2 7 9.6292523 7 19C7 22.903564 9.3597691 27.575514 12.148438 32.224609C14.937105 36.873704 18.245794 41.372227 20.4375 44.222656C22.213546 46.532406 25.786454 46.532406 27.5625 44.222656C29.754779 41.372139 33.062759 36.873719 35.851562 32.224609C38.640366 27.5755 41 22.903564 41 19C41 9.6292523 33.370748 2 24 2 z M 24 5C31.749252 5 38 11.250748 38 19C38 21.540436 35.968243 26.199 33.279297 30.681641C30.590351 35.164281 27.334315 39.598049 25.183594 42.394531C24.56364 43.200781 23.434407 43.200781 22.814453 42.394531C20.664159 39.59796 17.409535 35.164296 14.720703 30.681641C12.031871 26.198986 10 21.540436 10 19C10 11.250748 16.250748 5 24 5 z M 24 11.005859C23.777 11.005734 23.554141 11.079109 23.369141 11.224609L17.761719 15.640625C17.280719 16.020625 17 16.599891 17 17.212891L17 25C17 25.552 17.448 26 18 26L21 26C21.552 26 22 25.552 22 25L22 21C22 20.448 22.448 20 23 20L25 20C25.552 20 26 20.448 26 21L26 25C26 25.552 26.448 26 27 26L30 26C30.552 26 31 25.552 31 25L31 17.212891C31 16.599891 30.719281 16.021578 30.238281 15.642578L24.630859 11.224609C24.445859 11.078609 24.223 11.005984 24 11.005859 z" fill="currentColor"/>
                      </svg>
                      <span>
                        Velenjak, Tehran
                      </span>
                    </span>
                    <span className="text-gray-500">
                      |
                    </span>
                    <span className="flex flex-row items-center text-xs text-gray-400 gap-x-0.5">
                      <span>2 rooms, </span>
                      <span>8 beds, </span>
                      <span>10 guests</span>
                    </span>
                  </div>
                  <div className="flex flex row justify-between yekanbakh">
                    <div className="text-gray-400 text-sm">
                      From 
                      <span className="text-gray-200 text-sm px-1 text-md line-through">
                        9,800,000
                      </span>
                      <span className="text-cyan-600 font-bold px-1 text-md">
                        8,820,000
                      </span> 
                      IRR per Night
                    </div>
                  </div>  
                                  
                </div>
                <span className="absolute top-0 left-0 px-2 pt-1 rounded-tl-md rounded-br-md text-sm yekanbakh bg-[#CEA958] text-black">
                  10%
                </span>               
              </Link>                          
            </div>
          </div>
        </div>
        
      </div>
     
    </div>

  );
}
