---
title: "Secure Syslog Transport"
source: "/space/nios90/280758240"
pageId: "280758240"
---
The TOE provides the secure syslog transport feature using the TLS protocol. This allows secure transmission of messages between the syslog client, i.e. your NIOS appliance, and an external syslog server. You must use this feature to be Common Criteria compliant.  
To ensure secure syslog transport, you add a trusted CA certificate of the server to your NIOS appliance. The certificate is then used to establish a secure connection to the server before transmitting data. For more information, see [*Specifying Syslog Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server/specifying-syslog-servers).
