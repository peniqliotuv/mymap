#!/bin/bash

watchman watch-del-all && rm -rf node_modules/ && yarn cache clean && yarn install
