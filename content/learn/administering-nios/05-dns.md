---
title: 第 5 课 · DNS 配置
---

# 第 5 课 · DNS 配置

::: info 本课目标
理解 DNS View → Zone → Record 三层；能描述「新增一个内部域名」的完整步骤；知道配错 View 会导致什么现象。
:::

---

## 1. DNS 在 NIOS 里管什么？

NIOS 可以做 **权威 DNS**（你管理的域名，你来答）和部分 **递归/转发** 场景（视配置而定）。

Administering NIOS 的 DNS 章主要讲：**你在 Grid 里怎么建 View、Zone、记录，并让 Member 对外应答**。

章节入口：[DNS](/nios90/infoblox-nios-9-0-x/administering-nios/dns/)

---

## 2. 三层结构（必背）

```
DNS View（视图）
 └── Zone（区域，如 company.com）
      └── Resource Record（A、PTR、CNAME、MX…）
```

### DNS View

**类比**：同一本电话簿，内部员工版和外部访客版内容不同。

- 内网客户端 → 走「internal」View → `apps.company.com` = `10.0.0.5`  
- 外网用户 → 走「external」View → `apps.company.com` = 公网 IP  

同一域名在不同 View 下**可以**有不同答案——这是设计特性，不是 bug。

阅读：[DNS Views](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/)

### Zone

一个域名命名空间的管理单位。

- **Forward Zone**：`company.com` 的正向记录  
- **Reverse Zone**：把 IP 反查成域名，如 `30.20.10.in-addr.arpa`  

阅读：[Configuring DNS Zones](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/)

### Resource Record

| 类型 | 用途 | 示例 |
| --- | --- | --- |
| **A** | 名 → IPv4 | `hr.company.com` → `10.20.30.10` |
| **AAAA** | 名 → IPv6 | 同上，IPv6 |
| **PTR** | IP → 名 | 反向解析 |
| **CNAME** | 别名 | `www` → `hr.company.com` |
| **MX** | 邮件服务器 | 邮件路由 |

阅读：[Configuring DNS Resource Records](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/)

---

## 3. Member 上要开 DNS 服务

对象在 Grid 里建，但**应答**靠 Member 上的 DNS 服务进程。

检查思路：

1. Grid → Members → 目标 Member 是否 **DNS 服务已启用**  
2. 该 Member 是否被指定为某 Zone 的 **primary / secondary**（或 Grid 主模式）  
3. 客户端问的 View 是否和客户端来源匹配  

服务概览：[Infoblox DNS Service](/nios90/infoblox-nios-9-0-x/administering-nios/dns/infoblox-dns-service/)

---

## 4. 标准操作顺序（新增内部域名）

**场景**：内网新应用 `payroll.company.com` → `10.20.50.20`

```
1. 确认 Member DNS 服务正常
2. 选择正确的 DNS View（通常是 internal）
3. 在 View 下找到或创建 Forward Zone「company.com」
4. 添加 A 记录：payroll → 10.20.50.20
5. （可选）在 Reverse Zone 加 PTR
6. 用 nslookup/dig 从客户端测试
```

**常见失败原因**：

| 现象 | 可能原因 |
| --- | --- |
| 解析不到 | 记录建在错的 View；Zone 未部署到应答 Member |
| 答错 IP | 客户端走了另一个 View；有同名缓存 |
| 只有正向没有反向 | 没建 PTR，不影响正向访问，但部分安全/邮件场景需要 |

---

## 5. 小例子：dig 测试

假设客户端应使用 internal View，DNS 服务器是 Member `10.20.1.10`：

```bash
dig @10.20.1.10 payroll.company.com A
```

期望：`ANSWER SECTION` 里有 `10.20.50.20`。

若 `NXDOMAIN`：查 Zone 是否存在、记录是否保存、View 匹配规则是否包含该客户端。

---

## 6. 自测

**① 为什么同一域名在不同 View 里可以有不同 IP？**

> **参考：** View 用于按客户端来源提供不同 DNS 数据（分裂 DNS / split-horizon），内网外网分离是常见需求。

**② 建 A 记录前，Zone 和 View 哪个先确定？**

> **参考：** 先确定 View（受众），再在对应 View 下找或建 Zone，最后加记录。

**③ PTR 记录解决什么问题？**

> **参考：** 已知 IP 查域名（反向解析），用于日志可读性、邮件反垃圾、部分合规检查。

---

## 7. 深入阅读

- [Infoblox DNS Service](/nios90/infoblox-nios-9-0-x/administering-nios/dns/infoblox-dns-service/)  
- [DNS Views](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/)  
- [Configuring DNS Zones](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/)  
- [Configuring DNS Resource Records](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/)  
- [Configuring DNS Services](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/)

---

[← 第 4 课](/learn/administering-nios/04-ipam/) · [第 6 课：DHCP →](/learn/administering-nios/06-dhcp/)
