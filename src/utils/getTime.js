const getTime = (timeZone) => {
  const time = new Date();
  const UTC_0 = time.getUTCHours();

  time.setHours(UTC_0 + timeZone);

  return time;
};

export default getTime;
