---
title: "Using the Traffic Capture Tool"
source: "/space/nios90/1393459335"
pageId: "1393459335"
---
You can capture the traffic on one or all of the ports on a NIOS appliance, and then view it using a third-party network protocol analyzer application, such as the Wireshark – Network Protocol Analyzer™. Using this tool, you can capture traffic for a single member or multiple Grid members simultaneously. The NIOS appliance must have a minimum of 500 MB of free disk space to start the traffic capture; otherwise, the traffic capture might fail.   
The NIOS appliance saves all the traffic it captures in a .cap file and compresses it into a .tar.gz file. Your management system must have a utility that can extract the .tar file from the .gzip file, and an application that can read the .cap (capture) file format. The size of the .cap file is limited to 1 GB for NIOS appliances. You can also transfer the traffic capture file to your local management system, a TFTP server, an FTP server, or a SCP server.

NIOS saves failed traffic capture file transfer attempts in the syslog. Traffic capture file transfers can fail due to remote server issues, such as an invalid server IP address, or an incorrect username, or a password, or an invalid path. Note that the traffic capture fails when the disk space on the member is insufficient, but the file transfer will be successful. The NIOS appliance logs a warning message in the syslog when the traffic capture fails. You can find the following information about traffic capture and file transfers in the audit log:

- Start and stop actions performed on the members for traffic capture.
- Whether the traffic capture file was transferred to a server or downloaded to a local directory. For more information about the audit log, see Using the Audit Log above.

This section explains the process of capturing traffic, and how to download the traffic capture file to your management system. After that, you can extract the traffic capture file and view it with a third-party traffic analyzer application. The traffic capture file is shared between admin users.

You can also configure Grid Manager to trigger a traffic capture at set intervals and parameters. If Grid Manager detects that a parameter has breached a configured threshold or crossed the configured duration of time, it triggers a traffic capture. For more information about automated traffic capture, see [*Enabling Automated Traffic Capture*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760742).

> **warning**
>
> ### Note
> 
> The NIOS appliance always saves a traffic capture file as *&lt;member name&gt;_&lt;timestamp&gt;_tcpdumpLog.tar.gz*. Example:* infoblox.localdo_0_2018-10-15-03-47-53_tcpdumpLog.tar.gz*. For FTP and TFTP transfers, the name of the file is added as a prefix. Example: *filename.infoblox.localdo_0_2018-11-09-09-30-07_tcpdumpLog.tar.gz*

For a single member, you can also capture traffic on the NIOS appliance through the [*Infoblox CLI*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280920695) using the `set traffic_capture` command. However, you cannot use this command to capture traffic for multiple members. NIOS displays the traffic capture status and it allows you to download the captured traffic, irrespective of whether the traffic capture is initiated from the Infoblox CLI or from Grid Manager.  
To capture traffic for a single member or multiple Grid members:

1. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -> **Members** tab, and then click **Traffic Capture** from the Toolbar.  
   OR  
   From the **Administration** tab, select the **Logs** tab → **Syslog** tab, and then click **Traffic Capture** from the Toolbar.
2. In the *Traffic Capture* dialog box, complete the following:  
   **Members**
   
   - **Name**: Click the Add icon to add either a single or multiple Grid members for which you want to capture traffic. When you click the Add icon, Grid Manager displays the *Member Selector* dialog box from which you can select one or multiple members. Use SHIFT+click to select multiple contiguous rows or use CTRL+click to select multiple non-contiguous rows. Click **OK**. The selected members are added to the list of members in the **Members **table. You cannot add offline members to the list or capture traffic on an offline member.
     
     Selecting members in the **Grid Manager** → **Members** tab does not capture traffic for the selected member. To capture traffic, you must select members from the *Member Selector* dialog box.
   - **Interface**: Select the port on which you want to capture traffic. You can view the selected interface while the traffic capture is in progress. Note that if you enabled the LAN2 failover feature, the LAN and LAN2 ports generate the same output and Grid Manager displays the interface as **BOND** while the traffic capture is in progress. By default, the interface is set to **ALL** after the traffic capture process stops. For information about the LAN2 failover feature, see as described in [*Using the LAN2 Port*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765014).
     
     For vNIOS appliances, some of the options in the drop-down list may vary depending on your vNIOS configuration. For example, if you are using a single network interface instance of a vNIOS for Google Cloud appliance, you will see choices specific to the LAN1 interface only.
     
     - **LAN:** Select this to capture all the traffic the LAN port receives and transmits.
     - **MGMT:** Select this to capture all the traffic the MGMT port receives and transmits.
     - **LAN2**: Select to capture all the traffic the LAN2 port (if enabled) receives and transmits.
     - **ALL:** Select this to capture the traffic addressed to all ports. Note that the NIOS appliance only captures traffic that is addressed to it.
     - **LANxnnnn**: If you have configured VLANs on the LAN1 or LAN2 port, the appliance displays the VLANs in the format LANx nnnn, where x represents the port number and nnnn represents the associated VLAN ID.
   - **File Size:** Displays the size of the traffic capture log file, in kilobytes, for the respective member.
   - **Status**: Displays the status of the traffic capture session on the member. The status can be one of the following:
     
     - **STOPPED**: Indicates that the traffic capture session has stopped.
     - **RUNNING**: Indicates that the traffic capture session is in progress.
     - **NOT STARTED:** Indicates that the traffic capture session has not started.
   - **Transfer Status**: Displays the status of the traffic capture file transfer. The status can be one of the following:
     
     - **NOT STARTED**: Indicates that the file transfer has not started.
     - **STARTED**: Indicates that the file transfer has started.
     - **COMPLETED**: Indicates that the file transfer has been completed.
     - **FAILED**: Indicates that the file transfer has failed.
3. **Seconds** **to** **run:** Specify the number of seconds you want the traffic capture tool to run.
4. **Capture** **Control**: Click the Start icon to start the capture. Note that the start action will overwrite the existing traffic capture file. You can click the Stop icon to stop the capture after you start it.
5. **Transfer To**: Select the destination to transfer the traffic capture file. You can select **My Computer**, **TFTP**, **FTP**, or **SCP** from the drop-down list.
   
   - **My Computer**: Transfer the traffic capture file to a local directory on your computer. This is the default.
     
     Note to avoid consumption of the Grid Master disk space, NIOS restricts downloading the traffic capture files from multiple members to a local directory on your computer.
   - **TFTP**: Transfer the traffic capture file to a TFTP server.
     
     - **Filename**: Enter the directory path and the file name of the traffic capture file. For example, you can enter `/home/test/traffic_capture_filename` where `traffic_capture_filename` is the name of the file.
     - **IP Address of TFTP Server**: Enter the IP address of the TFTP server to which you want to transfer the traffic capture file.
   - **FTP**: Transfer the traffic capture file to an FTP server.
     
     - **Filename**: Enter the directory path and the file name of the traffic capture file. For example, you can enter `/home/test/traffic_capture_filename` where `traffic_capture_filename` is the name of the file.
     - **IP Address of FTP Server**: The IP address of the FTP server.
     - **Username**: Enter the username of your FTP account.
     - **Password**: Enter the password of your FTP account.
   - **SCP**: Transfer the traffic capture file to an SCP server.
     
     - **Filepath**: Enter the directory path of the traffic capture file. For example, you can enter `/home/test/`.
     - **IP Address of SCP Server**: The IP address of the SCP server.
     - **Username**: Enter the username of your SCP account.
     - **Password**: Enter the password of your SCP account.
6. **Uncompressed Capture File Size**: Select the members for which you want to download the traffic capture file and then click **Download **to download the captured traffic. You can download and save the file only after the capture stops, but not when the tool is running. You can rename the file if you want. NIOS updates the size of the report when the capture tool is running.  
   Note the NIOS appliance must have free disk space of at least 500MB + size of the traffic capture file (2 GB/1 GB, depending on the appliance model) to download the traffic capture file.
7. **Last updated**: The timestamp of the last traffic capture process.
8. Use terminal window commands (Linux) or a software application (such as StuffIt™ or WinZip™) to extract the contents of the .tar.gz file.
9. When you see the traffic.cap file in the directory where you extract the .tar.gz file, open it with a third-party network protocol analyzer application.
