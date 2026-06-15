---
title: "Adding DHCP Records"
source: "/space/nios90/1468498063"
pageId: "1468498063"
---
In the* DHCP Objects Selector* dialog box, complete the following to select and associate a DHCP record:

- **Network View**: Select a network view from the drop-down list. This is displayed only if you have configured multiple network views.
- **Network**: Select a network from the drop-down list. You must select a zone before you start searching for records. Click **Apply** to apply your settings or **Reset** to reset the settings. Optionally, click the + icon to add another filter rule. To delete an additional filter rule, click the - icon.
- **Find**: Specify the fixed address and click **Go** to search for a specific record.
- Click the right arrow to navigate to the search results in the next page.

The appliance displays the following details:

- **IP address**: Displays the IP address of the resource record.
- **Name**: Displays the respective IPv4/IPv6 fixed address or host address.
- **Type**: Displays the type of the resource record.
- **Comment**: Displays additional comments about the fixed address.
- Click on the row and click **OK** to associate the resource record with the super host, or click **Close** to cancel. To select and associate multiple records, use Shift+click and Ctrl+click.

When you search for DHCP records, a host record with multiple host addresses will display all the associated host addresses in the *DHCP Objects Selector* dialog box. When you select multiple hosts, the NIOS appliance considers the records as duplicate. Infoblox recommends that you delete the duplicate records before you save them.

You can edit an IPv4/IPv6 fixed address that is associated with a super host. For more information about modifying IPv4 and IPv6 fixed addresses, see [*Configuring IPv4 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks) and [*Configuring IPv6 Fixed Addresses*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-fixed-addresses) respectively**.**
