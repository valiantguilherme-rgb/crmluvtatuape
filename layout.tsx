import "./globals.css";

export const metadata = {
  title: "CRM LUV Tatuapé",
  description: "CRM imobiliário",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
