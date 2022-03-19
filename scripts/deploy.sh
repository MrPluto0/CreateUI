#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# git push -f将本地的代码库推送到远端，并覆盖
git push -f https://github.com/MrPluto0/CreateUI.git master:gh-pages