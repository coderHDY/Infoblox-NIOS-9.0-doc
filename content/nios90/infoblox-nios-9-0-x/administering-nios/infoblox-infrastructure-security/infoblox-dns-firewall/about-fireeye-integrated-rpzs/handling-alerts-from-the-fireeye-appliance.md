---
title: "Handling Alerts from the FireEye appliance"
source: "/space/nios90/1406042153"
pageId: "1406042153"
---
The NIOS appliance processes each alert that it receives from the FireEye appliance. The alert contains the malware URL along with a valid FQDN. NIOS appliance can only map an alert to a RPZ rule if the FQDN is present. Once the alert is processed and properly mapped to an RPZ rule, it remains in the database until you delete it manually. When the RPZ rule is different from the existing rules, the new RPZ rule gains precedence over the existing RPZ rule in the FireEye integrated RPZ. Note that you cannot retrieve alerts that are ignored. You can get more information about the alerts, which are sent by the FireEye appliance, from the syslog. An alert will not be processed and will be ignored:

- when there are changes to the URL or if the alert does not have the malware URL or FQDN in them.
- if the zone is not found.
- if the alert is sent without any username in it or if the username does not belong to the fireeye-group.
- if a FireEye admin user is deleted. NIOS will neither authenticate the deleted user credentials nor process any future alerts with deleted user credentials.
- if the search mapping fields contain IP addresses other than FQDNs.
- if alerts contain domain names in an IPv4 or IPv6 address format.
