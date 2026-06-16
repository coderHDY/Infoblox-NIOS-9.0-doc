---
title: 第 7 课 · 综合实战
---

# 第 7 课 · 综合实战：从新办公室网段到「能上网、能解析」

::: info 本课目标
把第 1–6 课串成一条完整链路。不要求你真在生产环境操作，但要能在纸上/脑子里走完流程，并知道每一步对应官方文档哪一节。
:::

---

## 场景说明

公司新开 **研发办公室**，需要：

- 网段：`10.100.0.0/24`  
- 网关：`10.100.0.1`（路由器，不在 NIOS 上）  
- 员工电脑 DHCP 自动拿 IP：`10.100.0.50` – `10.100.0.200`  
- 内网 DNS：`10.100.0.2`（某 Grid Member）  
- 新应用域名：`devportal.company.com` → `10.100.0.30`（内网服务器）  
- 文件服务器 MAC 固定 IP：`10.100.0.25`  

假设 Grid、Member、License、管理员账号已就绪（第 3 课范围）。

---

## 阶段 A：IPAM 打地基

| 步骤 | 操作 | 对应文档 |
| --- | --- | --- |
| A1 | 创建 Network `10.100.0.0/24`，命名 `R-and-D-Office` | [Managing IP Addresses](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/) |
| A2 | Reserved `10.100.0.1`（网关） | 同上 |
| A3 | Reserved `10.100.0.2`（DNS 服务 IP，若固定） | 同上 |
| A4 | Fixed Address：文件服务器 MAC → `10.100.0.25` | 同上 |
| A5 | Reserved `10.100.0.30`（devportal 服务器） | 同上 |

**检查点**：IPAM 树里能看到网段，且 `.1/.2/.25/.30` 不会被 DHCP 误发。

---

## 阶段 B：DHCP 让员工电脑自动拿 IP

| 步骤 | 操作 | 对应文档 |
| --- | --- | --- |
| B1 | 确认目标 Member DHCP 服务启用 | [Configuring Infoblox DHCP Services](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-infoblox-dhcp-services/) |
| B2 | 在 `R-and-D-Office` Network 下建 Range `50–200` | [Managing IPv4 DHCP Data](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/) |
| B3 | Option 3 = `10.100.0.1`，Option 6 = `10.100.0.2` | [Configuring DHCP Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/) |
| B4 | 笔记本连网，确认拿到 `50–200` 内 IP | — |

**检查点**：`ipconfig` / `ifconfig` 显示网关和 DNS 正确；IPAM 里该地址变 Used。

---

## 阶段 C：DNS 让 devportal 能解析

| 步骤 | 操作 | 对应文档 |
| --- | --- | --- |
| C1 | 确认 Member DNS 服务启用 | [Infoblox DNS Service](/nios90/infoblox-nios-9-0-x/administering-nios/dns/infoblox-dns-service/) |
| C2 | 在 **internal** View（名称以环境为准）下打开 Zone `company.com` | [Configuring DNS Zones](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/) |
| C3 | 添加 A 记录 `devportal` → `10.100.0.30` | [Configuring DNS Resource Records](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/) |
| C4 | （可选）Reverse Zone 添加 PTR | 同上 |
| C5 | 客户端执行 `dig @10.100.0.2 devportal.company.com` | — |

**检查点**：解析结果为 `10.100.0.30`；浏览器能打开（若服务器已部署）。

---

## 阶段 D：端到端验证清单

在脑子里或实验环境逐项打勾：

- [ ] 员工电脑 DHCP 拿到 IP  
- [ ] 能 ping 网关 `10.100.0.1`  
- [ ] 能解析 `devportal.company.com`  
- [ ] 文件服务器始终是 `10.100.0.25`  
- [ ] IPAM 中地址状态与预期一致  

---

## 出了问题怎么查？（小白排错顺序）

```
1. 是 IP 问题还是名字问题？
   - ping 10.100.0.30 通 → IP 层 OK
   - ping 域名不通 → 先查 DNS

2. DHCP 问题
   - 没拿到 IP → Member DHCP 服务 / Range / 中继（relay）配置
   - 拿到 IP 不能上网 → Option 3 网关

3. DNS 问题
   - dig 无 Answer → View / Zone / 记录 / Member 应答
   - dig 错 IP → 是否错 View、是否有旧缓存

4. 权限问题
   - 界面看不到菜单 → License 或 Admin Role
```

Monitoring 章可在稳定运行后再学：[Monitoring the Appliance](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/)

---

## 自测：口述练习

不看笔记，尝试向假想的同事说明：

1. 为什么这个场景里 **先 A 后 B 再 C**？  
2. `10.100.0.25` 为什么用 Fixed 而不是写进 Range？  
3. 若 `devportal` 内网能解析、外网不能，可能是设计上的什么机制？

**参考答案提示**

> **参考：** 1. IPAM 是容器；DHCP Range 和 DNS 记录都依赖网段与地址规划。  
2. 服务器 IP 需长期稳定，Fixed 绑定 MAC 避免租约变化。  
3. 可能是 split-horizon：internal View 有记录，external View 没有或指向公网 IP。

---

## 恭喜完成核心路径

第 1–7 课覆盖 Administering NIOS 的 **主干能力**。接下来可按工作岗位选读进阶章。

[第 8 课：进阶选读 →](/learn/administering-nios/08-advanced-topics/)

---

[← 第 6 课](/learn/administering-nios/06-dhcp/) · [教程首页](/learn/administering-nios/)
