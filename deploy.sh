#!/usr/bin/env sh

# 當發生錯誤時中止腳本
set -e

# 構建
npm run build

# 進入構建輸出目錄
cd dist

# 初始化 Git 倉庫
git init

# 添加所有文件
git add -A

# 提交更改
git commit -m "deploy to github pages"

# 推送到 GitHub Pages
git push -f https://github.com/Sunne65245/sunder_tarot_admin.git main:gh-pages

# 返回上一級目錄
cd -

echo "部署完成！請檢查 GitHub Pages 設置。"