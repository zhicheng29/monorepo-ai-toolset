import { RouteObjectType } from "@/router/interface";

/**
 * @description 获取系统语言
 * @returns "zh" | "en"
 */
export function getSystemLanguage(): "zh" | "en" {
  const language = navigator.language ? navigator.language : navigator.browserLanguage;
  const isCN = ["cn", "zh", "zh-cn"].includes(language.toLocaleLowerCase());
  if (isCN) return "zh";
  return "en";
}

/**
 * @description 扁平化菜单
 * @param {Array} menuList - menulist.
 * @returns {Array}
 */
export function getFlatMenuList(menuList: RouteObjectType[]): RouteObjectType[] {
  let newMenuList: RouteObjectType[] = JSON.parse(JSON.stringify(menuList));
  return newMenuList.flatMap(item => [item, ...(item.children ? getFlatMenuList(item.children) : [])]);
}
