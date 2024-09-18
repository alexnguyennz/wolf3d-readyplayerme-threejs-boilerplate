import { SceneBuilder } from "../builders/index.js";

export const createDefaultScene = () => {
  return new SceneBuilder()
    .withAmbientLight()
    .withBackLight()
    .withFillLight()
    .withKeyLight();
};
