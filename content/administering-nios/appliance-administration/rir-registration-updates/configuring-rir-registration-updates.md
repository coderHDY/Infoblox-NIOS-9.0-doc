---
title: "Configuring RIR Registration Updates"
source: "/space/nios90/280273846"
pageId: "280273846"
---
To manage RIR allocated addresses and send registration updates through NIOS, you first add RIR organizations and create RIR allocated networks in NIOS. You can then reassign network addresses within the RIR allocated address block to other organizations based on your requirements, and then configure NIOS to send registration updates directly to the RIPE database. Any data you manage through the Grid is handled by the Grid Master.  
When the Grid Master is an HA pair, the active node handles the submission of data. If an HA failover occurs during a submission, the failing node immediately aborts the submission. The new active node resumes the next submission. For information about HA pairs, see [*About HA Pairs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644).  
To manage and submit updates to the RIPE database, you must first enable the Grid to support RIR registration updates. You can then enter RIR information, such as RIR organizations and RIR attributes.  
To configure the Grid to manage RIR allocated addresses and submit updates to RIPE, complete the following:

1. Enable support for RIR registration updates, as described in  Enabling Support for RIR Registration Updates below [.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280273846/Configuring+RIR+Registration+Updates#bookmark1182)
2. Define the method to communicate updates to RIPE, as described in  Configuring RIR Communication Settings below[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280273846/Configuring+RIR+Registration+Updates#bookmark1183)
3. Add and configure RIR organizations and RIR organizational attributes, as described in  Adding RIR  Organizations, see [*Managing RIR Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666942).
4. Add allocated address blocks and assign specific network addresses to RIR organizations, as described in  Adding and Assigning RIR Networks, see [*Managing RIR Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666942).
5. Review and submit registration updates to RIPE, as described in  Previewing Registration  Updates, see [*Managing RIR Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666942). You can also perform the following tasks:

- View a list of RIR organizations, as described in  Viewing RIR Organizations.
- Modify RIR organizations and RIR organizational attributes, as described in  Modifying RIR Organizations.
- Monitor network utilization for networks that contain RIR assignments. For information about IPAM Home, see [*Managing IPv4 Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666698) or for more information about Viewing Networks, see [*Configuring IPv4 Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761742).

# Enabling Support for RIR Registration Updates

Before you can manage RIR data through Grid Manager, you must first enable support for RIR registration updates. To enable support for RIR registration updates:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then select **Grid** **Properties** -> **Edit** from the Toolbar.
2. In the *Grid* *Properties* editor, select the **General** tab -> **Advanced** tab, and complete the following:
   
   - **Enable** **Updates** **of** **RIR** **Registrations**: Select this to enable the support for submitting RIR registration updates to the RIPE database. When you enable this feature, you can configure the appliance to send registration updates to RIPE for network reassignments and reallocations.
     
     Note: Ensure that you configure DNS resolvers for the Grid when you enable this feature. For information about how to configure DNS resolvers, see [*Enabling DNS Resolution*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764908).
3. Save the configuration.

# Configuring RIR Communication Settings

You can configure the appliance to send RIR address updates to RIPE through the RIPE REST API or through an email using the maintainer email address specified in the RIR organization. Note that when you use the API method to delete a registered address block, you do not need to submit RIR attributes that match the data in the RIPE database. However, when you use the email method, you must enter RIR attribute values that match the data in the database. Otherwise, your submission will fail. To view examples of registration updates that NIOS sends, see  Previewing Registration Updates in [*Managing RIR Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666942).  
To configure the RIR communication settings:

1. From the **Administration** tab, select the **RIR** tab, and then select **RIR** **Settings** -> **RIPE** from the Toolbar.
2. In the *RIR* *Communication* *Settings* *-* *RIPE* editor, select one of the following to determine how the appliance sends updates to RIPE. The default is **API**.
   
   - **API**: The appliance sends RIR updates to RIPE through the RIPE API. The default destination is [*https://rest.db.ripe.net*](https://rest.db.ripe.net) for accessing the production database and [*https://rest-test.db.ripe.net*](https://rest-test.db.ripe.net/test) for accessing the test database. Click **Override** and enter a different URL to override the default value. When you select this as the communication method, the registration status will be updated automatically after the registration update is completed. Note that RIPE supports only secure connections using HTTPS.
   - **Email:** The appliance sends RIR updates to RIPE through the email address displayed in the field. The default is [ ](mailto:auto-dbm@ripe.net)[*auto-dbm@ripe.net*](mailto:auto-dbm@ripe.net)[.](mailto:auto-dbm@ripe.net) Click **Override** and enter a different email address to override the default value. The appliance uses a special email template that includes values of certain RIR attributes. If any of the RIR attribute values do not match the database in the RIPE database, your submission will fail. When you select **Email** as the communication method, ensure that you enable email notifications at the Grid level. For information how to enable email notifications, see  Setting SNMP and Email Notifications in [*Configuring SNMP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662492). Note that when you select this as the communication method, the registration status will not be automatically updated. You can manually change the status. For information, see  Modifying RIR Network Data, in [*Managing RIR Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666942).
   - **None:** The appliance does not send RIR updates to RIPE.
3. Save the configuration.
