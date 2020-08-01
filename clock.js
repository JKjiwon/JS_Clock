const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();

  const hours = ("0" + date.getHours()).slice("-2");
  const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  clockTitle.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
