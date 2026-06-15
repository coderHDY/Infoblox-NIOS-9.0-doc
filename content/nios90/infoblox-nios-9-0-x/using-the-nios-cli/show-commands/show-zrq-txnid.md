---
title: "show zrq_txnid"
source: "/space/nios90/1580433531"
pageId: "1580433531"
---
The `show zrq_txnid` CLI command displays the current Zone Replication Queue (ZRQ) transaction ID from the database.

# Syntax

`Maintenance Mode &gt; show zrq_txnid`

# Example

```
Maintenance Mode > show zrq_txnid  
ZRQ TXN ID (DB)     TXN ID Maximum  Utilization               
3                   4294967295      Less than 50% utilized
Before a ZRQ transaction id ID OneDB reaches its maximum limit it can be reset.
The ZRQ transaction ID is incremented each time a new ZRQ transaction is created.
```

To reset the transaction ID, use one of the following methods:

1. Use the special utility reset_zrq_txnid to reset the transaction ID (contact Infoblox Support for assistance).
2. Perform database dump and restore.
3. Execute a database version upgrade.
