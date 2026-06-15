---
title: "Retrieving the Hardware ID of an Appliance"
source: "/space/nios90/1495204325"
pageId: "1495204325"
---
After you have set up or pre-provisioned a physical appliance or vNIOS virtual appliance, obtain the hardware ID or the virtual host hardware ID in case of a vNIOS virtual appliance:

1. Log in to the NIOS CLI, or open a terminal session for the VM and open the NIOS CLI.
2. Run the `show hwid` command as shown in the following example:  
   `Infoblox > show hwid`  
   `  Hardware ID: 4106202210700004`   
   Copy and paste the `Hardware ID` value for convenience.
   
   You can also run a `show license` command to obtain the same information:  
   `nios-vm-ib-1420-gm > show license`  
   ` Version : 6.11.0-248090`   
   `Hardware ID : 564d41e13a1cc55affb9bad4e3b5c48a`

> **warning**
>
> **Note**
> 
> Make a note of the hardware IDs that you obtain during this procedure. Each of these unique Hardware ID values can be associated with a License Activation ID from your Contract Notification email. If a license key is installed for the current VM, that key value also appears in the output for the `show license` command.
