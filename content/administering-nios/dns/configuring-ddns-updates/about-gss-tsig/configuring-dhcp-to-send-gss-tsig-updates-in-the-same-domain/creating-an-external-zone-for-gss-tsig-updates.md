---
title: "Creating an External Zone for GSS-TSIG Updates"
source: "/space/nios90/1412399713"
pageId: "1412399713"
---
For each network view, specify the zone to be updated, the IP address of the primary DNS server for that zone, and the security method, GSS-TSIG. The zone must be in the same Active Directory domain as the member that is sending the updates.  
You can add information for a forward and reverse zone. The DHCP server updates the A record in the forward zone and the PTR record in the reverse zone.  
To enable the NIOS appliance to send dynamic updates to a DNS server using GSS-TSIG for authentication:

1. If there are multiple network views in the Grid, select a network view.
2. On the **Data** **Management** tab, select the **DHCP** tab, expand the Toolbar, and then click **Configure** **DDNS**.
3. In the *DNS Updates to External Zones* table of the *DDNS* *Properties* editor, click the Add icon and complete the following fields in the *Add External DDNS Zone* panel:
   
   - **Zone** **Name:** Enter the name of the zone that receives the updates. You can specify both forward-mapping and reverse-mapping zones.
   - **DNS** **Server** **Address:** Enter the IP address of the primary name server for that zone.
   - **Security:** Choose **GSS-TSIG** from the drop-down list, complete the following, and then click **Add**:
     
     - **Active Directory** **Domain:** Choose the Active Directory domain associated with the keytab file.
     - **DNS** **Principal:** The name and domain of the DNS server receiving the DDNS updates. Note that this value is not the same as the Kerberos principal you specified when you generated the keytab file.  
       Use the following format when you complete this field: **DNS/***dns_server_fqdn***@***ad_domain*  
       *dns_server_fqdn*: This is the FQDN of the DNS server. You can use the "dig" command to perform a DNS lookup to obtain the FQDN of the DNS server as it appears on the SOA record.  
       *ad_domain*: This is the Active Directory domain of the DNS server.

1. Save the configuration and click **Restart** if it appears at the top of the screen.
