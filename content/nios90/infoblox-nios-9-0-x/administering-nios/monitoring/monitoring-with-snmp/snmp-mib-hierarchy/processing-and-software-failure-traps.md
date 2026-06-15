---
title: "Processing and Software Failure Traps"
source: "/space/nios90/1430127369"
pageId: "1430127369"
---
The ibSubsystemName object is associated with certain traps of the Processing and Software Failure traps.  
Therefore, you cannot map all the traps of the Processing and Software Failure traps with the ibSubsystemName. If there is no value in the ibSubsystemName, then it belongs to the N/A category. For more information on the values for the ibSubsystemName, see the *ibSubsystemName Values* table.

| **Named** **Daemon** **Failure** |
| --- |
| A named daemon monitoring failure has occurred. | Critical | The named process failed. | Review the syslog file to identify the possible cause of this problem. |
| **DHCP** **Daemon** **Failure** |
| A DHCP daemon monitoring failure has occurred. | Critical | The dhcpd process failed. | Review the syslog file to identify the possible cause of this problem. |
| **SSH** **Daemon** **Failure** |
| An SSH daemon failure has occurred. | Major | The sshd process failed. | Review the syslog file to identify the possible cause of this problem. |
| **NTP** **Daemon** **Failure,** **monitored** **every** **10** **minutes** |
| An NTP daemon failure has occurred. | Major | The ntpd process failed. | Review the syslog file to identify the possible cause of this problem. |
| **Cluster** **Daemon** **Failure** |
| A grid daemon failure has occurred. | Critical | The clusterd process failed. | Review the syslog file to identify the possible cause of this problem. |
| **Apache** **Software** **httpd** **failure,** **monitored** **every** **2** **minutes** |
| An Apache software failure has occurred. | Critical | The request to monitor the Apache server failed. | Review the syslog file to identify the possible cause of this problem. |
| **Serial** **Console** **Failure** |
| An Infoblox serial console software failure has occurred. | Major | The Infoblox serial console failed. | Review the syslog file to identify the possible cause of this problem. |
| **Controld** **Software** **Failure** |
| A controld failure has occurred. | Critical | The controld process failed. | Review the syslog file to identify the possible cause of this problem. |
| **SNMP** **Sub-agent** **Failure** |
| An SNMP server failure has occurred. | Major | The one-subagent process failed. | Review the syslog file to identify the possible cause of this problem. |
| **TFTPD** **and** **FTPD** **Failure** |
| A TFTPD daemon failure has occurred. | Critical | The tftpd process failed. | Review the syslog file to identify the possible cause of this problem. |
| An FTPD daemon failure has occurred. | Critical | The ftpd process failed. | Review the syslog file to identify the possible cause of this problem. |
| **HTTP** **File** **Distribution,** **monitored** **at** **10** **second** **intervals** |
| An HTTP file distribution daemon failure has occurred. | Critical | The HTTP file distribution process failed. | Review the syslog file to identify the possible cause of this problem. |
| **DNS** **ONE** **quagga** **Processes** **(zebra** **&** **ospfd)** |
| An OSPF routing daemon failure has occurred. | Critical | Either the zebra process or the ospfd process failed. Both the zebra and ospfd process belongs to ospf subsystem. | Review the syslog file to identify the possible cause of this problem. |
| **Backup** **Failure** |
| Backup failed. | Minor | The backup failed.    One of the following could be the cause of the failure:  - The appliance could not access a backup directory. - The backup was interrupted by one of the following signals: SIGINT, SIGHUP, or SIGTERM. - Incorrect login or connection failure in an FTP backup. - The backup failed to create temporary files. | Review the syslog file to identify the possible cause of this problem. |
| **Database** **Backup** **Failure** |
| Database backup failed. | Not implemented | The db_dump process failed. | Review the syslog file to identify the possible cause of this problem. |
| **Backup** **Module** **Failure** |
| Module backup failed. | Not implemented | The backup of product- specific files failed. | Review the syslog file to identify the possible cause of this problem. |
| **Backup** **File** **Size** **Exceeded** |
| File size exceeded the quota. Backup failed. | Not implemented | The backup failed because the file size exceeded the limit of 5GB. | Limit the size of the backup file to less than 5GB. |
| Another backup is in progress. Backup will not be performed. | Not implemented | The backup failed because of an attempt to back up or merge files while another backup or restore was in progress. | Wait until the backup or restore is complete before starting another backup. |
| **Watchdog** **Process** **Monitoring** |
| WATCHDOG:    *&lt;registered* *client* *name&gt;* failed on    *&lt;server* *IP* *address&gt;* | Critical | The watchdog process detected a registered client failure on a specific server.    The *&lt;registered client* *name&gt;* could be one of the following:  - Clusterd _timeout - DB_Sentinel - Process_Manager - Clusterd_monitor - Disk_monitor | Review the syslog file to identify the possible cause of this problem. |
| **Microsoft** **Server** |
| Microsoft server    *&lt;hostname&gt;/&lt;IP* *address&gt;* has failed. | Major | The Microsoft server could not be reached. | Check that the Microsoft server is connected to the network and configured properly. |
| Microsoft server    *&lt;hostname&gt;/&lt;IP* *address&gt;* is OK. | Informational | The Microsoft server can be reached and is functioning properly. | No action is required. |
| **Microsoft** **DNS/DHCP** **Service** |
| Service connection to Microsoft DNS server    *&lt;hostname&gt;/&lt;IP* *address&gt;* has failed. | Major | The Microsoft DNS service is not responding. | Check that the DNS service is configured and running on the Microsoft server. |
| Service connection to Microsoft DHCP server    *&lt;hostname&gt;/&lt;IP* *address&gt;* has failed. | Major | The Microsoft DHCP service is not responding. | Check that the DHCP service is configured and running on the Microsoft server. |
| Service connection to Microsoft DNS server    *&lt;hostname&gt;/&lt;IP* *address&gt;* is OK. | Informational | The Microsoft DNS service is responding. | No action is required. |
| Service connection to Microsoft DHCP server    *&lt;hostname&gt;/&lt;IP* *address&gt;* is OK. | Informational | The Microsoft DHCP service is responding. | No action is required. |
| **NAC** **Authentication** **Server** **Group** |
| NAC Authentication server group is down | Major | None of the servers in the NAC authentication server group can be reached. | Review the syslog. |
| NAC Authentication server group is up | Informational | The NAC authentication server group is responding. | No action is required. |
| **GUI** **Login** |
| A GUI login failure has occurred | Major | An admin failed to log in to the GUI. | Check the credentials of the admin. |
| **Serial** **Console** **Login** |
| A Serial Console login failure has occurred | Major | An admin failed to log in through the serial console. | Check the credentials and permissions, and check that the serial console is enabled. |
| **Reboot** |
| The system is rebooting. | Informational | A system reboot command was sent. | No action is required. |
| **DHCP** **Lease** **Conflict** |
| DHCP address conflicts with an existing lease. | Major | The discovery process found a DHCP lease conflict. | In the IP Map or List panel, select a conflicting address, and then click **Resolve** **Conflict**. For more information about resolving DHCP lease conflicts, see [*Managing Discovered Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/managing-discovered-data). |
| **DHCP** **Fixed** **Address** **Conflict** |
| DHCP address conflicts with an existing fixed address. | Major | The discovery process found a fixed address conflict. | In the IP Map or List panel, select a conflicting address, and then click **Resolve** **Conflict**. For more information about resolving fixed address conflicts, see [*Managing Discovered Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/managing-discovered-data). |
| **DHCP** **Range** **Conflict** |
| DHCP address conflicts with an existing range. | Major | The discovery process found a conflict with an existing range. | In the IP Map or List panel, select a conflicting address, and then click **Resolve** **Conflict**. For more information about resolving DHCP range conflicts, see [*Managing Discovered Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/managing-discovered-data-280764086). |
| **DHCP** **Host** **Conflict** |
| DHCP address conflicts with an existing host address. | Major | The discovery process found a conflict with an existing host address. | In the IP Map or List panel, select a conflicting address, and then click **Resolve** **Conflict**. For more information about resolving host conflicts, see [*Managing Discovered Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/managing-discovered-data). |
| **DNS** **Health** **Check** **Monitor** |
| DNS Health Check query failed. | Major | DNS Health Check query has failed. | Review the syslog file to identify the possible cause of this problem. |
| DNS Health Check query has succeeded | Informational | DNS Health Check query has succeeded. | No action required. |
| **Syslog** **Daemon** **Failure** |
| Syslog daemon is not running. | Critical | Syslog process stopped. | Review the syslog file to identify the possible cause of this problem. |
| **BFD** **Daemon** **Failure** |
| An BFD daemon failure has occurred. | Major | BFD has failed to detect failure in the bidirectional path between two interfaces. | Review the syslog file to identify the possible cause of this problem. |
| **Process** **Stop/Start** |
| The system stopped and started a process. | Major | The system restarted a process. | Review the syslog file to identify the possible cause of this problem. |
| **Zone** **Transfer** **Failed** |
| A zone transfer failure has occurred. | Major | A zone transfer failed. | Review the syslog file to identify the possible cause of this problem. |
| **RPZ** **Refresh** **Failed** |
| RPZ refresh failure has occurred. | Critical | An RPZ refresh has failed. The appliance sends this trap only when RPZ refresh from all the configured primary servers fail. | Review the syslog file to identify the possible cause of this problem. |
| **Unbound** **Software** **Failed** |
| A unbound daemon monitoring failure has occurred. | Major | Unbound software failure has occurred. | Review the syslog file to identify the possible cause of this problem. |
| **Threat** **Insight** **Service** **Failed** |
| Threat Insight Auto Download has failed. | Major | Auto download for Threat Insight has failed. | Review the syslog file to identify the possible cause of this problem. |
| **Outbound** **Service** **Failed** |
| The Outbound worker failed. | Major | The Outbound service failure has occurred. | Review the syslog file to identify the possible cause of this problem. |
| **Clear** |
| SNMP Trap is cleared. Serial Console | N/A | The SNMP Trap for Serial Console is cleared. | No action is required. |
| SNMP Trap is cleared. ControlD failure | N/A | The SNMP Trap for ControlD failure is cleared. | No action is required. |
| SNMP Trap is cleared. GUI Login | N/A | The SNMP Trap for GUI Login is cleared. | No action is required. |
| SNMP Trap is cleared. Serial Console Login | N/A | The SNMP Trap for Serial Console Login is cleared. | No action is required. |
| SNMP Trap is cleared. SSHD failure | N/A | The SNMP Trap for SSHD failure is cleared. | No action is required. |
| SNMP Trap is cleared. LDAP servers | N/A | The SNMP Trap for LDAP server is cleared. | No action is required. |
| SNMP Trap is cleared. OCSP Responders | N/A | The SNMP Trap for OCSP Responders is cleared. | No action is required. |
| SNMP Trap is cleared. OSPF | N/A | The SNMP Trap for OSPF is cleared. | No action is required. |
| SNMP Trap is cleared. OSPF6 | N/A | The SNMP Trap for OSPF6 is cleared. | No action is required. |
| SNMP Trap is cleared. BGP | N/A | The SNMP Trap for BGP is cleared. | No action is required. |
| SNMP Trap is cleared. HSM | N/A | The SNMP Trap for HSM is cleared. | No action is required. |
| SNMP Trap is cleared. HTTP | N/A | The SNMP Trap for HTTP is cleared. | No action is required. |
| SNMP Trap is cleared. Cluster | N/A | The SNMP Trap for Cluster is cleared. | No action is required. |
| SNMP Trap is cleared. DuplicateIP | N/A | The SNMP Trap for Duplicate IP is cleared. | No action is required. |
| **Restart** |
| The system is being restarted. | Informational | A system restart command was sent. | No action is required. |
| **DNS** **Integrity** **Check** |
| Cannot perform DNS Integrity Check because the appliance is unable to connect to the external DNS server. There are list of nameservers failure:    *&lt;IP* *addresses&gt;* | N/A | The DNS integrity check cannot be performed because the appliance is unable to connect to the external DNS server. | No action is required. |
