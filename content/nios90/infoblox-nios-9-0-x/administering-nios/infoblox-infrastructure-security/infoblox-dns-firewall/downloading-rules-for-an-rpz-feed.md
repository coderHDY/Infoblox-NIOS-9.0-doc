---
title: "Downloading Rules for an RPZ Feed"
source: "/space/nios90/280269855"
pageId: "280269855"
---
You can perform a zone transfer to transfer the rules from an external primary name server to the RPZ feed. You cannot modify these rules, but you can override the entire ruleset or an individual rule. However, if you import a zone to a local zone, you can edit the rules within a local zone. The feed zone supports NSIP and NSDNAME rules; however local RPZs do not support these rules. To download rules from an external primary name server:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab, and then click the corresponding *RPZ* *Feed*.
2. In the **Export** dialog box, complete the following:
   
   - **Separator**: Select the separator used in the data file. The default value is **Comma**.
   - Click **Export**.

All the rules are transferred. You can download rules only if the lead secondary has completed at least one zone transfer from the external primary. You can either open the data file or save it to your computer. The rules are displayed for the selected RPZ feed in the *Rule* wizard.  
After you have downloaded rules from an RPZ feed, you can test RPZ feed policies, as described in *[Testing RPZ Feed Rules](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/testing-rpz-feed-rules)*.
