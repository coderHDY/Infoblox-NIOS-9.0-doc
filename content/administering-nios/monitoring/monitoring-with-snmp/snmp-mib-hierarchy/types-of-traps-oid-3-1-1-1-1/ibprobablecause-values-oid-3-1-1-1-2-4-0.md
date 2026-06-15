---
title: "ibProbableCause Values (OID 3.1.1.1.2.4.0)"
source: "/space/nios90/1430160208"
pageId: "1430160208"
---
The following table lists the values that are associated with the object ibProbableCause (OID 3.1.1.1.2.4.0). These values provide information about the events such as hardware, software for process failures, that trigger SNMP traps.



*ibProbableCause* *Values*

|   Value | OID 3.1.1.1.2.4.0    ibProbableCause |   Equipment, Software, or Process Failure Traps |
| --- | --- | --- |
| 0 | ibClear | SNMP Trap is cleared. |
| 1 | ibUnknown | An unknown failure has occurred. |
| 2 | ibPrimaryDiskFailure | A primary drive failure has occurred. |
| 3 | ibFanFailure-old | Unused. |
| 4 | ibPowerSupplyFailure | A power supply failure has occurred. |
| 5 | ibDBFailure | A database daemon monitoring failure has occurred. |
| 6 | ibApacheSoftwareFailure | An apache software failure has occurred. |
| 7 | ibSerialConsoleFailure | An Infoblox serial console software failure has occurred. |
| 11 | ibControldSoftwareFailure | A controld failure has occurred. |
| 12 | ibUpgradeFailure | A system upgrade failure has occurred. |
| 13 | ibSNMPDFailure | SNMP Server failure has occurred. |
| 15 | ibSSHDSoftwareFailure | An SSH daemon failure has occurred. |
| 16 | ibNTPDSoftwareFailure | An NTP daemon failure has occurred. |
| 17 | ibClusterdSoftwareFailure | A cluster daemon failure has occurred. |
| 19 | ibDHCPdSoftwareFailure | A DHCP daemon monitoring failure has occurred. |
| 20 | ibNamedSoftwareFailure | A named daemon monitoring failure has occurred. |
| 21 | ibAuthServerGroupDown | NAC Authentication server group is down. |
| 22 | ibAuthServerGroupUp | NAC Authentication server group is up. |
| 24 | ibNTLMSoftwareFailure | An NTLM monitoring failure has occurred. |
| 25 | ibNetBIOSDaemonFailure | A NetBIOS daemon monitoring failure has occurred. |
| 26 | ibWindowBindDaemonFailure | An NT domain service monitoring failure has occurred. |
| 27 | ibTFTPDSoftwareFailure | A TFTPD daemon failure has occurred. |
| 28 | ibUNUSED28 | Unused. |
| 29 | ibBackupSoftwareFailure | Backup failed. |
| 30 | ibBackupDatabaseSoftwareFailure | Database backup failed. |
| 31 | ibBackupModuleSoftwareFailure | Module backup failed. |
| 32 | ibBackupSizeSoftwareFailure | File size exceeded the quota. Backup failed. |
| 33 | ibBackupLockSoftwareFailure | Another backup is in progress. Backup will not be performed. |
| 34 | ibHTTPFileDistSoftwareFailure | An HTTP file distribution daemon failure has occurred. |
| 35 | ibOSPFSoftwareFailure | An OSPF routing daemon failure has occurred. |
| 36 | ibAuthDHCPNamedSoftwareFailure | An auth named server failure has occurred. |
| 37 | ibFan1Failure | Fan 1 failure has occurred. |
| 38 | ibFan2Failure | Fan 2 failure has occurred. |
| 39 | ibFan3Failure | Fan 3 failure has occurred. |
| 40 | ibFan1OK | Fan 1 is OK. |
| 41 | ibFan2OK | Fan 2 is OK. |
| 42 | ibFan3OK | Fan 3 is OK. |
| 44 | ibFTPDSoftwareFailure | An FTPD daemon failure has occurred. |
| 46 | ibPowerSupplyOK | The power supply is OK. |
| 47 | ibWebUISoftwareFailure | A WebUI software failure has occurred. |
| 48 | ibUNUSED48 | Unused. |
| 49 | ibADAgentSyncFailure | An AD agent client synchronizing domain data failure has occurred. |
| 50 | ibIFMAPSoftwareFailure | An IF-MAP server failure has occurred. |
| 51 | ibCaptivePortalSoftwareFailure | A Captive Portal service failure has occurred. |
| 52 | ibDuplicateIPAddressFailure | A Duplicate IP Address has been detected. |
| 53 | ibBGPSoftwareFailure | An BGP routing daemon failure has occurred. |
| 54 | ibRevokedLicense | A license has been revoked. |
| 58 | ibGUILoginFailure | An admin failed to log in to the GUI. |
| 59 | ibSerialConsoleLoginFailure | An admin failed to log in to the serial console. |
| 60 | ibSystemReboot | A system reboot was initiated. |
| 61 | ibSystemRestart | A system restart was initiated. |
| 62 | ibZoneTransferFailure | A zone transfer failure occurred. |
| 63 | ibDHCPLeaseConflict | DHCP address conflicts with an existing lease. |
| 64 | ibDHCPAddressConflict | DHCP address conflicts with an existing fixed address. |
| 65 | ibDHCPRangeConflict | DHCP address conflicts with an existing range. |
| 66 | ibDHCPHostConflict | DHCP address conflicts with an existing host. |
| 67 | ibSyslogFailure | A syslog daemon failure occurred. |
| 68 | ibPowerSupply1Failure | Power supply 1 failure has occurred. |
| 69 | ibPowerSupply2Failure | Power supply 2 failure has occurred. |
| 70 | ibPowerSupply1OK | Power supply 1 is OK. |
| 71 | ibPowerSupply2OK | Power supply 2 is OK. |
| 72 | ibReportingTaskSwFailure | A reporting task monitoring failure has occurred. |
| 73 | ibReportingDbBackupFailure | A reporting db backup/restore operation failure has occurred. |
| 74 | ibFan4Failure | Fan 4 failure has occurred. |
| 75 | ibFan5Failure | Fan 5 failure has occurred. |
| 76 | ibFan6Failure | Fan 6 failure has occurred. |
| 77 | ibFan7Failure | Fan 7 failure has occurred. |
| 78 | ibFan8Failure | Fan 8 failure has occurred. |
| 79 | ibFan4OK | Fan 4 is OK. |
| 80 | ibFan5OK | Fan 5 is OK. |
| 81 | ibFan6OK | Fan 6 is OK. |
| 82 | ibFan7OK | Fan 7 is OK. |
| 83 | ibFan8OK | Fan 8 is OK. |
| 84 | ibOSPF6SoftwareFailure | An OSPF6 routing daemon failure has occurred. |
| 85 | ibOCSPResponderFailure | OCSP responder failed. |
| 86 | ibReportingAlertTriggered | A reporting alert is triggered. |
| 87 | ibCapturedQueriesUploadFailure | Upload for captured DNS queries failed. |
| 88 | ibLDAPServerFailure | The LDAP server failed. |
| 89 | ibRIRWIPRegistrationFailure | RIR SWIP registration failed. |
| 90 | ibPowerSupply1Removed | Power supply 1 has been removed. |
| 91 | ibPowerSupply2Removed | Power supply 2 has been removed. |
| 92 | ibIPMISensorErrorDetected | Error detected on the sensor for the IPMI port (used for LOM) |
| 93 | ibDiscoveryConsolidatorTaskSwFailure | Discovery service on the Consolidator failed. |
| 94 | ibDiscoveryCollectorTaskSwFailure | Discovery service on probes failed. |
| 95 | ibDiscoveryBackupSwFailure | Discovery backup service failed. |
| 96 | ibThreatProtectionAutoDownloadFailure | Automatic download of DNS Infrastructure Protection rule failed. |
| 97 | ibThreatProtectionPublishFailure | DNS Infrastructure Protection rule publish failed. |
| 98 | ibPassiveHANodeARPConnectivityFailure | HA node failed to connect to local router. |
| 99 | ibPassiveHANodeARPConnectivitySuccess | HA node successfully connects to local router. |
| 100 | ibDNSIntegrityCheckConnectionFailed | Connection between Grid member and Grid Master failed. |
| 101 | ibDNSIntegrityCheckPrimaryServersFailed | DNS data (NS RRset) check for Grid primaries failed. |
| 102 | ibDNSIntegrityCheckNameserversFailed | DNS data (NS RRset) check for name servers failed. |
| 103 | ibCloudAPIFailure | Cloud API service failed. |
| 104 | ibRpzRefreshFailure | An RPZ refresh failure has occurred. |
| 105 | ibUnboundSoftwareFailure | Unbound software failure has occurred. |
| 106 | ibAutoDownloadFailure | Automatic download of Threat Insight module set failed. |
| 107 | ibDnsHealthCheckFailed | The DNS health check has failed. |
| 108 | ibDnsHealthCheckSucceed | The DNS health check is successful. |
| 109 | ibBFDSoftwareFailure | BFD has failed to detect failure in the bidirectional path between two interfaces. |
| 110 | ibOutboundWorkerFailed | An Outbound worker has failed. |
| 111 | ibIMCgRPCServerFailure | IMC gRPC Server Container is not running. |
| 3001 | ibRAIDIsOptimal | The system’s RAID array is now running in an optimal state. |
| 3002 | ibRAIDIsDegraded | The system’s RAID array is in a degraded state. |
| 3003 | ibRAIDIsRebuilding | The system’s RAID array is rebuilding. |
| 3004 | ibRAIDStatusUnknown | Unable to retrieve RAID array state! |
| 3005 | ibRAIDBatteryIsOK | The system’s RAID battery is OK. |
| 3006 | ibRAIDBatteryFailed | A RAID battery failure has occurred. |
| 3007 | ibRAIDOptimalMismatch | The system's RAID array is now running in an optimal state (Mismatched disk(s) found). |
| 3008 | ibRAIDDegradedMismatch | The system's RAID array is in a degraded state (Mismatched disk(s) found). |
| 3009 | ibRAIDRebuildingMismatch | The system's RAID array is rebuilding (Mismatched disk(s) found). |
| 3010 | ibRAIDBatteryWeak | Please replace the system's RAID battery soon. |
| 3011 | ibRAIDIsDegradedDisk1 | The system's RAID array is in a degraded state. RAID Disk1 is EMPTY. |
| 3012 | ibRAIDIsDegradedDisk2 | The system's RAID array is in a degraded state. RAID Disk2 is EMPTY. |
| 3013 | ibRAIDIsDegradedDisk3 | The system's RAID array is in a degraded state. RAID Disk3 is EMPTY. |
| 3014 | ibRAIDIsDegradedDisk4 | The system's RAID array is in a degraded state. RAID Disk4 is EMPTY. |
| 3015 | ibRAIDIsDegradedDisk5 | The system's RAID array is in a degraded state. RAID Disk5 is EMPTY. |
| 3016 | ibRAIDIsDegradedDisk6 | The system's RAID array is in a degraded state. RAID Disk6 is EMPTY. |
| 3017 | ibRAIDIsDegradedDisk7 | The system's RAID array is in a degraded state. RAID Disk7 is EMPTY. |
| 3018 | ibRAIDIsDegradedDisk8 | The system's RAID array is in a degraded state. RAID Disk8 is EMPTY. |
| 3019 | ibRAIDIsRebuildingDisk1 | The system's RAID array is rebuilding. RAID Disk1 is OFFLINE. |
| 3020 | ibRAIDIsRebuildingDisk2 | The system's RAID array is rebuilding. RAID Disk2 is OFFLINE. |
| 3021 | ibRAIDIsRebuildingDisk3 | The system's RAID array is rebuilding. RAID Disk3 is OFFLINE. |
| 3022 | ibRAIDIsRebuildingDisk4 | The system's RAID array is rebuilding. RAID Disk4 is OFFLINE. |
| 3023 | ibRAIDIsRebuildingDisk5 | The system's RAID array is rebuilding. RAID Disk5 is OFFLINE. |
| 3024 | ibRAIDIsRebuildingDisk6 | The system's RAID array is rebuilding. RAID Disk6 is OFFLINE. |
| 3025 | ibRAIDIsRebuildingDisk7 | The system's RAID array is rebuilding. RAID Disk7 is OFFLINE. |
| 3026 | ibRAIDIsRebuildingDisk8 | The system's RAID array is rebuilding. RAID Disk8 is OFFLINE. |
| 3027 | ibRAIDDegradedMismatchDisk1 | The system's RAID array is in a degraded state (Mismatched disk(s) found). RAID Disk1 is EMPTY. |
| 3028 | ibRAIDDegradedMismatchDisk2 | The system's RAID array is in a degraded state (Mismatched disk(s) found). RAID Disk2 is EMPTY. |
| 3029 | ibRAIDDegradedMismatchDisk3 | The system's RAID array is in a degraded state (Mismatched disk(s) found). RAID Disk3 is EMPTY. |
| 3030 | ibRAIDDegradedMismatchDisk4 | The system's RAID array is in a degraded state (Mismatched disk(s) found). RAID Disk4 is EMPTY. |
| 3031 | ibRAIDDegradedMismatchDisk5 | The system's RAID array is in a degraded state (Mismatched disk(s) found). RAID Disk5 is EMPTY. |
| 3032 | ibRAIDDegradedMismatchDisk6 | The system's RAID array is in a degraded state (Mismatched disk(s) found). RAID Disk6 is EMPTY. |
| 3033 | ibRAIDDegradedMismatchDisk7 | The system's RAID array is in a degraded state (Mismatched disk(s) found). RAID Disk7 is EMPTY. |
| 3034 | ibRAIDDegradedMismatchDisk8 | The system's RAID array is in a degraded state (Mismatched disk(s) found). RAID Disk8 is EMPTY. |
| 3035 | ibRAIDRebuildingMismatchDisk1 | The system's RAID array is rebuilding (Mismatched disk(s) found). RAID Disk1 is OFFLINE. |
| 3036 | ibRAIDRebuildingMismatchDisk2 | The system's RAID array is rebuilding (Mismatched disk(s) found). RAID Disk2 is OFFLINE. |
| 3037 | ibRAIDRebuildingMismatchDisk3 | The system's RAID array is rebuilding (Mismatched disk(s) found). RAID Disk3 is OFFLINE. |
| 3038 | ibRAIDRebuildingMismatchDisk4 | The system's RAID array is rebuilding (Mismatched disk(s) found). RAID Disk4 is OFFLINE. |
| 3039 | ibRAIDRebuildingMismatchDisk5 | The system's RAID array is rebuilding (Mismatched disk(s) found). RAID Disk5 is OFFLINE. |
| 3040 | ibRAIDRebuildingMismatchDisk6 | The system's RAID array is rebuilding (Mismatched disk(s) found). RAID Disk6 is OFFLINE. |
| 3041 | ibRAIDRebuildingMismatchDisk7 | The system's RAID array is rebuilding (Mismatched disk(s) found). RAID Disk7 is OFFLINE. |
| 3042 | ibRAIDRebuildingMismatchDisk8 | The system's RAID array is rebuilding (Mismatched disk(s) found). RAID Disk8 is OFFLINE. |
| 3043 | ibRAIDIsInoperable | The system’s RAID array is inoperable. |
| 3044 | ibRAIDPredictedDegraded | The system's RAID array is in a predicted degraded state. |
| 3045 | ibRAIDPredictedDegradedDisk1 | The system's RAID array is in a predicted degraded state. RAID Disk1 is in such predicted degraded state. |
| 3046 | ibRAIDPredictedDegradedDisk2 | The system's RAID array is in a predicted degraded state. RAID Disk2 is in such predicted degraded state. |
| 3047 | ibRAIDPredictedDegradedDisk3 | The system's RAID array is in a predicted degraded state. RAID Disk3 is in such predicted degraded state. |
| 3048 | ibRAIDPredictedDegradedDisk4 | The system's RAID array is in a predicted degraded state. RAID Disk4 is in such predicted degraded state. |
| 3049 | ibRAIDPredictedDegradedDisk5 | The system's RAID array is in a predicted degraded state. RAID Disk5 is in such predicted degraded state. |
| 3050 | ibRAIDPredictedDegradedDisk6 | The system's RAID array is in a predicted degraded state. RAID Disk6 is in such predicted degraded state. |
| 3051 | ibRAIDPredictedDegradedDisk7 | The system's RAID array is in a predicted degraded state. RAID Disk7 is in such predicted degraded state. |
| 3052 | ibRAIDPredictedDegradedDisk8 | The system's RAID array is in a predicted degraded state. RAID Disk8 is in such predicted degraded state. |
| 4001 | ibDisconnectGridAttachFailed | A disconnected Grid failed to attach to the Master Grid. |
| 4002 | ibDisconnectedGridDetachFailed | A disconnected Grid failed to detach from the Master Grid. |
| 4003 | ibDisconnectedGridDetachFailedSubgrid Offline | An offline Grid failed to detach from the Master Grid. |
| 4004 | ibDisconnectedGridSnapshotFailed | The snapshot operation failed on a disconnected Grid. |
| 4005 | ibDnssecAutomaticKSKRolloverApproching | An automatic rollover of the KSK will be performed in seven days. |
| 4006 | ibDnssecManualKSKRolloverDueApproching | A manual KSK rollover is due within the next seven days. |
| 4007 | ibDnssecAutomaticKSKRolloverDone | The KSK has been automatically rolled over. |
| 4008 | ibDnssecManualKSKRolloverDone | The KSK has been manually rolled over. |
| 4009 | ibDnssecKSKRolloverOverdue | The KSK rollover is overdue. |
| 4010 | ibPortDiscoveryConflict | A port detection conflict has been detected. |
| 4011 | ibDeviceDiscoveryConflict | A device detection conflict has been detected. |
| 4012 | ibDeviceUnmanaged | New unmanaged devices/networks were found during network discovery process. |
| 4013 | ibAnalyticsDnstUpdate | The DNS tunneling detection has occurred. |
| 4014 | ibSyslogBackupDone | The syslog backup process is successful. |
| 4015 | ibSyslogBackupFailed | The syslog backup process failed. |
