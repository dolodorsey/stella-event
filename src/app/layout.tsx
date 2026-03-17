import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "STELLA | KHG R&B Concert Series Atlanta", description: "Atlanta's premier R&B concert experience. Three nights. All Atlanta." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }