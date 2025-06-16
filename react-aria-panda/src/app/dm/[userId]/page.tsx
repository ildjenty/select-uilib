import { css } from "@/styled-system/css";
import { NotImplementedView } from "@/components/not-implemented-view";

export default function Page() {
  return (
    <div className={css({ height: "full" })}>
      <NotImplementedView />
    </div>
  );
}