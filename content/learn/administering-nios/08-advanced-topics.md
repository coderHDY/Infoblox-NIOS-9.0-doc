---
title: 第 8 课 · 进阶选读
---

# 第 8 课 · 进阶选读：何时再看其他章节

::: info 本课目标
知道 Administering NIOS 里其余章节**在什么工作场景下**才需要学，避免一开始被 1800 页吓退。
:::

---

## 你已经掌握的主干

完成第 1–7 课后，你应具备：

- DDI（IPAM / DNS / DHCP）分工  
- Grid / Master / Member / Grid Manager 关系  
- 管理员与 License 基本概念  
- 从新网段到 DHCP + DNS 的配置顺序  
- 简单排错思路  

这已足够支撑**入门运维**和**在官方文档里按任务查细节**。

---

## 其余章节：按场景选读

### Configuring Super Hosts

**何时读**：要一次性按规则批量生成大量 A/PTR 记录（例如整段 IP 按命名规范自动起名）。

入口：[Configuring Super Hosts](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-super-hosts/)

---

### Configuring Microsoft Windows Servers

**何时读**：环境里还有 **Microsoft DNS/DHCP**，需要和 NIOS 协同或迁移。

入口：[Configuring Microsoft Windows Servers](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/)

---

### Monitoring

**何时读**：要配置告警、看服务健康、SNMP 集成、日志导出。

入口：[Monitoring](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/)  
起步：[Monitoring the Appliance](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/)

---

### Infoblox Reporting and Analytics

**何时读**：需要历史报表、Dashboard、审计类数据分析。

入口：[Infoblox Reporting and Analytics](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/)

---

### Infoblox Infrastructure Security

**何时读**：DNS Firewall（RPZ）、Threat Insight、与 Cisco ISE 联动等**安全 DNS** 场景。

入口：[Infoblox Infrastructure Security](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/)

---

### Infoblox Subscriber Services

**何时读**：运营商/大型 ISP 的订阅者策略、Parental Control 等——**企业网管理员通常跳过**。

入口：[Infoblox Subscriber Services](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services/)

---

### VLAN Management

**何时读**：要把 VLAN 对象和 IPAM 网段关联管理。

入口：[VLAN Management](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management/)

---

### IPAM Federation

**何时读**：多个 Grid 或组织间要联邦同步 IPAM 数据。

入口：[IPAM Federation](/nios90/infoblox-nios-9-0-x/administering-nios/ipam-federation/)

---

## 继续学习的方式

1. **工作中带问题查官方文档**——本镜像侧栏 **Infoblox NIOS 9.0.x → Administering NIOS** 即全文。  
2. **术语不懂就查** [Glossary](/nios90/infoblox-nios-9-0-x/getting-started/glossary-of-terms)。  
3. **有实验环境就动手**——每解决一个真实工单，胜过通读一章。  
4. Infoblox 官方免费课程（需账号）：[NIOS DDI Operations](https://launchpad.education.infoblox.com/student/collection/1686525)

---

## 自测：我准备好干哪类活了？

| 如果你即将… | 建议再读 |
| --- | --- |
| 只维护 DNS 记录 | DNS 章 DNSSEC、转发策略等（按工单） |
| 只维护 DHCP | Filter、Failover 相关小节 |
| 参与安全项目 | Infrastructure Security 章 |
| 做 Microsoft 迁移 | Microsoft Windows Servers 章 |

---

[← 第 7 课](/learn/administering-nios/07-putting-it-together/) · [教程首页](/learn/administering-nios/)
