import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persist } from "@/redux/index";

import App from "./App.tsx";

import "antd/dist/reset.css";
import "@/style/index.less";
import "virtual:svg-icons-register";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
);
