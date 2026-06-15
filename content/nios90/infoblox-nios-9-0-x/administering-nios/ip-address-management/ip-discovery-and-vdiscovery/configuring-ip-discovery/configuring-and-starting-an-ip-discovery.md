---
title: "Configuring and Starting an IP discovery"
source: "/space/nios90/1330938614"
pageId: "1330938614"
---
To start an IP discovery immediately after you configure it:

1. From the **Data** **Management** tab, select the **IPAM** tab, and then select **Discovery** -&gt; **Discover** **Now** from the Toolbar.
2. In the *Discovery* *Manager* wizard, click the **General** tab, and then complete the following in the **Basic** tab:
   
   - **Current** **Status:** Displays the last discovery status and timestamp. This data is read-only.
   - **Member** **Name**: Click **Select** **Member**. In the *Member* *Selector* dialog box, select the Grid member from which you want to run the discovery. You can also use one of the following options to find a specific member:
     
     - Click the **Show Filter** link and use the filters as defined in [*Using Filters*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data/using-filters)
     - Type the first few letters or the full name of the member in the **Find** field, and then click **Go**.
   - **Merge** **the** **discovered** **data** **with** **existing** **data:** When you select this checkbox, the appliance merges the discovered data with the existing data. It appends newly discovered data to existing data and preserves the existing data when there is no newly discovered data. This checkbox is selected by default.
     
     Note if you clear this checkbox, the appliance replaces the existing data with the newly discovered data and if there are no newly discovered values for some fields, the appliance removes the existing values for these fields and the fields become empty.
   - **Update** **discovered** **data** **for** **managed** **objects:** Select this checkbox if you want the appliance to update the data of existing managed objects such as A records, PTR records, host records, and fixed addresses, with the discovered data. If you clear this checkbox, the appliance updates only the unmanaged objects. This checkbox is selected by default.
3. Click **Save** to save the discovery configuration. Note that you must save the configuration before you can start a discovery.
4. Click **Start** to start the IP discovery. You can also do one of the following:
   
   - **Restore** **to** **Defaults**: Restore the discovery configuration using the default values.
   - **Pause**: Stop a running discovery.
   - **Resume**: Resume the discovery that has been stopped.
   - **Save**: Save the discovery configuration.
   - **Close**: Cancel the configuration. If you have started a discovery, the discovery runs in the background when you click **Close**. For information, see [*Running Tasks in the Background*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks/about-long-running-tasks).

> **warning**
>
> ### Note
> 
> Once you start a discovery, you cannot change the discovery configuration. After you click **Start**, the button changes to **Pause**. You can click **Pause** to pause a discovery. When the discovery is paused, the button changes to **Resume**. You can click **Resume** to continue the paused discovery.
