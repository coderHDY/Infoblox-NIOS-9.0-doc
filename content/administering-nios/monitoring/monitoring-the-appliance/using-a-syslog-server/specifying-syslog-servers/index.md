---
title: "Specifying Syslog Servers"
source: "/space/nios90/1380844672"
pageId: "1380844672"
---
To configure a NIOS appliance to send messages to a syslog server, complete the following:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab, and then click **Grid** **Properties** -> **Edit** from the Toolbar.
2. In the *Grid* *Properties* editor, select the **Monitoring** tab, and then complete the following:
   
   - **Syslog: **In addition to storing the syslog on a Grid member, you can configure the Grid to send the log to an external syslog server.
   - **Syslog size (MB)**: Specify the maximum size for a syslog file. Enter a value between 10 and 300. The default is 300.  
     When the syslog file reaches the size you enter here, the appliance automatically writes the file into a new file by adding a .0 extension to the first file and incrementing subsequent file extensions by 1.
   - **Log** **to** **External** **Syslog** **Servers:** Select this to enable the appliance to send messages to a specified syslog server. Grid Manager displays the current syslog servers in the table. To define a new syslog server, click the Add icon and complete the following:
     
     - **Address/FQDN:** Enter the IP address or the FQDN of the syslog server. Entries may be an IPv4 or IPv6 address.
     - **Transport:** From the drop-down list, select whether the appliance uses **Secure** **TCP**, **TCP,** or **UDP** to connect to the external syslog server.
     - **Server** **Certificate**: Click **Select** to upload a self-signed or a CA-signed server certificate. In the *Upload* dialog, click **Select** and navigate to the certificate file, and then click **Upload**. The certificate file  needs to be trusted by the client before you upload it. Note that this is valid only for **Secure** **TCP** transport.
     - **Interface:** From the drop-down list, select the interface through which the appliance sends syslog messages to the syslog server.
       
       - **Any**: The appliance chooses any port that is available for sending syslog messages.
       - **LAN**: The appliance uses the LAN1 port to send syslog messages.
       - **MGMT**: The appliance uses the MGMT port if it has been configured. Otherwise, it uses the LAN1 port.
     - **Source:** From the drop-down list, select which syslog messages the appliance sends to the external syslog server:
       
       - **Any:** The appliance sends both internal and external syslog messages.
       - **Internal:** The appliance sends syslog messages that it generates.
       - **External:** The appliance sends syslog messages that it receives from other devices, such as syslog servers and routers.
     - **Node ID**: Specify the host or node identification string that identifies the appliance from which syslog messages are originated. This string appears in the header message of the syslog packet. Select one of the following:
       
       - **LAN**: Use the LAN1 IP address of the appliance. For an HA pair, this is the LAN1 address of the active or passive node. This is the default.
       - **Host Name**: Use the host name of the appliance in FQDN format.
       - **IP and Host Name**: Use both the FQDN and the IP address of the appliance. The IP address can be the LAN1 or MGMT IP address depending on whether the MGMT port has been configured. Note that if the MGMT port is not configured, the LAN1 IP address is used.
       - **MGMT**: Use the MGMT IP address, if the port has been configured. If the MGMT port is not configured, the LAN1 IP address is used. This can be an IPv4 or IPv6 address.
     - **Port:** Enter the destination port number. The default is 514 for TCP and UDP. For Secure TCP, the default port is 6514.
     - **Severity:** Choose a severity filter from the drop-down list. When you choose a severity level, the appliance sends log messages with the selected level and the levels above it. The severity levels range from the lowest, **debug**, to the highest, **emerg**. For example, if you choose **debug**, the appliance sends all syslog messages to the server. If you choose **err**, the appliance sends messages with severity levels **err**, **crit**, **alert**, and **emerg**.
       
       - **emerg**: Panic or emergency conditions. The system may be unusable.
       - **alert**: Alerts, such as NTP service failures, that require immediate actions.
       - **crit**: Critical conditions, such as hardware failures.
       - **err**: Error messages, such as client update failures and duplicate leases.
       - **warning**: Warning messages, such as missing keepalive options in a server configuration.
       - **notice**: Informational messages regarding routine system events, such as "starting BIND".
       - **info**: Informational messages, such as DHCPACK messages and discovery status.
       - **debug**: Messages that contain information for debugging purposes, such as changes in the latency timer settings and AD authentication failures for specific users.
     - **Logging Category**: Select one of the following logging categories:
       
       - **Send all**: Select this to log all syslog messages, irrespective of categories to which it belongs. When you select this option, the appliance logs syslog messages for all the events, including all DNS and Infoblox related events. However, the syslog messages are not prefixed when you select this option.
       - **Send selected categories**: Select this to configure logging categories from the list of available logging categories. Use the arrows to move logging categories from the **Available** table to the **Selected** table and vice versa. The appliance sends syslog messages for the categories that are in the **Selected** table. When you select this option, you must add at least one logging category. The syslog messages are prefixed with a category name to which it belongs. Also, the RPZ events logged in the syslog messages uses specific prefixes for the selected categories. Note that the syslog messages are prefixed when you set logging categories for at least one external syslog server, even if you set other external syslog servers as **Send All**. For more information about syslog prefixes, see Syslog Message Prefixes below.
     - Click **Add** to add the external syslog server information.
     - Optionally, click the **Test** button to test the connection to the syslog server that you configured.
   - **Copy Audit Log Messages to Syslog:** Select this for the appliance to include audit log messages it sends to the syslog server. This function can be helpful for monitoring administrative activities on multiple appliances from a central location.
     
     - **Syslog Facility:** This is enabled when you select **Copy audit log messages to syslog**. Select the facility that determines the processes and daemons from which the log messages are generated.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> Note
> 
> The syslog categories you specify here are different from the logging categories specified in the **Logging** tab in the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor. The external server preserves contents of the selected categories even when selection is changed from **Send** **all** to **Send** **selected** **categories** and vice versa.
