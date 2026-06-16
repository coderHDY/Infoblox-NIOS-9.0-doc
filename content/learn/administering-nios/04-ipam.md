---
title: 第 4 课 · IP 地址管理
---

# 第 4 课 · IP 地址管理（IPAM）

::: info 本课目标
搞清 Network、Range、Fixed/Reserved 等对象的关系；能在脑子里画出「网段树」；知道配 DHCP 之前 IPAM 要准备什么。
:::

---

## 1. IPAM 解决什么问题？

**问题**：公司有很多网段和很多 IP，谁在用、还剩多少、能不能再分配——如果靠 Excel，迟早乱套。

**IPAM** 在 NIOS 里就是：**官方唯一的 IP「地图 + 台账」**。

- 规划：这个部门用 `10.20.30.0/24`  
- 记录：`10.20.30.105` 分给哪台设备  
- 关联：同一 Network 下挂 DHCP Range、DNS 相关对象  

章节入口：[IP Address Management](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/)

---

## 2. 核心对象（由大到小）

```
Network（网段）
 ├── 子 Network（可选，进一步划分）
 ├── DHCP Range（交给 DHCP 自动分配的一段，第 6 课详讲）
 ├── Fixed Address（按 MAC 固定 IP）
 ├── Reserved（预留，不自动发出）
 └── Host / 其他 IP 状态（已用、空闲、冲突…）
```

### Network（网络）

- 表示一段连续 IP 空间，如 `10.20.30.0/24`  
- 通常有 **父 Network** 可形成树（总部 / 分支 / 楼层）  
- **几乎所有 IP 相关配置都挂在某个 Network 下**

### Fixed Address

- **MAC 地址 ↔ IP** 绑定  
- 设备每次 DHCP 请求都得到同一 IP（适合服务器、打印机）

### Reserved

- 标记「这个 IP 不要用」，避免 DHCP 发出去  
- 例如网关 `10.20.30.1`、未来服务器位

---

## 3. 状态：这个 IP 现在怎样？

在 Grid Manager 的 IP 列表里，常见状态（名称以界面为准）：

| 状态 | 含义 |
| --- | --- |
| **Free** | 空闲，可分配 |
| **Used** | 已有设备占用（可能来自 DHCP 租约或静态配置） |
| **Reserved** | 管理员预留 |
| **Conflict** | 发现与台账不一致，需要人工处理 |

**IP Discovery** 可以扫描网络，把「实际谁在用」和「台账记录」对比——环境稳定后再学即可。  
阅读：[IP Discovery and vDiscovery](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/)

---

## 4. 操作顺序（初学版）

```
步骤 1：创建 Network（网段 + 掩码）
步骤 2：（可选）划分子 Network
步骤 3：（可选）Reserved 网关、广播地址等
步骤 4：需要固定 IP 的设备 → Fixed Address
步骤 5：需要自动分配 → 在第 6 课创建 DHCP Range（挂在本 Network 下）
```

**不要跳步骤 1**。没有 Network，后面的 DHCP Range 没地方创建。

---

## 5. 小例子：市场部 Wi‑Fi 网段

需求：市场部 Wi‑Fi 使用 `10.30.40.0/24`，网关 `10.30.40.1`，DHCP 发 `10.30.40.100–200`。

| 步骤 | 在 NIOS 里做什么 |
| --- | --- |
| 1 | 建 Network `10.30.40.0/24`，命名 `Marketing-WiFi` |
| 2 | Reserved `10.30.40.1`（网关） |
| 3 | 第 6 课：同 Network 下建 DHCP Range `100–200` |
| 4 | 打印机 MAC 绑定 Fixed Address `10.30.40.50` |

完成后，IPAM 地图里一眼能看到：哪些在用、哪些空闲、打印机是固定的。

详细操作：[Managing IP Addresses](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/)

---

## 6. Extensible Attribute（扩展属性）—— 可选

给 Network/IP 贴标签：「负责人=张三」「机房=B1」。便于筛选和报表。

属于进阶用法，初学可跳过；文档在 Appliance Administration 的 [Managing Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/) 一带。

---

## 7. 自测

**① Network 和 DHCP Range 是什么关系？**

> **参考：** Range 必须属于某个 Network；Range 是 Network 内专门给 DHCP 自动分配的一段连续 IP。

**② Fixed Address 和 Reserved 有什么区别？**

> **参考：** Fixed 绑定 MAC，DHCP 会给该设备发指定 IP；Reserved 只是占坑不让别人用，不自动关联 MAC。

**③ 为什么 IPAM 被称为 DNS/DHCP 的「地基」？**

> **参考：** 网段对象统一了 IP 规划；DHCP Range、部分 DNS 配置都依赖 Network 存在，且 IP 状态在这里可视化。

---

## 8. 深入阅读

- [Managing IP Addresses](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/)  
- [IP Discovery and vDiscovery](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/)

---

[← 第 3 课](/learn/administering-nios/03-appliance-administration/) · [第 5 课：DNS →](/learn/administering-nios/05-dns/)
