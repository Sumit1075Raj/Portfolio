import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sumit Raj | Machine Learning Engineer & Full Stack Developer',
  description: 'Portfolio of Sumit Raj - A passionate Machine Learning Engineer and Full Stack Developer building intelligent systems and creating seamless user experiences.',
  keywords: ['Machine Learning', 'Full Stack Developer', 'Python', 'React', 'Next.js', 'AI', 'TensorFlow', 'Portfolio'],
  authors: [{ name: 'Sumit Raj' }],
  creator: 'Sumit Raj',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sumit Raj | ML Engineer & Developer',
    description: 'Portfolio showcasing machine learning and web development projects',
    siteName: 'Sumit Raj Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumit Raj | ML Engineer & Developer',
    description: 'Portfolio showcasing machine learning and web development projects',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1a1625' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

