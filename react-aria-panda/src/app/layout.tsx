import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { GithubIcon, SlackIcon, BoxesIcon, ShieldUserIcon } from "lucide-react";
import { css, cx } from "@/styled-system/css";
import { flex, vstack, hstack } from "@/styled-system/patterns";

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
  title: "React Aria & Panda CSS",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          css({
            display: "flex",
            flexDirection: "column",
            height: "100lvh",
            width: "100lvw",
          }),
          `${geistSans.variable} ${geistMono.variable} antialiased`
        )}
      >
        <header
          className={css({
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "border",
            p: "3",
          })}
        >
          <div
            className={hstack({
              justify: "space-between",
              alignItems: "center",
            })}
          >
            <Link
              href="/"
              className={css({
                fontWeight: "bold",
                text: "lg",
              })}
            >
              React Aria & Panda CSS
            </Link>
            <div className={hstack({ gap: "2" })}>
              <a
                href="https://github.com/ildjenty/select-uilib"
                target="_blank"
              >
                <Button mode="default" size="icon">
                  <GithubIcon size={18} />
                </Button>
              </a>
              <a href="https://slack.com" target="_blank">
                <Button mode="default" size="icon">
                  <SlackIcon size={18} />
                </Button>
              </a>
            </div>
          </div>
        </header>
        <div className={flex({ grow: "1", minHeight: "0", width: "full" })}>
          <nav
            className={css({
              p: "4",
              borderRightWidth: "1px",
              borderRightStyle: "solid",
              borderRightColor: "border",
            })}
          >
            <div className={vstack({ gap: "4", alignItems: "stretch" })}>
              <NavGroupContainer
                title="Channels"
                icon={<BoxesIcon size={18} />}
              >
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
            </div>
          </nav>
          <div className={css({ minWidth: "0", flexGrow: "1" })}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
