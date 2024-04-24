import Image from "next/image";
import SideNavigation from "./components/side-navigation";
import "./globals.css";

export const metadata = {
  title: "JokeJoy App",
  description: "A list of jokes to make you joy!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
