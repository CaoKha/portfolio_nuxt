export const truncateEmail = (email: string, maxLength: number) => {
  if (email.length <= maxLength) return email;
  return email.substring(0, maxLength) + "...";
};
