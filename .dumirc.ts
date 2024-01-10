import { defineConfig } from 'dumi';
const repo = 'blog-site'; // 项目名
export default defineConfig({
  themeConfig: {
    name: 'blog-site',
    mode: 'site',
    devServer: {
      port: 1998 // 自定义端口号
    }
  },
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  exportStatic: {}
});
