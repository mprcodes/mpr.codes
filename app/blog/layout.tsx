export const metadata = {
  title: "Mauricio Paternina's Blog",
  description: 'Generated by create next app'
}

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
