#!/usr/bin/env sh
set -e
npm run docs:build
cd docs/.vuepresss/dist
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:master-controller/zcgui.git master:gh-pages 
cd ..
cd ..
cd ..