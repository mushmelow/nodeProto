#!/bin/sh
UPTIME="$(uptime)"
DATE="$(date)"
echo "{\"uptime\":\"${UPTIME}\", \"date\":\"${DATE}\"}"
