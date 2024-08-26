/**
 * 获取相对时间文本
 * @param dateString
 * @returns "今天" | "昨天" | "前天" | "三天前" | "一周前" | "更早以前"
 */
export const getRelativeDateLabel = (dateString: number): string => {
  const date = new Date(dateString);
  const today = new Date();

  // 设置时间为午夜，去除时间部分的影响
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  // 计算两个日期之间的天数差
  const diffTime = today.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "今天";
  if (diffDays === 1) return "昨天";
  if (diffDays === 2) return "前天";
  if (diffDays === 3) return "三天前";
  if (diffDays <= 7) return "一周前";
  if (diffDays <= 14) return "两周前";
  return "更早以前";
};
