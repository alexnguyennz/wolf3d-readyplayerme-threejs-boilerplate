import { Clock } from "three";

import { preloader } from "./loader/index.js";
import resolvers from "./loader/resolvers/index.js";
import { defaultAvatar } from "./config.js";

import {
  createDefaultContainer,
  createDefaultRenderer,
  createDefaultScene,
  createDefaultCamera,
} from "./factories/index.js";

import { Avatar } from "./objects/Avatar.js";

import { createResizeHandler } from "./utils/index.js";

async function startApplication() {
  const container = createDefaultContainer();
  const renderer = createDefaultRenderer();
  const scene = createDefaultScene();
  const camera = createDefaultCamera();
  const clock = new Clock();

  container.appendChild(renderer.domElement);

  createResizeHandler({ renderer, camera });

  preloader.init(...resolvers);

  const params = new URLSearchParams(window.location.search);
  const url = params.get('url');

  if (URL.canParse(url)) {
    defaultAvatar.url = url;
  } else {
    defaultAvatar.url = `${url}`;
  }

  await preloader.load([defaultAvatar]);

  const avatar = Avatar.createDefault(renderer);
  scene.withAvatar(avatar);

  function render() {
    window.requestAnimationFrame(render);
    renderer.clear();
    renderer.render(scene.main, camera);

    const delta = clock.getDelta();
    scene.main.traverse((element) => element?.update?.(delta));
  }

  render();
}

window.onload = async function () {
  await startApplication();
};
