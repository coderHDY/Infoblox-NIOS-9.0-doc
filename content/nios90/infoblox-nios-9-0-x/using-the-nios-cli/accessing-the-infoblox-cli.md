---
title: "Accessing the Infoblox CLI"
source: "/space/nios90/280266505"
pageId: "280266505"
---
You can access the Infoblox CLI from a management system. The management system is the computer from which you configure and monitor the NIOS appliance. You can access the Infoblox CLI from the management system directly through a serial cable or remotely across an Ethernet network.

- Console port access—Access the Infoblox CLI through a direct console connection from your management system to the appliance.
- SSHv2 client access—Accessing the Infoblox CLI remotely by making an SSHv2 connection across an Ethernet network.

> **warning**
>
> ### Note
> 
> Only superusers can log in to the appliance through a console connection.

**Console** **Port** **Access**  
You can access the Infoblox CLI by using a terminal emulation program from the management system through a direct console connection.  
To access the Infoblox CLI through the console port:

1. Connect a serial cable from the console port on your management system to the console port on the appliance. The appliance has a male DB-9 console port on its front panel.
2. Use the following connection settings to launch an emulation session through a serial terminal emulation program such as Hilgraeve Hyperterminal® (provided with the Windows® operating systems):
   
   - Bits per second: `9600`
   - Data bits: 8
   - Parity: None
   - Stop bits: 1
   - Flow control: Xon/Xoff
3. Use the following default user name and password to log in to the Infoblox appliance:  
   `admin`   
   `infoblox`



> **warning**
>
> ### Note
> 
> User names and passwords are case-sensitive.



**SSHv2** **Client** **Access**  
You can access the Infoblox CLI from a remote management system. You must first enable remote console access before you can remotely access the Infoblox CLI. By default, remote console access (SSHv2 access) is disabled on the Infoblox appliance.  
You can enable remote console access on the Infoblox appliance through either the Infoblox GUI or the CLI. To enable remote console access through the Infoblox GUI:

1. Make an HTTPS or console connection to the appliance and log in to the appliance.
2. For a Grid member or Grid Master, complete the following:

1. From the **Grid** tab, select the **Grid Manager** tab, and then click **Grid Properties** -&gt; **Edit** from the Toolbar.  
2. In the *Grid Properties* editor, select the **Security** tab, and then select **Enable Remote Console Access**.   
3. Click **Save & Close**.

For an independent appliance, complete the following:

1. From the **System** tab, select the **System Manager** tab, and then click **System Properties** -&gt; **Edit** from the Toolbar.
2. In the *System Properties* editor, select the **Security** tab, and then select **Enable Remote Console Access**.
3. Click **Save&Close**.

To enable remote console access through the CLI:

1. From the command line, enter the following after the *Infoblox* *&gt;* prompt:  
   `set remote_console`
2. Enter **y** at the *Enable* *remote* *console* *access* *(grid-level)?* *(y* *or* *n):* prompt.
3. Confirm the settings.

After you enable the remote console access, you can access the Infoblox CLI from a remote location using an SSHv2 client.  
To access the Infoblox CLI using an SSHv2 client:

1. On the management system, open a remote console connection through an SSHv2 client.
2. In a shell window or terminal window, log in with an account that has superuser privileges.
3. Enter the user name and host name or IP address of the appliance. For example:  
   `ssh admin@&lt;ip address&gt;`
4. Optionally, you can launch a graphical SSHv2 client and enter the information in the appropriate fields.
