import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { GithubIcon, SlackIcon, BoxesIcon, ShieldUserIcon } from "lucide-react";

import { Button } from "@/components/button";
import { NavGroupContainer } from "./_components/nav-group-container";
import { ChannelNavLink } from "./_components/channel-nav-link";
import { DMNavLink } from "./_components/dm-nav-link";
import { channels } from "@/mock/channels";
import { users } from "@/mock/users";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radix UI & Tailwind CSS",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-lvh`}
      >
        <header className="border-b border-border p-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg">
            Radix UI & Tailwind CSS
          </Link>
          <div className="flex item-center gap-2">
            <Button asChild mode="default" size="icon">
              <a
                href="https://github.com/ildjenty/select-uilib"
                target="_blank"
              >
                <GithubIcon size={18} />
              </a>
            </Button>
            <Button asChild mode="default" size="icon">
              <a href="https://slack.com" target="_blank">
                <SlackIcon size={18} />
              </a>
            </Button>
          </div>
        </header>
        <div className="flex min-h-0 grow">
          <nav className="p-4 border-r border-border space-y-4">
            <NavGroupContainer title="Channels" icon={<BoxesIcon size={18} />}>
              {channels.map((channel) => (
                <ChannelNavLink key={channel.id} channel={channel} />
              ))}
            </NavGroupContainer>
            <NavGroupContainer
              title="Direct Message"
              icon={<ShieldUserIcon size={18} />}
            >
              {users.map((user) => (
                <DMNavLink key={user.id} user={user} />
              ))}
            </NavGroupContainer>
          </nav>
          <div className="grow p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
