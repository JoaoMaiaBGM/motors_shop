export const generateRandomPassword = () => {
  const randomData = (Math.random() + 1).toString(36).substring(2);

  return randomData;
};
