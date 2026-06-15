---
title: "set update_rabbitmq_password"
source: "/space/nios90/280822249"
pageId: "280822249"
---
The `set`` ``update_rabbitmq_password` command updates the RabbitMQ password from the unsecure to the secure mode. When you perform a staged upgrade of NIOS from any source version to 9.0, Infoblox recommends that you run this command to make the password secure.

> **warning**
>
> **Note**
> 
> Running the `set update_rabbitmq_password` command restarts the Grid Manager. Therefore, Infoblox recommends that you run the command within the maintenance window.

# Syntax

`set update_rabbitmq_password`

This command has no arguments.

# Example

`Infoblox &gt; ``set``update_rabbi``tmq_password`

`Switching RabbitMQ password to secure mode requires a product restart.`  
`Are you sure you want to proceed? (y or n): ``y`

`RabbitMQ password updated.`
