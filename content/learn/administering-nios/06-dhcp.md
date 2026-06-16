---
title: 第 6 课 · DHCP 配置
---

# 第 6 课 · DHCP 配置

::: info 本课目标
理解 DHCP 工作流程；会在已有 Network 下配置 Range 和 Options；知道 Fixed Address 与 Range 如何配合。
:::

---

## 1. DHCP 在 NIOS 里做什么？

设备 plug in 或连 Wi‑Fi 时，不用手工填 IP，由 **DHCP 服务器**自动分配，并告诉它：

- 本机 IP  
- 子网掩码  
- **默认网关**（路由器）  
- **DNS 服务器**地址  
- 租期多久  

章节入口：[DHCP](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/)

---

## 2. 一次 DHCP 交互（四步记忆）

```
① DISCOVER  客户端：「有 DHCP 吗？」（广播）
② OFFER     服务器：「给你 10.20.30.105 要不要？」
③ REQUEST   客户端：「要这个」
④ ACK       服务器：「成交，租期 8 小时」
```

NIOS 作为 DHCP 服务器时，你要提前告诉它：**从哪个池子里 offer**、**option 里网关 DNS 填什么**。

---

## 3. 对象关系（和第 4 课衔接）

```
Network 10.20.30.0/24          ← IPAM（第 4 课已建）
 └── DHCP Range 100–200        ← 可自动分配的范围
 └── Fixed Address（某 MAC）   ← 固定 IP，优先级通常高于动态池
 └── DHCP Options              ← 网关、DNS、域名后缀等
```

**Range 必须在 Network 里面**，且不要包含 Reserved / Fixed 占用的地址。

阅读：[Managing IPv4 DHCP Data](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/)

---

## 4. 常用 DHCP Options（先记这三个）

| Option | 含义 | 典型值 |
| --- | --- | --- |
| **3** | 默认网关 | `10.20.30.1` |
| **6** | DNS 服务器 | Grid 里 DNS Member 的 IP |
| **15** | 域名后缀 | `company.com` |

客户端拿到 lease 后，操作系统会自动写入这些参数。

Options 可在 **Network / Range / Member** 等层级继承（子对象覆盖父对象）——具体继承规则见官方 [Configuring DHCP Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/)。

---

## 5. 标准操作顺序

```
1. 确认 Member 上 DHCP 服务已启用且有 License
2. 确认 Network 已存在（第 4 课）
3. 在 Network 下创建 DHCP Range（起止 IP）
4. 配置 Options：网关、DNS、租期
5. 客户端 renew/release 或重连 Wi‑Fi 测试
6. 在 IPAM 里查看该 IP 是否变为 Used
```

服务概览：[Configuring Infoblox DHCP Services](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-infoblox-dhcp-services/)

---

## 6. 小例子：会议室网段

Network：`10.40.0.0/24`（已建）  
需求：访客 DHCP `10.40.0.50–150`，网关 `10.40.0.1`，DNS `10.40.0.2`

| 配置项 | 值 |
| --- | --- |
| DHCP Range | `10.40.0.50` – `10.40.0.150` |
| Option 3 | `10.40.0.1` |
| Option 6 | `10.40.0.2` |
| 租期 | 例如 4 小时（访客场景可短一些） |

测试：手机连会议室 Wi‑Fi，看是否拿到 `50–150` 内 IP，且能 ping 通网关。

---

## 7. Fixed vs Range：打印机案例

打印机 MAC `11:22:33:44:55:66`，需要永远 `10.40.0.10`：

- 在 **同一 Network** 下建 **Fixed Address**  
- **Reserved** `10.40.0.10` 或确保 Range 不包含 `.10`  
- 打印机 DHCP 请求时，服务器按 MAC 发固定 IP，而不是从 Range 里随机挑  

---

## 8. 模板（进阶，可先跳过）

多网点用相同 DHCP 标准时，可用 **DHCP Template** 批量套用 Options 和属性。

阅读：[Managing DHCP Templates](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/)

Filter、Failover 等属于生产高阶话题，遇到再查 [DHCP 章](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/) 内搜索。

---

## 9. 自测

**① 为什么 DHCP Range 不能覆盖网关 IP？**

> **参考：** 网关通常需固定且 Reserved；若被 DHCP 发出会导致网络路由混乱。

**② 客户端拿到 IP 但不能上网，先查哪两个 Option？**

> **参考：** Option 3（网关）和 Option 6（DNS）。网关错无法出网，DNS 错无法解析域名。

**③ Fixed Address 和 Range 冲突会怎样？**

> **参考：** 应避免 IP 重叠；Fixed 一般优先。规划时 Reserved/Fixed 与 Range 分段要事先划清。

---

## 10. 深入阅读

- [Configuring Infoblox DHCP Services](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-infoblox-dhcp-services/)  
- [Managing IPv4 DHCP Data](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/)  
- [Configuring DHCP Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/)

---

[← 第 5 课](/learn/administering-nios/05-dns/) · [第 7 课：综合实战 →](/learn/administering-nios/07-putting-it-together/)
