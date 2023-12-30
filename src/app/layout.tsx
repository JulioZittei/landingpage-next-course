import type { Metadata } from "next";
import { ThemeProvider } from "./_components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
import Head from "next/head";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "The Next Dev - Full-stack Next.js 14",
  description: "Curso Full-stack Next.js 14",
  keywords: [
    "Next.js",
    "Next.js 14",
    "React.js",
    "Julio Zittei",
    "Curso Next.js",
    "JavaScript",
    "TypeScript",
    "Full-stack",
    "TailwindCss",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <link
          rel="icon"
          href="/vercel?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/vercel?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
