export const FREE_DAILY_LIMIT = 3;

export function checkUsageLimit(currentCount: number, lastDate: string, isPremium: boolean): { allowed: boolean; newCount: number; newDate: string } {
  if (isPremium) return { allowed: true, newCount: currentCount, newDate: lastDate };

  const today = new Date().toISOString().split('T')[0];
  if (lastDate !== today) {
    return { allowed: true, newCount: 1, newDate: today };
  }

  if (currentCount < FREE_DAILY_LIMIT) {
    return { allowed: true, newCount: currentCount + 1, newDate: today };
  }

  return { allowed: false, newCount: currentCount, newDate: today };
}
