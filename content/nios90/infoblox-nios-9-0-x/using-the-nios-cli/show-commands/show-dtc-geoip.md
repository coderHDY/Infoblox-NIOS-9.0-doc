---
title: "show dtc_geoip"
source: "/space/nios90/280887912"
pageId: "280887912"
---
The `show ``dtc_geoip` command provides information about the GeoIP labels that are available in the current MaxMind location database for the respective IP address. You can run this command only if you have installed the DNS Traffic Control license. For more information about DNS Traffic Control, refer to the *Infoblox* *NIOS* *Administrator* *Guide*.

# Syntax

`show dtc_geoip &lt;ip-address&gt;`

| **Argument ** | **Description** |
| --- | --- |
| ip-address | Valid IPv4/IPv6 address of the host. |

# Examples

`Infoblox &gt; ``show`` ``dtc_geoip`` ``54.243.36.49`  
` Continent = North America `  
`Country = United States `  
`Subdivision = Virginia `

`Infoblox &gt; ``show`` ``dtc_geoip`` ``2607:f8b0:400a:804::1012`  
` Continent = North America `  
`Country = United States `  
`Subdivision = Atlanta`
