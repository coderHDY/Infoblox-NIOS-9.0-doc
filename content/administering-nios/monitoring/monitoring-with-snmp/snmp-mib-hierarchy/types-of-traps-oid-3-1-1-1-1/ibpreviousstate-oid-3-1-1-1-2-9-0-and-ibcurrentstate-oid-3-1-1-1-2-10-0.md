---
title: "ibPreviousState (OID 3.1.1.1.2.9.0) and ibCurrentState (OID 3.1.1.1.2.10.0)"
source: "/space/nios90/1430127541"
pageId: "1430127541"
---
The ibPreviousState object indicates the state of the appliance before the event triggered the trap. The ibCurrentState object indicates the current state of the appliance. The following table shows the message and description for each state:

*ibPreviousState* *and* *ibCurrentState* *Values*

| **Value** | **Description** | **Definition** |
| --- | --- | --- |
| 1 | ha-active | The HA pair is in ACTIVE state. |
| 2 | ha-passive | The HA pair is in PASSIVE state. |
| 3 | ha-initial | The HA pair is in INITIAL state. |
| 4 | Grid-connected | The Grid member is connected to the Grid Master. |
| 5 | Grid-disconnected | The Grid member is not connected to the Grid Master. |
| 12 | service-down | The service is down. |
| 13 | ha-replication-online | The HA pair replication is online. |
| 14 | ha-replication-offline | The HA pair replication is offline. |
| 15 | ntp-syn-up | The NTP server is synchronizing. |
| 16 | ntp-syn-down | The NTP server is out of synchronization. |
| 17 | ms-server-up | Microsoft server is up. |
| 18 | ms-server-down | Microsoft server is down. |
| 19 | ms-service-up | Microsoft service connection is active. |
| 20 | ms-service-down | Microsoft service connection is inactive. |
| 21 | nac-server-group-down | NAC Authentication server group is down. |
| 22 | nac-server-group-up | NAC Authentication server group is up. |
| 23 | mgm-service-up | MGM service is active. |
| 24 | mgm-service-down | MGM service is inactive. |
| 25 | ha-active-active | HA Pair is in Dual Active state. |
| 26 | ftp-service-working | FTP service is working. |
| 27 | ftp-service-failed | FTP service failed. |
| 28 | ftp-service-inactive | FTP service is inactive. |
| 29 | tftp-service-working | TFTP service is working. |
| 30 | tftp-service-failed | TFTP service failed. |
| 31 | tftp-service-inactive | TFTP service is inactive. |
| 32 | dns-service-working | DNS service is working. |
| 33 | dns-service-failed | DNS service failed. Review the syslog file. |
| 34 | dns-service-inactive | DNS service is inactive. Check if an administrator disabled the service. |
| 35 | ntp-service-working | NTP service is working. |
| 36 | ntp-service-failed | NTP service failed. |
| 37 | ntp-service-inactive | NTP service is inactive. |
| 38 | http-file-dist-service-working | HTTP File Dist service is working. |
| 39 | http-file-dist-service-failed | HTTP File Dist service failed. |
| 40 | http-file-dist-service-inactive | HTTP File Dist service is inactive. |
| 45 | dhcp-service-working | DHCP service is working. No action required. |
| 46 | dhcp-service-warning | DHCP service is in warning state. Review the syslog file. |
| 47 | dhcp-service-failed | DHCP service failed. Review the syslog file. |
| 48 | dhcp-service-inactive | DHCP service is inactive. Check if an administrator disabled the service. |
| 49 | captive-portal-service-working | Captive portal service is working. |
| 50 | captive-portal-service-failed | Captive portal service failed. |
| 51 | captive-portal-service-inactive | Captive portal service inactive. |
| 52 | ifmap-service-working | IF-MAP service is working. |
| 53 | ifmap-service-failed | IF-MAP service failed. |
| 54 | ifmap-service-inactive | IF-MAP service inactive. |
| 56 | hsm-group-down | HSM operation failed. |
| 57 | hsm-group-up | HSM operation succeeded. |
| 59 | reporting-service-working | Reporting service is working. |
| 60 | reporting-service-failed | Reporting service failed. |
| 61 | reporting-service-inactive | Reporting service inactive. |
| 62 | dns-cache-acceleration-working | DNS cache acceleration is working. |
| 63 | dns-cache-acceleration-failed | DNS cache acceleration failed. |
| 64 | dns-cache-acceleration-inactive | DNS cache acceleration is inactive. |
| 65 | ocsp-responders-ok | All OCSP responders are available. |
| 66 | ocsp-responder-failed | At least one OCSP responder has become unavailable. |
| 67 | ocsp-responders-unavailable | All OCSP responders are out of service. |
| 68 | cas-inactive | Certificate authentication service is inactive. |
| 69 | subgrid-attached | In a Multi-Grid configuration, sub Grid is attached to the Master Grid. |
| 70 | subgrid-detached | In a Multi-Grid configuration, sub Grid is detached from the Master Grid. |
| 71 | snapshot-disabled | In a Multi-Grid configuration, the snapshot of the Grid's current state is disabled. |
| 72 | snapshot-enabled | In a Multi-Grid configuration, the snapshot of the Grid's current state is enabled. |
| 73 | lb-device-up | Load balancer device is working. |
| 74 | lb-device-down | Load balancer device is down. |
| 76 | ldap-servers-ok | All LDAP servers are available. |
| 77 | ldap-server-failure | At least one LDAP server is unavailable. |
| 78 | ldap-servers-unavailable | All LDAP servers are unavailable. |
| 79 | ldap-service-inactive | LDAP service is inactive. |
| 80 | sgm-state-online | SGM is online. |
| 81 | sgm-state-offline | SGM is offline. |
| 82 | discovery-consolidator-service-working | Service on discovery the consolidator for Network Insight is working. |
| 83 | discovery-consolidator-service-warning | Service on discovery the consolidator for Network Insight is in warning state. |
| 84 | discovery-consolidator-service-failed | Service on discovery the consolidator for Network Insight failed. |
| 85 | discovery-consolidator-service-inactive | Service on discovery the consolidator for Network Insight is inactive. |
| 86 | discovery-collector-service-working | Service on discovery probes for Network Insight is working. |
| 87 | discovery-collector-service-warning | Service on discovery probes for Network Insight is in warning state. |
| 88 | discovery-collector-service-failed | Service on discovery probes for Network Insight failed. |
| 89 | discovery-collector-service-inactive | Service on discovery probes for Network Insight is inactive. |
| 90 | threat-protection-service-working | DNS Infrastructure Protection service for Infoblox DNS Protection is working. |
| 91 | threat-protection-service-warning | DNS Infrastructure Protection service for Infoblox DNS Protection is in warning state |
| 92 | threat-protection-service-failed | DNS Infrastructure Protection service for Infoblox DNS Protection failed. |
| 93 | threat-protection-service inactive | DNS Infrastructure Protection service for Infoblox DNS Protection is inactive. |
| 94 | mgm-external-storage-disabled | MGM external storage is disabled. |
| 95 | dns-integrity-check-failed | DNS Integrity check for authoritative zones failed. |
| 96 | dns-integrity-check-working | DNS Integrity check for authoritative zones is working. |
| 97 | dns-integrity-check-severity-indetermined | DNS Integrity check severity is None. |
| 98 | dns-integrity-check-severity-normal | DNS Integrity check severity is NORMAL. |
| 99 | dns-integrity-check-severity-informational | DNS Integrity check severity is INFORMATIONAL. |
| 100 | dns-integrity-check-severity-warning | DNS Integrity check severity is WARNING. |
| 101 | dns-integrity-check-severity-severe | DNS Integrity check severity is SEVERE. |
| 102 | dns-integrity-check-severity-critical | DNS Integrity check severity is CRITICAL. |
| 103 | cloud-api-service-working | Cloud API service is working. |
| 104 | cloud-api-service-failed | Cloud API service failed. |
| 105 | cloud-api-service-inactive | Could API service is inactive. |
| 106 | dns-service-dtc-failed | DNS sub-feature DNS Traffic Control failed. |
| 107 | raid-status-is-unavailable | RAID hardware status is unavailable. |
| 108 | raid-status-is-available | RAID hardware status is available again. |
| 109 | ipmi-device-warning | IPMI device is not available. |
| 110 | ipmi-device-unavailable | IPMI device repeatedly is not available. |
| 111 | ipmi-device-available | IPMI device is available again. |
| 112 | rpz-refresh-working | RPZ refresh is working. |
| 113 | rpz-refresh-failed | RPZ refresh failed. |
| 114 | rpz-refresh-unknown | RPZ refresh unknown. |
| 115 | dns-attack-active | DNS attack is active. |
| 116 | dns-attack-inactive | DNS attack is inactive. |
| 117 | high-rpz-hit-rate | RPZ hit rate exceeds the normal value. |
| 118 | normal-rpz-hit-rate | RPZ hit rate has returned to normal value. |
| 119 | taxii-working | TAXII server is working. |
| 120 | taxii-warning | TAXII server is warning. |
| 121 | taxii-failed | TAXII server is failed. |
| 122 | taxii-inactive | TAXII server is inactive. |
| 123 | cisco-ise-server-up | Cisco ISE server is connected. |
| 124 | cisco-ise-server-down | Cisco ISE server is not connected. |
| 125 | threat-insight-service-inactive | Threat Insight service is inactive. |
| 126 | threat-insight-service-working | Threat Insight service is working. |
| 127 | threat-insight-service-warning | Threat Insight service is in warning state. |
| 128 | threat-insight-service-failed | Threat Insight Service is failed. |
| 129 | outbound-service-manager-started | OUTBOUND Service Manager is working |
| 130 | outbound-service-manager-failed | OUTBOUND Service Manager is failed |
| 131 | outbound-service-manager-stopped | OUTBOUND Service Manager is inactive |
| 133 | imc-servers-ok | Subscriber Collection Service is working. |
| 134 | imc-server-failure | Subscriber Collection Service failed. |
| 135 | imc-servers-unavailable | All NAS gateways are unavailable. |
| 136 | imc-service-inactive | Subscriber Collection Service is inactive. |
| 137 | imc-zvelo-service-unavailable | Initial category information data is downloading. |
| 138 | imc-server-initializing | Initial Subscriber Collection service interim interval. |
| 139 | dns-service-working-atc-fwd-down | The DNS service is working, but ATC forwarding is down. |
| 140 | dfp-service-working | NIOS/DFP Service is running. Cloud/DFP is healthy. |
| 141 | dfp-service-failed | NIOS/DFP Service has failed. Cloud/DFP is unhealthy. |
| 142 | dfp-service-inactive | NIOS/DFP Service is not running. Cloud/DFP is not running. |
| 143 | dfp-service-stopped  dfp-service-starting   | NIOS/DFP Service is stopped by user. Cloud/DFP is healthy.  NIOS/DFP Service is stopped by user. Cloud/DFP is unhealthy.  NIOS/DFP Service is starting. Cloud/DFP is healthy. |
| 144 | dfp-service-init | NIOS/DFP Service is initializing. Cloud/DFP is healthy.  NIOS/DFP Service is initializing. Cloud/DFP is unhealthy. |
| 146 | dot-doh-support-inactive | DOT DOH support is inactive |
| 147 | imc-bwl-support-inactive | IMC DCA BWlist support is inactive |
| 148 | imc-bwl-reboot-required | IMC DCA BWlist reboot required |
| 150 | dot-doh-reboot-required | DOT/DOH is enabled from the GUI; a manual reboot is required by the user. |
| 151 | dot-doh-service-working | DOT/DOH service is working. |
| 152 | dot-doh-service-inactive | DOT/DOH service is disabled. |
| 160 | imc-bwl-support-inactive | The DCA BW list is disabled. |
| 161 | imc-bwl-reboot-required | A manual reboot is required after changing the IMC DCA BW configuration. |
| 162 | imc-bwl-working | The DCA BW list is working |
| 163 | imc-zvelo-database-update-failed | Imc-zvelo-db-upd-failed |
| 164 | imc-zvelo-database-expired | Imc-zvelo-db-expired |
| 165 | imc-zvelo-snmp-clear-trap | Imc-zvelo-snmp-clear-trap |
| 166 | cds-working | Cloud DNS Sync is working |
| 167 | cds-failed | Cloud DNS Sync is failed |
| 168 | cds-initializing | Cloud DNS Sync is initializing |
| 169 | cds-inactive | Cloud DNS Sync is disabled |
| 172 | imc-grpc-server-healthy | IMC gRPC Server is healthy |
| 173 | imc-grpc-server-failed | IMC gRPC Server is failed |
| 174 | imc-grpc-server-inactive | IMC gRPC Server is inactive |
| 175 | fast-path-core-working | fast path cores working |
| 176 | fast-path-core-stuck | fast path cores stuck |
| 177 | query-logging-response-logging-enabled | Query logging or response logging is enabled |
| 178 | query-logging-response-logging-disabled | Query logging or response logging is disabled |
| 179 | dfp-detection-mode-enabled-healthy | DFP Service is running in detection mode, Cloud/DFP is healthy. |
| 180 | dfp-detection-mode-enabled-unhealthy | DFP Service is running in detection mode, Cloud/DFP is unhealthy. |

The Grid member running Subscriber Collection Service has a default state of 136 (imc-service-inactive). When Subscriber Collection Service is enabled, it goes to the 138 (imc-server-initializing) state. That is, the service will be enabled but not fully populated until the interim interval expires. Once the interim interval expires, it transitions to the 133 (imc-servers-ok) state unless parental control is enabled. If parental control is enabled, the state changes to 137 (imc-zvelo-service-unavailable) until the category data is downloaded. After this it goes to state 133 (imc-servers-ok). If the collector service is not running, it transitions to state 134 (imc-server-failure).

Trap 136 implies that subscriber collection is not active. Trap 134 implies that the collector is not running. If the monitor is disabled , then trap 136 (imc-service-inactive) is triggered.

> **warning**
>
> **Note**
> 
> - When downloading the category data, it is around 2.8 GB when compressed and around 6 GB when uncompressed. This data size remains unchanged even for incremental downloads. Ensure that the proxy settings are modified accordingly, before the download.
> - The data from the earlier service provider is deleted after the upgrade and the categorization will not work until the categorization DB is downloaded.
