---
title: "Trend"
source: "/space/nios90/1456866957"
pageId: "1456866957"
---
The **Trend** tab displays statistics of RPZ hits during the last 60 minutes for the Grid. You can use a stacked graph or a line graph to view the hits. Each of the RPZ policy is represented with a different color. This tab displays the following information:

- **Client Hits**: Total number of queries that triggered an RPZ policy. Note that this option is not displayed when you choose **Stacked** **Diagram**, but displayed only when you choose **Line** **Diagram**.
- **Passthru** Hits: Total number of queries that triggered a** Passthru RPZ** rule. For more information about passthru rules, see [*Configuring Rules for RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs).
- **Blocked Hits:** Total number of queries that triggered a **Block (No Data)** or **Block (No Suc hDomain)** RPZ rule. For more information about Managing Block (No Data) Rules or Managing Block (No Such Domain) Rules , see [*Configuring Rules for RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs).
- **Substitute Hits**: Total number of queries that triggered a **Substitute (Domain Name)** or **Substitute (Record)** RPZ rule. For more information, see [*Managing Substitute (Domain Name) Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs/managing-substitute-domain-name-rules) and [*Managing Substitute (Record) Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs/managing-substitute-record-rules).
- **Timestamp**: The graph displays a 24 hours time window. Note the following about this tab:
- The statistical data in DNS service will be reset when you stop and restart the DNS service or if you force an active DNS service to restart regardless of its state. This results in loss of prior data.
- Using this graph, you can view the timestamp of statistics collection.
