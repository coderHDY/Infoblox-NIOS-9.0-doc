---
title: "Configuring IPv4 BOOTP and PXE Properties"
source: "/space/nios90/280663785"
pageId: "280663785"
---
You can configure the DHCP server to support IPv4 clients that use BOOTP (bootstrap protocol) or that include the TFTP server name option and boot file name option in their DHCPREQUEST messages. You can specify the name or IP address of the boot server and the name of the file the host needs to boot.  
In addition, you can configure the DHCP server to support hosts that use PXE (Preboot Execution Environment) to boot remotely from a server. When such a host starts up, it first requests an IP address so it can connect to a server on the network and download the file it needs to boot. After it downloads the file, the host reboots and sends another IP address request. To better manage your IP resources, set a different lease time for PXE boot requests. You can configure the DHCP server to allocate an IP address with a shorter lease time to hosts that send PXE boot requests, so IP addresses are not leased longer than necessary.

> **warning**
>
> **Note**
> 
> When you assign a failover association to serve DHCP ranges and networks, NIOS denies dynamic BOOTP clients by default, regardless of whether you select or deselect the **Deny** **BOOTP** **Requests** option from Grid Manager. However, if the DHCP ranges or networks are assigned to a single DHCP server (not a failover association), NIOS does not automatically deny dynamic BOOTP clients. In this case, you must manually select the **Deny** **BOOTP** **Requests** option through Grid Manager to ensure that NIOS denies BOOTP requests to avoid problems such as receiving two IP addresses for the same network device.

You can configure BOOTP and PXE properties at the Grid level and override them for members, IPv4 network containers, IPv4 networks, DHCP ranges, fixed addresses, and reservations, host addresses, and roaming hosts. You cannot configure BOOTP and PXE properties for IPv6 DHCP objects.  
To configure or override BOOTP and PXE properties:

1. **Grid**** Level**: From the **Data**** Management** tab, select the **DHCP** tab, and then click **Grid ****DHCP**** Properties** from the Toolbar.  
   **Member**** Level**: From the **Data**** Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox, and then click the Edit icon.  
   **Network**** Level**: From the **Data**** Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* checkbox, and then click the Edit icon.  
   **Network**** Container**: From the **Data**** Management** tab, select the **IPAM** tab -&gt; *network_container* checkbox, and then click the Edit icon.  
   **DHCP ****Range ****Level**: From the **Data**** Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network*-&gt; *addr_range* checkbox, and then click the Edit icon.  
   **Fixed**** Address**** Level**: From the **Data**** Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network -&gt;**fixed_address* checkbox, and then click the Edit icon.  
   **Reservation**: From the **Data ****Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network -* &gt; *reservation* checkbox, and then click the Edit icon.
2. In the *DHCP**Properties* editor, select the **BOOTP/PXE** tab and complete the following:
   
   - **PXE**** Lease**** Time**: Click **Override** and select **Enable**** PXE ****Lease**** Time** if you want the DHCP server to use a different lease time for PXE clients. You can specify the duration of time it takes a host to connect to a boot server, such as a TFTP server, and download the file it needs to boot. For example, set a longer lease time if the client downloads an OS (operating system) or configuration file, or set a shorter lease time if the client downloads only configuration changes. Enter the lease time for the preboot execution environment for hosts to boot remotely from a server.
   - **Deny**** BOOTP ****Requests**: Select this checkbox to disable the BOOTP settings and deny BOOTP boot requests. If you assign DHCP ranges or networks to a single DHCP server (not a failover association), NIOS does not automatically deny dynamic BOOTP clients. In this case, you must select this option to ensure that NIOS denies BOOTP requests to avoid problems such as receiving two IP addresses for the same network device.
   - Complete the following in the **BOOTP**** Settings** section:
     
     - **Boot**** File:** Enter the name of the boot file the client must download.
     - **Next**** Server:** Enter the IP address or hostname of the boot file server where the boot file is stored. Complete this field if the hosts in your network send requests for the IP address of the boot server. If the TFTP server is the NIOS appliance that is also serving DHCP, enter the IP address of the appliance.
     - **Boot** **Server:** Enter the name of the server on which the boot file is stored. Clients can request for either the boot server name or IP address. Complete this field if the hosts in your network send requests for the boot server name. If the TFTP server is the appliance that is also serving DHCP, enter the name of the appliance

> **warning**
>
> **Note**
> 
> Enter values in both the **Next** **Server** and **Boot** **Server** fields if some hosts on your network require the boot server name and others require the boot server IP address.

3. Save the configuration and click **Restart** if it appears at the top of the screen.

Note that a few characters need manual escaping when you configure a DHCP boot file name, in order to keep the dhcpd.conf file consistent. If you do not use appropriate escape characters, then it might lead to a non working boot file name. The following characters require manual escaping:

- `'\t'`- Tabulation character
- `'\r'`- Carriage return
- `'\n'`- New line
- `'\b'`- Bell
- `'\xYY`'- YY hex-number (a-f, 0-9)

For example, if you set the 'Boot File' to:

`'\x86\topdir\subdir\file.img'`

You might need to enter \x and \t as the manual escape characters:

`'\\x86\\topdir\subdir\file.img'`

You can also specify all \ as the manual escape character:

`'\\x86\\topdir\\subdir\\file.img'`

The above commands result in the underlying dhcpd.conf file:

`'\x5cx86\x5ctopdir\\subdir\\file.img'`

or

`'\x5cx86\x5ctopdir\x5csubdir\x5cfile.img'`
