---
title: "About Automatic Conversion Rules"
source: "/space/nios90/280764047"
pageId: "280764047"
---
To automate the conversion of IP addresses of discovered entities from "unmanaged" to "managed" in a specific network view, you can configure conversion rules that Network Insight uses to automatically create new DNS records or update existing data for the discovered IP addresses. Network Insight automatically converts newly discovered IP addresses to host records, A and PTR records, or fixed addresses based on your configuration. You can define templates that Network Insight uses to create new records by using supported variables and functions. For information about supported variables, see Supported Variables for Templates below.  
Note that corresponding DNS zones in a selected network view must already exist in order for Network Insight to add DNS records during the conversion. Otherwise, Network Insight does not add any DNS records and it logs a message to the syslog.  
Network Insight automatically adds DNS records based on the following conditions:

- The corresponding DNS zones must already exist in the NIOS database. Network Insight does not automatically create DNS zones for the records.
- To create a PTR record, the corresponding reverse-mapping zone must exist.
- A DNS zone cannot be associated with more than one DNS view. Network Insight does not create DNS records for zones that are associated with multiple DNS views.
- NIOS adds new DNS records only if the discovered_name for the discovered IP address is available and there is no conflict with information about the associated network view.

On subsequent discovery jobs, if an IP for a VM is removed, the corresponding DNS records are removed accordingly. If the IP for a VM is changed, the IP address in the corresponding DNS record is changed accordingly. If the DNS record name template is changed, all the DNS records are replaced with the DNS records using the new template. All administrative actions for these change are recorded in the audit log. Summary of the changes are logged in the syslog.

> **warning**
>
> ### Note
> 
> Network Insight updates only records that are created by the Network Insight process. It does not create or update DNS records that are originally created by other admin users.
