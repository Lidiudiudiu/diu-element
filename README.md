# diu-element
基于 Vue 3 + TypeScript 的组件库项目，文档站使用 VitePress，推荐部署到 Vercel。

## 安装

```sh
npm install
```

## 本地开发

启动组件 playground：

```sh
npm run dev
```

启动文档站：

```sh
npm run docs:dev
```

## 构建

构建组件库：

```sh
npm run build
```

构建文档站：

```sh
npm run docs:build
```

本地预览文档构建产物：

```sh
npm run docs:preview
```

## Vercel 部署

仓库已经包含 `vercel.json`，默认使用以下配置：

- `Install Command`: `npm install`
- `Build Command`: `npm run docs:build`
- `Output Directory`: `docs/.vitepress/dist`

部署步骤：

1. 将代码推送到 GitHub 仓库。
2. 在 Vercel 中选择 `New Project` 并导入该仓库。
3. 直接部署即可，通常不需要再手动修改构建配置。

## 质量检查

```sh
npm run lint
```
