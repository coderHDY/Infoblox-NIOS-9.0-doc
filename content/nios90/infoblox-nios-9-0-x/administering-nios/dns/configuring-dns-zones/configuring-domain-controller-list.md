---
title: "Configuring Domain Controller List"
source: "/space/nios90/280763152"
pageId: "280763152"
---
When you configure an AD-integrated authoritative zone, by default all the domain controllers that belong to the domain automatically add NS records to the AD-integrated zone, which might be undesirable in some deployment scenarios. For example, if a domain controller is deployed in a company's branch office, it is unlikely that the domain controller should be registered as the name server for the company's top-level zones. By configuring a domain controller list for the AD-integrated zone, you can control which domain controllers are allowed to add NS records to the zone. If you configure a domain controller list for an AD-integrated zone, only those in the list can add NS records to the zone. You can configure the domain controller list for AD-integrated zones either on the NIOS appliance or on the Microsoft server.

# Configuring Domain Controller List on NIOS

You can configure a domain controller list for an AD-integrated authoritative zone to allow NS record creation for specific domain controllers. You can add, modify, and delete the entries in the domain controller list if the Microsoft server assigned to the zone is managed in read/write mode. If you have not configured the domain controller list while configuring an AD-integrated zone, you can perform the configuration later while editing the zone.  
Note the following about the domain controller list:

- If the domain controller list is empty for an AD-integrated zone, all domain controllers that belong to the domain can add NS records to the AD-integrated zone.
- If you remove a domain controller from the domain controller list of an AD-integrated zone, the NS record that belongs to the domain controller is not automatically deleted. You must manually delete the NS record from the AD-integrated zone.

To configure a domain controller list for an AD-integrated zone:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; click the Add icon and select **Authoritative** **Zone** from the drop-down menu.
2. Complete the details as mentioned in [*Configuring Authoritative Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-authoritative-zones) and then complete the following to specify a list of domain controllers that are allowed to add NS records to the AD-integrated zone:
   
   - **No**: Select **No** if you do not want to configure a domain controller list for the AD-integrated zone. If you select **No**, all domain controllers that belong to the domain can add NS records to the AD-integrated zone.
   - **Yes**: Select **Yes** to configure a domain controller list for the AD-integrated zone.  
     If you select **Yes**, click the Add icon of the **Domain** **Controller** table and select one of the following from the drop-down menu:
   - **Add**: Select this to manually add the IP addresses of the domain controllers to the list. Grid Manager adds a new row to the table. Specify the following:
     
     - **Address**: Enter the IP address of the domain controller.
     - **Comment**: Enter information about the domain controller.
     
     To remove an entry from the list, select the entry and click the Delete icon.
   - **Auto-populate**: Select this to automatically populate the **Domain Controller** table with the list of domain controllers. In the *Add Prepopulated Domain Controllers* panel, select one of the following options:
     
     - **Zone**: Select this to copy the list of domain controllers from an existing AD-integrated zone in the NIOS database. Click **Select** to select the AD-integrated zone. Click **Clear** to remove the selected zone.
     - **Servers in Domain**: Select this to add the IP addresses of all the Microsoft servers available in the NIOS database which belong to the same AD domain as the primary Microsoft server assigned to the zone.
   - Click **Add** to add the list of domain controllers to the table. Grid Manager automatically populates the **Domain** **Controller** table with the list of domain controllers in ascending order by IP address.
     
     Note that the **Auto-populate** option to add the domain controller list is only available while configuring the AD-integrated zone. It is not available when you edit the domain controller list in the *Authoritative Zone *editor.
3. Save the configuration.

# Configuring Domain Controller List on the Microsoft Server

You can configure a list of domain controllers that are allowed to add NS records to an AD-integrated zone on the Microsoft server using the dnscmd command line utility as follows:  
`dnscmd DNS Server /Config Zone Name /AllowNSRecordsAutoCreation Ip Addresses`  
For example, if you are configuring a domain controller list for an AD-integrated zone foo.net on the DNS server, 192.69.0.1, use the following command:  
`dnscmd 192.69.0.1 /config foo.net /AllowNSRecordsAutoCreation 192.69.0.6 192.69.0.9`  
For more information about configuring a domain controller list for an AD-integrated zone on the Microsoft server see [*https://technet.microsoft.com/en-us/library/cc755848%28v=ws.10%29.aspx*](https://technet.microsoft.com/en-us/library/cc755848%28v=ws.10%29.aspx)*.*
