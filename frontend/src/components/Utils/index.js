export const newDate = (dateData) => {
  const date = new Date(dateData);
  const day = date.toDateString();
  const weekday = day.split(' ')[0];
  const month = day.split(' ')[1];
  const number = day.split(' ')[2];
  const time = date.toLocaleTimeString();
  const hour = time.split('')[0];
  const period = time.split(' ')[1];
  return `${weekday}, ${month} ${number}, ${hour}:00 ${period}`;
}

export const monthDate = (data) => {
  const date = new Date(data);
  const day = date.toDateString();
  const month = day.split(' ')[1];
  const number = day.split(' ')[2];
  return `${month} ${number}`;
}