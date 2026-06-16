---
title: "Configuring Grid Properties for Managing Microsoft Servers"
source: "/space/nios90/280662859"
pageId: "280662859"
---
You can configure the following Grid properties for Microsoft servers that are managed by a Grid member:

- Monitor and control settings for DNS and DHCP services. For information, see Defining Monitor and Control Settings for DNS and DHCP Services below.
- Use the identity mapping feature to get visibility of user interaction with their environments. For information, see [*Configuring Identity Mapping*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/configuring-identity-mapping).
- Output destination for Microsoft server log messages. For information, see Output Destination for Log Messages below*.*
- Simultaneous connections for Microsoft servers. For information, see Maximum Simultaneous Connections for Microsoft Servers below.
- Maximum connection timeout setting. For information, see Configuring RPC Timeout Settings below.
- Forward WINS packets to dedicated Microsoft Windows DNS and DHCP servers. For information see Forwarding WINS Packets to Microsoft Servers below.

For more information about configuring other Grid properties for Microsoft servers, see Setting Grid Properties for Managing Microsoft Servers below.

# Defining Monitor and Control Settings for DNS and DHCP Services

You can enable or disable monitor and control settings of DNS and DHCP services for a specific Microsoft server. The appliance enables this by default when you add a Microsoft server. When you upgrade the existing Microsoft servers, the managed member inherits values from the Grid. You can monitor and control the DNS and DHCP services on a Microsoft service only if both the management setting of the respective service and the monitor and control settings of the corresponding Microsoft server for the selected service are enabled. To know more about how to enable monitor and control settings, see Setting Grid Properties for Managing Microsoft Servers below.

> **warning**
>
> ### Note
> 
> The original setting that controls the overall management of a given service is referred to as the management setting. It controls whether the synchronization of the corresponding service is enabled or not, with no change to the existing synchronization behavior. Note that synchronization does not depend on the value of the monitor and control setting for the Microsoft server.

You can configure Microsoft server settings at the Grid level. Note that Microsoft servers inherit these settings by default, and you can override these settings at the Microsoft server level.

When you enable monitor and control settings for DNS and DHCP services, the managing member verifies the corresponding service status on the Microsoft server every 30 seconds. The Grid Master is notified of the status through Grid replication.

When you disable monitor and control setting for DNS and DHCP services, the managing member stops verifying the service status. NIOS administrators cannot start or stop DNS or DHCP service on the Microsoft server. When you try to start or stop these services through the Infoblox API, the appliance generates an error message. The pending service control requests made before disabling the monitor and control settings are sent to the Microsoft server.

For information about the displayed status, see [*Viewing DNS and DHCP Service Status on Microsoft Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/monitoring-managed-microsoft-servers).

# Synchronizing DNS Reporting Data

You can enable synchronization of DNS reporting data from the Microsoft server and view both NIOS and Microsoft services data in a single view in the supported DNS reports. This feature is enabled by default when you add a Microsoft server to the Grid. This feature is supported for Microsoft Windows 2012 R2 and Microsoft Windows 2016 versions, and you must disable this feature for all previous versions of Microsoft Windows servers. When you upgrade the Grid to NIOS 8.2 or later, this feature is disabled. For information about how to enable synchronization of DNS reporting data, see Setting Grid Properties for Managing Microsoft Servers below.

You can enable the synchronization of DNS reporting data at the Grid level. The Microsoft servers inherit these settings by default, and you can override these settings at the Microsoft server level. The synchronization of DNS reporting data is effective only if a valid Reporting license is installed on the Grid and when** DNS Sync** is enabled for the Microsoft server to synchronize the DNS data. For information about how to enable **DNS Sync**, see [*Assigning Grid Members to Microsoft Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/configuring-members-to-manage-microsoft-servers).

> **warning**
>
> ### Note
> 
> You must enable DNS logging feature on the Microsoft server for this feature to function properly. To enable DNS logging feature on Microsoft servers, refer to [*https://technet.microsoft.com/en-us/library/dn800669#some*](https://technet.microsoft.com/en-us/library/dn800669#some).

When you enable the synchronization of DNS reporting data, the appliance performs the reporting data synchronization from the Microsoft server based on the specified time interval. The default synchronization interval is 15 seconds. You can change the synchronization interval using the CLI command `set ms_dns_reports_sync_interval`. For information, refer to the *Infoblox CLI Guide*. The collection of reporting data is dependent on the synchronization intervals set for the Microsoft server. Hence, there would be differences in the Microsoft services data updated in the reports as compared to the NIOS reporting data. Note that only events that are logged in the Microsoft event log are displayed in the Microsoft DNS reports. For a list of DNS reports that display data from both NIOS and the Microsoft server when this feature is enabled, see [*Reports with Data Synchronized from Microsoft Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/managing-reporting-data).

Microsoft provides enhanced DNS logging and diagnostics for Microsoft Windows Server 2012 R2 and later versions. This includes DNS analytic events logging which enables activity tracking on the DNS server. An analytic event is logged each time the server sends or receives DNS information. In order to install enhanced DNS logging and diagnostics feature in Microsoft Windows Server 2012 R2 and later versions, you must apply the query logging and change auditing hotfix. Click the following link to apply the query logging and change auditing hotfix: [*https://support.microsoft.com/en-us/help/2956577/update-adds-query-logging-and-change-auditing-to-windows-dns-servers*](https://support.microsoft.com/en-us/help/2956577/update-adds-query-logging-and-change-auditing-to-windows-dns-servers).

Note that DNS analytic events logging is not enabled by default on Microsoft servers. To install and enable DNS analytic events logging feature on Microsoft servers, refer to [*https://technet.microsoft.com/en-us/library/dn800669#some*](https://technet.microsoft.com/en-us/library/dn800669#some).

# Output Destination for Log Messages

You can configure an output destination for Microsoft server log messages at the Grid level and override it at the Microsoft server level. You can choose to save log messages related to Microsoft synchronization in the syslog or Microsoft log. For information, see [*Viewing the Syslog*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server).  
When you change the setting, the Grid Master notifies the managing member about the new setting through Grid replication and sends log messages to the selected destination. The new setting takes effect for synchronization only after the managing member is notified. The synchronization, which is already in progress continues to log messages to the destination based on the old setting. To know more about how to select output destination for log messages, see Setting Grid Properties for Managing Microsoft Servers below.

# Maximum Simultaneous Connections for Microsoft Servers

You can specify a maximum number of simultaneous RPC connections that can be configured for the respective Microsoft server, which are managed by the Grid. You can override this value at the Microsoft server level. To know more about how to define maximum simultaneous connections for Microsoft servers, see Setting Grid Properties for Managing Microsoft Servers below.

> **warning**
>
> ### Note
> 
> When you increase the maximum number of simultaneous connections above the recommended setting for a given Microsoft server, it may consume additional bandwidth, memory, and CPU usage.



# Configuring RPC Timeout Settings

You can specify an RPC (Remote Procedure Call) timeout value to control network connectivity for Microsoft servers. You can configure an RPC timeout value at the Grid level and override it for each Microsoft server. The default value at the Grid level is ten seconds and the member inherits this value from the Grid. You can specify a value between one and 60 seconds. To know more about how to configure RPC timeout settings, see the next section, Setting Grid Properties for Managing Microsoft Servers.

# Setting Grid Properties for Managing Microsoft Servers

To configure Grid properties for managing Microsoft servers, complete the following:

1. **Grid**: From the **Infoblox** **Grid** tab -&gt;** Grid** **Manager** tab, expand the Toolbar and click **Grid** **Properties** -&gt; **Edit**. Select **Microsoft** **Integration** tab in the *Infoblox* *Grid* *Properties* *Editor* wizard.  
   **Microsoft** **Server:** From the **Grid** tab -&gt; **Microsoft** **Servers** tab -&gt; **Servers** tab, select a Microsoft server and click the **Edit** icon, or click the Action icon
   
   ![image](/assets/280662859/5016bf15-f2e3-4844-adef-0a4b9a7d9d29.png)
   
   next to the respective Microsoft server and select **Edit** from the menu. In the Microsoft server editor, click the **General** tab.  
   **Standalone** **appliance**: From the **System** tab -&gt; **System** **Manager** tab, expand the Toolbar and click **System** **Properties** -&gt; **Edit**.
2. Complete the following in the **Basic** tab:
   
   - **Logging** **output** **destination**: From the drop-down list, select an output destination to which the appliance saves log messages for Microsoft servers. When you select **Microsoft** **Log**, the appliance logs the messages that are generated for the respective Microsoft server in the existing Microsoft log. This is selected by default. For more information, see [*Viewing Synchronization Logs*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/monitoring-managed-microsoft-servers). When you select **Syslog**, NIOS logs the messages that are generated for the respective Microsoft server in the syslog. For more information about the syslog, see [*Viewing the Syslog*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server). Click **Override** to select an output destination to save the log messages at the member level.
   - **Monitor DNS and DHCP Services**: You can enable monitoring and control services for DNS and DHCP services at the Grid level and override the settings for each service at the Microsoft server level. This is enabled, by default. Each monitoring and control setting applies only to the corresponding service and is applicable to the respective Microsoft server only.
     
     - **Monitor and control DNS Services**: Select this to enable monitoring and the ability to control DNS service for the Microsoft server.
     - **Synchronize DNS Reporting Data**: Select this to synchronize DNS reporting data from the Microsoft server. Clearing this checkbox disables DNS reporting data synchronization.
     - **Monitor and control DHCP Services**: Select this to enable monitoring and the ability to control a DHCP service for the Microsoft server.
3. Optionally, select the **Microsoft** **Integration** tab in the *Grid* *Properties* *Editor* wizard and complete the following in the **Advanced** tab or click the **Advanced** tab in the **General** tab in a Microsoft server editor:
   
   - **Maximum** **simultaneous** **connections**: Specify a maximum number of simultaneous RPC connections that can be configured for the respective Microsoft server, which are managed by the Grid. The default is five. You can specify a value between two and 40.  
     You can click **Override** at the member level to specify a new value. The **Override** button changes to **Inherit**. Click **Inherit** to inherit the value from the Grid.
   - **RPC** **timeout**: Specify the RPC timeout value in seconds to control the network communication timeout. The default is ten seconds. You can specify a value between one and 60.  
     You can click **Override** at the member level to specify a new value. The **Override** button changes to **Inherit**. Click **Inherit** to inherit the value from the Grid.
4. Save the configuration.

# Forwarding WINS Packets to Microsoft Servers

If your Infoblox Grid includes legacy Microsoft DNS and DHCP servers, you can configure NIOS to forward WINS packets to dedicated Microsoft servers. Infoblox provides the set wins_forwarding and show wins_forwarding CLI commands you can use to perform this task. For detailed information about these commands, see [*Using the NIOS CLI*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli).  
When you enable port redundancy in NIOS, the LAN1 and LAN2 ports are grouped into one logical interface. They share one IP address and appear as one interface to the network. If a link to one of the ports fails or is disabled, the appliance fails over to the other port, avoiding a service disruption. When you enable port redundancy, WINS packet forwarding is not supported on the LAN2 interface. You must use the LAN1 interface.

> **warning**
>
> ### Note
> 
> Ensure that port 137 is not used for any services in your Grid; otherwise you will not be able to configure the appliance to forward WINS packets to Microsoft DNS and DHCP servers. Likewise, if you have enabled this feature, you will not be able to configure port 137 for any other services in your Grid.
