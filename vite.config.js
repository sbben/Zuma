import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import { defineConfig } from "vite";  // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import { resolve } from "path"; // 主要用于alias文件路径别名

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],

}) ;
