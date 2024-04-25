import Head from "next/head";
import SideNavigation from "./side-navigation";
import Image from "next/image";
import "../../app/globals.css";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center xl:block">
      <Head>
        <title>JokeJoy App</title>
        <meta name="description" content="A list of jokes to make you joy!" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>

      <SideNavigation />
      <div
        id="main-container"
        className="h-svh flex flex-col justify-between items-center"
      >
        <main className="flex flex-col items-center justify-between p-5 m-5 ml-10">
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
          {children}
        </main>
        <footer className="text-center">
          Copyright,{" "}
          <a href="https://samilabud.com" target="_blank">
            Samil Abud
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
