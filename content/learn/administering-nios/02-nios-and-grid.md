---
title: 第 2 课 · NIOS 与 Grid
---

# 第 2 课 · NIOS 与 Grid

::: info 本课目标
理解 Infoblox NIOS 是什么、Grid 架构里各角色干什么、Grid Manager 界面在管什么。这是读 [Appliance Administration](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/) 的前置课。
:::

---

## 1. NIOS 是什么？

**NIOS**（Network Identity Operating System）是 Infoblox 设备上运行的系统，提供 DNS、DHCP、IPAM 等能力。

你可以把它想成：

> 专门做「网络身份与地址」的工业级操作系统 + 管理后台。

它跑在 **Appliance** 上——可以是硬件盒子，也可以是虚拟机（NIOS VM）。

---

## 2. 一台机器 vs 多台机器：Grid

### 只有一台 Appliance

适合实验或小环境。你登录这台设备的 Web 界面，直接配 DNS/DHCP/IPAM。

### 多台 Appliance 组成 Grid

**类比**：连锁门店。

| 角色 | 类比 | 做什么 |
| --- | --- | --- |
| **Grid Master** | 总部 | 保存整网「主数据库」，全局配置从这里下发 |
| **Grid Member** | 分店 | 跑 DNS/DHCP 等服务，数据从 Master 同步 |
| **HA Pair** | 分店的主备双人岗 | 两台成对，一台 Active 干活，一台 Passive 待命 |

**为什么要 Grid？**

- 集中管理：改一次 Zone，各 Member 同步  
- 分担流量：不同站点 Member 就近应答 DNS/DHCP  
- 高可用：单台故障有 HA 或别的 Member 顶上  

初学阶段记住：**日常在 Grid Manager 里操作，背后数据大多存在 Grid Master 的数据库里**。

---

## 3. Grid Manager：你每天打开的网页

**Grid Manager** 是 NIOS 的 Web 管理界面（浏览器访问）。

主要 Tab（名称可能随版本略有不同）：

| Tab | 大致用途 |
| --- | --- |
| **Dashboard** | 概览、告警、快捷入口 |
| **Data Management** | DNS、DHCP、IPAM 对象——**用得最多** |
| **Grid** | Member 状态、服务、升级 |
| **Administration** | 管理员、权限、审计 |

Administering NIOS 里大量操作都在 **Data Management** 和 **Grid / Administration** 里完成。

界面介绍（官方）：[About the Grid Manager Interface](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface)

---

## 4. 对象存在「树」里

在 Grid Manager 里，DNS Zone、Network、DHCP Range 等不是散落的，而是**树形组织**：

```
Grid
 └── 某个 Member（或 Grid 级对象）
      └── DNS View
           └── Zone
                └── A / PTR / … 记录
```

IPAM 侧类似：

```
Grid
 └── Network 10.20.30.0/24
      ├── DHCP Range
      ├── Fixed Address
      └── 子 Network（如有划分）
```

**初学易错点**：在错误的 View 或错误的 Member 下建对象，导致「配了但解析不到」。第 5、6 课会按步骤避免这个问题。

---

## 5. 独立 Appliance 和 Grid 的关系

文档里还有 **Independent Appliance**（不加入 Grid 的单机）。生产环境多为 Grid；实验可能只有一台。

读 [Deploying Independent Appliances](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-independent-appliances/) 时，只要知道：**概念相同，只是没有 Master/Member 同步而已**。

---

## 6. 小例子：三站点 Grid

公司有北京、上海、深圳各一台 Member，Grid Master 在北京。

- 管理员在 Grid Manager **只登录 Master**（通常通过 VIP 或 Master 地址）  
- 新增 `apps.company.com` 的 A 记录 → 写入 Grid 数据库 → 同步到各 Member  
- 上海用户问 DNS → 可由上海 Member 应答，不必绕到北京  

---

## 7. 自测

**① Grid Master 和 Grid Member 最本质的区别是什么？**

> **参考：** Master 维护 Grid 主数据库并负责全局配置；Member 运行服务并持有同步来的数据副本（也可有 Member 特有配置）。

**② HA Pair 里的 Active / Passive 是什么？**

> **参考：** 同一逻辑节点两台物理机：Active 处理请求，Passive 热备；故障时切换角色，减少单台硬件故障影响。

**③ 配 DNS 记录时，为什么要关心「在哪个 View 下」？**

> **参考：** View 像「不同受众看到不同答案的电话簿分册」。同一域名在不同 View 下可以有不同 IP；配错 View 等于配错受众。

---

## 8. 深入阅读

- [Getting Started](/nios90/infoblox-nios-9-0-x/getting-started/)（官方入门索引）  
- [Glossary：Grid / Grid Master / Grid Member](/nios90/infoblox-nios-9-0-x/getting-started/glossary-of-terms)  
- [Appliance Administration 章节总览](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/)  
- [Deploying a Grid](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/)（部署细节，有环境时再细读）

---

[← 第 1 课](/learn/administering-nios/01-network-basics/) · [第 3 课：平台与权限 →](/learn/administering-nios/03-appliance-administration/)
