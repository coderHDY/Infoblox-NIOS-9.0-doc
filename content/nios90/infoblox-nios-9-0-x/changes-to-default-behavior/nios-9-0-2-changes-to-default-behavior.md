---
title: "NIOS 9.0.2 - Changes to Default Behavior"
source: "/space/nios90/1323925694"
pageId: "1323925694"
---
- There is a change in behavior in the ADP ruleset for type64/65 rules. They have been changed from the default value of DROP to the value of PASS. However, note the following behavior:
  
  - On the upgrade of the node running ADP to 9.0.2 and later, these rules continue to DROP type64/65 queries because the setting of these rules in the earlier releases is inherited in the new ruleset that gets downloaded or uploaded. In this case, you must manually change the action to PASS to allow DNS type 64/65 queries. If the rules were manually changed to PASS in the old ruleset, then PASS action is inherited in the new ruleset and the queries are allowed.
  - Note: If you configure a new node in NIOS 9.0.2 or a later release and then download or upload the ADP ruleset, the type64/65 rules will be PASS by default. Because of this, you will see changes in the DNS query statistics.
- When you upgrade from NIOS 8.6.3 to 9.0.2, an additional product restart occurs to support Trinzic X6 Series appliances post upgrade. This holds good only when you have installed a hotfix to support Trinzic X6 licenses on an 8.6.3 version.
- If you upload a certificate to a NIOS 9.0.2 or later Grid, the checks are performed in compliance with RFC-5280. Therefore, the upload of invalid certificates will fail and the following error message is displayed: “Certificate violates RFC 5280. See the log for details. This strict check may be disabled.”
- If you close the CP license banner message that is displayed when you first log in to NIOS, the banner will be permanently disabled.
