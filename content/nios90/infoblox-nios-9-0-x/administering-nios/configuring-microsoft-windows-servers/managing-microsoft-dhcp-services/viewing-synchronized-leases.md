---
title: "Viewing Synchronized Leases"
source: "/space/nios90/280403201"
pageId: "280403201"
---
A Grid member synchronizes all leases from its managed Microsoft server to the Grid. Microsoft servers automatically generate a static lease for each reservation. These static leases are synchronized to the Grid as well. You can view the synchronized leases by navigating to the **Data** **Management** -&gt; **DHCP** -&gt; **Leases** tab. For information about viewing current leases, see *[Viewing Current Leases](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/viewing-current-leases)*. You can do the following:

- View lease details, by selecting a lease and clicking the Lease Details icon. For additional information, see *[Viewing Detailed Lease Information](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/viewing-detailed-lease-information)*.
- Clear a lease, by selecting it and clicking the Clear Lease icon. Note that Grid Manager clears the lease immediately. It does not wait for the next synchronization.
- Use filters and the **Go** **to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information about using quick filters, see *[Finding and Restoring Data](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data)**.*

Additionally, you can enable a Grid member to log lease related operations, so you can view these events in the Lease History panel. For information about configuring the lease logging member, see *[Configuring DHCP Logging](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-logging)* and see *[Viewing Lease History](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-leases/viewing-lease-history)*.
