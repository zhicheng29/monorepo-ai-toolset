import { Button, Input } from "antd";
import { PlusOutlined, SettingOutlined } from "@ant-design/icons";
import { useState } from "react";

const ChatList: React.FC = () => {
  const [chatUrl, setChatUrl] = useState<number | null>(null);
  const chatList = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col px-4 py-2 h-full border-r">
      <div className="flex justify-between items-center font-bold py-2 border-b">
        <span className="text-lg">Home WorkSpace</span>
        <SettingOutlined className="text-2xl cursor-pointer" />
      </div>

      <div className="flex flex-col grow max-h-[calc(100%-85px)] pt-3">
        <Button size="large" icon={<PlusOutlined />} className="mb-2">
          New Chat
        </Button>
        <Input size="large" placeholder="Search Chats..." />

        <div className="flex-1 overflow-y-auto mt-3 mb-1">
          {chatList.map(item => (
            <div
              key={item}
              className={`h-[36px] flex items-center cursor-pointer p-2 mr-1 rounded-lg ${chatUrl === item ? "bg-gray-100" : "hover:bg-gray-100"}`}
              onClick={() => setChatUrl(item)}
            >
              <div className="relative flex-grow overflow-hidden whitespace-nowrap">
                <div className={`text-ellipsis ${chatUrl === item ? "w-[calc(100%-2.5rem)]" : "w-full"}`}>{item}</div>
                {chatUrl === item && (
                  <div className="absolute right-0 top-0 w-10 h-full bg-gray-100 flex items-center justify-end">
                    <i className="iconfont icon-ellipsis text-xl" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-9 flex items-center">
        <i className="iconfont icon-setting cursor-pointer text-xl"></i>
      </div>
    </div>
  );
};

export default ChatList;
