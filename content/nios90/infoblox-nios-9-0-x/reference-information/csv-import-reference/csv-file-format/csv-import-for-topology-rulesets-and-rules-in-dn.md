---
title: "CSV Import for Topology Rulesets and Rules in DNS Traffic Control"
source: "/space/nios90/280402217"
pageId: "280402217"
---
You can import DNS Traffic Control topology rulesets and their rules using the **CSV** **Import** feature. You must specify the topology rulesets and rules separated by commas in the CSV file:  
`header-dtctopology,name*,comment`  
`header-dtctopologyrule,dest_link*,dest_type*,name*,parent*,sources*,position dtctopology,topo_server11,TopologyRule dtctopologyrule,dtc_s11,Server,Rule11,topo_server11,SUBNET/IS_NOT/172.31.0.0/16,1 dtctopologyrule,pool12,Server,Rule12,topo_server11,"COUNTRY/IS/Canada",2`

# Importing Topology Rulesets and Rules

To import topology rulesets, you must specify the **header-topology**, **name** and **comment** columns in the spreadsheet. The **name** column indicates the name of the topology ruleset. To import topology rules, specify the following in the spreadsheet:

| **A** | **B** | **C** |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **HEADER-**    **DTCTOPOL** **OGY** | **NAME*** | **COMMENT** |  |  |  |  |
| **HEADER-**    **DTCTOPOL** **OGYRULE** | **DEST_LINK*** | **DEST_TYPE*** | **NAME*** | **PARENT*** | **SOURCES*** | **POSITION** |
| DTCTOPOL OGY | topo_server1 | Topology Server 1 |  |  |  |  |
| DTCTOPOL OGYRULE | dtc_s1 | SERVER | RULE1 | topo_server1 | SUBNET/IS/10.0.0.    0/8 | 1 |
| DTCTOPOL OGYRULE | dtc_s2 | SERVER | RULE2 | topo_server1 | SUBNET/IS/10.120    .0.0/16 | 2 |
| DTCTOPOL OGY | topo_pool1 | Topology Pool 3 |  |  |  |  |
| DTCTOPOL OGYRULE | pool1 | POOL | RULE3 | topo_pool1 | COUNTRY/IS/Antar ctica,CONTINENT/I S/Africa,SUBDIVISI ON/IS/Aden | 1 |

You must specify the **dest_link,** **dest_type,** **name,** **parent,** **sources,** and **position** columns when you import a CSV file with topology rules. Note that the **dest_link** indicates the name of the destination, which is either a pool or server and **position** indicates the order of rules in a topology ruleset. The values that you specify for **dest_link** must exist in the database. The **dest_type** indicates the destination type, which can either be a server or a pool. Specify a name for the topology rule in the **name** column. In the **parent** column, you can specify the name of the DTC topology ruleset. The **sources** column must contain either a subnet IP address or a geographic location. The appliance displays an error message if you do not specify valid GeoIP labels when you import a CSV file.
