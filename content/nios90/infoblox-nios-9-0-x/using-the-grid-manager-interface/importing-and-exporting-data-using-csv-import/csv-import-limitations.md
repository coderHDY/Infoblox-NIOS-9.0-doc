---
title: "CSV Import Limitations"
source: "/space/nios90/1455292797"
pageId: "1455292797"
---
Ensure that you understand the following limitations before you start an import:

- You can import multiple CSV files at a time, but at any given time you can execute only one single task. The import tasks are queued. Note that only one task at a time will be in the **Import in progress** state, while the others are in the **Import pending** state.
- Do not use UTF-8 characters in the CSV file name.
- When you perform a CSV import that includes objects that have scheduled changes or updates associated with them, the import fails. Only superusers can cancel the scheduled changes.
- When you stop an import, the appliance completes the import of the data row it is currently processing before it stops the import. You cannot resume the import from where it stopped.
- You cannot roll back to previous data.
- The following data cannot be imported: Microsoft management, DNSSEC, and GSS-TSIG data.
- CSV import does not support DNSSEC zones, though resource records added for a signed zone are supported.
- Only editable data can be imported. Discovered data cannot be imported or manipulated.
- When you promote a new Grid Master during an import, the import stops; and it does not restart on the new Grid Master. When a failover occurs during an import, the import stops on the old active node, and it does not restart on the new active node.
- It may take longer than expected to import a large number of DHCP ranges that are associated with a single MAC address filter.
- When a CSV import starts, the appliance validates the first 100,000 rows of data in the CSV file. If the file contains more than 100,000 rows of data, the appliance validates the rest of the data as the import progresses.
- The appliance supports up to one million rows of data in each CSV import.
- You cannot import network containers.
- To successfully import RIR (Regional Internet Registries) organizations, you must also specify the maintainer password. Note that the password field is not exported during a CSV export. For information about RIR updates, see [*RIR Registration Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates).
- You can use the **Replace** operation to replace the current data in the database with the data in the imported CSV file. Note that the replace option is valid for authoritative zone data only whereas the other options are valid for all supported objects including zones. For more information, see Configuring Import Options below.
- The **Replace** operation is available only for authoritative zones. This operation does not support DNS records that are automatically generated or exported, but it supports NS records that are created manually.
- Use the delete function to delete import jobs that are uploaded. You can delete the content of a CSV file that you have imported to the database. Note that you cannot delete jobs that are already imported.
- When you import CSV files for NS record updates, you must specify a value for **zone_nameservers**. NIOS displays an error message if you do not specify a value for this field when you import the CSV file.
- When you perform a CSV export of automatically created NS records using Infoblox API, the **zone_nameservers** field will have an empty value. Therefore, if you import the previously exported CSV file that includes automatically created NS records through the Infoblox GUI, then the CSV import fails, and Grid Manager displays an error message.
- If you upload a file and preview the file using the **Preview** option, and later update the content of the same CSV file, and then try to view the edited file using the same *Preview* wizard, you may not be able to see the changes. Infoblox recommends that you start a fresh CSV import to upload the edited file and navigate to the *Preview* wizard to preview the file.
- You cannot perform the CSV import operation on a Microsoft Server zone object, but NIOS allows you to perform the CSV import operation on records within a Microsoft Server zone. You may not see an error message when you perform a CSV import using the replace operation on a Microsoft Server zone.
- You cannot perform merge, custom, and replace operations for subscriber records.
- A non-superuser can import or export CSV files for subscriber records.
