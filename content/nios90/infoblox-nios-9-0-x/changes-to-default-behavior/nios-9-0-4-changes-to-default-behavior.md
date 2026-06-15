---
title: "NIOS 9.0.4 - Changes to Default Behavior"
source: "/space/nios90/1323630693"
pageId: "1323630693"
---
- With the 8.2 release of OpenSSH, the ssh-rsa algorithm, which relies on the SHA-1 hash, has been deprecated due to security concerns. NIOS does not support deprecated SHA-1 signature algorithms.
- In NIOS 9.0.4 and in Splunk the secured webhook uses Python 3.0. If the secured webhook scripts are written to work on a version lower than 3.0, they will not work as those versions have been deprecated in Splunk.
- NIOS groups that need to access the reporting server must follow the Splunk naming convention guidelines such as the characters must be in lowercase and must not contain spaces, colons, semicolons, forward slashes and commas.
- Earlier than NIOS 9.0.4, all support bundles that were downloaded from multiple Grid members contained the same file name. From NIOS 9.0.4 onwards, downloaded support bundles will have the file names in the following format:  
  sb_&lt;member_name/host_name&gt;_[virtual_node_id]_&lt;GM | GM-HA | GMC | GMC-HA | MEM | MEM-HA&gt;_&lt;YYYYMMDD_HHMMSS&gt;   
  If the length of the Grid member name or host name is greater than 25 characters, the virtual  node ID is appended to the file name.
- In Splunk, all Simple XML dashboards require the version attribute to be set to 1.1 to certify that they are compatible with jQuery 3.5 or higher. The default Infoblox reporting dashboards have been updated with the version="1.1" attribute. But custom dashboards that have been created before the NIOS 9.0.4 upgrade will not have the version attribute specified. Therefore, post upgrade a warning message is displayed for such custom dashboards.
- From NIOS 9.0.4 onwards, in the *Grid DNS Properties* or *Member DNS Properties* editor, **Security** tab &gt; **Bogus-query alerting and mitigation** section, the **Deprioritize caching of NXDOMAIN responses** option has been removed.
- From NIOS 9.0.4 onwards, in a cloud HA setup, if you want to join a cloud HA Grid member to a Grid Master, the passive node of the Grid member waits for 2 minutes before joining the Grid Master.
- From NIOS 9.0.4 onwards, to start the vDCA service, you must enable recursion at the Grid level or at the member level or at the view level.
- From NIOS 9.0.4 onwards, the size of the resizable image is 150 GB. You can increase the size but do not reduce it.
- In newer versions of NIOS, database pages swing from available memory to used memory thus providing for a more accurate accounting of memory. Therefore, situations in which huge pages are used for DNS Cache Acceleration or Advanced DNS Protection, NIOS memory utilization may increase by 40% to 45%.
- From NIOS 9.0.4 onwards, the default value of the show ssl_security_level CLI command is 0 instead of 1. With upgraded OpenSSL, older protocols such as TLS versions 1.0 and 1.1 are pushed down to SECLEVEL=0. During a NIOS upgrade, if the security level is set to 1, it will be reset to 0. However, if the security level prior to the upgrade is 2, it remains unaffected.
- After a NIOS 9.0.4 upgrade, a banner message is displayed in Grid Manager if certain time zone names were present before the upgrade. For the list of these time zone names, see the “General Upgrade Guidelines” topic in the NIOS online documentation. Note that some of the new time zone formats contain an underscore “_” in the name.
- After the ability to generate reports for hardware appliances, three alerts are generated instead of one. The 'Flex Grid Activation' and 'Flex Grid Activation for Managed Services' licenses now have their own set of alerts. The alerts filter members based on ReportingSPLA extensible attribute value and therefore, the ib-dns-usage-report-per-month alert may not generate data.
- From NIOS 9.0.4 onwards, the CPUID hypervisor bit (CPUID(1)ECX:31 must be enabled for VM guests. It is the default for all VM hypervisors, but can be disabled in some hosting configurations.  Do not disable it.
- If virtual Advanced DNS Protection is enabled on IB-906, then after an upgrade to NIOS 9.0.4, acceleration is automatically enabled by an additional reboot.
- If the Cloud Platform banner is displayed and you close it, the banner will be closed permanently.
- From NIOS 9.0.4 onwards, the lcd(13) MIB OID has been deprecated.
- From NIOS 9.0.4 onwards, Amazon Route 53 requires the AmazonRoute53ReadOnlyAccess permission for synchronization of data. Otherwise, add the following actions explicitly to the permission:
  
  - route53:GetHostedZone
  - route53:ListHostedZones
  - route53:ListResourceRecordSets
  - route53:ListTagsForResources
  - route53:ListQueryLoggingConfigs
  - route53:GetHealthCheck
  - route53:ListHealthChecks
- The following are the changes to behavior in the **CSP Configuration** screen:
  
  - In the *Grid Properties Editor*/*Grid Member Properties Editor*, the **CSP Config** tab has been renamed to the **CSP Configuration** tab, and the **CSP Config** screen is now called the **CSP Configuration** screen. The UI labels in this screen have also changed.
  - Even though the **Inherit**/**Override** button has been removed, the override and inherit functionalities continue to work as is.
  - The **Test Settings** button is applicable only to the **HTTP Proxy** field.
  - You can save the value in the **HTTP Proxy** field only if you test the proxy setting by clicking the **Test Settings** button and the test is successful.
- The following are the changes in behavior related to TLS protocols from NIOS 9.0.4 onwards:
  
  - Splunk does not support TLS version 1.3 and therefore NIOS reporting will not work if you disable all other TLS versions and enable only TLS version 1.3. A warning to this effect is displayed if you enable only TLS version 1.3.
  - Enabling or disabling a TLS protocol automatically adds or removes its corresponding enabled cipher suites for the Apache server.
  - The Apache/SAML service is not affected by enabling or disabling the TLS cipher suites of a disabled TLS protocol.
  - To ensure system integrity, prior to enabling a TLS protocol. it is necessary to enable one of its respective cipher suites.
  - Disabling the last cipher suite of an enabled TLS protocol is not allowed.
- The following are the changes in behavior related to the Cloud Sync service from NIOS 9.0.4 onwards:
  
  - The “Cloud DNS Sync” service name has been changed to “Cloud Sync” service (even in WAPI).
  - The Cloud Sync service must be started before starting a vDiscovery job.
  - The **Stop** button has been removed for vDiscovery jobs.
  - It is not mandatory to have the Cloud Network Automation (CNA) license on the Grid Master to run the Cloud Sync service.
  - In the Grid Manager, the **Amazon** tab under **Infoblox** **Grid** &gt; **Grid Manager** has been changed to **Cloud DNS**.
