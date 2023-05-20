"use client";

import { usePathname } from "next/navigation";
import { Locale, i18n } from "@/i18n-config";

interface Props {
  lang: Locale;
}

export default function LocaleSwitcher({ lang }: Props) {
  const pathName = usePathname();
  const getRedirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    redirect(segments.join("/"));
  };

  const redirect = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="flex items-center">
      <div className="w-[20px] absolute pointer-events-none translate-x-1">
        <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22.3267C10.6 22.3267 9.29167 22.0642 8.075 21.5392C6.85833 21.0142 5.8 20.3017 4.9 19.4017C4 18.5017 3.29167 17.4392 2.775 16.2142C2.25833 14.9892 2 13.6767 2 12.2767C2 10.8767 2.25833 9.57249 2.775 8.36416C3.29167 7.15583 4 6.10166 4.9 5.20166C5.8 4.30166 6.85833 3.59749 8.075 3.08916C9.29167 2.58083 10.6 2.32666 12 2.32666C13.4 2.32666 14.7083 2.58083 15.925 3.08916C17.1417 3.59749 18.2 4.30166 19.1 5.20166C20 6.10166 20.7083 7.15583 21.225 8.36416C21.7417 9.57249 22 10.8767 22 12.2767C22 13.6767 21.7417 14.9892 21.225 16.2142C20.7083 17.4392 20 18.5017 19.1 19.4017C18.2 20.3017 17.1417 21.0142 15.925 21.5392C14.7083 22.0642 13.4 22.3267 12 22.3267ZM12 20.8767C12.5833 20.2767 13.0708 19.5892 13.4625 18.8142C13.8542 18.0392 14.175 17.1183 14.425 16.0517H9.6C9.83333 17.0517 10.1458 17.9517 10.5375 18.7517C10.9292 19.5517 11.4167 20.26 12 20.8767ZM9.875 20.5767C9.45833 19.9433 9.1 19.26 8.8 18.5267C8.5 17.7933 8.25 16.9683 8.05 16.0517H4.3C4.93333 17.235 5.66667 18.1642 6.5 18.8392C7.33333 19.5142 8.45833 20.0933 9.875 20.5767ZM14.15 20.5517C15.35 20.1683 16.4292 19.5933 17.3875 18.8267C18.3458 18.06 19.1167 17.135 19.7 16.0517H15.975C15.7583 16.9517 15.5042 17.7683 15.2125 18.5017C14.9208 19.235 14.5667 19.9183 14.15 20.5517ZM3.8 14.5517H7.775C7.725 14.1017 7.69583 13.6975 7.6875 13.3392C7.67917 12.9808 7.675 12.6267 7.675 12.2767C7.675 11.86 7.68333 11.4892 7.7 11.1642C7.71667 10.8392 7.75 10.4767 7.8 10.0767H3.8C3.68333 10.4767 3.60417 10.835 3.5625 11.1517C3.52083 11.4683 3.5 11.8433 3.5 12.2767C3.5 12.71 3.52083 13.0975 3.5625 13.4392C3.60417 13.7808 3.68333 14.1517 3.8 14.5517ZM9.325 14.5517H14.7C14.7667 14.035 14.8083 13.6142 14.825 13.2892C14.8417 12.9642 14.85 12.6267 14.85 12.2767C14.85 11.9433 14.8417 11.6225 14.825 11.3142C14.8083 11.0058 14.7667 10.5933 14.7 10.0767H9.325C9.25833 10.5933 9.21667 11.0058 9.2 11.3142C9.18333 11.6225 9.175 11.9433 9.175 12.2767C9.175 12.6267 9.18333 12.9642 9.2 13.2892C9.21667 13.6142 9.25833 14.035 9.325 14.5517ZM16.2 14.5517H20.2C20.3167 14.1517 20.3958 13.7808 20.4375 13.4392C20.4792 13.0975 20.5 12.71 20.5 12.2767C20.5 11.8433 20.4792 11.4683 20.4375 11.1517C20.3958 10.835 20.3167 10.4767 20.2 10.0767H16.225C16.275 10.66 16.3083 11.1058 16.325 11.4142C16.3417 11.7225 16.35 12.01 16.35 12.2767C16.35 12.6433 16.3375 12.9892 16.3125 13.3142C16.2875 13.6392 16.25 14.0517 16.2 14.5517ZM15.95 8.57666H19.7C19.15 7.42666 18.3958 6.46833 17.4375 5.70166C16.4792 4.93499 15.375 4.39333 14.125 4.07666C14.5417 4.69333 14.8958 5.35999 15.1875 6.07666C15.4792 6.79333 15.7333 7.62666 15.95 8.57666ZM9.6 8.57666H14.45C14.2667 7.69333 13.9583 6.83916 13.525 6.01416C13.0917 5.18916 12.5833 4.45999 12 3.82666C11.4667 4.27666 11.0167 4.86833 10.65 5.60166C10.2833 6.33499 9.93333 7.32666 9.6 8.57666ZM4.3 8.57666H8.075C8.25833 7.67666 8.49167 6.87249 8.775 6.16416C9.05833 5.45583 9.41667 4.76833 9.85 4.10166C8.6 4.41833 7.50833 4.95166 6.575 5.70166C5.64167 6.45166 4.88333 7.40999 4.3 8.57666Z"
            fill="black"
          />
        </svg>
      </div>
      <select
        className="appearance-none bg-transparent uppercase pl-[30px] bg-white pr-2 py-1 rounded-lg"
        title={"Change language"}
        value={lang}
        onChange={(e) => getRedirectedPathName(e.target.value)}
      >
        {i18n.locales.map((locale) => {
          return (
            <option key={locale} value={locale}>
              {locale}
            </option>
          );
        })}
      </select>
    </div>
  );
}
