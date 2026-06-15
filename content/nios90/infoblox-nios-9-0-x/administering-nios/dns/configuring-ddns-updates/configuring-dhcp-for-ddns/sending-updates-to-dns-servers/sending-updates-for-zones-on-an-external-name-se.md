---
title: "Sending Updates for Zones on an External Name Server"
source: "/space/nios90/1481015457"
pageId: "1481015457"
---
The DHCP server can send dynamic updates to an external name server that you specify. For each network view, you can specify the zone to be updated and the IP address of the primary name server for that zone. You can add information for a forward and reverse zone. The DHCP server updates the A record in the forward zone and the PTR record in the reverse zone.  
You can also use TSIG (transaction signatures) or GSS-TSIG to secure communications between the servers. TSIG uses the MD5 (Message Digest 5) algorithm and a shared secret key to create an HMAC (hashed message authentication code)—sometimes called a digital fingerprint—of each update. Both the DHCP server sending the update and the DNS server receiving it must share the same secret key. Also, it is important that the time stamps on the TSIG-authenticated updates and update responses be synchronized, or the participants reject them. Therefore, use an NTP server to set the time on all systems involved in TSIG authentication operations.  
Note that only a superuser can configure DDNS. To configure DDNS, a limited-access admin must contact a superuser.

To send updates to a DNS server that is external to your Grid:

1. If there are multiple network views in the Grid, select a network view.
2. From the **Data Management** tab, select the **DHCP** tab, expand the Toolbar and click **Configure DDNS**.
3. In the **DDNS Updates to External Zones** section of the *DDNS Properties* editor, click the Add icon. Complete the following fields in the Add External DDNS Zone panel, and then click** Add**:
   
   - **Zone Name:** Enter the FQDN of a valid forward-mapping or reverse-mapping zone to which the DHCP server sends the updates. Do not enter the zone name in CIDR format. To specify a zone name in IDN, manually convert IDN to punycode and use the punycode representation.
   - **DNS Server Address:** Enter the IP address of the primary name server for that zone.
   - **Security:** Select one of the following security methods:
     
     - **None:** Select this to use unsecured DDNS updates. This is the default.
     - **TSIG:** Select this to use the standards-based TSIG key that uses the one-way hash function MD5 to secure transfers between name servers. You can either specify an existing key or generate a new key.  
       To specify an existing key, complete the following:  
       **Key Name:** Enter the TSIG key name. The key name entered here must match the TSIG key name on the external name server.  
       **Key Algorithm:** Select either **HMAC-MD5** or **HMAC-SHA256.**  
       **Key Data:** To use an existing TSIG key, type or paste the key in the **Key Data** field. Alternatively, you can select the key algorithm, select the key length from the **GenerateKeyData** drop down list, and then click **Generate Key Data** to create a new key.
     - **GSS-TSIG:** For information about using GSS-TSIG, see [*About GSS-TSIG*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/about-gss-tsig).

1. Save the configuration and click **Restart** if it appears at the top of the screen.
