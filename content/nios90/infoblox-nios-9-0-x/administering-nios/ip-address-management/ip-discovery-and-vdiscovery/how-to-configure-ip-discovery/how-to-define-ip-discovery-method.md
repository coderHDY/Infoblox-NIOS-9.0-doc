---
title: "How To Define IP Discovery Method"
source: "/space/nios90/1593147415"
pageId: "1593147415"
---
To configure the IP discovery method you want to use:

1. From the **Data** **Management** tab, select the **IPAM** tab, and then select **Discovery** -&gt; **Discover** **Now** from the Toolbar.
2. In the *Discovery* *Manager* wizard, click the **IPv4** **Device** **Discovery** tab, and then complete the following in the **Basic** tab:
   
   - **Mode**: Select the IP discovery method you want to use. For information, see [*Supported IP Discovery Methods*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/supported-ip-discovery-methods)[  ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/supported-ip-discovery-methods). If you select **TCP** or **FULL**, ensure that you configure the TCP ports in the **Advanced** tab. The default is **FULL**.
   - Click the Add icon to add networks. In the *Network* *Selector* dialog box, select the network view and networks. Use SHIFT+click and CTRL+click to select multiple networks. You can also use filters or the Go to function to find a specific network. For information, see [*Using Filters*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface) and [*Using the Go To Function*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface).  
     . You can do the following in the table:
     
     - Click the Add icon again to add more networks.
     - Select a network or multiple networks in the network table and click **Delete** to delete them.
     - Click the Export icon to export the data in CSV format.
     - Click the Print icon to print the data.
   - **Disable**: Select this to exclude an IP discovery task. IP discovery is enabled by default.
3. If you select **TCP** or **FULL** in **Mode**, click the **Advanced** tab and complete the following:
   
   - **TCP** **Scan** **Technique**: Select the TCP technique you want to use for the discovery. The default is SYN. For information, see [*TCP*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/supported-ip-discovery-methods).
   - In the port table, select the checkbox of the port you want to configure. You can select all ports by clicking the checkbox in the header.  
     Optionally, you can click the Add icon and complete the following to add a new service to the list.
     
     - Port: Enter the port number you want to add to the list. You must enter a number between 1 and 65535.
     - Service: Enter the name of the service.
     
     You can also delete a specific TCP port in the list. You can select multiple ports for deletion.
   - **Timeout** **(ms)**: Enter the timeout value in milliseconds for the discovery. The timeout value determines how long the discovery waits for a response from an IP address after probing it. The minimum is 5 and the maximum is 4000. The default is 1000.
   - **Attempts**: Enter the number of times you want the discovery to probe an IP address when scanning a network. The minimum is 1 and the maximum is 5. The default is 2.
4. Click **Save** to save the discovery configuration. Note that you must save the configuration before you can start a discovery.
5. Click **Start** to start the IP discovery. You can also do one of the following:
   
   - **Restore** **to** **Defaults**: Restore the discovery configuration using the default values.
   - **Pause**: Pause a running discovery.
   - **Resume**: Resume the discovery that has been stopped.
   - **Save**: Save the discovery configuration.
   - **Close**: Cancel the configuration. If you have started a discovery, the discovery runs in the background when you click **Close**. For information, see [*Running Tasks in the Background*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks/about-long-running-tasks).

You can do the following after a discovery is complete:

- View the discovery status. You can view the current discovery status in the *Discovery* *Status* widget on the Dashboard. For information, see [*Dashboards*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards).
- View the discovered data. For information, see [  ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/viewing-discovered-data)[*Viewing*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/viewing-discovered-data)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/viewing-discovered-data)[*Discovered*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/viewing-discovered-data)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/viewing-discovered-data)[*Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/viewing-discovered-data)[.](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/viewing-discovered-data)
- Manage the discovered data. For information, see [  ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/managing-discovered-data)[*Managing*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/managing-discovered-data)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/managing-discovered-data)[*Discovered*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/managing-discovered-data)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/managing-discovered-data)[*Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/managing-discovered-data).
