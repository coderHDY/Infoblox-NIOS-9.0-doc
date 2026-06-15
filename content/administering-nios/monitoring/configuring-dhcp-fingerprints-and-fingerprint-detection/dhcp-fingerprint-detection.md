---
title: "DHCP Fingerprint Detection"
source: "/space/nios90/280402989"
pageId: "280402989"
---
NIOS utilizes DHCP fingerprint detection to identify IPv4 and IPv6 mobile devices such as laptop computers, tablets and smart phones, on your network. Due to the broadcast and pervasive nature of DHCP, using DHCP fingerprint detection is an efficient way to perform system identification and inventory. You can use DHCP fingerprint detection to track devices on your network, block those that are not allowed (such as gaming consoles and home routers), and plan for future growth by accessing trending information such as the number of Apple iPhones versus that of Android phones.

When a remote DHCP client sends a DHCP REQUEST message, it includes a set of DHCP options, such as option 55 and 60. Option 55 contains an option number sequence the appliance uses to interpret the list of DHCP options that the client requests. The appliance returns the values of these requested options if the information is available.  
Option 60 contains a value that indicates the device type of the requesting client. Information in option 55 or 60 is incorporated to form a unique identifier known as the DHCP fingerprint, which the appliance uses to identify the requesting client.  
On an Infoblox appliance, DHCP fingerprint detection is enabled by default for all new installations. You can disable this feature at the Grid and member levels. For information, see *[Enabling and Disabling DHCP Fingerprint Detection](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270341)*. As illustrated in the below figure, the appliance automatically matches option 55 and then option 60 in DHCP REQUEST messages against standard and custom DHCP fingerprints in the database. Once the appliance finds a match, it either grants or denies a lease to the requesting client based on the DHCP fingerprint filters that you apply to the DHCP range. For information about how to configure DHCP fingerprints, see *[Configuring DHCP Fingerprint Filters](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663241)*. For information about how to define and apply DHCP fingerprint filters, see *[Configuring DHCP Fingerprint Filters](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663241)*. To obtain trending information about the top OSs (operating systems) or vendor IDs for remote clients, Infoblox provides a few reports from which you can extract data. For information about reports, see *[Infoblox Reporting and Analytics](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280659447)*.

*DHCP* *Fingerprint* *Detection*

*[drawio]*

# About DHCP Fingerprints

When a DHCP client sends a REQUEST message and includes DHCP option 55 (the parameter request list) and option 60 (the vendor identifier), it provides information about its OS and the device type. The combination of the option sequence or vendor ID in option 55 or 60 is used to infer the OS and device type of the remote client. These parameters are then incorporated into a DHCP fingerprint that provides unique information about this client.  
For example, the option number sequence for a Microsoft Windows Kernel 5.1 and 5.2 systems in option 55 can be one of the following:

`1,15,3,6,44,46,4`  
`1,15,3,6,44,46,47,31,33,121,249,43,200`  
`1,15,3,6,44,46,47,31,33,249,43`  
`1,15,3,6,44,46,47,31,33,249,43,252`  
`1,15,3,6,44,46,47,31,33,249,43,252,12`  
`15,3,6,44,46,47,31,33,249,43`  
`15,3,6,44,46,47,31,33,249,43,252`  
`15,3,6,44,46,47,31,33,249,43,252,12`  
`28,2,3,15,6,12,44,47`

The option number sequence for an Apple Mobile Device can be one of the following:

`1,121,3,6,15,119,252,0,0,0,0,0,0,0,0,0`  
`1,121,3,6,15,119,252,118`  
`1,3,6,12,15,28,44,121`  
`1,3,6,15,19`  
`1,3,6,21,1,25,2,82`

Additionally, DHCP option 60 tracks the vendor ID. The vendor ID can be generic or specific. For example, the vendor ID `MSFT 5.0` for a Microsoft Windows Kernel 5.1 or 5.2 system and a Microsoft Windows Kernel 6.0 system can be the same. For certain Microsoft Windows Kernel 5.0 systems, the vendor ID can be `MSFT`, which is generic, or it can be `MSFT 5.0`, which is specific. Depending on how specific the option number sequence and the vendor ID are, this information can form a unique identifier, the DHCP fingerprint for a remote client.

> **warning**
>
> **Note**
> 
> If you have enabled a firewall and if the corresponding firewall rules or policies are set to modify options 55 and 60 of the remote DHCP client to mask the identity of the client, then  fingerprinting clients cannot be achieved.
