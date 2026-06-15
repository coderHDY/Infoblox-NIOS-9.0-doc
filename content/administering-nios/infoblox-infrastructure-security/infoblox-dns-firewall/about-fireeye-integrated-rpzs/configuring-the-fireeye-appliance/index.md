---
title: "Configuring the FireEye appliance"
source: "/space/nios90/1406140454"
pageId: "1406140454"
---
You must configure the FireEye appliance to send alerts to the NIOS appliance. Ensure that the following are complete before you configure the FireEye appliance:

1. Install required license on the NIOS appliance. For more information about license, see [*License Requirements and Admin Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/420544897).
2. Create a new FireEye RPZ zone.
3. Create FireEye admin users. For more information, see [*For FireEye Integrated RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/420544897).
4. Get the URL from the NIOS appliance and record it. You need this to configure the FireEye appliance. For more information about the Server URL, see Configuring FireEye RPZs above. If you have already configured a FireEye integrated RPZ, then you can retrieve the URL through the **FireEye** tab of the corresponding FireEye RPZ zone. For more information about managing and retrieving the URL, see [*Modifying RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402532).
5. Record the usernames and passwords on the NIOS appliance. You must use these credentials when configuring FireEye alerts to enable the alerts to be received by NIOS. For more information, see Configuring the FireEye appliance to send alerts to NIOS below.
