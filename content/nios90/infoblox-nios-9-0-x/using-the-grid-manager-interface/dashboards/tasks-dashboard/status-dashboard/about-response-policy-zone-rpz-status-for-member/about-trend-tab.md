---
title: "About Trend Tab"
source: "/space/nios90/1456867011"
pageId: "1456867011"
---
The **Trend** tab displays statistics of RPZ hits on the selected member during the last 60 minutes. You can use a stacked graph or a line graph to view the hits. DNS service generates RPZ statistics for the selected member. Each of the RPZ policy is represented with a different color. This tab displays the following information:

- **Client** **Hits:** Total number of queries that triggered an RPZ policy. Note that this option is not displayed when you choose **Stacked** **Diagram**, but displayed only when you choose **Line** **Diagram**.
- **Passthru Hits**: Total number of queries that triggered a **Passthru** RPZ rule. For more information about passthru rules, see [*Managing Passthru Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs/managing-passthru-rules).
- **Blocked Hits:** Total number of queries that triggered a **Block (No Data)** or **Block (No Such Domain)** RPZ rule. For more information, see [*Managing Block (No Data) Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs/managing-block-no-data-rules) or [*Managing Block (No Such Domain) Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs/managing-block-no-such-domain-rules) respectively.
- **Substituted Hits**: Total number of queries that triggered a **Substitute (Domain Name)** or **Substitute (Record)** RPZ rule. For more information, see [*Managing Substitute (Domain Name) Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs/managing-substitute-domain-name-rules) and [*Managing Substitute (Record) Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs/managing-substitute-record-rules).
- **Timestamp**: The graph displays a 24 hours time window.   
  Note the following about this tab:
- The statistical data in DNS service will be reset when you stop and restart the DNS service or if you force an active DNS service to restart regardless of its state. This results in loss of prior data.
- Using this graph, you can view the timestamp of statistics collection.
