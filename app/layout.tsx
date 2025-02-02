import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";
//authenticate_routes_provider
import {
  ClerkProvider,
  // SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

//theme

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const interFont = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Clone",
  description: "Discord Clone ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    //   <html lang="en" suppressHydrationWarning>
    //     <body className={cn(interFont.className, "bg-white dark:bg-[#313338]")}>
    //       <ThemeProvider
    //         attribute="class"
    //         defaultTheme="dark"
    //         enableSystem={false}
    //         storageKey="discord-theme"
    //       >
    //         {children}
    //       </ThemeProvider>
    //     </body>
    //   </html>
    // </ClerkProvider>

    <ClerkProvider>
      <html lang="en">
        <body className={cn(interFont.className, "bg-white dark:bg-[#313338]")}>
          <header>
            <SignedOut>{/* <SignInButton /> */}</SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="discord-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
