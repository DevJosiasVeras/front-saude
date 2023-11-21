import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ContextApiProvider } from '@/contexts/ContextApi'

const roboto = Roboto({weight: ['400', '700', '500'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'MyPlan',
  description: 'MyPlan is a web app for planning your life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ContextApiProvider>
        <body className={`
        min-h-screen
        bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-200 via-neutral-800 to-cyan-100
        ${roboto.className}`}>
          <section className='flex flex-col h-full w-full'>
            <Header />
            {children}
          </section>
        </body>
      </ContextApiProvider>
    </html>
  )
}
