---
title: "show zrq_all"
source: "/space/nios90/1580826656"
pageId: "1580826656"
---
The `show zrq_all ` CLI command displays the current transaction ID, the consumed `txn_id` value recorded in the `zrq_txn_id` file and current zrq zone ID.

# Syntax

`Maintenance Mode &gt; show zrq_all`

# Example

```
Maintenance Mode > show zrq_all  
ZRQ TXN ID (DB)     TXN ID Maximum  Utilization               
3                   4294967295      Less than 50% utilized
Before a ZRQ transaction id ID OneDB reaches its maximum limit it can be reset.
The ZRQ transaction ID is incremented each time a new ZRQ transaction is created.
ZRQ TXN ID (File)   TXN ID Maximum
1                   4294967295    
A generated ZRQ transaction ID is used by named to write zone data to the ZDB database.
Once used, the transaction ID is removed from OneDB. Additionally, the transaction ID,
after being incremented by 1, is written to a file. named reads this file to continue
processing or to resume operations in case of an interruption.
ZRQ Zone ID (DB)    Zone ID Maximum Utilization             
7                   4294967295      Less than 50% utilized
zrq zone ID in OneDB is incremented each time a new zone is created for a ZRQ transaction.
This ID is never reset.
```

To reset the transaction ID, use one of the following methods:

1. Use the special utility reset_zrq_txnid to reset the transaction ID (contact Infoblox Support for assistance).
2. Perform a dump and restore of the database.
3. Execute the database version upgarde.
