---
title: "CNAME Records in Forward-Mapping Zones"
source: "/space/nios90/1422229877"
pageId: "1422229877"
---
In a forward-mapping zone, a CNAME record maps an ALIAS to a canonical (or official) name. CNAME records are often more convenient to use than canonical names because they can be shorter or more descriptive. For example, you can add a CNAME record that maps the ALIAS *qa.engr* to the canonical name [*qa.engr.corpxyz.com*](http://qa.engr.corpxyz.com).

> **warning**
>
> ### Note
> 
> A CNAME record does not have to be in the same zone as the canonical name to which it maps. In addition, a CNAME record cannot have the same name as any other record in that zone.

To add a CNAME record to a forward-mapping zone from the Tasks Dashboard, see [*Add CNAME Record*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/ipam-task-pack). You can also add CNAME records from the **Data** **Management** tab -&gt; **DNS** tab by clicking **Add** -&gt; **Record** -&gt; **Add** **CNAME** **Record** from the Toolbar.
