---
title: "Method 1 – Using the LCD"
source: "/space/nios90/1330774706"
pageId: "1330774706"
---
Some of the NIOS appliances have an LCD and navigation buttons on the front panel that allow you to view system status and license information, as well as configure network settings for the LAN1 port.

*Infoblox* *LCD* *and* *Navigation* *Buttons*

*[image: media]*

You can deploy a single independent NIOS appliance by setting its LAN1 port IP address, netmask, and gateway through the LCD. This is the simplest method because you do not need anything other than a physical access to the appliance to complete the initial configuration.

> **warning**
>
> ### Note
> 
> LCD does not support IPv6 addressing.

1. Connect the power cable from the NIOS appliance to a power source and turn on the power.   
   At startup, the Infoblox logo appears in the LCD on the front panel of the appliance. Then the LCD scrolls repeatedly through a series of display screens.
2. To change the network settings for the LAN1 port, press one of the navigation buttons.  
   The LCD immediately goes into the input mode, in which you can enter the IP address, netmask, and gateway for the LAN1 port.
3. Use the navigation buttons to enter an IP address, netmask, and gateway address for the LAN1 port.
4. Cable the LAN1 port of the NIOS appliance to a network as described in the installation guide that shipped with your product.
