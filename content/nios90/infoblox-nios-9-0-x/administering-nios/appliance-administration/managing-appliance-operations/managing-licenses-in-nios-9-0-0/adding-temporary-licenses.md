---
title: "Adding Temporary Licenses"
source: "/space/nios90/1495237087"
pageId: "1495237087"
---
Use the `set temp_license` command to generate and install temporary licenses. This can provide licensed features and functionality for the interim, while you wait for your permanent license to arrive.  
To generate a temporary license:

1. Log in to the NIOS appliance through a remote console window.  
   For more information on how to open a remote console window, refer to the *Infoblox CLI Guide*.
2. At the Infoblox command prompt, enter `set temp_license`.  
   The appliance lists the available licenses, and you select those you need. For more information, see [*set temp_license*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-temp-license).
3. Enter the number of licenses you want to install.
4. Confirm the selection when prompted, and the following message appears:  
   `Temporary license is installed.`

> **warning**
>
> **Note**  
> Once the NIOS license is installed, you must wait for NIOS to restart before you install other licenses.
