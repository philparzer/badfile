import { getDictionary } from '@/get-dictionary'
import LocaleSwitcher from './components/LocaleSwitcher'
import './globals.css'
import { Bungee, Atkinson_Hyperlegible } from 'next/font/google'
import { Locale } from '../../i18n-config'

const bungee = Bungee({ subsets: ['latin'], weight: ["400"], variable: "--font-display" })
const atkinson = Atkinson_Hyperlegible({ subsets: ['latin'], weight: ["400", "700"], variable: "--font-body" })

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en"
    className={`${bungee.variable} ${atkinson.variable} font-sans`}
    >
      <body className={`font-sans`}>
        {children}
      </body>
    </html>
  )
}
