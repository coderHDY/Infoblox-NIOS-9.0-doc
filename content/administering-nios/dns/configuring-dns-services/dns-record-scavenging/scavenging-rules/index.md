---
title: "Scavenging Rules"
source: "/space/nios90/1394543646"
pageId: "1394543646"
---
You can configure the following match rules to identify reclaimable DNS resource records:

- **Resource** ** Record** ** Type**: This rule allows you to specify the record type to run scavenging on. A record is reclaimable if its type matches or does not match the type specified in the rule. The record types that support scavenging include the following:
  
  - A
  - AAAA
  - PTR
  - CNAME
  - DNAME
  - MX
  - SRV
  - NAPTR
  - TXT
- **Creation** ** Time**: This rule allows you to identify reclaimable records based on the record's creation timestamp. You can see the "Creation Time" value for the records in the DNS Resource Records viewer.
  
  **Last** **Queried** **Time**: This rule allows you to identify reclaimable records based on when they were last queried for their DNS data. You can see the last queried time for the records in the DNS Resource Records viewer.
  
  Note that if you use this rule, also select **Enable** **last** **queried** **time** **monitoring** **for** **resource** **records** in the Grid, view, or zone scavenging properties, as described in the next section.
- **Last** **Discovered** **Time**: This rule allows you to identify reclaimable records based on the record's last discovered timestamp. This rule is applicable to A, AAAA, and PTR records.
- **Record** **Source**: This rule allows you to specify the record source – static or dynamic – to be used as a filter when identifying reclaimable records.
- **Associated** **Records**: This rule allows you to identify reclaimable records based on whether they have or do not have associated records. Record associations are supported for address records (A, AAAA, and PTR). Additionally, you can reclaim the associated records when reclaiming the original ones by enabling the option **When** **reclaiming** **A,** **AAAA,** **or** **PTR** **records,** **also** **reclaim** **the** **corresponding,** **symmetric** **A,** **AAAA,** **and** **PTR** **records** in the scavenging properties, as described in the next section.
- **Extensible** **Attributes**: You can specify extensible attributes that reclaimable records should match in addition to the scavenging rules described above.
