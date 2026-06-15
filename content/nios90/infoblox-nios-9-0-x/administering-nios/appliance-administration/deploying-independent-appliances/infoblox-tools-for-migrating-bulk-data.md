---
title: "Infoblox Tools for Migrating Bulk Data"
source: "/space/nios90/280407560"
pageId: "280407560"
---
Typically, the next step after cabling a single independent appliance to a network and configuring its network settings—or cabling two independent appliances to a network and configuring them as an HA pair—is to import data from legacy DNS, DHCP, and TFTP servers. Infoblox provides several tools to accomplish this:

- The CSV import feature allows you to import DNS, DHCP, and IPAM data through Grid Manager. You can add, overwrite, or merge data using this feature. The appliance updates the database based on import settings and the data you specify in the data files. From the **Data** **Management** tab of Grid Manager, you can access the *Import* *Manager* editor from which you start a data import. You can also export existing data to a CSV file. You can use this file to modify data, and then re-import the data into the database using the CSV import feature. For information, see [About CSV Import](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280407560).
- The Infoblox Data Import Wizard is a useful tool that simplifies the importation of DNS, DHCP and IPAM, and TFTP settings and data into a NIOS appliance. For large data sets, this option is an efficient approach. To download the Data Import Wizard, visit [*www.infoblox.com/import/*](http://www.infoblox.com/import/).
- For smaller DNS data sets, you can use the zone import feature, which allows you to import data on a per-zone basis (see [*Importing Zone Data*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/importing-zone-data)).
