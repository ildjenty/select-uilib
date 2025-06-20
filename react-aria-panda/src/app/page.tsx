"use client";

import { css } from "@/styled-system/css";
import { NotImplementedView } from "@/components/not-implemented-view";

export default function Home() {
  return (
    <div className={css({ height: "full" })}>
      <NotImplementedView />
    </div>
  );
}