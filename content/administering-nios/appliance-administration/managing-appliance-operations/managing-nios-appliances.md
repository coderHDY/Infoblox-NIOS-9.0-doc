---
title: "Managing NIOS Appliances"
source: "/space/nios90/280764842"
pageId: "280764842"
---
To reboot and shut down a NIOS appliance, you can use Grid Manager or the Infoblox CLI. To reset a NIOS appliance, you must use the Infoblox CLI. You can also restart a Grid member or restart a GUI session through Grid Manager. You can also force an HA failover using the GUI.

# Restarting a Grid Member

You can restart a single Grid member or an HA pair on the NIOS appliance. When you restart a Grid member, the appliance logs the task in the audit log.  
To restart a single Grid member:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox.
2. Expand the Toolbar and click **Control** -> **Restart**.
3. In the *Restart* *Product* *on* *Member* dialog box, click **OK** to restart the Grid member.

# Rebooting a NIOS Appliance

You can reboot a single NIOS appliance, a single node in an HA pair, or both nodes in an HA pair. To reboot a single NIOS appliance or one or both nodes in an HA pair:

1. From the **Infoblox Grid** tab, select the **Grid Manager** tab -> **Members** tab -> *Grid_member* checkbox.
2. Expand the Toolbar and click **Control** -> **Reboot**.

- For an HA pair, choose whether to boot one node (and which one) or both nodes, and then click **OK**. Depending on the browser you use, Grid Manager may display a dialog box that indicates the system is unavailable during a restart or reboot.

To reboot a single NIOS appliance using the CLI:

1. Log in to the Infoblox CLI using a superuser account for the NIOS appliance that you intend to reboot.
2. Enter the following CLI command: **reboot**

# Shutting Down a NIOS Appliance

Under normal circumstances, you do not need to turn off or shut down a NIOS appliance. It is designed to operate continuously. However, if you want to turn off a NIOS appliance, use the GUI or the CLI to shut down the appliance, instead of just turning off the power switch.

> **warning**
>
> ### Note
> 
> If there is a disruption in power when the NIOS appliance is operating, the NIOS appliance automatically reboots itself when power is restored.

To shut down a NIOS appliance:

1. From the **Infoblox Grid** tab, select the **Grid Manager** tab -> **Members** tab -> *Grid_member* checkbox.
2. Expand the Toolbar and click **Control** -> **Shutdown**.

- For an HA pair, choose whether to shut down one node (and which one) or both nodes, and then click **OK**.   
  The NIOS appliance shuts down. The fans might continue to operate until the appliance cools down.

To shut down a NIOS appliance using the CLI:

1. Log in to the Infoblox CLI using a superuser account.
2. Enter the following CLI command: `shutdown`

# Forcing an HA Failover

If you want to change which node in an HA pair is active and which is passive, you can force a failover to occur. Within five seconds after initiating a failover, the previously passive node becomes active and assumes ownership of the VIP address. Note that a forced failover causes a temporary service disruption. To proceed with the forced failover, click **OK**. The appliance logs this task in the audit log.  
To restart a single Grid member:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox.
   
   Note the Grid member that you select must be an HA pair.
2. Expand the Toolbar and click **Control** -> **Force** **HA** **Failover**.
3. In the *For* *HA* *Failover* dialog box, click **OK** to change the node in an HA pair.

# Restarting GUI Sessions

You can restart a GUI session through Grid Manager. When you restart GUI on a specific member, the appliance logs off all other GUI sessions that are currently running even though they are opened in different browsers or another system. The appliance logs this task in the audit log.  
To restart GUI sessions on a Grid member:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox.
2. Expand the Toolbar and click **Control** -> **Restart** **GUI**.
3. In the *Restart* *GUI* dialog box, click **OK** to restart the NIOS appliance.

# Resetting a NIOS Appliance

There are three ways to reset a NIOS appliance:

- Resetting the Database
- Resetting a NIOS Appliance to Factory Settings
- Resetting the NIOS Appliance to Factory Settings and Removing Licenses You can perform these functions only through the CLI.

**Resetting** **the** **Database**  
You can reset the database if you lose the administrator account and password or if you want to clear the database but preserve the log files to diagnose a problem. This function removes the configuration files, and the DNS and DHCP data from the appliance database. During this procedure, you are given the option to preserve the network settings of the appliance, which are the IP address and subnet mask, the IP address of the gateway, the host name, and the remote access setting.  
To reset the database:

1. Log in to the Infoblox CLI using a superuser account.
2. Enter the following CLI command: `reset database`  
   The appliance then displays a message similar to the following:  
   `The following network settings can be restored after reset: IP Address: 10.1.1.10`  
   `Subnet Mask: 255.255.255.0`  
   `Gateway: 10.1.1.1`  
   `Host Name: ns1.corpxyz.com Remote Console Access: true`  
   `The entire database will be erased.`  
   `Do you wish to preserve basic network settings? (y or n)`
3. Press the **Y** key to preserve the network settings or the **N** key to return the network settings to their default values (192.168.1.2, 255.255.255.0, 192.168.1.1).

## Resetting a NIOS Appliance to Factory Settings

You can reset a NIOS appliance to its original factory settings. This removes the database, network settings, logs, and configuration files. Then, it reboots with its factory settings, which are the default user name and password, and default network settings. When you perform this procedure, the appliance does not give you the option to preserve your network settings.

> **warning**
>
> ### Note
> 
> If you have previously imported HTTPS certificates, the appliance regenerates the certificates and replaces them.

To reset the NIOS appliance to its factory settings:

1. Log in to the Infoblox CLI using a superuser account.
2. Enter the following CLI command: **reset** **all**

## Resetting the NIOS Appliance to Factory Settings and Removing Licenses

You can also reset a NIOS appliance to its original factory settings and remove all the licenses installed on the appliance. This removes the database, network settings, logs, configuration files, and licenses. The appliance then reboots with its factory settings, which are the default user name and password, and default network settings.

> **warning**
>
> ### Note
> 
> If you have previously imported HTTPS certificates, the NIOS appliance regenerates the certificates and replaces them.

To reset the NIOS appliance to its factory settings and remove all its licenses:

1. Log in to the Infoblox CLI using a superuser account.
2. Enter the following CLI command: **reset** **all** **licenses.**
