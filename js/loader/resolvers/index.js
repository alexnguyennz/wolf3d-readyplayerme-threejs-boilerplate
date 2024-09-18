import { GLTFResolver } from "./GLTFResolver.js";
import { ImageResolver } from "./ImageResolver.js";
import { TextureResolver } from "./TextureResolver.js";

const resolvers = [
  new ImageResolver(),
  new GLTFResolver(),
  new TextureResolver(),
];

export default resolvers;
