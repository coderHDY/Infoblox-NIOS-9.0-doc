---
title: "Configuring NSEC3 Salt Length and Hashing Iterations"
source: "/space/nios90/1455063224"
pageId: "1455063224"
---
The salt is a random string, which is appended to the domain name before it gets hashed. The number of iterations indicates the number of additional times the hashing occurs. These serve as a protection against dictionary attacks. The appliance generates a new salt for initial signing and changes it every time a ZSK rollover occurs. Note that when you use a longer salt and higher number of iterations, DNS is more secure and the chances of dictionary attacks on NSEC3 are reduced.  
You can choose the minimum and the maximum salt length at the Grid level and override them at the zone level. Note that the length of the salt has an impact on the size of the NSEC3 record, but it does not have an impact on the performance of the appliance.  
When the number of iterations increases, the DNS client has to validate a additional data and the cost of the DNS server to serve the zone increases. This might also reduce the performance of the system with regards to DNSSEC operations.  
To define salt length and hashing iterations, complete the following:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab. Expand the Toolbar and click **Grid** **DNS** **Properties**.  
   **Zone:** From the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *zone* checkbox, and click the Edit icon. Click **Override** to override the parameters.  
   **Standalone** **appliance**: From the **Data** **Management** tab, select the **DNS** tab. Expand the Toolbar and click **System** **DNS** **Properties**.
2. Select the **DNSSEC** tab and complete the following in the **Basic** tab:

- **Zone-signing** **Key** **Settings**
  
  - **NSEC3** **Salt** **Length**: Specify a minimum and maximum length for NSEC3 salt. The minimum length is one octet and the maximum length is 255 octets. The appliance sets the following default values for minimum and maximum lengths respectively: one and 15 octets.
  - **Number** **of** **NSEC3** **hashing** **iterations**: The appliance uses the default value, ten, for hashing iterations. The minimum value is ten and the maximum value depends on the smallest key size, as defined in RFC 5155 as follows:
    
    - 150 if the key size is equal or less than 1024 bits.
    - 500 if the key size is equal or less than 2048 bits.
    - 2,500 if the key size is equal or less than 4096 bits.

> **warning**
>
> ### Note
> 
> The above fields are displayed only when you select NSEC3 record type.
