import { forwardRef, useImperativeHandle, useState } from "react";

import { Modal } from "antd";

export interface PasswordModalRef {
  showModal: () => void;
}

const PasswordModal = forwardRef<PasswordModalRef, {}>((_props, ref) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  useImperativeHandle(ref, () => ({ showModal }));

  const showModal = () => {
    setPasswordVisible(true);
  };
  const handleOk = () => {
    setPasswordVisible(false);
  };
  const handleCancel = () => {
    setPasswordVisible(false);
  };

  return (
    <Modal title="Basic Modal" open={passwordVisible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
});

export default PasswordModal;
