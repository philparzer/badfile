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
        <main className="flex flex-col gap-[260px] mx-[5%] w-full max-w-[973px]">
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
          </section>
          <section>
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">{dictionary.test.title}</h2>
          </section>
          <section>
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">{dictionary.about.title}</h2>
          </section>
          <section>
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">{dictionary.sources.title}</h2>
          </section>
        </main>
      </div>
    </>
  );
}
