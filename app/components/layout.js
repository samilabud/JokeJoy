import Head from "next/head";
import SideNavigation from "./side-navigation";
import Image from "next/image";
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>JokeJoy App</title>
        <meta name="description" content="A list of jokes to make you joy!" />
      </Head>

      <SideNavigation />
      <div
        id="main-container"
        className="h-svh flex flex-col justify-between items-center"
      >
        <main className="flex flex-col items-center justify-between p-24">
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
          {children}
        </main>
        <footer>
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
