"use client"

import Image from "next/image";

interface Props {
    dictionary: {
        good: string;
        bad: string;
        headlineOne: string;
        headlineTwo: string;
    }
}

export default function LinkGame({dictionary}: Props) {
    return (
        <div>
              <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">
                {dictionary.headlineOne}{" "}
                <span className="flex flex-col leading-[.9em] -translate-y-0.5 font-bungee text-3xl text-red-500 select-none">
                  <span>B</span>
                  <span>A</span>
                  <span>D</span>
                </span>{" "}
                {dictionary.headlineTwo}
              </h2>
              <div className="flex">
                <a href="https://dropbox.com/@1235.zip" className="flex tracking-wider bg-black p-2 text-white">https://dropbox.com/@1235.zip</a>
              </div>
              <div className="flex gap-5 mt-8 items-center">
              <button className="bg-white rounded-lg border-black flex gap-2 items-center px-2 py-1  hover:border-green-500 border-2">{dictionary.good}<Image src="/images/check.png"  height={20} width={20} alt="green checkmark emoji" /></button>
              <button className="bg-white border-2 rounded-lg border-black flex gap-2 items-center px-2 py-1  hover:border-red-500">{dictionary.bad}<Image src="/images/cross.png"  height={20} width={20} alt="red cross emoji"  /></button>
              <div><span>0</span>/<span>10</span></div>
              </div>
            </div>
    )
}