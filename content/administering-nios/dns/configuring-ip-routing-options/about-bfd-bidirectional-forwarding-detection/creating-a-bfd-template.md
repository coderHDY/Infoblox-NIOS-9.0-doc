---
title: "Creating a BFD Template"
source: "/space/nios90/1412038848"
pageId: "1412038848"
---
BFD advertises the default hold-down interval of 300ms and authentication is disabled, by default. In order to configure faster or slower hold-down intervals, you can create BFD templates and assign it to the OSPF Area or BGP neighbors. You can configure a BFD template at the Grid level and assign it to multiple Grid members. The BFD template can be assigned to the BGP neighbor or OSPF Area of any Grid member in the Grid and it can be assigned to multiple BGP neighbors or OSPF Areas.  
To create BFD templates:

1. From the **Infoblox Grid** tab -> **Grid** **Manager** tab, expand the Toolbar and click **Manage** **BFD** **Templates**.
2. In the *Manage* *BFD* *Templates* wizard, click the Add icon, and then complete the following:
   
   - **Name**: Enter the name of the BFD template.
   - **Authentication** **Type**: Select the authentication type from the drop-down list. You can select one of the following authentication types: **MD5**, **SHA-1**, **Meticulous** **MD5**, or **Meticulous** **SHA-1**. The BFD authentication type fully conforms to RFC 5883.
   - **Authentication** **Key** **ID**: Enter the key identifier to use to specify the correct hash algorithm after you select the authentication type. If you do not enter a value here, the appliance by default sets 'one' as the authentication key ID. The authentication key ID configured on the Grid member must match the authentication key ID of the upstream router configuration.
   - **Authentication** **Secret/Password**: Enter the authentication password to use to verify after you select the authentication type. You can enter password with 4-16 printable ASCII characters. The authentication password configured on the Grid member must match the authentication key of the upstream router configuration.
   - **Intervals**: Specify the following BFD timer intervals for each router interface.
     
     - **Min** **Rx** **Interval** **(ms)**: Enter the minimum receive interval. The default is 100ms. The minimum receive interval value must be an integer between 50 and 9999 (both inclusive).
     - **Min** **Tx** **Interval** **(ms)**: Enter the minimum transmit interval. The default is 100ms. The minimum transmit interval value must be an integer between 50 and 9999 (both inclusive).
     - **Multiplier**: Enter the detection multiplier. You can enter a value between 3 and 50. The default is 3.
3. Click **Add**.

After you have added BFD templates, you can do the following:

- Select a BFD template and click the Edit icon to edit the configuration.
- Select a BFD template and click the Delete icon to delete it.

*Manage* *BFD* *Templates*

*[drawio]*

*Manage* *BFD* *Templates* *Wizard*
