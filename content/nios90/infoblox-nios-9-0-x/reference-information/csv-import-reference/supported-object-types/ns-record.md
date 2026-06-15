---
title: "NS Record"
source: "/space/nios90/280269067"
pageId: "280269067"
---
> **warning**
>
> **Note**
> 
> IDN is supported for object type: fqdn. You can use IDN or punycode while importing this object.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-NsRecord | String | Yes |  |  | Example: NsRecord |
| fqdn | FQDN | Yes | Zone | name | This field combines the domain name and the zone name to form the FQDN.   Example: test.corp100.com |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| dname | Domain name | Yes | Name Server | nameserver | Example: ns1.corp100.com |
| _new_dname | Domain name | No |  |  | Add this field to overwrite the dname field when you select the overwrite or merge option. |
| zone_nameservers | Server list | Yes | Name server list | addresses | Data must be in the following format: "IPAddress1/auto_create_ptr1, IPAddress2/auto_create_ptr2" Example: "10.0.0.4/TRUE, 10.0.0.44/FALSE, 10.0.0.55/TRUE" |

> **warning**
>
> **Note**
> 
> When you perform a CSV export of automatically created NS records using Infoblox API, the **zone_nameservers** field will have an empty value. Therefore, if you import the previously exported CSV file that includes automatically created NS records through the Infoblox GUI, then the CSV import fails and Grid Manager displays an error message.

# Examples

This section contains examples of how to create data files for NS records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an NS Record

This example shows how to add an NS record corp100.com in the Default DNS view with DNAME (name server) = ns1.corp100.com, name server address = 100.0.0.101, and TRUE for adding a PTR Record.  
`header-nsrecord,fqdn*,view,dname*,zone_nameservers* nsrecord,corp100.com,default,ns1.corp100.com,"100.0.0.101/TRUE"`

This example shows how to add an NS record corp200.com in the Internal DNS view with DNAME (name server) = ns1.corp200.com and two name server addresses: 200.0.0.101 with TRUE for adding a PTR Record and 200.0.0.102 with TRUE for adding a PTR record.  
`header-nsrecord,fqdn*,view,dname*,zone_nameservers* nsrecord,corp200.com,Internal,ns1.corp200.com,"200.0.0.101/TRUE,200.0.0.102/TRUE"`

## Overwriting NS Record Data

This example shows how to overwrite the DNAME of an existing NS record from ns1.corp100.com to ns2.corp100.com.  
`header-nsrecord,fqdn*,dname*,_new_dname,zone_nameservers* nsrecord,corp100.com,ns1.corp100.com,ns2.corp100.com,"100.0.0.101/TRUE"`

This example shows how to overwrite the zone name servers of an existing NS record to 100.0.0.101/TRUE and 100.0.0.102/TRUE.  
`header-nsrecord,fqdn*,dname*,zone_nameservers* nsrecord,corp100.com,ns2.corp100.com,"100.0.0.101/TRUE,100.0.0.102/TRUE"`

## Merging NS Record Data

This example shows how to merge zone name servers 100.0.0.101/TRUE and 100.0.0.102/TRUE to an NS record.  
`header-nsrecord,fqdn*,dname*,zone_nameservers* nsrecord,corp200.com,ns1.corp200.com,"100.0.0.101/TRUE,100.0.0.102/TRUE"`
