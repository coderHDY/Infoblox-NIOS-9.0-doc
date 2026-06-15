---
title: "NIOS 9.0.5 - Changes to Default Behavior"
source: "/space/nios90/1323532447"
pageId: "1323532447"
---
- From NIOS 9.0.5 onwards, when executing a Google Cloud vDiscovery task using WAPI, you must specify the `service_account_file_token` parameter. Otherwise, a WAPI error is displayed, and the task does not get executed.
- From NIOS 9.0.5 onwards in a vNIOS for Google Cloud HA deployment, access scopes while assigning the service account must be selected as Allow full access to all Cloud APIs for the HA pair to work.
- The following are the Threat Insight (formerly Threat Analytics) changes introduced in NIOS 9.0.5:
  
  - There will be an impact on the CPU and DNS performance when Threat Insight is enabled.
  - The following terms within Threat Insight have been changed:
    
    - Threat Analytics has been changed to Threat Insight.
    - Whitelist has been changed to Allowlist.
    - Blacklist has been changed to Blocklist.
  - As a result of the change in terminology, the following WAPI objects, fields, and function calls have changed:

| **Objects** | **Fields** | **Function calls** |
| --- | --- | --- |
| grid:threatinsight   | allowlist_update_policy  current_allowlist           dns_tunnel_block_list_rpz_zones                          enable_allowlist_auto_download                             enable_allowlist_scheduled_download                           last_allowlist_update_time                              last_allowlist_update_version                            last_checked_for_allowlist_update                             scheduled_allowlist_download | download_threat_insight_allowlist_update                                            download_threat_insight_moduleset_update                                            move_blocklist_rpz_to_allow_list                                             set_last_uploaded_threat_insight_moduleset                                           test_threat_insight_server_connectivity                                           update_threat_insight_moduleset |
| threatinsight:allowlist |  |  |
| threatinsight:insight_allowlist |  |  |
| threatinsight:moduleset |  |  |

- 
  
  - The size of the NIOS 9.0.5 bin file is close to 6 GB and it is significantly larger than the sizes of the bin files of the earlier NIOS releases because of Threat Insight enhancements. As a result, the distribution stage may take a slightly longer time to execute compared to the earlier versions.
  - The size of the Threat Insight moduleset has increased and therefore, it may take a longer time (about 3 minutes) to download.
  - If you switch the Threat Insight moduleset, the Threat Insight service is restarted and it may take a few minutes for the service to come up.
- From 9.0.5 there is a limit to the number of records per name and number of record types per name. Configurations that exceed the limit prevent the loading the zones or into the cache. You can tune these limits using the `set dns_rr_limits` CLI command. You can tune these limits using the `set dns_rr_limits grid records_per_type 2000 types_per_name 100` CLI command. The default limits are: max-records-per-type: 2000, max-types-per-name: 100
- NIOS 9.0.5 is on an average 178% larger than NIOS 8.6 and 67% larger than earlier NIOS 9.0.x versions because of the new features/enhancements (such as Threat Insight). Uploading the .bin file may take a while and if you have set a default session timeout, the session can expire when the upload is taking place in the background. Infoblox recommends that you change the default session timeout setting from 600 seconds to 1800 seconds.  You can update the setting in the **Security** tab &gt; **Session Timeout(s)** field.
- Deleting an on-prem host in the Infoblox Portal deletes the Grid member's join token from the member. To allow the member to use the join token again, run the set allow_grid_token CLI command. To view the changes, run the show allow_grid_token CLI command.
- The following are the changes pertaining to the MGMT interface introduced in 9.0.5:
  
  - The MGMT interface has been excluded from virtual DNS Cache Acceleration (vDCA)/virtual Advanced DNS Protection (vADP) for new NIOS 9.0.5 installations. However, for existing deployments that have MGMT interface enabled, virtual DNS Cache Acceleration/virtual Advanced DNS Protection will continue to work post upgrade to 9.0.5.
  - If you want dnstap logging on the MGMT interface, include the MGMT interface in the virtual DNS Cache Acceleration/virtual Advanced DNS Protection configuration using the CLI.
  - When the MGMT interface is excluded from virtual DNS Cache Acceleration/virtual Advanced DNS Protection, DNS over TLS (DoT) will not be supported on the MGMT interface.
  - When the MGMT interface is included in virtual DNS Cache Acceleration/virtual Advanced DNS Protection, DNS over TLS (DoT) will be supported on the MGMT interface.
  - On a fresh NIOS 9.0.5 installation, DNS over TLS (DoT) queries sent over the MGMT interface fail because the MGMT interface is excluded from virtual DNS Cache Acceleration/virtual Advanced DNS Protection. If you want DNS over TLS (DoT), include the MGMT interface as part of virtual DNS Cache Acceleration/virtual Advanced DNS Protection.
- Infoblox recommends that you do not use fetches per server or fetches per zone with forwarders.
- In NIOS 9.0.5, the color scheme of the Grid Manager login page has changed.
- The Infoblox Portal Configuration screen contains a Test Settings button. Clicking this button tests the value of the join token, custom resolver, and the HTTP proxy that you entered. When you click the button, a success or a failed message is displayed along with the timestamp. You cannot save your configurations until the test settings is a success.
- From NIOS 9.0.5 onwards, DNS records that you manually create in NIOS inside a cloud-synchronized zone are not deleted on subsequent synchronization.
- From NIOS 9.0.5 onwards, the Access Key field in the Infoblox Portal Configuration screen has been removed.
- From NIOS 9.0.5 onwards, you can add the join token and enable cloud Grid management in the same session.
- From NIOS 9.0.5 onwards, the `set analytics` and `show analytics` commands have been removed.
- From NIOS 9.0.5 onwards, the following WAPI field names have been changed:
  
  - For the syslog_servers object: address has changed to address_or_fqdn
  - For the `external_syslog_backup_servers` object: `address `has changed to `address_or_fqdn`
  - For the `dnstap_setting `object: `dnstap_receiver_address` has changed to `dnstap_receiver_address_or_fqdn`
  - For the `file_transfer_setting `object: `host `has changed to `server_address_or_fqdn`
- From NIOS 9.0.5 onwards the following terminology will be used:

| **What it was earlier** | **What it is now** |
| --- | --- |
| BloxOne | Infoblox |
| Infoblox BloxOne Universal DDI | Infoblox Universal DDI |
| Infoblox BloxOne Asset Insights | Infoblox Asset Insights |
| BloxOne Threat Defense | Infoblox Threat Defense |
| Cloud Services Portal (CSP) | Infoblox Portal |
| BloxOne Platform | Infoblox Platform |
