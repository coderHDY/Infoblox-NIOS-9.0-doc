---
title: "Importing a Topology Database"
source: "/space/nios90/1411318255"
pageId: "1411318255"
---
The DNS Traffic Control license includes a MaxMind location database that is deployed when you enable the DNS Traffic Control. Note that only a single MaxMind location database can be present on the Grid at a time. The MaxMind location database contains various geographic locations that can be used when you define a geography rule. NIOS supports both paid GeoIP2 and free GeoLite2 MaxMind location databases. The GeoLite2 MaxMind Country database is shipped with the NIOS appliance. The MaxMind location database is static over the lifetime of the querying process until you import a new database and restart services.

When you import a new MaxMind location database, the appliance replaces the existing database. You can import MaxMind location databases that are in MMDB or CSV format. To view the current version of the database, click **Current** **Version.**

You can import a ready-to-use MaxMind location database or create your own ZIP file containing multiple CSV files. To import a MaxMind location database or to view the current version of the database, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab, and then select the **Traffic** **Control** tab.
2. Click the arrow next to the **Topology** **Database**, and then select **Import** **GeoIP** **Database** from the drop-down list.
3. In the *Import* *Topology* *Database* wizard, complete the following:
   
   - **File**: Click **Select** and navigate to the MaxMind location database.
   - **Upload**: Click **Upload** to import the MaxMind location database.
4. In the Toolbar, click the arrow next to **Topology** **Database**, and select **Current** **Version** from the drop-down list to view the details of the imported MaxMind location databases. In the Geography section, the Grid Manager displays the database type, build date, build version, and the date and time when the database was deployed to the Grid Master.
   
   The latest database version may not be deployed on all DTC members. To view the current deployed versions, select **Data** **Management** -&gt; **DNS** -&gt; **Members**.

To create a custom database in a ZIP file, complete the following:

1. Create a directory with CSV files and name them using the following pattern:  
   {Product}-{Content}-{Blocks-or-Locations}-{version-or-localization}.csv.  
   Only the three CSV files matching these patterns are suitable for the import:  
   {Product}-{Content}-Blocks-IPv4.csv  
   {Product}-{Content}-Blocks-IPv6.csv  
   {Product}-{Content}-Locations-en.csv  
   For example:  
   GeoLite2-City-Blocks-IPv4.csv  
   GeoLite2-City-Blocks-IPv6.csv  
   GeoLite2-City-Locations-ru.csv  
   or  
   GeoIP2-Country-Blocks-IPv4.csv  
   GeoIP2-Country-Blocks-IPv6.csv  
   GeoIP2-Country-Locations-en.csv  
   where  
   “GeoLite2” and “GeoIP2” correspond to {Product}  
   “City” and “Country” correspond to {Content}  
   “IPv4” and “IPv6” correspond to {version}  
   “ru” and “en” correspond to {localization}  
   Note that the locations file and at least one of the Blocks files must exist or the import fails. Also, all of these files must have identical {Product}-{Content} pairs or the import fails. You can use a ready-to-use MaxMind location database as an example.
2. You can add multiple CSV files for different localizations to your ZIP file. Use the following naming pattern:  
   {Product}-{Content}-Locations-{localization}.csv.  
   For example:  
   GeoLite2-City-Locations-ru.csv  
   GeoIP2-City-Locations-de.csv  
   GeoIP2-Country-Locations-en.csv
3. Add the directory with the CSV files to a ZIP file. The name of the ZIP file you upload and the name of the directory in the ZIP file are not significant. The ZIP file should contain only one directory and no subdirectories. Any files in the ZIP file with an extension different from .csv are ignored.
4. Import the ZIP file to Grid Manager as described above.

> **warning**
>
> ### Note
> 
> The Country database does not support 'subdivision' labels and importing it invalidates all existing rules that use 'subdivision' labels.
