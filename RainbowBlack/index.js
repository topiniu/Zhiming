const CONTROLS = document.querySelectorAll("button");
const UPDATE = ({ x, y }) => {

  const ELEMENT = document.elementFromPoint(x, y);
  const CONTROL = ELEMENT.closest(".control");
  if (CONTROL) {
    console.info('doing it')
    const BOUNDS = CONTROL.getBoundingClientRect()
    CONTROL.style.setProperty("--rx", (x - BOUNDS.x) / BOUNDS.width);
    CONTROL.style.setProperty("--x", (x - BOUNDS.x) / BOUNDS.width);
    CONTROL.style.setProperty("--y", (y - BOUNDS.y) / BOUNDS.height);
  }
};

document.body.addEventListener("pointermove", UPDATE);
    