import { MessageForm } from "./message-form";

type Props = {
  mainMessages: React.ReactNode;
  openedThread?: React.ReactNode;
};

export function ChatLayout({ mainMessages, openedThread }: Props) {
  const isOpenedThread = openedThread !== undefined && openedThread !== null;
  return (
    <div className="h-full flex">
      <div
        className={`h-full flex flex-col ${
          isOpenedThread ? "w-1/2" : "w-full"
        }`}
      >
        <div className={`h-full p-5 overflow-scroll space-y-5`}>
          {mainMessages}
        </div>
        <div className="px-5 pb-5">
          <MessageForm />
        </div>
      </div>
      {isOpenedThread && (
        <div className="w-1/2 h-full flex flex-col border-l border-border">
          <div className="h-full overflow-scroll space-y-5">{openedThread}</div>
          <div className="px-5 pb-5">
            <MessageForm />
          </div>
        </div>
      )}
    </div>
  );
}
