import "./globals.scss";

export const metadata = {
  title: "Royal Technology Solutions",
  description:
    "Royal Technology Solutions - providing comprehensive technology solutions for businesses across the world.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
