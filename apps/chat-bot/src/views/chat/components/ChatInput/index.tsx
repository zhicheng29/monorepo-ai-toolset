import { Button, Input } from "antd";
import { useState } from "react";

const { TextArea } = Input;
const ChatInput: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <div className="relative flex min-h-[60px] w-full flex items-center justify-center rounded-3xl border">
      <Button
        type="text"
        size="large"
        className="absolute left-3 bottom-[9px] p-1 hover:opacity-50"
        icon={<i className="iconfont icon-add text-2xl" />}
      />
      <TextArea
        value={value}
        size="large"
        className="text-md flex w-full mx-14 py-2 shadow-none resize-none border-none blur-none outline-0 focus:shadow-none"
        onChange={e => setValue(e.target.value)}
        placeholder="Ask anything"
        autoSize={{ minRows: 1, maxRows: 15 }}
      />
      <Button
        type="text"
        size="large"
        disabled={!value}
        style={{ background: value ? "#000" : "#ccc" }}
        className="absolute right-3 bottom-[9px] hover:opacity-50"
        icon={<i className="iconfont icon-send text-2xl text-white" />}
      />
    </div>
  );
};

export default ChatInput;
