---
title: "set member_upgrade_timeout"
source: "/space/nios90/1583972354"
pageId: "1583972354"
---
The `set member_upgrade_timeout` command allows you to configure the default upgrade policy time. This CLI command is useful during sequential upgrade policies for controlling the upgrade timing between Grid members.

# **Syntax**

`set member_upgrade_timeout`

# **Examples**

Case 1: Keeping the default timeout

```
Infoblox > set member_upgrade_timeout
Enter Member Upgrade Timeout (mins) [Current: 10]: 
Member Upgrade Timeout '10 mins' was not changed.
Infoblox > 
```

Case 2: Changing the timeout to 15 mins

```
Infoblox > set member_upgrade_timeout
Enter Member Upgrade Timeout (mins) [Current: 15]: 
Member Upgrade Timeout '15 mins' was not changed.
Infoblox > 
```
