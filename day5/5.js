const onClickHandler = () => alert("버튼!");

const interval = setInterval(() => {
  //console.log("hi");
}, 2000);

const onClickStopHandler = () => clearInterval(interval);
const onClickRemove = () => {
  const remove = document.getElementById("remove");
  if (remove) return remove.remove();

  const body = document.getElementsByTagName("body");
  const p = document.createElement("p");
  //   p.id = "remove";
  p.setAttribute("id", "remove");
  p.innerHTML = "showwwww!";
  body[0].append(p);
};
