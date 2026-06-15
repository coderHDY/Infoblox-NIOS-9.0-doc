---
title: "Configuring DDNS Update Verification"
source: "/space/nios90/280664865"
pageId: "280664865"
---
The DHCP server can handle DDNS updates differently, depending on how stringently you configure record handling. You can configure the DHCP server to update records only after passing verification. You can adjust the way DHCP handles updates so the DHCP server updates records after passing less stringent verification requirements, or without any type of verification.  
To provide a measure of protection against unintentional changes of DNS data, NIOS appliances support the generation and use of TXT records, as described in IETF draft, *draft-ietf-dhc-dhcp-dns-12.txt* and by the ISC (Internet Systems Consortium). When DHCP updates or deletes an A or AAAA record, the corresponding TXT record is checked first to verify the authenticity of the update. The TXT record is based on a hash of the DHCID which is unique to each client, usually based in part on the MAC address or the DUID. If the client requests an update to DNS, the DHCP server first checks the TXT record to verify that it matches the client that originally inserted the record. This process provides assurance that the updates are from the same client. These security checks are based upon inserting a cryptographic hash of the DHCID (DHCP Client Identifier) into a DNS TXT RR and then verifying that value before updating. For example, a sample client update adds the following records in DNS:

|  |
| --- |
| oxcart.lo0.net. | 21600 | IN A 172.31.1.20 |
| oxcart.lo0.net. | 21600 | IN TXT "313ce164780d34b91486b7c489ed7467e6" |
| 20.1.31.172.in-addr.arpa. | 21600 | IN PTR oxcart.lo0.net. |

However, your DNS configuration might require that the NIOS appliance handle DNS record updates differently than described in draft-ietf-dhc-dhcp-dns-12.txt. Your specific requirements might benefit from less-stringent verification of the DHCID, or might require skipping verification entirely. Verification checks might cause complications in some specific cases described below:

- **Mobility:** The TXT record is based on the DHCID unique to each client and is usually based on the MAC address or DUID of the interface. Devices such as laptops that connect to both wired and wireless networks have different MAC addresses or DUIDs and different DHCID values for each interface. In this scenario, after either one of the network interfaces inserts a DNS record, updates are allowed from that interface only. This results in a disruption of service for DDNS updates when roaming between wired and wireless networks.
- **Migration:** The second problem occurs during a migration from non-ISC based systems to ISC systems. For example, if the user is migrating from a Microsoft-based system, the clients have A or AAAA and PTR records in the DDNS updates but no TXT records. As a result, new DDNS updates fail after the migration.
- **Mixed** **Environments:** The final problem occurs in mixed ISC and non-ISC environments. For example, assume that both Microsoft and ISC DHCP servers update DNS records on the appliance. In a mixed environment, since the Microsoft DHCP server does not insert the TXT records, DDNS updates from ISC-based systems fail while updates from the Microsoft DHCP server are committed into the database. This behavior is applicable only when you select **Standard** **ISC** and **Check** **TXT** **only** DDNS update verification modes.

The NIOS appliance offers four modes to handle DDNS updates as described in the DDNS Update Verification Mode table :   
*DDNS* *Update* *Verification* *Mode*

| **Mode** | **If** **a** **Record** **at** **Lease** **Grant** | **Then** **TXT** **Record** **at** **Lease** **Grant** | **Lease** **Grant** **Action** | **Lease** **Expire** **Action** |
| --- | --- | --- | --- | --- |
| Standard ISC | Exists | Must match | Delete A or AAAA, TXT if exists    Add A or AAAA Add PTR | Delete PTR    Delete A or AAAA, TXT if TXT matches and no other A or AAAA RRs |
|  | No A or AAAA record | No check | Add A or AAAA, TXT    Add PTR |  |
| Check TXT only | Exists | Must exist | Delete A or AAAA, TXT    Add A or AAAA, TXT    Add PTR | Delete PTR    Delete A or AAAA if TXT exists and no other A or AAAA RRs |
|  | No A or AAAA record | No check | Add A or AAAA, TXT    Add PTR |  |
| ISC Transitional | Exists | No check | Delete A or AAAA, TXT if exists    Add A or AAAA, TXT    Add PTR | Delete PTR    Delete A or AAAA, TXT if TXT matches and no other A or AAAA RRs |
|  | No A or AAAA record | No check | Add A or AAAA, TXT    Add PTR |  |
| No TXT record | Exists | No check | Delete A or AAAA Add A or AAAA Add PTR | Delete PTR, A or AAAA |
|  | No A or AAAA record | No check | Add A or AAAA Add PTR |  |

Depending on your expected usage, you must carefully consider the various options for update verification. The following section illustrates recommendations for each verification option:

- **Standard** **ISC:** This method is the most stringent option for verification of updates. This is the default.
- **ISC** **Transitional:** This method is useful during migrations from systems that do not support the TXT record to systems that are ISC-based.
- **Check** **TXT** **only:** This method is useful for the roaming laptop scenario. The NIOS appliance checks that a TXT record exists, but does not check the value of the TXT record.
- **No** **TXT** **record:** This method should be used with caution because anyone can send DDNS updates and overwrite records. This method is useful when both ISC and non-ISC-based DHCP servers and clients are updating the same zone. Infoblox recommends that you allocate a DNS zone for this authentication method, as a precaution.
  
  Note that in certain situations, when a DHCP lease expires, the DHCP server might remove the TXT record even if there is no A or AAAA record.

You can enable this feature at the Grid level. To configure TXT record handling on the DHCP server:

1. From the **Data** **Management** tab, select the **DHCP** tab, expand the Toolbar and click **Grid** **DHCP** **Properties**.
2. In the **IPv4** **DDNS** -&gt; **Advanced** tab or the **IPv6** **DDNS** -&gt; **Advanced** tab, select one of the following from the **TXT** **(DHCID)** **Record** **Handling** drop-down list:
   
   - **Check** **Only:** Select this checkbox to enable minimal checking of DDNS updates. Specifically, A or AAAA records are modified only if a TXT record exists. The NIOS appliance checks that a TXT record exists, but does not check its value.
   - **ISC:** Select this checkbox to enable standard ISC (Internet Systems Consortium) handling for DDNS updates. Specifically, A or AAAA records are modified or deleted only if the TXT records match. This option is the default setting on the appliance.
   - **ISC** **Transitional:** Select this checkbox to enable less stringent handling of DDNS updates. Specifically, the NIOS appliance enables you to add or modify A or AAAA records whether or not TXT records exist. It checks whether a TXT record exists and then processes the update. If the appliance does not find a TXT record, it adds the record.
   - **No** **TXT** **Record:** Select this checkbox to disable TXT record checking. Specifically, A or AAAA records are added, modified, or deleted whether or not the TXT records match. No TXT records are added, and existing TXT records are ignored.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
