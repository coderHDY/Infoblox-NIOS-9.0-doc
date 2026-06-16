---
title: Administering NIOS 入门教程
---

# Administering NIOS 入门教程

> 写给**零基础**读者。这不是官方文档的目录拷贝，而是一套**由浅入深**的自学课：先用白话讲清楚概念，再带你读官方章节。

官方 Administering NIOS 约有 **1800+ 页**，是**操作手册**，不是入门教材。本教程帮你建立「地图」，再按需查原文。

---

## 怎么学最有效？

每课结构固定，照着做即可：

1. **读讲解**（5–15 分钟）—— 用生活类比理解概念  
2. **看例子** —— 一个具体小场景串起来  
3. **自测** —— 3 个小问题，答不上来说明要重读  
4. **深入阅读** —— 点开官方链接，只读与本课相关的几页，不必通读全章  

::: tip 有 Grid Manager 实验环境？
每课后在界面里找对应菜单点一遍，比多看 10 页文档记得牢。
:::

---

## 课程路线

按顺序学，不要跳课（第 1–2 课是后面所有内容的地基）。

| 课次 | 主题 | 你会学到 |
| --- | --- | --- |
| [第 1 课](/learn/administering-nios/01-network-basics/) | 网络三件宝 | IP、DNS、DHCP 各自解决什么问题 |
| [第 2 课](/learn/administering-nios/02-nios-and-grid/) | NIOS 与 Grid | Appliance、Grid Master、Grid Manager 是什么关系 |
| [第 3 课](/learn/administering-nios/03-appliance-administration/) | 平台与权限 | 谁能在系统里做什么、Grid 怎么搭 |
| [第 4 课](/learn/administering-nios/04-ipam/) | IP 地址管理 | 网段、地址、对象层次 |
| [第 5 课](/learn/administering-nios/05-dns/) | DNS 配置 | View → Zone → 记录，怎么一条链配下来 |
| [第 6 课](/learn/administering-nios/06-dhcp/) | DHCP 配置 | 自动发 IP 需要哪些对象 |
| [第 7 课](/learn/administering-nios/07-putting-it-together/) | 综合实战 | 从新办公室网段到能上网、能解析域名 |
| [第 8 课](/learn/administering-nios/08-advanced-topics/) | 进阶选读 | Monitoring、Security 等何时再看 |

预计 **1–2 周**（每天 1–2 小时）可完成第 1–7 课的核心部分。

---

## 一张总地图

想象你在管一栋大楼的网络（NIOS 就是这套系统的「总控室」）：

```
总控室（Grid Manager 网页）
    │
    ├── 大楼有几台设备、谁有钥匙（Appliance Administration）
    │
    ├── 每层有哪些房间号、谁占着（IPAM）
    │
    ├── 访客问「某某部门在哪」怎么指路（DNS）
    │
    └── 新住户搬进来自动分配房间号（DHCP）
```

第 1 课从这里开始，把「房间号 / 指路牌 / 自动分配」对应到 IP、DNS、DHCP。

---

[开始第 1 课：网络三件宝 →](/learn/administering-nios/01-network-basics/)
