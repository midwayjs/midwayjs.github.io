#!/bin/bash
set -e

vuepress build docs
node ./scripts/replace.js