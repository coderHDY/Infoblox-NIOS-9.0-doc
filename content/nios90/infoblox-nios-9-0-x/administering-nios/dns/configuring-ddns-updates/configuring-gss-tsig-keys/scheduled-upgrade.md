---
title: "Scheduled Upgrade"
source: "/space/nios90/1393560079"
pageId: "1393560079"
---
A scheduled upgrade with one or more keys in the keytab files that you have uploaded will operate the same as prior to upgrade. NIOS will parse and extract keys from the uploaded keytab file. NIOS automatically assigns these keys to the DNS member, DHCP member, Grid DHCP or Grid DNS to which the keytab file was uploaded before the upgrade. You can assign these keys to Grid members after the upgrade is complete.  
NIOS does not display an error message if the keys do not have an SPN with the DNS prefix, but it will record a warning message in the syslog.
