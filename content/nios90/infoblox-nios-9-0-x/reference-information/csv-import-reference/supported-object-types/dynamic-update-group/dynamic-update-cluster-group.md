---
title: "Dynamic Update Cluster Group"
source: "/space/nios90/1480753577"
pageId: "1480753577"
---
| **Field** **Name** | **Data** **Type** | **Required** **(Yes/No)** | **Associated** **GUI** **Field** | **Associated** **PAPI** **Method** | **Usage** **and** **Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-ddnsprincipa lcluster | String | Yes |  |  | Example: ddnsprincipalcluster |
| name | String | Yes | Name | name | Example: cluster1 |
| parent | String | Yes | Dynamic Update Group | clusters | Example: [corp.example.com](http://corp.example.com) |
| principals | String | Yes | Principal | principals | Example:    [WIN-2008-CLUSTER1-NODE1$@CORP.EXAMPLE.COM](mailto:WIN-2008-CLUSTER1-NODE1$@CORP.EXAMPLE.COM) |
| comment | String | No | Comment | comment |  |
