import { DOMSettings } from "../config.js";

const getContainer = () => {
  /*if (DEVELOPMENT) {
    const container = document.createElement("div");
    document.body.appendChild(container);
    return container;
  } else {
    return document.getElementById(DOMSettings.avatarDivID); // When deployed, make sure you have a div with corresponding id
  }*/

  return document.getElementById(DOMSettings.avatarDivID);
};

export const createDefaultContainer = () => {
  const container = getContainer();

  container.style.width = DOMSettings.canvasWidth + "px";
  container.style.height = DOMSettings.canvasHeight + "px";
  container.style.margin = "auto";

  return container;
};
