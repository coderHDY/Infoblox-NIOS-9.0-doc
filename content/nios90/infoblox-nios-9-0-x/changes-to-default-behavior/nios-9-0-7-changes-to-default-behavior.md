---
title: "NIOS 9.0.7 - Changes to Default Behavior"
source: "/space/nios90/1579090194"
pageId: "1579090194"
---
- Starting from NIOS 9.0.7, with the introduction of the Infoblox trademark, the UI label has been changed from “Grid” to “Infoblox Grid” on a few tabs and screen names in Grid Manager. They are:
  
  - On the Login page, Grid Manager is now **Infoblox Grid Manager**.
  - The Grid tab is now the **Infoblox Grid tab**.
  - The Grid &gt; Status &gt; Grid Status is now **Infoblox Grid** &gt; **Status** &gt; **Infoblox Grid Status**.
- In NIOS 9.0.7, when query logging or response logging is enabled for a Grid member, it is displayed in a yellow background in the **Infoblox Grid **&gt; **Grid Manager** &gt; **Members** &gt; **Status** column and the Grid Manager displays a banner suggesting that enabling the logging feature can impact system performance and stability. You can manage the visibility of this banner (whether to display it or not) through the `set query_logging_warnings` CLI command.
- The following changes have been made to the default Infoblox Portal custom resolver IP address in NIOS 9.0.7:
  
  - From NIOS 9.0.7 onwards, the default Infoblox Portal custom resolver IP address has changed from 52.119.40.100 to 52.119.41.100.
  - During an upgrade to NIOS 9.0.7, the IP address of the default custom resolver (52.119.40.100) in the Infoblox Portal configuration changes to 52.119.41.100. After the upgrade, if the custom resolver was changed, the connection to the Infoblox Portal is checked and if the new custom resolver of 52.119.41.100 cannot be reached, then NIOS reverts the configuration to the custom resolver of 52.119.40.100. If you have manually configured a custom resolver, the value will not change.  
    52.119.41.100 is now the recommended default custom resolver for Infoblox Portal configuration. If you are not using a customer resolver of your choice, Infoblox recommends that, if the upgrade had to revert to 52.119.40.100, you allow access to 52.119.41.100 and then manually update the configuration to use it. The syslog file has more details about the test connection, which is triggered every one hour.  
    A banner about the new custom resolver changes is displayed in the Grid Manager during the upgrade.
- Starting from NIOS 9.0.7, to delete an FTP user, at least one of the file distribution services (TFTP, HTTP, FTP) must be running. Otherwise, NIOS prevents the deletion of FTP users. In versions prior to 9.0.7, deletion of FTP users is allowed even if none of these services is running.
- Subscriber secure services proxy VIP performance improvements - DNS Cache Acceleration now correctly implements HTTP persistent connections. Instead of creating a new TCP connection for each HTTP request, it now reuses existing TCP connections compared to earlier versions where each HTTP request initiated a separate connection. This in turn impacted performance. This enhancement significantly improves proxy VIP performance. The keep-alive timeout is set to 20 seconds, and each persistent TCP connection can handle up to 500 HTTP requests.
- In 9.0.x, when a resolver receives a query for the nameserver record type, the resolver responds with the nameserver record in the answer section and corresponding glue records in the additional section if they are present in the resolver’s cache.
- From NIOS 9.0.7 onwards, the combined length of the shared secret and the Grid name must not exceed 100 characters.
- Starting from NIOS 9.0.7, the Advanced DNS Protection (ADP) service cannot be enabled on fresh installations unless a valid ruleset is available. Ensure that a ruleset is either downloaded manually or scheduled for an automatic download before enabling the Advanced DNS Protection service. Failure to do so may lead to a security risk of open ports during a NIOS upgrade.
- From NIOS 9.0.7 onwards, the user input fields for nameserver groups are large enough for their entire value to be viewed on a single click.
- Before upgrading to NIOS 9.0.7, the Grid Manager displays an acknowledgement and consent dialog box that requires you to confirm that you have read the NIOS 9.0.7 Release Notes (specifically the Upgrade Guidelines and Changes to Default Behavior sections) before proceeding with the upgrade.
- From NIOS 9.0.7 onwards, you can add extensible attributes to a manually created nameserver record. You can do this by using both, the Grid Manager and WAPI.
- From NIOS 9.0.7 onwards, you can configure RabbitMQ timeouts by running the `set rabbitmq_timeouts &lt;consumer timeout (on/off)&gt; &lt;startup/shutdown timeout&gt;` CLI command.
- From NIOS 9.0.7 onwards, the `msserver:adsites:site `object type supports `ipv6network` and `ipv6networkcontainer `submember types in its networks field.
- From NIOS 9.0.7 onwards, the `restartservices` function restarts only the specified service. In earlier NIOS versions, it would restart all the services (DNS, DHCP, DHCPv6 services) even if only a specific service was specified.
- From NIOS 9.0.7 onwards, the key that is generated when the **Generate Key** button is clicked in the *Disable Bloxconnect *screen expires in 30 days from the date of the authorization key token generation as compared to 7 days in NIOS 9.0.6.
- From NIOS 9.0.7 onwards, Grid-related data such as the NIOS version and serial number are sent once a month to the Infoblox Portal through a DNS recursive query. This feature is enabled by default. However, you can choose to disable/enable this information by running the `set send_grid_info` CLI command. You can also view whether sharing Grid-related information to Infoblox is currently enabled or disabled by running the `show send_grid_info` CLI command.
- From NIOS 9.0.7 onwards, the `set subscriber_secure_data` CLI command has the following new arguments: clear_all, clear_provisioned_devices, clear_non_provisioned_devices, clear_static_devices, clear_api_devices
  
  For more information about the arguments, see the “[set subscriber_secure_data clear_all](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-subscriber-secure-data-clear-all)” topic in the NIOS online documentation.
- After upgrading from earlier versions (except version 8.6.5) to Muti-Grid Manager 9.0.7, the following fields are updated with values that are synchronized from the sub Grid before object change tracking is enabled:
  
  - IPAM utilization
  - Discovered VLAN ID
  - Discovered VLAN name
  - Discovery engine
  - DHCP utilization
- The following are the changes to default behavior with respect to FIPS and CC compliance:
  
  - A minimum length of 20 byte characters is required for the Grid’s shared secret in the FIPS/CC mode.
  - Communication with the Infoblox Portal is disabled when the FIPS/CC mode is enabled.
  - On new installations of NIOS 9.0.7 and later, Infoblox recommends that you join ND/CP/Reporting members without enabling FIPS as a best practice while joining these members to a FIPS-enabled Grid Master. If you still want to join these members after enabling FIPS, you must change the Grid’s shared secret key to 20 characters by using the Grid Manager or WAPI, enable FIPS, and then join these members to a FIPS-enabled Grid
  - Downgrading to NIOS versions earlier than 8.5.5 or 8.6.1 is not recommended when FIPS/CC mode is enabled.
  - When upgrading from a lower version FIPS/CC -enabled Grid to 9.0.7, the following changes take place:
    
    - The upgrade test fails if the TLS versions 1.0 and 1.1 are enabled, and to pass the upgrade test, TLS 1.0 and TLS 1.1 must be disabled.
    - The upgrade test fails if the Grid’s shared secret length is below 20 characters.
  - From NIOS 8.6.5 and 9.0.7 onwards with FIPS enabled, during the first time login, the ‘admin’ user is prompted to change the password.
  - When upgrading FIPS/CC -enabled Grids to NIOS 9.0.7, if there are cloud connections present in the Grid, they will be disabled and the respective join token will be deleted.
  - On a newly installed 9.0.7 FIPS/CC -enabled Grid, cloud connections cannot be enabled. On disabling the FIPS/CC mode in the Grid, the cloud connections will not be restored. You must do it manually by adding the join token.
  - Only TLSv1.2 and TLSv1.3 are enabled on FIPS/CC -enabled Grids
  - From NIOS 8.6.5 and 9.0.7 onwards, on a FIPS/CC -enabled Grid, the lockout feature has been implemented for CLI over the SSH connection.
  - When upgrading FIPS/CC -enabled Grids to NIOS 9.0.7 or on a freshly-installed  
    FIPS/CC -enabled Grid, if the Grid is in the non-compliant mode, the existing yellow  
    banner message has been revised as follows:  
    The Grid and secure communication between the Grid Master and its members are  
    currently in a non-compliant state. To ensure FIPS and CC compliance, please enable  
    all relevant configurations and execute the `set distributed_grid_comm_mode`  
    CLI command. For more details, please view the NIOS FIPS-compliance  
    documentation.
