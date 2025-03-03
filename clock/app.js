function currTime() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hour = now.getHours() % 12 || 12;

  const min = now.getMinutes().toString().padStart(2, "0");
  const sec = now.getSeconds().toString().padStart(2, "0");

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  timeElement.textContent = `${hour}:${min}:${sec} ${ampm}`;
  dateElement.textContent = now.toLocaleDateString(undefined, options);
}
setInterval(currTime, 1000);

currTime();
