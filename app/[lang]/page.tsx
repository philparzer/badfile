import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import LocaleSwitcher from './components/LocaleSwitcher'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex flex-col gap-10">
      <nav className="flex justify-end px-[2%] pt-[10px]"><LocaleSwitcher lang={lang}/></nav>
      <h1 className="text-[60px] leading-[1em] max-w-[270px] font-bungee">{dictionary.hero.title}</h1>
    </div>
  )
}