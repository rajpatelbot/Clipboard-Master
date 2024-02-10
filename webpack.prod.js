import { merge } from "webpack-merge";
import common from "./webpack.common.js";

const webpackprod = merge(common, {
  mode: "production",
});

export default webpackprod;
