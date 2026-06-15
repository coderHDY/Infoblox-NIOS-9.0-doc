---
title: "Configuring Roaming Hosts"
source: "/space/nios90/1356268553"
pageId: "1356268553"
---
To configure a roaming host, perform the following tasks:

1. Enable support for roaming hosts at the Grid level. For information, see, Enabling Support for Roaming Hosts below.
2. Add a roaming host:
   
   - To add an IPv4 roaming host, see the *Adding IPv4 Roaming Hosts* section below
   - To add an IPv6 roaming host, see the *Adding IPv6 Roaming Hosts* section below
   - To add a dual stack roaming host, see the *Adding IPv4/IPv6 Roaming Hosts* section below
   - Optionally, configure DHCP properties for the roaming host. You can override properties set for the upper levels and enter unique values for the roaming hosts. For information, see [*Defining IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options/defining-ipv4-dhcp-options).

You can do the following after you configure roaming hosts:

- View the configured roaming hosts. For information, see the *Viewing Roaming Hosts* section below.
- Modify existing roaming hosts. For information, see the *Setting Properties for Roaming Hosts* section below.
- Delete roaming hosts that are not currently in use. For information, see the *Deleting Roaming Hosts* section below.

> **warning**
>
> **Note**
> 
> In NIOS 9.0.6 and later, to search for roaming hosts configured with IPv6 addresses by using MAC addresses, choose **V6 MAC ADDRESS** in the **Choose Filter** drop-down list when using the Global Search and smart folders search features.
