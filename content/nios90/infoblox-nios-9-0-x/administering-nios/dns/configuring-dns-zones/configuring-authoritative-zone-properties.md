---
title: "Configuring Authoritative Zone Properties"
source: "/space/nios90/280665332"
pageId: "280665332"
---
A zone inherits some of its properties from the Grid or from the member that serves it as a primary or secondary server. When you edit a zone, you can override properties set at the Grid or member level and modify the original zone settings, as well.  
To configure authoritative zone properties:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; *zone* checkbox, and then click the Edit icon.
2. In the *Authoritative* *Zone* editor, you can do the following in each tab:
   
   - **General:** Modify the original zone settings, except the zone name.
   - **Name** **Servers:** Specify primary and secondary servers as described in [*Assigning Zone Authority to Name Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers)*.*
   - **Settings:** Set certain properties if the primary server is a Grid member. If the zone's primary server is an external server, then all these fields, except **Don't** **use** **forwarders** **to** **resolve** **queries** **in** **subzones**, are read-only with the information derived from the SOA record of the zone.
     
     - The **Serial** ** Number** field displays the zone's current serial number. You can change the serial number in an SOA record only if the primary server of the zone is a Grid member.  
       The serial number in the SOA record increments every time the record is modified. This serial number plays a key role when and how zone data is updated via zone transfers. The NIOS appliance allows you to change the serial number (in the SOA record) for the primary server so it is higher than the secondary server, thereby ensuring zone transfers come from the primary server (as they should).
     - Set **Refresh** intervals above 300 seconds, as Refresh intervals below 300 seconds may not work.
     - Override the Grid or member TTL settings as described in [*About Time To Live Settings*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/specifying-time-to-live-settings)*.*
     - Override the email settings, as described in [*Adding an Email Address to the SOA Record*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/adding-an-email-address-to-the-soa-record).
     - Change the primary name server that is specified in the SOA MNAME of a zone, as described in [*Changing the SOA Name for a Zone*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers).
     - ** Don’t use forwarders to resolve queries in subzones **: If the DNS members are configured to use forwarders to resolve queries that they cannot resolve locally, you can select this checkbox to disable the use of forwarders to resolve queries for data in the subzones.
   - **Queries:** Set restrictions for queries as described in [*Controlling DNS Queries*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/controlling-dns-queries).
   - **Zone** ** Transfers:** Specify to which servers zone transfers are allowed as described in [*Enabling Zone Transfers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/enabling-zone-transfers)*.*
   - **Updates:** Set dynamic DNS update properties as described in* *[*Configuring DNS Servers for DDNS*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-dns-servers-for-ddns).
   - **Active** ** Directory:** Set parameters to allow zones to receive GSS-TSIG authenticated DDNS updates from DHCP clients and servers in an AD domain. For information, see [*Supporting Active Directory*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/supporting-active-directory).
   - **Extensible** ** Attributes:** Define extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
   - **Permissions:** Define administrative permissions. For information, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
3. Click **Toggle** **Advanced** **Mode** if the editor is in basic mode. When the additional tabs appear, you can do the following in each tab:
   
   - **General:** Click the **Advanced** subtab and view the networks associated with the zone. This tab is visible only if the primary server is a Grid member, a Microsoft server, or unassigned.  
     If a zone is associated with one or more networks, the IP addresses of its host, A and AAAA records must belong to the associated networks. You cannot change the network associations in this editor. Navigate to the *DHCP* *Network* editor of the network, to change the zone associations. For information, see [*Associating Networks with Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties)*.*  
     You can enable fixed RRset ordering for the authoritative zone to save the order of the NAPTR records that are added to the zone using CSV import. Select the **Enable fixed RRset ordering** checkbox to enable fixed RRset ordering for the NAPTR records that are added to the authoritative zone through CSV import. There are a few best practices you should consider when enabling this feature. For more information, see [*Enabling Fixed RRset Ordering for NAPTR Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/enabling-fixed-rrset-ordering-for-naptr-records)*.*
   - **DNS** **Integrity** **Check**: Configure the appliance to monitor DNS data in the NS RRsets for authoritative zones. The appliance generates alerts when data discrepancies have been detected so you can mitigate possible DNS domain hijacking. For more information, see* *[*Configuring DNS Integrity Check for Authoritative Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-dns-integrity-check-for-authoritativ).
   - **Host** **Naming:** Set restrictions for host names. For information, see [*Specifying Hostname Policies*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/specifying-hostname-policies).
   - **Shared** **Record** **Groups:** Add shared record groups to a zone. For information, see [Configuring Shared Record Groups](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/configuring-shared-record-groups).
   - **DNSSEC:** Configure DNSSEC properties. For information, see [*Configuring DNSSEC*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dnssec).  
     **Record** **Scavenging:** Define the rules for DNS records scavenging in the zone, as described in [*DNS Record Scavenging*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/dns-record-scavenging)*.*
   - **Updates**: Click the **Advanced** subtab and specify the secure dynamic updates settings, as described in [*Secure Dynamic Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/secure-dynamic-updates)*.*
4. Save the configuration and click **Restart** if it appears at the top of the screen.   
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).
