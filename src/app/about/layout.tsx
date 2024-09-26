import TransitionProvider from '@/app/about/transitionProvider'

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <TransitionProvider>{children}</TransitionProvider>
}
