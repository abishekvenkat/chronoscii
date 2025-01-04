export const calculateYearProgress = (): number => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  return (now.getTime() - startOfYear.getTime()) / (365 * 24 * 60 * 60 * 1000);
};

export const getDaysRemaining = (): number => {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear(), 11, 31);
  const diffTime = endOfYear.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};