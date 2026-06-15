---
title: "show rabbitmq_queues"
source: "/space/nios90/280397099"
pageId: "280397099"
---
The `show rabbitmq_queues` command checks the status of the RabbitMQ queue. This command only checks the status of the queue, but does not increase the count.

Use this command mainly as a diagnostic command to be used when you encounter problems related to RabbitMQ. Typically, the queue length must be close to 0; big numbers (in thousands or millions) indicate RabbitMQ issues.

Use the `show rabbitmq_queues` command to check the status of the RabbitMQ queue in the following scenarios:

- When you install or remove the Threat Insight license
- When Threat Insight is running
- When you start or stop the Threat Insight service
- When a large number of domains is queried
- When the Outbound service is running
- When you add or remove an endpoint
- When an HA failover occurs
- When you add a member to a Grid Master
- During a Grid Master promotion
- When you add or remove a reporting member to or from a Grid
- When you install or remove an RPZ license
- When you install or remove a Threat Protection license
- On an IB-FLEX appliance
- When you perform an Amazon Web Services (AWS) Route 53 synchronization for zones and records
- (NIOS 9.0.4 and later) When you perform an Azure DNS synchronization for zones and records
- When you restore or back up the database
- After an auto-synchronization of an ND member
- When you restore a Grid

# Syntax

`show rabbitmq_queues`

This command has no arguments.

# Example

`Infoblox &gt; show rabbitmq_queues`  
`Listing queues....`  
`analytics_dnst_blacklist_queue 0 `  
`aws_route53_q 0 `  
`sddc_gm 0 `  
`sddc_vnode 0 `  
`Grid information (OID, host name, virtual IP): 0`  
`infoblox.localdomain "IP of the VM" `  
`Total no. nodes`
