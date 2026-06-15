---
title: "Importing and Exporting Data using CSV Import"
source: "/space/nios90/280398438"
pageId: "280398438"
---
Use **CSV** **Import** to import DNS, DHCP, IPAM data, and subscriber site data through Grid Manager. You can use this feature to migrate or add new data, overwrite existing data, merge new data with existing data, delete existing data, or replace certain existing data in the database.  
To import new data, you must first prepare a data file (include all required fields and follow the proper syntax), and then start an import through Grid Manager. You can also export existing data to a data file, modify the data, and then import the modified data to the database. You can either overwrite existing data with the modified data or merge new data with the existing data. You can also delete data that is no longer required or replace certain existing data with new data in the file. Note that the replace option is valid for authoritative zone data only whereas other options are valid for all supported objects including zones. The replace operation creates a snapshot or a backup of the existing data in the database before replacing the database with the data in the imported CSV file.  
The appliance supports CSV import for most record types. You can use IDNs and punycode for the domain name field for most of the DNS object types. For information about IDNs and punycode, see [*Support for Internationalized Domain Names*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/managing-internationalized-domain-names). Only superusers can import A and AAAA records with a blank name. Limited-access users must have read/write permission to **Adding** **a** **blank** **A/AAAA** **record** in order to import A and AAAA records with a blank name, otherwise the CSV import operation might fail. You can assign global permission for specific admin groups and roles to allow to import A and AAAA records with a blank name. For more information, [*Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dns-resources). For each supported record type, you must include all required fields in the header row of the dataset that you want to import. For a list of supported record types and specific guidelines for creating a data file, refer to the [*Infoblox*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference)[ ](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference)[*CSV*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference)[ ](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference)[*Import*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference)[ ](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference)[*Reference*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference).  
To import a data file:

1. Create a data file if you do not already have one. Follow the guidelines for the supported objects to ensure that you include all the required fields in the file. For more information, refer to *Infoblox CSV Import Reference*. You can also export existing data and then update the file for re-import. For more information, see Exporting Data to Files below.
2. Configure import options, see below.
3. Start a CSV import. For information, see Configuring Import Options below.

> **error**
>
> ### Warning
> 
> CSV imports and operations that involve massive data such as deleting large zones and recursive deletion of networks and all child objects, will significantly affect member performance, resulting in service outage.

When you submit multiple CSV imports, the appliance puts the import jobs in queue and executes them one at a time in the order they are submitted. When a job is being executed, it is in the **Import** **in** **progress** state. When a job is in queue for execution, it is in the **Import** **pending** state. You can import multiple CSV files at a time, but at any given time you can execute only one single task. Note that only one task at a time will be in the **Import** **in** **progress** state, while the others are in the **Import** **pending** state. You can view the status of each import job through **CSV** **Job** **Manager**. Superusers can view all import jobs while limited-access users can view only the jobs they submitted.  
To access **CSV** **Job** **Manager**, from the **Data** **Management** tab, click **CSV** **Job** **Manager** from the Toolbar and select **Jobs** **Manager**, or from the **Tasks** **Dashboard**, click **CSV** **Import** in the IPAM Task Pack. Superusers and limited-access users that have applicable configurations and permissions can perform CSV imports and exports. For information about user permissions for CSV imports and exports, see CSV Import User Permissions below.  
You can do the following in **CSV** **Import**:

- Add, overwrite, append, replace or delete data through the imported CSV file, as described in [*Configuring Import Options*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/importing-and-exporting-data-using-csv-import/configuring-import-options).
- Verify the content in the CSV file, as described in Configuring Import Options.
- View a list of CSV import jobs, as described in Creating a Data File for Import.
- Add and start CSV import jobs, upload data files, stop CSV imports, or edit the options of the uploaded file, as described in Modifying CSV Import Jobs.
- Delete uploaded jobs, as described in Deleting Uploaded Jobs.
- Download the following: imported files, import errors, import results, or snapshots, as described in Downloading Files.
- Select a pending or saved job, and then click the Cancel icon to cancel the job.
- Click the Refresh icon to refresh the **CSV Job Manager**.

> **warning**
>
> ### Notes
> 
> - The list of CSV import jobs is not restored when you restore a backup file or when you promote a master candidate.
> - Superusers can view any jobs in the **CSV** **Job** **Manager**, and limited-access users can only view jobs they submitted.
> - A non-superuser can import or export CSV files for subscriber records.
