---
title: hexo-tag-aplayer
date: 2020-12-31 19:09:32
tags:
- hexo-plugin
categories: 
- hexo
sticky: 5
description: 基于hexo-tag-aplayer插件测试
top_img: /img/hexo-tag-aplayer.png
cover: /img/hexo-tag-aplayer.png
---
# hexo-tag-aplayer插件测试
GitHub:&nbsp;&nbsp;[hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)
网易云音乐:&nbsp;&nbsp;[歌单id获取](https://music.163.com/)
1. 刷新不会触发autoplay 点击进入才可以 首页如何触发？
2. 全局列表歌单 -- artist

## 单首
<!-- {% meting "235690" "netease" "song" "autoplay" %} -->
{% meting "235690" "netease" "song" %}

## 多首
{% meting "229285" "netease" "song" %}
{% meting "262938" "netease" "song" %}

## 列表
{% meting "7570" "netease" "artist" %}