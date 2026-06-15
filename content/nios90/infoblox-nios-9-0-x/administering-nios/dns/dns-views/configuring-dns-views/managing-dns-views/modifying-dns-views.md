---
title: "Modifying DNS Views"
source: "/space/nios90/1415939167"
pageId: "1415939167"
---
To modify a DNS view:

1. From the **Data** **Management** tab, click the **DNS** tab &gt; **Zones** tab&gt; *dns_view* checkbox -&gt; Edit icon.
2. In the *DNS* *View* editor, you can do the following:
   
   - In the **General** tab, you can change any of the information you entered through the wizard. You can also disable a DNS view to temporarily block access to a DNS view. Disabling a DNS view excludes it from the named.conf file. Note that disabling a DNS view may take a longer time to complete depending on the size of the data.
   - In the **Match** **Clients** tab, define or update a Match Clients list, as described in Defining Match Clients Lists[.](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/configuring-dns-views/Configuring+DNS+Views#bookmark1694)
   - In the Match Destinations tab, define or update match destinations, as described in  Defining a Match   Destinations List below.
   - In the **Forwarders** tab, configure forwards for the view, as described in [*Using Forwarders*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/using-forwarders).
   - In the **Queries** tab, enable AAAA filtering and configure a list of IPv4 networks and addresses for allowing or denying AAAA filtering, as described in* *[*Enabling AAAA Filtering*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/controlling-aaaa-records-for-ipv4-clients).
   - In the **DNSSEC** tab, you can specify parameters for DNSSEC as described in [*Configuring DNSSEC on a Grid*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dnssec/configuring-dnssec-on-a-grid)*.*
   - In the **Root** **Name** **Servers** tab, you can configure root name servers, as described in [*About Root Name Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/about-root-name-servers).
   - In the **Sort** **List** tab, define a sort list for the DNS view, as described in [*Defining a Sort List*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/about-sort-lists).
   - In the **Blacklist** tab, define blacklist rulesets, as described in [*Enabling Blacklisting*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/blacklists).
   - In the **Extensible** **Attributes** tab, you can modify the attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
   - The **Permissions** tab displays if you logged in as a superuser. For information, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
   - In the **Record** **Scavenging** tab, define the rules for DNS records scavenging in the DNS view, as described in [*Configuring DNS Record Scavenging Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/dns-record-scavenging).
   - In the **Updates** tab, specify the secure dynamic updates settings, as described in [*Secure Dynamic Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/secure-dynamic-updates)*.*
3. Save the configuration and click **Restart** if it appears at the top of the screen.   
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).
