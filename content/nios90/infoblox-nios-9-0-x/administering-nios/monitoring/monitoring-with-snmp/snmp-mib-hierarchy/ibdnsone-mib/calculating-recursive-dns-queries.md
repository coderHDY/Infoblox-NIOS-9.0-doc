---
title: "Calculating Recursive DNS Queries"
source: "/space/nios90/1430094894"
pageId: "1430094894"
---
You can use the information in ibZoneStatisticsTable and ibZonePlusViewStatisticsTable to calculate the total number of recursive queries.  
Following is an example of ibZoneStatisticsTable indexed by zone names in the default view:



`index   ibBindZoneNameibBindZoneSuccessibBindZoneReferralibBindZoneNxRRset `

`ibBindZoneNxDomainibBindZoneRecursionibBindZoneFailure`

`=====================================================================================================`  
` "abc.com"abc.com000`  
`       0   0   0`  
` "summary"summary500`  
`       0   0   0`  
` "internal.com"internal.com100 `

`       0   0   0`

Following is an example of ibZonePlusViewStatisticsTable indexed by zone names in all user-defined views:



`index   ibBindZonePlusViewNameibBindZonePlusViewSuccessibBindZonePlusViewReferralibBindZonePlusViewNxRRset `

`ibBindZonePlusViewNxDomainibBindZonePlusViewRecursionibBindZonePlusViewFailureibBindViewName`

`=====================================================================================================`  
` "ext1.com"ext1.com100`  
`        0  00  DNS1`  
` "ext2.com"ext2.com200`  
`        0  00  DNS1`  
` "ext3.com"ext3.com000`  
`        0  00  DNS2`   
Use the ibBindZoneSuccess object in both tables to determine the total number of recursive queries. If your DNS server is a caching-only server, the total number of recursive queries is the number indicated in the ibBindZoneSuccess object of the "summary" zone. In this example, for a caching-only server, the total number of recursive queries is 5.  
If your DNS server is an authoritative server, add all the numbers in ibBindZoneSuccess for all zones in both tables, excluding the "summary" zone. In this example, the total is 4. You then subtract this number from the number in ibBindZoneSuccess of the "summary" zone. In this case, the total number of recursive queries is 1 for an authoritative DNS server.
