---
title: "IB-FLEX Resource Usage"
source: "/space/nios90/1432819786"
pageId: "1432819786"
---
The tables in this topic list resource usage for different IB-FLEX appliance flavors in various DNS and Grid deployment scenarios. The sizing guidelines are presented for deployments prior to and from NIOS 9.0.4 onward. Refer to the correct table according to the NIOS version to ensure that your IB-FLEX appliances are provisioned with adequate resources for reliable performance.

### Prior to NIOS 9.0.4

*Total Resource Usage for Different Use Cases Prior to NIOS 9.0.4*

> **warning**
>
> **Note**  
> Advanced DNS Protection (ADP)/Threat Protection has been renamed to DNS Infrastructure Protection from NIOS 9.0.8 onwards.

| **Intended Use  ** | **Total vCPU** | **Total Memory GB (Without  DNS Infrastructure Protection)** | **Total Memory GB (With DNS Infrastructure Protection)** | **Database Object Count** | **Grid Master Capable** |
| --- | --- | --- | --- | --- | --- |
| Small Authoritative DNS | 4 | 8 |  | 100,000 | No |
| 4 |  | 10 | 100,000 | No |
| Medium Authoritative DNS | 8 | 16 |  | 200,000 | Yes |
| 8 |  | 22 | 600,000 | Yes |
| Large Authoritative DNS | 16 | 32 |  | 5,000,000 | Yes |
| 16 |  | 40 | 16,000,000 | Yes |
| Recursive DNS (without acceleration) | 6 | 14 |  | 100,000 | Yes |
| 6 |  | 18 | 200,000 | Yes |
| Large Recursive DNS (without acceleration) | 14 | 28 |  | 2,000,000 | Yes |
| 14 |  | 36 | 5,000,000 | Yes |
| Small Grid Master | 10 | 18 | NA | 600,000 | Yes |
| Medium Grid Master | 12 | 22 | NA | 1,000,000 | Yes |
| Large Grid Master | 16 | 32 | NA | 5,000,000 | Yes |
| Small Recursive DNS (with acceleration) | 10 | 12 |  | 100,000 | No |
| 10 |  | 20 | 100,000 | No |
| Medium Recursive DNS (with acceleration) | 16 | 20 |  | 100,000 | No |
| 16 |  | 28 | 100,000 | No |
| Large Recursive DNS (with acceleration) | 26 | 30 |  | 100.000 | No |
| 26 |  | 38 | 100.000 | No |
| Large Grid Master (with acceleration) | 20 | 38 | NA | 100,000 | Yes |

### From NIOS 9.0.4

*Total Resource Usage for Different Use Cases From NIOS 9.0.4*

| **Intended Use  ** | **Total vCPU** | **Total Memory GB (Without DNS Infrastructure Protection)** | **Total Memory GB (With DNS Infrastructure Protection)** | **Database Object Count** | **Grid Master Capable** |
| --- | --- | --- | --- | --- | --- |
| Small Authoritative DNS | 4 | 8 | 10 | 100,000 | No |
| Medium Authoritative DNS | 8 | 16 | 22 | 600,000 | Yes |
| Large Authoritative DNS | 16 | 32 | 40 | 16,000,000 | Yes |
| Recursive DNS (without acceleration) | 6 | 14 | 18 | 200,000 | Yes |
| Large Recursive DNS (without acceleration) | 14 | 28 | 36 | 5,000,000 | Yes |
| Small Grid Master | 10 | 18 | NA | 1,000,000 | Yes |
| Medium Grid Master | 12 | 22 | NA | 2,000,000 | Yes |
| Large Grid Master | 16 | 32 | NA | 16,000,000 | Yes |
| Small Recursive DNS (with acceleration) | 10 | 12 | 20 | 100,000 | No |
| Medium Recursive DNS (with acceleration) | 16 | 20 | 28 | 100,000 | No |
| Large Recursive DNS (with acceleration) | 26 | 30 | 38 | 300,000 | No |
| Large Grid Master (with acceleration) | 20 | 38 | NA | 300,000 | Yes |
| Medium Authoritative DNS (with acceleration) | 16 | 64 | 72 | 300,000 | No |
| Large Authoritative DNS (with acceleration) | 24 | 120 | 128 | 600,000 | No |

Note the following about IB-FLEX:

To enable Authoritative DNS and DNS Cache Acceleration on the same member, note the following:

- If the DNS Cache Acceleration (DCA) service is running, DNS authority zones can be added.
- Adding an authoritative zone is allowed on servers running with DNS Cache Acceleration.
- Assigning name server groups with DNS Cache Acceleration members for authoritative zones is allowed.
- Authoritative responses from authoritative DNS are not cached in DNS Cache Acceleration.
- Zone transfer configuration for authoritative zones on DNS Cache Acceleration enabled members is allowed.
