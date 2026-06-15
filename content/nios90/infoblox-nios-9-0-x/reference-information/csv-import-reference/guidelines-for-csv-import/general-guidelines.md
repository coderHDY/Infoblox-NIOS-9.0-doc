---
title: "General Guidelines"
source: "/space/nios90/422445224"
pageId: "422445224"
---
Follow these rules to start a data file:

- Do not use UTF-8 characters in the CSV file name, but the contents of a CSV file must be encoded in UTF-8 characters. Note that Microsoft Excel imports data in the default code page, either in ISO-8859-1 or WINDOWS-1252. You must not import a CSV file that is encoded in Windows 1252 or ISO-8859-1 formats.
- Use a new line to enter data for each row. Separate each data field with a supported separator, such as a comma, semicolon, space, or tab.
- Do not include blank lines in the data file.
- Field names: Specify the field names in the second line. You can include multiple rows of field names as long as you define the fields before the data. The first column in the field name row must be defined as "Header." The rest of the columns are field names of the data. Columns without a field name are ignored. If multiple field names are specified, the latest field names are used to import the data.
- It may take longer than expected to import a large number of DHCP ranges that are associated with a single MAC address filter.
- When a CSV import starts, the appliance validates the first 100,000 rows of data in the CSV file. If the file contains more than 100,000 rows of data, the appliance validates the rest of the data as the import progresses.
- The appliance supports up to one million rows of data in each CSV import.
- Use the add function to add new rows from the imported CSV file to the database.
- Use the **Override** function, not the merge function, to overwrite existing data. When you use the merge function, the appliance does not overwrite existing data, even if the data file contains new data.
- Use the **Delete** function to delete import jobs that are uploaded. You can delete the content of a CSV file that you have imported to the database. Note that you cannot delete jobs that are already imported.
- Use the **Replace** operation to replace current data in the database with data in the imported file. You can use the replace function for authoritative zone data only. The replace operation might affect system performance if you try to replace a zone with a lot of changes. Infoblox recommends that you perform the replace operation for large import files (more than 10,000 rows of changes) during non-peak hours. This operation does not support DNS records that are automatically generated or exported, but it supports NS records that are created manually.
- When you import CSV files for NS record updates, you must specify a value for **zone_nameservers**. NIOS displays an error message if you do not specify a value for this field when you import the CSV file.
- When you perform a CSV export of automatically created NS records using Infoblox API, the **zone_nameservers** field will have an empty value. Therefore, if you import the previously exported CSV file that includes automatically created NS records through the Infoblox GUI, then the CSV import fails and Grid Manager displays an error message.
- When you perform a CSV import that includes objects that have scheduled changes or updates associated with them, the import fails. Only superusers can cancel the scheduled changes.
- When you stop an import, the appliance completes the import of the data row it is currently processing before it stops the import. You cannot resume the import from where it stopped.
- You can download uploaded or error files, snapshots, and results file. For more information, see *Infoblox* *NIOS* *Administrator* *Guide.*
- When you import a small file, the appliance processes the import quickly. Under this circumstance, the appliance may generate an error message when you try to stop the import because the import is completed before you can stop it.
- The error files of the last two imports are stored on the appliance. You can download these files using the APIimport_id method. For information, refer to the *Infoblox* *API* *Documentation*.
- When you use Microsoft Excel to create or view a data file, ensure that you review the settings of the file. Some data, such as dates, may show up in a different format depending on your settings.
- All operations triggered by a CSV import are recorded in the audit log.
