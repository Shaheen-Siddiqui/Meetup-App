export const formatedDateFunction = (eventStartTime) => {
  const datObj = new Date(eventStartTime);
  const option = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  };
  return datObj.toLocaleDateString("en-US", option);
};

export const formateTimeFunction = (eventStartTime) => {
  const timeObj = new Date(eventStartTime);
  const timeOption = { hour: "numeric", minute: "numeric", hour12: true };
  return timeObj.toLocaleTimeString("en-US", timeOption);
};
