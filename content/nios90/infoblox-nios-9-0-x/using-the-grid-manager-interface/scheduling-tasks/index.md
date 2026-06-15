---
title: "Scheduling Tasks"
source: "/space/nios90/280790666"
pageId: "280790666"
---
When you perform a task, such as adding a DNS zone or modifying a DHCP range, you can execute it immediately or schedule it for a future date and time, depending on your permissions. The scheduling feature is useful when you want to add, modify, or delete a record, or schedule a network discovery at a desired date and time. Using this feature, you can streamline your day-to-day operations. For example, you can schedule the deletion of records that you use for testing when the test time is up. You can also reassign an IP address to a fixed address when the location of the server to which the fixed address is assigned changes from one network to another.

Certain tasks, scheduled or not, may be subject to approvals if approval workflows are defined for specific admin groups. For information about how to define submitters and approvers for an approval workflow, see [*Configuring Approval Workflows*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows).  
Note that not all tasks can be scheduled or routed for approval. For a list of supported objects, see Supported Objects for Scheduled and Approval Tasks below.  
When you schedule a task or submit it for approval, consider the following:

- The appliance cannot execute a scheduled or approval task that is associated with an extensible attribute, if you delete the extensible attribute after you have scheduled the task or submitted it for approval. For information about extensible attributes, see [*About Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
- The appliance cannot execute, reschedule, or delete a task that is associated with a child object (such as a DHCP range) if you delete the parent object (such as a network) after you have scheduled the task or submitted it for approval.
- There are certain guidelines about scheduled and approval tasks when you upgrade the software, back up the database, and restore data. For information, see [*Guidelines for Upgrading, Backing Up, and Restoring Data*](https://infoblox-docs.atlassian.net/wiki/spaces/niosupgrade/pages/1320419605)*.*

You can schedule the addition, modification, and deletion of certain objects. For a list of supported objects, see Supported Objects for Scheduled and Approval Tasks below.  
Depending on your permissions and the admin group to which you belong, your scheduled tasks may be subject to approvals by other admins in your organization. You may or may not receive email notifications about the status of your scheduled tasks depending on the configuration of the approval workflows. Approvers can reschedule your tasks after they have approved the tasks, if they have scheduling permissions. When you schedule and submit a task, you may need to enter a ticket number associated with the task or a comment about the task. For more information about approval workflows, see [*Configuring Approval Workflows*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows).

Only superusers can view, reschedule, and delete all scheduled tasks. Limited-access admins can reschedule and delete only their scheduled tasks. If your scheduled tasks require approvals, the approvers who have scheduling permissions may reschedule your tasks to a different date and time after they have approved the tasks. Depending on your admin permissions, there are certain scheduled and approval tasks that you may or may not be able to perform. For more information about supported tasks for different admin groups, see [*Configuring Approval Workflow*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows)[s](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows).  
The appliance sends email notifications to local admins, except for those who do not have email addresses, when email notification is enabled for the admins and any of the following happens:

- A superuser schedules a task, and another superuser reschedules or deletes the task.
- A limited-access admin schedules a task, and a superuser reschedules or deletes the task.
- A superuser or a limited-access admin schedules a task, and the task fails.
- An admin is configured to receive notifications based on the configuration of an approval workflow. For information about approval workflows, see [*Configuring Approval Workflows*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/configuring-approval-workflows).

Superusers can also grant scheduling permissions to other admin groups. When the scheduling permission is added or inherited from an admin role, limited-access admin groups can schedule tasks. For more information, see [*Administrative Permissions for Discovery*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/administrative-permissions-for-discovery).

# Supported Objects for Scheduled and Approval Tasks

- DNS zones (authoritative, forward, stub, and delegated)
- DNS views
- DNS resource records (except SOA records)
- Import resource records to DNS zones
- Lock and unlock DNS zones
- Hosts
- Bulk hosts
- Roaming hosts
- Shared records
- Shared record groups
- IPv4 and IPv6 networks
- IPv4 and IPv6 network containers
- IPv4 and IPv6 shared networks
- IPv4 and IPv6 DHCP ranges
- IPv4 and IPv6 reserved ranges
- IPv4 and IPv6 fixed addresses
- IPv4 reservations
- DHCP fingerprints
- DHCP filters (MAC, option, NAC, relay agent, and DHCP Fingerprint)

> **custom**
>
> Note
> 
> Only IPv4 MAC filters support approval workflows.

- IPv4 MAC address filter items
- Conversion of IPv4 and IPv6 static and dynamic leases
- Microsoft objects that are supported by NIOS
- Load balancer related objects
- DNS64 Synthesis Groups
- All IPAM tasks except CSV imports
- Response Policy Zones
- Response Policy records
- VLANs

You can also schedule the following operations or create approval workflows for them:

- Network Discovery
- Device Discovery
- VM Discovery
- Port Control provisioning tasks for setting Admin Status, VLAN assignments, and a Description;
- Defining infrastructure device port reservations for the following IPAM/DHCP objects:
  
  - IPv4 Reservations
  - IPv4/IPv6 Fixed Addresses
  - Hosts
  - Grid Members
  - IPv4 and IPv6 Networks
- Service restarts (for scheduled tasks only)

> **custom**
>
> Note
> 
> Service restarts are not subject to approvals.
