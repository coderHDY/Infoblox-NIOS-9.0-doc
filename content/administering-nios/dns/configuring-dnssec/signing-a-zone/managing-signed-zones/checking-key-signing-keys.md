---
title: "Checking Key-Signing Keys"
source: "/space/nios90/1455063191"
pageId: "1455063191"
---
To check which key-signing keys are overdue for a rollover or are due to roll over within a week:

1. From the **Data** **Management** tab, select the **DNS** tab.
2. Expand the Toolbar and click **DNSSEC** -> **Check** **KSK** **Rollover** **Due**.
3. The *KSK* *Rollover* *Due* dialog box lists the key-signing keys that are due to rollover. It includes the domain name of the zone, DNS view (if there are multiple DNS views), and the number of days until the rollover.
4. You can click the Schedule icon at the top of the wizard to schedule a KSK rollover for one or more zones at a given date and time. In the *Schedule* *Change* panel, either select **Now** or select **Later** and enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
5. Click **Close**.
