---
title: "Object State Change Traps"
source: "/space/nios90/1430094592"
pageId: "1430094592"
---
| **ibTrapDesc**    **OID** **3.1.1.1.2.11.0** | **ibTrapSeverity** | **Description/Cause** | **Recommended** **Actions** |
| --- | --- | --- | --- |
| **Service** **Shutdown** |
| Shutting down services due to database snapshot. | Major | The appliance is shutting down its services while synchronizing the database with the Grid Master. | No action is required. |
| **Network** **Interfaces** **Monitoring** |
| LAN1 port link is down. Please check the connection. | Major | The LAN1 port is up, but the link is down. | Check the LAN1 link connection. |
| LAN2 port link is down. Please check the connection. | Major | The LAN2 port is up, but the link is down. | Check the LAN2 link connection. |
| HA port link is down. Please check the connection. | Major | The HA port is up, but the link is down. | Check the HA link connection. |
| MGMT port link is down. Please check the connection. | Major | The MGMT port is enabled, but the link is down. | Check the MGMT link connection. |
| LAN1 port link is up. | Major | The LAN1 port link is up and running. | No action is required. |
| LAN2 port link is up. | Major | The LAN2 port link is up and running. | No action is required. |
| HA port link is up. | Major | The HA port link is up and running. | No action is required. |
| MGMT port link is up. | Major | The MGMT port link is up and running. | No action is required. |
| **HA** **State** **Change** **from** **Initial** **to** **Active** |
| The node has become ACTIVE. | Informational | A node in an HA pair becomes active. The HA pair starts up. | No action is required. |
| **HA** **State** **Change** **from** **Passive** **to** **Active** |  |  |  |
| The node has become ACTIVE. | Informational | The node changed from a passive to an active node. | No action is required. |
| **HA** **State** **Change** **to** **Active-Active** |
| The node is in an ACTIVE-ACTIVE state. | Informational | The node is in the active state. | No action is required. |
| **HA** **State** **Change** **from** **Initial** **to** **Passive** |
| The node has become PASSIVE. | Informational | A node in an HA pair becomes passive. The HA pair starts up, and the node is not a Grid Master candidate. | No action is required. |
| **Node** **Connected** **to** **Grid** |
| The Grid member is connected to the Grid master. | Informational | The Grid member joined the Grid, and it is not a Grid Master candidate. | No action is required. |
| **Node** **Disconnected** **from** **Grid** |
| The Grid member is not connected to the Grid master. | Informational | The Grid member lost its connection to the Grid Master. | No action is required. |
| **Replication** **State** **Monitoring** |
| HA replication is online. | Informational | The HA replication is online. | No action is required. |
| HA replication is offline. | Informational | The HA replication is offline. | No action is required. |
| **NTP** **is** **out** **of** **sync,** **monitored** **every** **30** **seconds** |
| The NTP service is out of synchronization. | Major | The Infoblox NTP server and the external NTP server are not synchronized. | Review the syslog file to identify the possible cause of this problem. |
| NTP Service is working. | Informational | The NTP service started working again. | No action is required. |
| **NTP** **service** **is** **synchronizing** **to** **local** **clock** |
| The NTP service is synchronizing to local clock. | Major | The Infoblox NTP server synchronizes its clients with its local clock. | No action is required. |
| **DHCP** **service** **state** **change** |
| DHCP Service is working. | Informational | The DHCP service started working again. | No action is required. |
| DHCP Service is in a warning state. | Informational | The DHCP service is in a warning state. | Review the syslog file |
| DHCP Service Failed | Informational | The DHCP service is in failed state. | Review the syslog file. |
| DHCP Service is inactive. | Informational | The DHCP service became inactive. | Check if an admin disabled the service. |
| **DNS** **service** **state** **change** |
| DNS Service is working. | Informational | The DNS service started working again. | No action is required. |
| DNS Service failed | Informational | The DNS service is in a failed state. | Review the syslog file. |
| DNS Service is inactive. | Informational | The DNS service became inactive. | Check if an admin disabled the service. |
| **NTP** **service** **state** **change** |
| The NTP service resumed synchronization. | Informational | The NTP service started working again. | No action is required. |
| NTP Service is inactive. | Informational | The NTP service became inactive. | Check if an admin disabled the service. |
| **TFTP** **service** **state** **change** |
| TFTP Service is working. | Informational | The TFTP service started working again. | No action is required. |
| TFTP Service is inactive. | Informational | The TFTP service became inactive. | Check if an admin disabled the service. |
| **FTP** **service** **state** **change** |
| FTP Service is working. | Informational | The FTP service started working again. | No action is required. |
| FTP Service is inactive. | Informational | The FTP service became inactive. | Check if an admin disabled the service. |
| **HTTP** **service** **state** **change** |
| HTTP File Dist Service is working. | Informational | The HTTP file distribution service started working again. | No action is required. |
| HTTP File Dist Service is inactive. | Informational | The HTTP file distribution service became inactive. | Check if an admin disabled the service. |
| **Captive** **Portal** **service** **state** **change** |
| Captive Portal Service is working. | Informational | The captive portal service started working again. | No action is required. |
| Captive Portal Service is inactive. | Informational | The captive portal service became inactive. | Check if an admin disabled the service. |
| **Discovery** **Collector** **service** **state** **change** |
| Discovery Collector Service is working. | Informational | The discovery collector service started working again. | No action is required. |
| Discovery Collector Service is inactive. | Informational | The discovery collector service became inactive. | Check if an admin disabled the service. |
| Discovery Collector Service is in warning state. | Informational | The discovery collector service is in a warning state. | Review the syslog file. |
| Discovery Collector Service has failed. | Informational | The discovery collector service has failed. | Review the syslog file. |
| **Discovery** **Collector** **service** **state** **change** |
| Discovery Consolidator Service is working. | Informational | The discovery consolidator service started working again. | No action is required. |
| Discovery Consolidator Service is inactive. | Informational | The discovery consolidator service became inactive. | Check if an admin disabled the service. |
| Discovery Consolidator Service is in warning state. | Informational | The discovery consolidator service is in a warning state. | Review the syslog file |
| Discovery Consolidator Service has failed. | Critical | The discovery consolidator service has failed. | Review the syslog file |
| **IF-MAP** **service** **state** **change** |
| IFMAP Service is inactive. | Informational | The IF-MAP service became inactive. | Check if an admin disabled the service. |
| IFMAP Service is working. | Informational | The IF-MAP service started working again. | No action is required. |
| **LDAP** **service** **state** **change** |
| LDAP service is inactive. | Informational | The LDAP service became inactive. | Check if an admin disabled the LDAP service. |
| All LDAP servers are available. | Informational | All LDAP servers are available. | No action is required. |
| At least one LDAP server is unavailable. | Major | At least one LDAP server is out of service. | - Check if an admin disabled the LDAP server. - Review the syslog file. |
| All LDAP servers are unavailable. | Informational | All LDAP servers are not available. | - Check if an admin disabled the LDAP server. - Review the syslog file. |
| **Certificate** **Authentication** **Service** **state** **change** |
| CAS service is working. | Informational | The certificate authentication service started working again. | No action is required. |
| CAS service is inactive. | Informational | The certificate authentication service became inactive. | Check if an admin disabled the service. |
| **OCSP** **responders** **state** **change** |
| All OCSP responders available. | Informational | The OCSP responders are available. | No action is required. |
| All OCSP responders are out of service. | Informational | The OCSP responders are out of service. | - Check if an admin disabled the service. - Review the syslog file. |
| OCSP service inactive. | Informational | The OCSP responders service became inactive. | - Check if an admin disabled the service. - Review the syslog file. |
| **Reporting** **service** **state** **change** |
| Reporting Service is working. | Informational | The Reporting service started working again. | No action is required. |
| Reporting Service failed. | Informational | The Reporting Service is in Failed state. | Review the syslog file. |
| Reporting Service is inactive. | Informational | The Reporting service became inactive. | Check if an admin disabled the service. |
| Reporting Service is in warning state. | Informational | The Reporting service is in warning state. | Review the audit log file. |
| **Threat** **Insight** **state** **change** |
| Threat Insight Service is working. | Informational | The Threat Insight service started working again. | No action is required. |
| Threat Insight Service is inactive. | Informational | The Threat Insight service became inactive. | Check if an admin disabled the service. |
| Threat Insight Service is failed. | Informational | The Threat Insight service has failed. | Review the audit log file. |
| Threat Insight Service is in warning state. | Informational | The Threat Insight service is in warning state. | Review the audit log file. |
| **RPZ** **refresh** **state** **change** |
| RPZ refresh is OK. | Informational | An RPZ refresh succeeded. The appliance sends this trap every time an RPZ zone transfer is successful. | No action is required. |
| **Cisco** **ISE** **service** **state** **change** |
| Cisco ISE server is OK. | Informational | The Cisco ISE service started working again. | No action is required. |
| Connection Error has occurred In Cisco ISE server. | Informational | There is a loss of connection between the NIOS appliance and Cisco ISE server. | - Check if an admin disabled the service. - Review the audit log file. |
| **Cloud** **API** **service** **state** **change** |
| Cloud API service is working. | Informational | The Cloud API service started working again. | No action is required. |
| Cloud API service is inactive. | Informational | The Cloud API service became inactive | - Check if an admin disabled the Cloud API service. - Review the audit log file. |
| Cloud API service has failed. | Critical | The Cloud API service has failed. | - Check if an admin disabled the Cloud API service. - Review the audit log file. |
| **DNS** **Integrity** **Check** **state** **change** |
| DNS Integrity Check is working. | Informational | The DNS Integrity Check started working again. | No action is required. |
| DNS Integrity Check failed. | Informational | The DNS Integrity Check has failed. | - Check if an admin disabled the service. - Review the audit log file. |
| DNS Integrity Check severity has changed. | Informational | The DNS Integrity Check has changed. | Review the syslog file. |
| **TAXII** **service** **state** **change** |
| TAXII service is working. | Informational | The TAXII service started working again. | No action is required. |
| TAXII Service is failed. | Informational | The TAXII service has failed. | - Check if an admin disabled the service. - Review the audit log file. |
| TAXII service is inactive. | Informational | The TAXII service became inactive. | - Check if an admin disabled the service. - Review the audit log file. |
| TAXII Service is in warning state. | Informational | The TAXII service is in warning state. | Review the audit log file. |
| **Outbound** **service** **state** **change** |
| The Outbound Service Manager stopped. | Informational | The Outbound service manager has stopped working. | - Check if an admin disabled the service. - Review the audit log file. |
| The Outbound Service Manager failed. | Major | The Outbound service manager has failed. | - Check if an admin disabled the service. - Review the audit log file. |
| The Outbound Service Manager started. | Informational | The Outbound service manager has started. | No action is required. |
| The Outbound worker failed. | Major | The Outbound worker has failed. | Review the audit log file. |
| **IPMI** **Device** **state** **change** |
| IPMI is used by some hardware monitors to test hardware health. The IPMI Device has not responded. Hardware monitors may show spurious failures. | Informational | The IPMI Device has not responded. | - Check if an admin disabled the IPMI interface. - Review the audit log file. |
| IPMI is used by some hardware monitors to test hardware health. Because the IPMI Device has not responded for a while, hardware monitor failures are likely to be spurious. | Informational | The IPMI Device has not responded. | - Check if an admin disabled the IPMI interface. - Review the audit log file. |
| IPMI is used by some hardware monitors to test hardware health. The IPMI Device is now available; subsequent hardware monitor failures are likely to be genuine. | Informational | The IPMI Device is now available | No action required. |
