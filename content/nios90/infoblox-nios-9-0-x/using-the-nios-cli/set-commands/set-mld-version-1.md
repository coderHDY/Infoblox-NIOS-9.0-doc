---
title: "set mld_version_1"
source: "/space/nios90/280757175"
pageId: "280757175"
---
The `set mld_version_1` command sets the IPv6 MLD (Multicast Listener Discovery) protocol to version 1, as described in *RFC* *2710,* *Multicast* *Listener* *Discovery* *for* *IPv6*. MLD enables the appliance to detect multicast listeners on its directly attached links and discover which multicast addresses are of interest.  
 The appliance runs MLD version 2, as described in *RFC* *3810,* *Multicast* *Listener* *Discovery* *Version* *2* *for* *IPv6*, by default. MLD version 2 is interoperable with version 1.

# Syntax

`set mld_version_1`

This command has no arguments.

# Example

`Infoblox &gt; ``set`` ``mld_version_1`  
` Current MLD version: 2`  
` Set Multicast Listener Discovery Version 1? (y or n): y New MLD Settings:`  
` Use MLD version 1: Yes`  
` Is this correct? (y or n): y MLD version: 1 is saved to database. MLD version is set for IPv6. `
