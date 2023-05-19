const formatTime = (timeValue: number) => {
  return timeValue < 10 ? `0${timeValue}` : timeValue;
};

export const getCurrentTime = (): string => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
};
