import { css } from "@/styled-system/css";
import { flex, vstack } from "@/styled-system/patterns";
import { MessageForm } from "./message-form";

type Props = {
  mainMessages: React.ReactNode;
  openedThread?: React.ReactNode;
};

export function ChatLayout({ mainMessages, openedThread }: Props) {
  const isOpenedThread = openedThread !== undefined && openedThread !== null;
  return (
    <div className={flex({ h: "full" })}>
      <div
        className={vstack({
          h: "full",
          w: isOpenedThread ? "1/2" : "full",
          alignItems: "stretch",
          gap: 0,
        })}
      >
        <div
          className={vstack({
            h: "full",
            p: "5",
            overflow: "scroll",
            gap: "5",
          })}
        >
          {mainMessages}
        </div>
        <div className={css({ px: "5", pb: "5" })}>
          <MessageForm />
        </div>
      </div>
      {isOpenedThread && (
        <div
          className={vstack({
            w: "1/2",
            h: "full",
            alignItems: "stretch",
            gap: 0,
            borderLeft: "1px solid",
            borderColor: "border",
          })}
        >
          <div
            className={vstack({
              h: "full",
              overflow: "scroll",
              gap: "5",
            })}
          >
            {openedThread}
          </div>
          <div className={css({ px: "5", pb: "5" })}>
            <MessageForm />
          </div>
        </div>
      )}
    </div>
  );
}
