---
title: "Configuring DNS Query and Response Captures"
source: "/space/nios90/1380418299"
pageId: "1380418299"
---
To configure DNS query and response captures:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, expand the **Toolbar** and click **Grid** **DNS** **Properties**.  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode** and select the **Logging** tab.
3. Under **Data** **Collection** **for** **all** **DNS** **Queries/Responses** **to** **a** **Domain**, complete the following:
   
   - Select the **Capture** **DNS** **Queries** checkbox to start capturing DNS queries. This enables the feature set for configuration. When you enable this option at the member level, the appliance captures DNS queries for the selected members only.
   - Select the **Capture** **DNS** **Responses** checkbox to start capturing DNS responses. This enables the feature set for configuration. When you enable this option at the member level, the appliance captures DNS responses for the selected members only.

> **warning**
>
> ### Note
> 
> Enabling the logging of queries and responses at the same time can increase disk space usage and adversely affect DNS services and performance. Infoblox recommends that you do not configure both logging of queries and logging of responses at the same time.

- Select **Capture** **queries/responses** **for** **all** **domains** to capture queries and responses to all domains and zones.
- Select **Limit** ** capture** ** to** ** these ** **domains** to capture DNS queries and responses to domains and zones one at a time.
- Specify domains for DNS capture operations in the Domain table by clicking the Add icon, and choosing **Add** ** Domain** or **Bulk** ** Add** ** Domains** from the menu.
- To define the destination for capture files, do the following:
  
  - **Retain** ** captured** ** queries** ** on** ** the** ** local ** **disk**: Select this checkbox to save the DNS queries on the appliance. In addition to the local disk, you can select to export the DNS queries to the remote server by selecting **SCP** in the **Export ** **to** drop-down list. When **Retain** checkbox is selected, files are copied to local disk until the specified disk space is reached or to the limit of 10000 files. After reaching limit, the oldest files will be deleted and the latest files will be retained. See the *Maximum* *Hard* *Drive* *Space* *used* *for* *DNS* *queries* *and* *Responses* table below for the specified disk space.
  - **Export** ** to:** From the drop-down list, select **SCP** to back up the DNS queries on the remote server and **None** to save queries only on the appliance. To save the captured DNS queries on both the appliance and the remote server, select the **Retain** ** captured** ** queries** ** on ** **the ** **local** ** disk** checkbox and **SCP** from the **Export** ** to** drop-down list. When you configure an SCP server and enable the MGMT port, the NIOS appliance uses SSH for data transfer. It uses the same authentication and provides the same security as SSH. SCP uses the LAN1 port to communicate with the external servers.
- When you select **FTP** or **SCP** from the **Export** **to** drop-down list, complete the following:
  
  - In the **Directory** **Path** field, enter the directory to which the capture file will be saved on the server. Infoblox recommends that you use the ~ symbol for the remote server.
  - In the **Server** **Address/FQDN** field, enter the IP address or the FQDN of the remote server to which the capture files will be saved.
  - Enter the file server account **Username** and **Password** values.
- **Limit** **query** **data** **collected** **per** **file** **to** **minutes** **or** **100MB** **(whichever** **comes** **first)**: This option limits the collection of query data per capture file. A capture file for logging DNS queries and responses is rolled over based on the configured time limit or when the file reaches 100 MB in size, whichever is sooner. The default time limit is 10 minutes. After reaching limit, the oldest files will be deleted and the latest files will be retained.

1. Save the configuration.

The following table lists the maximum hard drive space required for capturing DNS queries and responses for supported Infoblox appliance models.

*Maximum* *Hard* *Drive* *Space* *used* *for* *DNS* *queries* *and* *Responses*

| **Supported NIOS Appliances** | **Maximum Hard Drive Space for DNS Query/Response Capture (MB)** |
| --- | --- |
| TE-926 | 3100 |
| TE-1516 | 6000 |
| TE-1526 | 10000 |
| TE-2326 | 28000 |
| TE-4126 | 40000 |
| TE-815 and IB-V815 | 900 |
| TE-825 and IB-V825 | 3100 |
| TE-1415 and IB-V1415 | 6000 |
| TE-1425 and IB-V1425 | 10000 |
| TE-2215 and IB-V2215 | 12000 |
| TE-2225 and IB-V2225 | 28000 |
| PT-1405 | 10000 |
| PT-2205 | 28000 |
