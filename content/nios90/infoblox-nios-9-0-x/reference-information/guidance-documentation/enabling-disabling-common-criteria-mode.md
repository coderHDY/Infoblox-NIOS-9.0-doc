---
title: "Enabling / Disabling Common Criteria Mode"
source: "/space/nios90/280791085"
pageId: "280791085"
---
> **warning**
>
> Infoblox recommends that you do not change the Common Criteria setting of a NIOS appliance that is in a production environment.

Before you enable Common Criteria mode, you must reset a NIOS appliance to its original factory settings. This removes the database, network settings, logs, and configuration files. Then, it reboots with its factory settings, which are the default user name and password, and default network settings. If you do not reset the appliance to its original factory settings, the appliance will not be Common Criteria compliant, even if you enable Common Criteria mode.

To reset the NIOS appliance to its factory settings:

1. Log in to the Infoblox CLI using a superuser account.
2. Enter the following CLI command:  
   `reset all`

You can enable and disable Common Criteria mode from the Infoblox CLI only. Do the following to set Common Criteria mode on the appliance:

1. Log in to the Infoblox CLI. After executing the `resetall` command, you can log in to the TOE only by using the default superuser admin name `admin` and password `infoblox`.
2. Type the following command:  
   `set cc_mode`

The TOE reboots and goes through boot time self tests. If the test fails, the TOE goes into a loop and displays an error message on the serial console. Otherwise, it displays the Login prompt after the self tests.  
To clear Common Criteria mode on an appliance, log in to the Infoblox CLI and execute the command: `reset all`.

# Using the CLI

Only superusers can access the CLI. To ensure security, access to the CLI is permitted through a direct console connection only. Note that activating the option **Enable** **Remote** **Console** **Access** in the Grid or Member Properties editor will result in a non-compliant system.  
To access the Infoblox CLI through the console port:

1. Connect a serial cable from the console port on your management system to the console port on the appliance. The appliance has a male DB-9 console port on its front panel.
2. Use the following connection settings to launch an emulation session through a serial terminal emulation program such as Hilgraeve Hyperterminal® (provided with the Windows® operating systems):
   
   - Bits per second: 9600
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
> After you log in, change the default user name and password of the default superuser admin to prevent unauthorized access to the TOE. For more information on changing passwords, see [*Changing the Password and Email Address*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/setting-login-options/changing-the-password-and-email-address).

For more information about the Infoblox CLI, refer to the *Infoblox* *CLI* *Guide*.
