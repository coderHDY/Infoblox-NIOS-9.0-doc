---
title: "Adding Unknown Records"
source: "/space/nios90/1422590333"
pageId: "1422590333"
---
To add a record of Unknown type, perform the following steps:

1. From the **Data Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -&gt; **Record** -&gt; **Unknown Record**.
2. In the *Add Unknown Record* wizard, complete the following fields:
   
   - **Domain Name**: Click **Select Zone** to select a zone. When there are multiple zones, Grid Manager displays the *Zone Selector* dialog box. Click **Clear** to clear the zone that you have entered.
   - **DNS View**: The DNS view associated with the selected DNS zone is displayed.
   - **Type**: Enter the type that the unknown record belongs to. You can either enter the type in the textual mnemonic format or in the "TYPE*nnn*" format where "nnn" indicates the numeric type value. For example, for a record of type RP, you can either enter "RP" or "TYPE17".
3. Click the + icon to specify the details for the record you are creating:
   
   - **Field Type**: Select the field type that the record data must assume. Field types can be of the following:
     
     - **Base64-encoded Data**: BASE64 encoded binary data
     - **Hexadecimal Sequence**: Hexadecimal encoded binary data
     - **8-bit unsigned integer**: Unsigned 8-bit integer
     - **16-bit unsigned integer**: Unsigned 16-bit integer
     - **32-bit unsigned integer**: Unsigned 32-bit integer
     - **IPv4 Address**: IPv4 address in numerical form. For example, 192.0.1.1
     - **IPv6 Address**: IPv6 address in numerical form. For example, 2001:db8::abcd
     - **ASCII String**: ASCII text
     - **Domain Name**: Domain name
     - **Presentation**: Standard textual form of record data, as shown in a standard master zone file. This type is specifically intended to be used for standard types of records that cannot easily be represented as a sequence of fields of the other types. Such record types include LOC and APL. If you choose this field type, it must be the only field to represent the record
   - **Value**: Value of the field data. Before entering a value, see the *Guidelines for Creating Unknown Records* section.
   - **Length**: Format in which to specify the length of the field value. The length can only be **None** for fields of 8-bit unsigned integer, 16-bit unsigned integer, 32-bit unsigned integer, IPv4  Address, IPv6 Address, Domain Name, and Presentation types. For fields of type Base64-encoded Data, ASCII String, and Hexadecimal Sequence, the value of the **Length** field can be either **None** or **8 bits** or **16 bits **depending on the requirement of the corresponding record type.
     
     Irrespective of the field type you select, there is an implementation-specific limitation on the length of the record data. Specifically, the data is internally converted to a textual form that appears in a standard DNS master file, and it is rejected if the converted text exceeds 8192 bytes. Although unlikely, some extremely large data can be rejected because of this limitation.
4. Click **Add**. The record details are added to the table below.
5. In the **Comment** field, optionally enter a descriptive comment for the record.
6. Clear the **Disable** checkbox to enable the record. Select the checkbox to disable it.
7. Save the configuration or click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
8. Click **Save & Close**.
