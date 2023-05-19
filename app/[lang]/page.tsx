import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LocaleSwitcher from "./components/LocaleSwitcher";
import Image from "next/image";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <nav className="sticky top-0 flex justify-end px-[3%] pt-[20px]">
        <LocaleSwitcher lang={lang} />
      </nav>
      <div className="flex flex-col gap-10 mx-[5%] items-center">
        <main className="flex flex-col gap-10 mx-[5%] w-full max-w-[973px]">
          <section className="mt-[20vh] flex justify-between">
            <div>
              <h4 className="font-bungee flex items-center -translate-x-3">
                <span className="flex flex-col text-lg leading-[0.8em] -translate-y-0.5 text-red-500">
                  <span>B</span>
                  <span>A</span>
                  <span>D</span>
                </span>
                <span className="text-xl">FILE.ZIP</span>
              </h4>
              <h1 className="text-[60px] leading-[1em] max-w-[270px] font-bungee">
                {dictionary.hero.title}
              </h1>
              <p className="max-w-[210px] mt-4 ml-1">
                {dictionary.hero.opener}
              </p>
            </div>
            <div>
              <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">
                Can you spot{" "}
                <span className="flex flex-col leading-[.9em] -translate-y-0.5 font-bungee text-3xl text-red-500">
                  <span>B</span>
                  <span>A</span>
                  <span>D</span>
                </span>{" "}
                Links?
              </h2>
              <div className="flex">
                <a href="https://dropbox.com/@1235.zip" className="flex tracking-wider bg-black p-2 text-white">https://dropbox.com/@1235.zip</a>
              </div>
              <div className="flex gap-5 mt-4">
              <button className=" rounded-lg border-black flex gap-2 items-center px-2 py-1 border-2">{dictionary.linkGame.good}<Image src="/images/check.png"  height={20} width={20} alt="green checkmark emoji" /></button>
              <button className="border-2 rounded-lg border-black flex gap-2 items-center px-2">{dictionary.linkGame.bad}<Image src="/images/cross.png"  height={20} width={20} alt="red cross emoji"  /></button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
