---
title: 第 3 课 · 平台与权限
---

# 第 3 课 · 平台与权限（Appliance Administration）

::: info 本课目标
理解「谁能登录、能改什么」；知道 Grid 部署、许可证、基础运维在文档哪一块。这是进入 IPAM/DNS/DHCP 之前的**管理地基**。
:::

---

## 1. 为什么先学这一章？

第 1–2 课讲的是网络概念和 Grid 架构。但在真实环境里，你登录 Grid Manager 后第一件事往往是：

- 自己的账号有没有权限？  
- 这台 Member 有没有 DNS/DHCP 许可证？  
- Grid 里有哪些节点在线？  

这些都属于 **Appliance Administration**——Administering NIOS 的**第一章**，也是官方建议的管理员起点。

---

## 2. 管理员、角色、权限组（用公司类比）

| 概念 | 类比 | 说明 |
| --- | --- | --- |
| **Admin（管理员账号）** | 员工工号 | 谁可以登录 Grid Manager / API |
| **Role（角色）** | 岗位说明书 | 定义能执行哪类操作（只读 DNS、可改 DHCP 等） |
| **Admin Group（管理组）** | 部门 | 把管理员分组，并绑定权限范围（如只能管某个 Network 容器） |

**典型原则**：最小权限——只给完成工作需要的权限。

**例子**：

- 网络组同事：IPAM + DHCP 读写，DNS 只读  
- 安全组同事：DNS Firewall、RPZ 相关权限  
- 值班同事故：Dashboard + Monitoring 只读  

官方操作入口：[Managing Administrators](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/)

---

## 3. 许可证：功能开关

NIOS 许多能力由 **License** 控制，例如：

- DNS/DHCP 基础服务  
- IPAM 高级功能  
- DNS Firewall、Reporting 等附加模块  

没有对应许可证，界面上可能看不到菜单，或服务启不起来。

初学要知道两点：

1. 许可证有 **Grid 级** 和 **Member 级** 之分（具体以版本文档为准）  
2. 排错时先确认：**Member 上是否安装了所需 License**  

阅读：[Managing Licenses in NIOS 9.0.1 and later](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-1-and-later/)

---

## 4. Grid 部署：从 0 到能管理

部署新 Grid 的大致步骤（概念层，细节见官方）：

```
1. 准备 Grid Master（第一台或 Master HA 对）
2. 配置网络、时间（NTP）、许可证
3. 加入 Grid Member（如有）
4. 验证 Member 与 Master 同步正常
5. 创建管理员账号，关闭/修改默认账号
```

**HA**：生产环境 Grid Master 常为 HA 对，避免 Master 单点故障。

阅读：[Deploying a Grid](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/)

---

## 5. 日常运维你迟早会碰到

不必第一天全学，但要知道文档在哪：

| 需求 | 主题 |
| --- | --- |
| 改 NTP、端口、重启 DNS/DHCP 服务 | [Managing Appliance Operations](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/) |
| TFTP/FTP/HTTP 发文件（如 PXE、配置文件） | [File Distribution Services](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/file-distribution-services/) |
| SAML 单点登录 | [Authenticating Admins Using SAML](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-saml/) |

---

## 6. 小例子：新同事入职

场景：给实习生小李开只读账号，只能看 DNS 和 IPAM，不能改 DHCP。

你要做的（概念步骤）：

1. 创建 **Role**：DNS Read、IPAM Read  
2. 创建 **Admin Group**（可选）：绑定可见对象范围  
3. 创建 **Admin** 账号 `lixiao`，分配 Role / Group  
4. 小李登录验证：能看到 Zone 和 Network，保存按钮灰掉或无权  

具体按钮名称以 Grid Manager 为准，逻辑是：**Role 管能做什么，Group 管能看哪些对象**。

---

## 7. 自测

**① Role 和 Admin Group 有什么区别？**

> **参考：** Role 定义操作类型（读/写哪些模块）；Admin Group 常用来限制管理的对象范围。两者组合实现精细授权。

**② 为什么排错「菜单里没有 DHCP」时要先查 License？**

> **参考：** 无 License 时功能模块可能未启用或未安装，界面与服务都不会正常提供。

**③ Grid Master 挂了会怎样？（HA 场景）**

> **参考：** 若有 Master HA，Passive 应接管；若无 HA，Grid 管理和中断同步会出严重问题——故生产环境强调 Master HA。

---

## 8. 深入阅读

- [Appliance Administration 总览](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/)  
- [Managing Administrators](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/)  
- [Deploying a Grid](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/)  
- [Managing Appliance Operations](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/)

---

[← 第 2 课](/learn/administering-nios/02-nios-and-grid/) · [第 4 课：IPAM →](/learn/administering-nios/04-ipam/)
