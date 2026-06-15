---
title: "About FireEye Integrated RPZs"
source: "/space/nios90/280662094"
pageId: "280662094"
---
Infoblox DNS Firewall provides a mechanism to further protect your network from malware and APTs (Advanced Persistent Threats) through the integration of FireEye appliances. When your NIOS appliance is properly integrated with a FireEye appliance, it receives periodic alerts and APTs from the FireEye appliance when it identifies such threats. Based on your configuration, the NIOS appliance translates these alerts into RPZ rules that not only further protect your network from malicious attacks, but also aid in identifying clients that have been compromised.

As illustrated in the below figure, after installing the required RPZ and Security Ecosystem licenses on the NIOS appliance, you can configure a FireEye integrated RPZ in which you map RPZ rules to FireEye alert types. While creating the FireEye RPZ, the appliance generates a URL to which the FireEye appliance sends alerts. Ensure that you enter this URL when configuring the FireEye appliance. The NIOS appliance also creates the **fireeye-group** admin group after you define the first FireEye RPZ. You can add multiple admin users to this admin group. Note that users in the **fireeye-group** can only send alerts to the NIOS appliance; they cannot access the Infoblox GUI, CLI, API and RESTful API. They also do not have permissions to perform other tasks on the appliance. Ensure that you record the usernames and passwords for all user accounts so you can enter them correctly when you configure the FireEye appliance. You can map a single or multiple FireEye appliances to a NIOS appliance where multiple users or zones exist.

*FireEye* *Integrated* *RPZ*

*[drawio]*

To configure a FireEye integrated RPZ, complete the following:

1. Create a new FireEye integrated RPZ, as described in Configuring FireEye RPZs below.
2. Create FireEye admin users, as described in For FireEye Integrated RPZs below.
3. Add URL and user credentials on the FireEye appliance, as described in Configuring the FireEye appliance below[.](https://infoblox-docs.atlassian.net/wiki/pages/resumedraft.action?draftId=26773723#AboutFireEyeIntegratedRPZs-bookmark3306)
4. When a malware or threat is detected, the FireEye appliance sends an alert message to the NIOS appliance, which is stored in the syslog. For more information, see Handling Alerts from the FireEye appliance below.

In this section:

*[children]*
