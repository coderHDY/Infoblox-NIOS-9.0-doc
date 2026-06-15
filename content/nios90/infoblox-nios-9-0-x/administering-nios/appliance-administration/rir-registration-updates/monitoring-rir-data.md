---
title: "Monitoring RIR Data"
source: "/space/nios90/280406780"
pageId: "280406780"
---
You can view RIR organizations and networks you added to NIOS through Grid Manager. The appliances sends SNMP traps and email notifications about registration updates. It also logs RIR events in the Infoblox syslog. Note that sometimes due to network timeout from RIPE, your registration updates may fail.  
You can do the following to monitor RIR data:

- View RIR update events in the syslog, as described in [*Viewing the Syslog*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server/viewing-the-syslog).
- View RIR organizations, as described in [*Viewing RIR Organizations*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/monitoring-rir-data/Monitoring+RIR+Data#Viewing-RIR-Organizations) below.
- View RIR IPv4 and IPv6 network containers and networks, as described in [*IPAM Home*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks/ipam-home) and [*Viewing Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks/viewing-networks).
- Preview RIR updates before submitting them to RIPE, as described in [*Previewing Registration Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/monitoring-rir-data/Monitoring+RIR+Data#Previewing-Registration-Updates) below.

# Viewing RIR Organizations

You can view the list of RIR organizations that have received address allocation and the ones you have added associated networks.  
To view RIR organizations:

1. From the **Administration** tab, select the **RIR** tab.
2. Grid Manager displays the following information for each RIR organization:
   
   - **Organization** **ID**: The RIR organization ID.
   - **RIR**: The RIR that allocates the address block to the organization.
   - **Maintainer**: The name of the maintainer for the organization.

You can also select **Organization** **Name** and RIR organizational attributes for display.  
You can do the following in this tab:

- Modify some of the data in the table. Double click a row, and either modify the data in the field or select an item from a drop-down list. Click Save to save the changes. Note that some fields are read only.
- Sort the data in ascending or descending order by column.
- Select an organization and click the Edit icon to modify data, or click the Delete icon to delete it.
- Click the Permissions icon to configure permissions for the admin account.
- Use filters and the Go to function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the Go to field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information about quick filters, see [*About the Grid Manager Interface*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface).
- Print and export the data in this tab.

# Previewing Registration Updates

Before the appliance submits RIR updates to RIPE, you can preview the data in Grid Manager. The appliance uses the email template when displaying preview data in a separate browser window.  
Preview data includes the subject line for the email, followed by the inetnum or inet6num template for the network and other associated data, such as network name, organization name, and others. When there are multiple operations involved, such as deleting multiple networks, the preview data includes a separate subject line for each operation.  
You can preview registration updates when you create a new RIR network. In the Add Networks wizard, click **Preview** **RIR** **Submissions** in the wizard. For information about how to create or assign RIR networks, see [*Adding and Assigning RIR Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/managing-rir-data/adding-and-assigning-rir-networks).   
  
Following is a sample preview for a network creation request:

`Subject: CREATE inetnum 100.200.0.0 - 100.200.255.255 KEYWORDS: NEW inetnum: 100.200.0.0 - 100.200.255.255`  
` netname: corpxyz_network`  
` descr: RIR network for corpxyz. status: ASSIGNED PA`  
` org: ORG-MC1-TEST`  
` country: US source: TEST`  
` changed: `[jdoe@corpxyz.com](mailto:jdoe@corpxyz.com)` 20120809 notify: `[jdoe@corpxyz.com](mailto:jdoe@corpxyz.com)  
` admin-c: NP1-TEST tech-c: NP1-TEST mnt-by: JohnDoe password: *** password: ***`  
` Following is a sample preview for a network modification request:`  
` Subect: MODIFY inetnum 100.200.0.0 - 100.200.255.255 KEYWORDS: inetnum: 100.200.0.0 - 100.200.255.255`  
` netname: corpxyz_network`  
` descr: RIR network for corpxyz. status: ASSIGNED PA`  
` org: ORG-MC1-TEST`  
` country: US source: TEST`  
` changed: `[jdoe@corpxyz.com](mailto:jdoe@corpxyz.com)` 20120809 notify: `[jdoe@corpxyz.com](mailto:jdoe@corpxyz.com)  
` admin-c: NP1-TEST tech-c: NP1-TEST mnt-by: JohnDoe password: ***`

Following is a sample preview for deleting multiple networks:

`Subect: DELETE inetnum 100.200.0.0 - 100.200.255.255 KEYWORDS: inetnum: 100.200.0.0 - 100.200.255.255`  
` netname: corpxyz_network`  
` descr: RIR network for corpxyz. status: ASSIGNED PA`  
` org: ORG-MC1-TEST`  
` country: US source: TEST`  
` changed: `[jdoe@corpxyz.com](mailto:jdoe@corpxyz.com)` 20120809 notify: `[jdoe@corpxyz.com](mailto:jdoe@corpxyz.com)` `  
` admin-c: NP1-TEST tech-c: NP1-TEST mnt-by: JohnDoe password: ***`  
` delete: Removed network.`   
  
`Subect: DELETE inetnum 100.300.0.0 - 100.300.255.255 KEYWORDS: inetnum: 100.300.0.0 - 100.300.255.255`  
` netname: corp200_network`  
` descr: RIR network for Corp200. status: ASSIGNED PA`  
` org: ORG-MC1-TEST`  
` country: US source: TEST`  
` changed: `[jsmith@corp200.com](mailto:jsmith@corp200.com)` 20120809 notify: `[jsmith@corp200.com](mailto:jsmith@corp200.com)  
` admin-c: NP1-TEST tech-c: NP1-TEST mnt-by: JohnSmith password: ***`  
` delete: Removed network. `
