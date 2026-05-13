import './globals.css'

export const metadata = {
  title: 'CRM LUV',
  description: 'CRM Imobiliário'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
