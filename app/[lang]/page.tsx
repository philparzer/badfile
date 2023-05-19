import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LocaleSwitcher from "./components/LocaleSwitcher";
import LinkGame from "./components/LinkGame";

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
      <div className="flex flex-col mx-[5%] items-center">
        <main className="flex flex-col gap-[260px] mx-[5%] w-full max-w-[973px] mb-[400px]">
          <section className="mt-[20vh] flex justify-between items-center">
            <div>
              <h4 className="font-bungee flex items-center -translate-x-3 select-none">
                <span className="flex flex-col text-lg leading-[0.8em] -translate-y-0.5 text-red-500">
                  <span>B</span>
                  <span>A</span>
                  <span>D</span>
                </span>
                <span className="text-xl">FILE.ZIP</span>
              </h4>
              <h1 className="text-[60px] leading-[1em] max-w-[270px] font-bungee select-none tracking-[0.17em]">
                {dictionary.hero.title}
              </h1>
              <p className="max-w-[230px] mt-4 ml-1 text-xl">
                {dictionary.hero.opener}
              </p>
            </div>
            <LinkGame dictionary={dictionary.linkGame}/>
          </section>
          <section>
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">{dictionary.summary.title}</h2>
            <div className="grid grid-cols-2 grid-rows-4 mt-10 min-h-[50vh] gap-4">
              <div className="bg-white rounded-xl p-6 pb-10 relative">
                <p className="absolute -left-2 top-4 font-bungee text-4xl text-red-500">1</p>
                <h3 className="font-bold tracking-wider">{dictionary.summary.first.title}</h3>
                <p>{dictionary.summary.first.description}</p>
              </div>
              <div className="row-span-2 bg-white rounded-xl p-6 pb-10 relative">
              <p className="absolute -left-2 top-4 font-bungee text-4xl text-red-500">2</p>
                <h3 className="font-bold tracking-wider">{dictionary.summary.second.title}</h3>
                <p>{dictionary.summary.second.description}</p>
              </div>
              <div className="row-span-3 bg-white rounded-xl p-6 pb-10 relative">
              <p className="absolute -left-2 top-4 font-bungee text-4xl text-red-500">3</p>
                <h3 className="font-bold tracking-wider">{dictionary.summary.third.title}</h3>
                <p>{dictionary.summary.third.description}</p>
              </div>
              <div className="row-span-2 bg-white rounded-xl p-6 pb-10 relative">
              <p className="absolute -left-2 top-4 font-bungee text-4xl text-red-500">4</p>
                <h3 className="font-bold tracking-wider">{dictionary.summary.fourth.title}</h3>
                <p>{dictionary.summary.fourth.description}</p>
              </div>

            </div>
          </section>
          <section>
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">{dictionary.test.title}</h2>
            <p>{dictionary.test.description}</p>
            <input className="rounded-full border-2 border-black border-opacity-50 text-lg px-4 py-1 w-[50%]" placeholder={dictionary.test.placeholder}></input>
          </section>
          <section>
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">{dictionary.about.title}</h2>
            <p>{dictionary.about.firstParagraph}</p>
            <p>{dictionary.about.secondParagraph}<a className="underline" href="https://github.com/philparzer/badfile" target="_blank" rel="noopener noreferrer">{dictionary.about.github}</a></p>
            <p>{dictionary.about.thirdParagraph} <a className="underline" href="https://ko-fi.com/philparzer" target="_blank" rel="noopener noreferrer">{dictionary.about.kofi}</a></p>
          </section>
          <section>
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">{dictionary.sources.title}</h2>
            <a className="underline" href="https://ko-fi.com/philparzer" target="_blank" rel="noopener noreferrer">The dangers of Google’s .zip TLD</a>
          </section>
        </main>
      </div>
    </>
  );
}
