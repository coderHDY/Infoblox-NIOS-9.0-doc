---
title: "Guidelines for Creating Unknown Records"
source: "/space/nios90/1422688549"
pageId: "1422688549"
---
Make note of the following guidelines when you create an unknown record:

- You cannot enter a record type that already exists in NIOS. For example, A, AAAA, ANY, CAA, CNAME, DHCID, DNAME, DNSKEY, DS, MX, NAPTR, NS, NSEC, NSEC3, NSEC3PARAM, PTR, RRSIG, SOA, SRV, TLSA, TXT.
- If the record contains an ASCII String field type and you include double quotes, you must escape it with a backslash. For example, to obtain a value of "a"b", specify the string as \"a\"b\".
- Ensure that you use the correct syntax when entering the value of the record.
- If you want to modify the field type of an unknown record, you have to delete the field type and then add it again.
- If you create an unknown record of a specific type and later on the record type is supported by NIOS, the record continues to exist as an unknown record. You will need to migrate the record to the newly supported type.
- If you add an unknown record that is not supported by the Microsoft server to the zone, you may encounter issues with the MS server synchronization.
- You cannot create records of type MD and MF.
