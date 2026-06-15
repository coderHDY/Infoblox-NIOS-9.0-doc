---
title: "Setting DNSSEC Parameters"
source: "/space/nios90/280762276"
pageId: "280762276"
---
The Grid Master uses certain default parameters when it signs a zone and generates the DNSSEC RRs. If you want to use different parameters for certain zones, you can change these defaults for the entire Grid or for individual zones. The following sections describe the different parameters that you can set:

*[toc]*

For information on setting these parameters, see Configuring DNSSEC Parameters below.

# About the DNSKEY Algorithm

You can add multiple cryptographic algorithms that the Grid Master uses when it generates the KSK and ZSK. You can also add multiple algorithms at the Grid level and override them at the zone level. By default, the appliance uses RSA/SHA1 for both KSK and ZSK. You can add RSA/SHA1, RSA/SHA-256, RSA/SHA-512, ECDSAP/SHA-256, or ECDSAP/SHA-384 algorithms. Note that a zone can contain either NSEC or NSEC3 records, but not both. You can add same or different set of algorithms with possibly different key sizes for both KSK and ZSK.  
You can assign the DNSKey algorithm for HSMs. Entrust nShield HSMs do do not support DSA. All other parameters are not used by HSMs.

# About Key Rollovers

To reduce the probability of being compromised, ZSKs and KSKs must be periodically changed. The time within which a key pair is effective is its rollover period. The rollover period starts as soon as a zone is signed. After a rollover period starts, you cannot interrupt or restart it unless you unsign the zone. During the key rollover, all the algorithms are rolled over at the same time and the rollover is performed on a per-zone basis.

## Zone-Signing Key Rollover

You can configure automatic ZSK rollovers on the Grid Master by using the double-signature rollover method or the pre-publish method. For more information, see Configuring DNSSEC Parameters below. The appliance initiates the ZSK rollover of signed zones when they are due. You can also perform a manual rollover of ZSKs. For more information about rolling zone-signing keys, see [*Signing a Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/332562696).  
The double signature method provides a grace period, which is half of the rollover period. The default ZSK rollover period is 30 days; thus, the default grace period is 15 days.  
At the end of a rollover period of a ZSK, the Grid Master generates a new ZSK key pair. It signs the zone with the private key of the new ZSK key pair, and consequently generates new RRSIG RRs with the new signatures. However, the Grid Master also retains the old ZSK key pair and RRSIG RRs. Thus, during the grace period, the data in the zone is signed by the private keys of both the old and new ZSKs. Their corresponding public keys (stored in DNSSEC RRs) can be used to verify both the old and new RRSIGs.  
The grace period also allows the data that exists in remote caches to expire and during this time, the updated zone data can be propagated to all authoritative name servers. The Grid Master removes the old ZSK and its RRSIGs when the rollover grace period elapses. When a scheduled DNSSEC operation exists for a zone, the appliance does not lock it against other administrative changes and the administrator can still operate on a given zone even if there is a pending DNSSEC operation scheduled for it.  
The appliance sets pre-publish method described in RFC 4641 as the default zone-signing key rollover method for NIOS later releases. In the pre-publish rollover method, the new key is published in the keyset before the actual rollover. After the key propagates to all client caches, Grid Master removes the old signatures and creates new signatures with the new keys. The pre-publish rollover method uses the current key to sign the zone.

## Key-Signing Key Rollover

You can configure automatic KSK rollovers on the Grid Master or perform a manual KSK rollover. The default KSK rollover period is one year. The Grid Master also uses the double signature rollover method described in RFC 4641 for KSK rollovers. To configure automatic KSK rollovers, see as described in [*Configuring Automatic KSK Rollovers and Notifications*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1454997618). For information about performing a manual KSK rollover, see [*Rolling Zone-Signing Key*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/332562696)[*s*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/332562696).  
When the KSK rollover is overdue or is due within seven days, the Grid Master displays a warning when admins log in. In addition, you can also check which KSKs are due for a rollover as described in [*Checking Key-Signing Keys*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/332562696).  
When a user initiates a KSK rollover, the Grid Master sets the grace period to half the KSK rollover period. It generates a new KSK, and signs the DNSKEY records with the new KSK. Thus, during the grace period, the DNSKEY records are signed by the private keys of both the old and new KSKs. Both the old and the new KSKs can be used to validate the zone. The grace period allows the old keys in remote caches to expire. In addition, the admin should also export the new KSK and send it to the recursive name servers that use the KSK as trust anchors.  
If the KSK rollover is for a child zone and the primary server of the parent zone is a Grid member, the Grid Master also inserts a DS record in the parent zone for the new DNSKEY in the child zone. If the primary server of the parent zone is external to the Grid, the admin must export either the DS record or the new KSK to the admin of the parent zone. For information about exporting a KSK, see as described in [*Exporting Trust Anchors*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1455063166).  
The Grid Master then removes the old KSK and its RRSIG records when the grace period for the KSK rollover ends.

## About Key Rollovers and DNS TTLs

Note that the KSK and ZSK rollover intervals affect TTLs used by RRs in signed zones.  
A grace period is half of the key rollover interval. For example, if the KSK rollover interval is 1 year (365 days), then the grace period is 182.5 days; if the ZSK rollover interval is 30 days, then the grace period is 15 days.

The DNSKEY RRset in the zone is assigned a TTL, which is half of the signature validity interval. The default signature validity interval is set to 4 days, so DNSKEY RRset TTL is set to 2 days (172800 seconds).  
All other RRs in the signed zone is limited to a “zone maximum TTL,” which is the grace period of the ZSK. In the example, this is also 15 days.  
When the zone is initially signed, if the TTL of an RR exceeds the zone maximum TTL, the Grid Master reduces the TTL to the zone maximum TTL. Additionally, the TTL settings for the signed zone are set to override; the values are inherited from the Grid DNS properties at that time, and the default TTL setting is reduced to the zone maximum TTL if the Grid property exceeds it. If the zone is later unsigned, the zone DNS properties remain at their overridden settings.

# RRSIG Signatures

As shown in the sample RRSIG record in [*RRSIG Resource Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664613), the signatures have an inception and an expiration time. The default validity period of signatures in RRSIG records on the Grid Master is four days. You can change this default as long as it is not less than one day or more than 3660 days. The Grid Master automatically renews signatures before their expiration date.

# Configuring DNSSEC Parameters

The guidelines for choosing the DNSSEC parameters are as follows:

- RSA/SHA1 is the most widely used cryptographic algorithm for generating KSK and ZSK. However, it is recommended to use RSA/SHA-256 and RSA/SHA-512 for better interoperability.
- The usage of DSA cryptographic algorithm is optional. As stated in RFC 6944, it may not be supported by many systems.
- It is not recommended to use RSA/MD5 cryptographic algorithm as it is not very secure. As stated in RFC 6944, there are known defects in MD5.
- The key size of KSK algorithm is recommended to be equal to or greater than the key size of ZSK algorithm.

To set parameters at the Grid or zone level, complete the following steps:

1. **Grid**: On the **Data** **Management** tab, select the **DNS** tab. Expand the Toolbar and click **Grid** **DNS** **Properties**.  
   **Zone**: On the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *zone* checkbox, and then click the Edit icon. Click **Override** to override the parameters.  
   **Standalone** **appliance**: On the **Data** **Management** tab, select the **DNS** tab. Expand the Toolbar and click **System** **DNS** **Properties**.
2. In the editor, click **Toggle** **Advanced** **Mode**.
3. When the additional tabs appear, click **DNSSEC**.
4. On the **DNSSEC** tab, click the **Basic** tab and complete the following:
   
   - **Resource** **Record** **Type** **for** **Nonexistent** **Proof**: Select the resource record type (**NSEC** or **NSEC3**) you want to use for handling non-existent names in DNS. The default is **NSEC3**. The algorithms used by the KSK and ZSK can generate the same type of NSEC record. Note that a zone cannot contain both NSEC and NSEC3 resource records.
   - **Key-signing** **Key**: Click the Add icon to add the cryptographic algorithm that the Grid Master or HSM uses when it generates the KSK. You can add multiple algorithms, but you cannot add the same algorithm more than once. Grid Manager adds a row to the table each time you click the Add icon. Select the row and the algorithm from the drop-down list and enter the key size for the algorithm. The default is **RSA/SHA1** with the key size as **2048**.  
     Following are the valid values for each algorithm:  
     **RSA/SHA1**: The minimum is 512 bits, the maximum is 4096 bits, and the default is 2048 bits.  
     **RSA/SHA-256**: The minimum is 512 bits, the maximum is 4096 bits, and the default is 2048 bits.  
     **RSA/SHA-512**: The minimum is 1024 bits, the maximum is 4096 bits, and the default is 2048 bits.  
     **ECDSAP/SHA-256**: The minimum is 160 bits, the maximum is 256 bits.  
     **ECDSAP/SHA-384**: The minimum is 160 bits, the maximum is 384 bits.  
     You can delete an algorithm by selecting it and clicking the Delete icon.
   - **Key-signing** **Key** **Rollover** **Interval**: Specify the key signing key rollover interval for all the algorithms. The minimum value is one day and the maximum is the time remaining to January 2038. The default is one year.
   - **Zone-signing Key**: Click the Add icon to add the cryptographic algorithm that the Grid Master or HSM uses when it generates the ZSK. You can add multiple algorithms, but you cannot add the same algorithm more than once. Grid Manager adds a row to the table each time you click the Add icon. Select the row and the algorithm from the drop-down list and enter the key size for the algorithm. The default is **RSA/SHA1** with the key size **1024**.  
     Following are the valid values for each algorithm:  
     **RSA/SHA1**: The minimum is 512 bits, the maximum is 4096 bits, and the default is 1024 bits.   
     **RSA/SHA-256**: The minimum is 512 bits, the maximum is 4096 bits, and the default is 1024 bits.   
     **RSA/SHA-512**: The minimum is 1024 bits, the maximum is 4096 bits, and the default is 1024 bits.  
     **ECDSAP/SHA-256**: The minimum is 160 bits, the maximum is 256 bits.  
     **ECDSAP/SHA-384**: The minimum is 160 bits, the maximum is 384 bits.  
     You can delete an algorithm by selecting it and clicking the Delete icon.
   - **Zone-signing** **Key** **Rollover** **Interval**: Specify the zone signing key rollover interval for all the algorithms. The minimum value is one day and the maximum is the time remaining to January 2038. The default is 30 days.
   - **Signature** **Validity:** Specify the signature validity period for RRSIG RRs. The minimum is one day and the maximum is 3660 days. The default signature validity interval is four days.
   - **Zone-signing Key rollover method**: You can use either of these methods to sign all the RRsets in a zone:
     
     1. **Pre-publish**: Select this if you want to use the pre-publish signature scheme to sign all the RRsets in a zone while performing the ZSK rollover. When you select this option, the record sets are signed using a single key. The appliance sets this option as the default zone-signing key method for all NIOS releases.
     2. **Double** **Sign**: Select this if you want to use the double signature scheme to sign all the RRsets in a zone while performing the ZSK rollover. The non-DNSKEY RRset are signed twice, which increases the size of the zone files.
        
        Note that you can select the **Zone-signing** **Key** **rollover** **method** only after you enable DNSSEC.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

When you modify the algorithms for a signed zone, you can apply the algorithm changes to the zone, as described later or you can unsign the zone and sign it again. For an unsigned zone however, you can apply the algorithm changes by signing the zone. For information about signing a zone, see [*Signing a Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/332562696).  
When you re-sign a zone after adding an algorithm, the DNSKEY key pairs of the old algorithms are rolled over and all the old RRSIG records are removed. The zone is re-signed with the new DNSKEY key pairs. When you re-sign a zone after removing an algorithm, the DNSKEY key pairs of the remaining algorithms are rolled over and the DNSKEY key pairs of the removed algorithm is removed. All old RRSIG records are removed and the zone is re-signed with the new DNSKEY key pairs.

> **warning**
>
> **Note**
> 
> If you add or remove a KSK algorithm from a zone, you must update the DS RRsets at the parent zone when the parent zone is managed by a non-Infoblox DNS server or by an Infoblox server that is part of a different Grid. For information, see [*Importing a Keyset*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1455063139).

# Applying the Algorithm Changes

You can apply the algorithm changes to a zone whenever the KSK or ZSK algorithms are modified. You can apply the algorithm changes only to a signed zone.  
To apply the algorithm changes to a signed zone, complete the following steps:

1. On the **Data** **Management** tab, select the **DNS** tab.
2. Expand the Toolbar and click **DNSSEC** -> **Apply** **Algorithm** **Changes**.
3. In the *Apply* *Algorithm* *Changes* dialog box, click the Add icon to select a zone. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. The appliance displays signed zones only. Select a zone. To add multiple zones, click the Add icon and select a zone.  
   To remove a zone from the list, select the checkbox adjacent to the respective zone and click the Delete icon.  
   You can click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, either select **Now** or select **Later** and enter a date, time, and time zone.
4. After you have selected the zones, click **Apply** **Algorithm** **Changes.**
5. When the confirmation dialog appears, click **Yes**.

> **warning**
>
> **Note**
> 
> - If you add a new algorithm and plan to remove the previously used algorithm, you must wait for a duration longer than the TTL configured for the zone records before making the change.
> - If you change the algorithm associated with the KSK, you must update the DS record in the parent zone before removing the previously used algorithm.
> - If you change the algorithm for the ZSK, NIOS automatically performs a KSK rollover. You must update the DS record in the parent zone to reflect the new KSK.

# Deleting the DNSSEC Keys Associated with a Zone

You can view the status of KSKs and ZSKs or delete the existing keys. Note that you can only delete keys that are either published or rolled over. You cannot delete keys that are active.  
To delete keys, complete the following steps:

1. On the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *zone* checkbox, and click the Edit icon.
2. In the *Authoritative* *Zone* editor, click the **DNSSEC** tab, and the following fields are displayed in the **Advanced** tab:
   
   - **Key** **ID**: The appliance generates a separate ID for each key. Select the checkbox adjacent to the **Key** **ID**. To delete a KSK, select the checkbox in the **Key-signing** **Keys** table. Select the checkbox in the **Zone-signing** **Keys** table to delete a ZSK.
   - **Status**: The **Status** column displays the status of the respective key. It can be one of the following: **Active**, **Published**, or **Rolled**.
   - **Public** **Key**: This column displays the public key that is associated with the respective KSK or ZSK.
   - **Algorithm**: This column displays the algorithm that is associated with the respective KSK or ZSK.
   - **Time until next event**: This column displays the time that is left to perform the next action for a key that is associated with the respective ZSK. This column helps you decide whether to roll over manually or wait for a zone to resign automatically. The time is displayed in months, days, hours format. For example, 2m 3d 13h implies time left to perform the next action is 2 months, 3 days and 13 hours.
     
     - **Active Key**: Indicates the time when the active key is rolled and zone is signed with the published key.
     - **Published Key**: Indicates the time when the published key is used to resign a zone.
     - **Rolled Key**: Indicates the time when a rolled key is deleted. Rolled keys are stored for quite a long period of time and are not used. You can manually cleanup the rolled keys.
3. Click the Delete icon.
