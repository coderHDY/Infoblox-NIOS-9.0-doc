---
title: 第 1 课 · 网络三件宝
---

# 第 1 课 · 网络三件宝：IP、DNS、DHCP

::: info 本课目标
读完你应该能向同事解释：设备上网为什么同时需要 IP、DNS、DHCP；Administering NIOS 文档里 IPAM / DNS / DHCP 三章各自管什么。
:::

---

## 1. 从一个问题开始

同事电脑连上公司 Wi‑Fi 后，浏览器打开 `https://hr.company.com` 能看到人事页面。

**背后至少发生了三件事**：

1. 电脑拿到了一个 IP 地址（例如 `10.20.30.105`）  
2. 系统知道 `hr.company.com` 对应哪个 IP  
3. 有人事先规划过：哪些 IP 可以分给 Wi‑Fi 用  

NIOS 管的正是这三类能力，合称 **DDI**：

| 能力 | 英文 | 一句话 |
| --- | --- | --- |
| IP 地址管理 | **IPAM** | 规划并记录「哪些 IP 分给谁用」 |
| 域名解析 | **DNS** | 把 `hr.company.com` 翻译成 IP |
| 自动分配 IP | **DHCP** | 设备连网时自动发 IP，不用手工配 |

Administering NIOS 里对应三大章：[IP Address Management](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/)、[DNS](/nios90/infoblox-nios-9-0-x/administering-nios/dns/)、[DHCP](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/)。

---

## 2. IP 地址：设备的「门牌号」

**类比**：大楼里每个房间有门牌号，邮递员靠门牌号找到你。

- IP 地址（如 `192.168.1.50`）就是网络里设备的门牌号。  
- **网段**（如 `192.168.1.0/24`）表示「这一层有哪些门牌号可用」。  
- `/24` 是 **CIDR** 写法，表示子网大小；初学只要记住：**同一网段内的设备可以直接通信**（在不跨路由的情况下）。

**常见对象**（后面 IPAM 课会细讲）：

| 名称 | 类比 |
| --- | --- |
| Network（网络/网段） | 一整层楼的门牌号范围 |
| Fixed Address | 给某台设备永久绑定的门牌号（按 MAC 绑定） |
| Reserved | 预留但暂时不发的门牌号 |

---

## 3. DNS：网络的「电话簿 + 指路牌」

**类比**：你知道朋友叫「张三」，但快递要的是地址。DNS 负责把**名字**变成**地址**。

- 你输入 `hr.company.com`  
- DNS 回答：「这个域名是 `10.20.30.10`」  
- 浏览器再去连这个 IP  

**常见记录类型**（先记三个就够）：

| 记录 | 作用 | 例子 |
| --- | --- | --- |
| **A** | 域名 → IPv4 地址 | `hr.company.com` → `10.20.30.10` |
| **PTR** | IP → 域名（反向） | `10.20.30.10` → `hr.company.com` |
| **CNAME** | 别名 | `www.company.com` 指向 `hr.company.com` |

**Zone（区域）**：电话簿里的一章，例如 `company.com` 这一章里所有记录放在一起管理。

---

## 4. DHCP：自动分配门牌号的「前台」

**类比**：新员工入职，前台按规则分配工位号，不用 HR 手工一个个填。

设备连网时会广播：「我需要 IP！」  
DHCP 服务器回复：「给你 `10.20.30.105`，网关是 `10.20.30.1`，DNS 用 `10.20.30.2`，租期 8 小时。」

**租约（Lease）**：IP 不是永久送给设备的，到期可续租或收回，避免地址浪费。

**DHCP Range（地址池）**：从网段里划一段专门给 DHCP 自动发，例如 `10.20.30.100–10.20.30.200`。

---

## 5. 三者怎么配合？（重要）

顺序上通常是：

```
① IPAM：规划网段 10.20.30.0/24 存在
        ↓
② DHCP：在网段里划 Range，自动发 IP
        ↓
③ DNS：给服务器、应用配 A 记录，让名字能解析
```

**为什么 Administering NIOS 建议先 IPAM 再 DNS/DHCP？**  
因为 DHCP Range 和许多 DNS 配置都**挂在网段（Network）下面**。没有「地图」，后面的服务没地方挂。

---

## 6. 小例子：新员工笔记本上网

场景：笔记本 MAC `aa:bb:cc:dd:ee:ff` 连公司 Wi‑Fi。

1. **DHCP**：从 `10.20.30.100–200` 里分配 `10.20.30.105`，告诉它网关和 DNS 服务器地址。  
2. **DNS**：笔记本问「`intranet.company.com` 在哪？」DNS 答 `10.20.30.50`。  
3. **IPAM**：管理员在系统里能看到 `10.20.30.105` 已被占用，必要时可改成 Fixed Address 绑定该 MAC。

---

## 7. 自测（不用背，能用自己的话说即可）

**① DDI 三个字母分别代表什么？各自解决什么问题？**

> **参考：** DNS（名字→IP）、DHCP（自动发 IP）、IPAM（规划并记录 IP 使用）。顺序记忆：先规划（I），再分配（D），名字解析（D）贯穿其中。

**② 为什么通常先建 Network，再建 DHCP Range？**

> **参考：** Range 必须落在某个已定义的网段里；网段是「容器」，Range 是容器里「自动分配区」。

**③ A 记录和 PTR 记录有什么区别？**

> **参考：** A：域名→IP；PTR：IP→域名。正向解析用 A，反向（如日志、邮件校验）用 PTR。

---

## 8. 深入阅读（官方文档，按需点开）

- 术语表（遇到生词来查）：[Glossary of Terms](/nios90/infoblox-nios-9-0-x/getting-started/glossary-of-terms)  
- Administering NIOS 三章入口（**先别通读**，知道在哪即可）：  
  - [IP Address Management](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/)  
  - [DNS](/nios90/infoblox-nios-9-0-x/administering-nios/dns/)  
  - [DHCP](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/)

---

[← 教程首页](/learn/administering-nios/) · [第 2 课：NIOS 与 Grid →](/learn/administering-nios/02-nios-and-grid/)
