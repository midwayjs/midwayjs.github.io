#! /usr/bin/env bash

rm -rf ./assets
cp -R ./docs/.vuepress/dist/* ./
rm -rf ./docs/.vuepress/dist
