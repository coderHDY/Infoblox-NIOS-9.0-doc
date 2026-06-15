---
title: "Adding CAA Records"
source: "/space/nios90/1422590540"
pageId: "1422590540"
---
To add a CAA record, perform the following steps:

1. From the **Data Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Record** -> **CAA Record**.
2. In the *Add CAA Record* wizard, complete the following fields:
   
   - **Name**: Enter a name for the CAA record. Click **Select Zone** to select a zone. When there are multiple zones, Grid Manager displays the *Zone Selector* dialog box. Click **Clear** to clear the zone that you have entered.
   - **DNS View**: The DNS view associated with the selected DNS zone is displayed.
   - **Flag**: Select a checkbox to set the flag value. When the flag is set to **Bit 0 (Critical)**, it tells the CA that it must completely understand the property tag to proceed. A CA does not issue certificates for any domain when the flag is set to **Bit 0** **(Critical)** and the property tag is not understood. NIOS considers the flag value as zero, if you do not select any checkbox.
     
     Note that the flags are unsigned integers between 0 and 255. Infoblox represents these integers in the form of bits. When you select the checkbox for **Bit 0** **(Critical)**, the flag value is set to binary 10000000, which is decimal 128. Example: CAA 128 xyz “Unknown”.   
     You can select only **Bit 0 (Critical)** as the flag value and the remaining checkboxes are reserved for future use. The appliance displays a warning message when you select a checkbox other than **Bit 0 (Critical)**.
     
     Consider the following example with two CAA records:
     
     - CAA 0 issue “[ca.example.net](http://ca.example.net); policy=ev”
     - CAA 128 xyz “Unknown”
     
     In the above example, the property tag **xyz** is flagged as unknown. The CA associated with [http://example.net](http://example.net)  or any other issuer cannot issue a certificate unless the processing rules for the **xyz** property tag are clearly understood by the CA.
   - **Type(Tag)**: Indicates the type of CAA record. The supported CAA record types are:
     
     - **Issue**: Select this to explicitly authorize a single CA to issue a certificate for the domain and subdomains of the specified domain.
     - **Issuewild**: Select this to explicitly authorize a single CA to issue a wildcard certificate for the domain. It allows the domain holder or anyone acting under the authority of the domain holder to issue wildcard certificates for the domain.
       
       Note that **Issue wild** type takes precedence over **Issue.**
     - **Iodef**: Select this to specify an email address or URL of the web service to report invalid certificate requests or issued certificates that violate your CAA policy.  
       Infoblox allows you to enter a new CAA record type other than those displayed in the drop-down list. The maximum length allowed is 255 characters.
   - **Certificate Authority**: Indicates the CA that is authorized to issue a certificate for the domain. The maximum length for certificate authority is 8192 characters.  You can also specify the email address or the URL to report CAA policy violation for the domain. This is valid for **Iodef** only. Infoblox recommends that you add either the **http://** or **https:// **prefix to the domain name. You must explicitly add "mailto" when specifying the email address. For example, "mailto:admin@[example.com](http://example.com/)".
   - **Comment**: Optionally, enter a descriptive comment for the CAA record.
   - **Disable**: Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Save the configuration or click **Next** to define extensible attributes. For information, see [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
4. Save the configuration or click **Next** to schedule this task. Click **Now** in the **Schedule Change** panel to immediately execute this task or click **Later** and specify a date, time, and time zone. For information about how to schedule a task, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
5. Click **Save & Close** to complete the configuration.

> **warning**
>
> ### Note
> 
> Infoblox does not support shared CAA records and does not provide Windows 2016 MS Server support for CAA records.

You can also perform the following steps:

- Use **Global** **Search** to search for CAA records. For information, see [*Global Search*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569)*.*
- Use **Copy** **Records** to copy CAA records between DNS zones. For information, see [*Copying Zone Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665456)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272744/Configuration+Example+Configuring+a+DNS+View#bookmark1700)
- Define global permission for **All** **CAA records** with read-only, read/write or deny access. You can also define object level permission for CAA records. For information, see [*Defining Global Permissions *](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)and [*Defining Object Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
- Import and export records in CSV format. For information, see [*Importing and Exporting Data using CSV Import*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=1422590540).
- View audit log entries for the CAA record. For information, see [*Viewing the Audit Log*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049).
- Use Smart Folders to organize DNS Infrastructure Protection profiles by name, comment or object type. For information, see [*Smart Folders*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280757969).
- You can view the status of the import process and a summary report in the Data Import Wizard Log. For large data sets, this option is an efficient approach. To download the Data Import Wizard, visit [*https://data-import-wizard.infoblox.com/#/overviewDashboard*](https://data-import-wizard.infoblox.com/#/overviewDashboard).
