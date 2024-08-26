import { useState } from "react";

import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { getRelativeDateLabel } from "@/utils";

interface ChatItemData {
  date: number;
  list: { chatId: string; chatLabel: string }[];
}

const Header: React.FC = () => (
  <div className="flex justify-between items-center font-bold py-1 border-b">
    <span className="text-lg">Home WorkSpace</span>
    <Button type="text" className="hover:opacity-50" icon={<i className="iconfont icon-setting text-2xl hover:opacity-50" />} />
  </div>
);

const ActionSection: React.FC = () => (
  <>
    <Button size="large" icon={<PlusOutlined />} className="mb-2">
      New Chat
    </Button>
    <Input size="large" placeholder="Search Chats..." />
  </>
);

const ChatListSection: React.FC<{
  chatList: ChatItemData[];
  chatId: string | null;
  onSelectChat: (id: string) => void;
}> = ({ chatList, chatId, onSelectChat }) => (
  <div className="flex-1 overflow-y-auto mt-3 mb-2">
    {chatList.map(({ date, list }) => (
      <div key={date}>
        <div className="font-semibold text-sm mt-2 mb-2">{getRelativeDateLabel(date)}</div>
        {list.map(item => (
          <ChatItem key={item.chatId} item={item} selected={chatId === item.chatId} onSelect={() => onSelectChat(item.chatId)} />
        ))}
      </div>
    ))}
  </div>
);

const ChatItem: React.FC<{ item: { chatId: string; chatLabel: string }; selected: boolean; onSelect: () => void }> = ({
  item,
  selected,
  onSelect
}) => (
  <div
    className={`h-[36px] flex items-center cursor-pointer p-2 mr-1 rounded-lg ${selected ? "bg-gray-100" : "hover:bg-gray-100"}`}
    onClick={onSelect}
  >
    <div className="relative flex-grow overflow-hidden whitespace-nowrap">
      <div className={`text-ellipsis ${selected ? "w-[calc(100%-2.5rem)]" : "w-full"}`}>{item.chatLabel}</div>
      {selected && (
        <div className="absolute right-0 top-0 w-10 h-full bg-gray-100 flex items-center justify-end">
          <i className="iconfont icon-ellipsis text-xl" />
        </div>
      )}
    </div>
  </div>
);

const ChatList: React.FC = () => {
  const [chatId, setChatId] = useState<string | null>(null);
  const chatList: ChatItemData[] = [
    {
      date: Date.now(), // 今天的时间戳
      list: [
        { chatId: "1", chatLabel: "Chat with Alice" },
        { chatId: "2", chatLabel: "Project Meeting" },
        { chatId: "3", chatLabel: "Daily Standup" },
        { chatId: "4", chatLabel: "Code Review" }
      ]
    },
    {
      date: Date.now() - 24 * 60 * 60 * 1000, // 昨天的时间戳
      list: [
        { chatId: "5", chatLabel: "Design Discussion" },
        { chatId: "6", chatLabel: "Client Call" },
        { chatId: "7", chatLabel: "Team Sync" },
        { chatId: "8", chatLabel: "Backend API" }
      ]
    },
    {
      date: Date.now() - 3 * 24 * 60 * 60 * 1000, // 三天前的时间戳
      list: [
        { chatId: "9", chatLabel: "Frontend Planning" },
        { chatId: "10", chatLabel: "Sprint Retro" },
        { chatId: "11", chatLabel: "Deployment Prep" },
        { chatId: "12", chatLabel: "Marketing Strategy" }
      ]
    },
    {
      date: Date.now() - 7 * 24 * 60 * 60 * 1000, // 一周前的时间戳
      list: [
        { chatId: "13", chatLabel: "Budget Review" },
        { chatId: "14", chatLabel: "Performance Check-in" },
        { chatId: "15", chatLabel: "UI/UX Review" },
        { chatId: "16", chatLabel: "Partner Meeting" }
      ]
    },
    {
      date: Date.now() - 15 * 24 * 60 * 60 * 1000, // 更早以前的时间戳
      list: [
        { chatId: "17", chatLabel: "Hiring Discussion" },
        { chatId: "18", chatLabel: "Product Demo" },
        { chatId: "19", chatLabel: "Sales Review" },
        { chatId: "20", chatLabel: "Tech Deep Dive" }
      ]
    }
  ];

  return (
    <div className="flex flex-col px-4 pt-2 h-full border-r">
      <Header />
      <div className="flex flex-col grow max-h-[calc(100%-45px)] pt-3">
        <ActionSection />
        <ChatListSection chatList={chatList} chatId={chatId} onSelectChat={setChatId} />
      </div>
    </div>
  );
};

export default ChatList;
