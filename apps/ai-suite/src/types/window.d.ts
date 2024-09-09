import { NavigateFunction } from "react-router-dom";

declare global {
  interface Navigator {
    browserLanguage: string;
  }
  interface Window {
    $navigate: NavigateFunction;
  }
}

export {};
