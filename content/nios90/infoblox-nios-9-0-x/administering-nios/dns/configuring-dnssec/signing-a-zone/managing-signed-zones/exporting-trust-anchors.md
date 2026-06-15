---
title: "Exporting Trust Anchors"
source: "/space/nios90/1455063166"
pageId: "1455063166"
---
A trust anchor is a DNSSEC public key which is used by security-aware resolvers as the starting point for establishing authentication chains. A trust anchor can be specified as a DNSKEY RR or a DS RR, which contains the hash of a DNSKEY RR and can also be used to create a secure delegation point for a signed subzone in DNS servers.  
In BIND, trust anchors are configured using the trusted-keys directive. A trusted key is a DNSKEY RR without the TTL, class and RR type. You can export the trust anchors for the selected zone in a format that can be used in a BIND trusted-keys directive. Exporting trust anchors supports multiple algorithms, which means you can export all the algorithms in a key.  
To export trust anchors:

1. From the **Data** **Management** tab, select the **DNS** tab.
2. Expand the Toolbar and click **DNSSEC** -&gt; **Export** **Trust** **Anchors**.
3. In the *Export* *Trust* *Anchors* dialog box, do the following:
   
   - The displayed zone name can either be the last selected zone or the zone from which you are exporting trust anchors. If no zone name is displayed or if you want to select a different zone, click **Select** **Zone**. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box from which you can select one.
   - Select one of the following: **DNSKEY** **records**, **DS** **records**, or **BIND** **trusted-keys** **statement**.
4. Click **Export**.
5. Specify the location of the exported file and click **OK**.

If you exported DS records, the exported file contains DS records that use the SHA-1 and SHA-256 algorithms.
