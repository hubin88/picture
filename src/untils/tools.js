/**
 * Created by huoban-xia on 2017/7/12.
 */
function formatMsgTime(timespan) {
  timespan *= 1000;

  const dateTime = new Date(timespan);

  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1 < 10 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
  const day = dateTime.getDate() < 10 ? `0${dateTime.getDate()}` : dateTime.getDate();
  const hour = dateTime.getHours() < 10 ? `0${dateTime.getHours()}` : dateTime.getHours();
  const minute = dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();
  const now = new Date();
  const now_new = now.getTime();
  const milliseconds = now_new - timespan;

  if (milliseconds <= 1000 * 60) {
    return '刚刚';
  } else if (1000 * 60 < milliseconds && milliseconds <= 1000 * 60 * 60) {
    return `${Math.round((milliseconds / (1000 * 60)))}分钟前`;
  } else if (1000 * 60 * 60 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
    return `${Math.round(milliseconds / (1000 * 60 * 60))}小时前`;
  } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
    return `${Math.round(milliseconds / (1000 * 60 * 60 * 24))}天前`;
  } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
    return `${month}-${day} ${hour}:${minute}`;
  }
  return `${year}-${month}-${day}`;
}
