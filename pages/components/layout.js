import Head from "next/head";
import SideNavigation from "./side-navigation";
import Image from "next/image";
import "../../app/globals.css";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row items-center flex-wrap w-full justify-between">
      <Head>
        <title>JokeJoy App</title>
        <meta name="description" content="A list of jokes to make you joy!" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <SideNavigation />
      <div id="divider" className="invisible w-2/12 flex bg-red-500"></div>
      <div
        id="main-container"
        className="flex flex-col justify-between w-10/12"
      >
        <main className="flex flex-col items-center justify-end p-4 m-4">
          <div className="relative flex place-items-center">
            <Image
              className="shadow-sm shadow-black relative hover:-rotate-2 transition-all duration-500"
              src="/images/jokejoy-logo.png"
              alt="JokeJoyLogo"
              width={180}
              height={37}
              priority
            />
          </div>
          <hr className="w-96 mt-10 hidden xl:block" />
          <div
            id="jokes-container"
            className="flex flex-row justify-center items-center"
          >
            {children}
          </div>
        </main>
        <div
          id="footer-container"
          className="w-full flex flex-col items-center -mt-4"
        >
          <footer className="text-center">
            Copyright,{" "}
            <a href="https://samilabud.com" target="_blank">
              Samil Abud
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
