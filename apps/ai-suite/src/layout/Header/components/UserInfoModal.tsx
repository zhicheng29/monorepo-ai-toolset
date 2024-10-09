import { forwardRef, useImperativeHandle, useState } from "react";

import { Modal } from "antd";

export interface UserInfoModalRef {
  showModal: () => void;
}

const UserInfoModal = forwardRef<UserInfoModalRef, {}>((_props, ref) => {
  const [infoVisible, setInfoVisible] = useState(false);

  useImperativeHandle(ref, () => ({ showModal }));

  const showModal = () => {
    setInfoVisible(true);
  };
  const handleOk = () => {
    setInfoVisible(false);
  };
  const handleCancel = () => {
    setInfoVisible(false);
  };

  return (
    <Modal title="Basic Modal" open={infoVisible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
});

export default UserInfoModal;
