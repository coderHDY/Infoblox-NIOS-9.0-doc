---
title: "Viewing All Outbound Endpoints"
source: "/space/nios90/1286013452"
pageId: "1286013452"
---
The **Outbound Endpoint** tab displays all outbound endpoints that are configured on the NIOS appliance.  
To view the list of outbound endpoints:

1. From the **Grid/System** tab, select the **Ecosystem** tab, and click the **Outbound** **Endpoint** tab.
2. Grid Manager displays the following information for each endpoint:
   
   - **Name**: The name of the endpoint.
   - **Endpoint Type**: The endpoint type, such as DXL or REST API.
   - **URI**: The URI to which the outbound notifications are sent.
   - **Vendor** **Type**: The vendor type associated with the endpoint.
   - **Outbound Member**: The outbound member that processes and sends outbound notifications. This can be either the Grid Master Candidate or the Grid Master. Infoblox recommends that you select the Grid Master Candidate and this is selected by default.
   - **Comment**: Additional information about the endpoint configuration.
   - **Client** **Certificate** **Valid** **From**: The timestamp when the client certificate for a notification endpoint is created.
   - **Client** **Certificate** **Valid** **To**: The timestamp when the client certificate for a notification endpoint expires.
   - **Disabled**: Indicates whether the endpoint is disabled.
   - **Site**: This is a predefined extensible attribute.

You can also do the following in this tab:

- Click the Action icon  and do the following:
  
  - **Edit**: Select this to modify the endpoint information.
  - **Delete**: Select this to delete an endpoint. Click **Yes **in the *Delete Confirmation (REST API Endpoint)* dialog box to delete an endpoint.
  - **View Debug Log**: Select this to view debug messages about all events associated with the selected endpoint. Through a separate browser, you can view the debug logs from all Grid members.
- Edit an outbound endpoint information.
  
  - Select the endpoint, and then click the Edit icon.
- Delete an outbound endpoint.
  
  - Select the endpoint, and then click the Delete icon.
- Export the list of outbound endpoints.
  
  - Click the Export icon.
- Print the list of outbound endpoints.
  
  - Click the Print icon.
- Use filters and the **Go to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria:
  
  1. In the filter section, click **Show** **Filter** and define filter criteria for the quick filter.
  2. Click **Save** and complete the configuration In the Save Quick Filter dialog box.

The appliance adds the quick filter to the quick filter drop-down list in the panel. Note that global filters are prefixed with [G], local filters with [L], and system filters with [S].

- Sort the outbound end points in ascending or descending order by column.
