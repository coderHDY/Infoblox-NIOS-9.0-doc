---
title: "Managing NAPTR Records"
source: "/space/nios90/1422229727"
pageId: "1422229727"
---
A NAPTR (Name Authority Pointer) record specifies a rule that uses a substitution expression to rewrite a string into a domain name or URI (Uniform Resource Identifier). A URI is either a URL (Uniform Resource Locator) or URN (Uniform Resource Name) that identifies a resource on the Internet.  
NAPTR records are usually used to map E.164 numbers to URIs or IP addresses. An E.164 number is a telephone number, 1-555-123- 4567 for example, in a format that begins with a country code, followed by a national destination code and a subscriber number. (E.164 is an international telephone numbering system recommended by the International Telecommunication Union.) Thus, NAPTR records allow us to use telephone numbers to reach devices, such as fax machines and VoIP phones, on the Internet.  
To map an E.164 to a URI, the E.164 number must first be transformed into a domain name. ENUM (E.164 Number Mapping) specifies a method for converting E.164 numbers to domain names. For example, using the method specified by ENUM, the telephone number 1-555-123-4567 becomes the domain name 7.6.5.4.3.2.1.5.5.5.1.e164.arpa. For details about ENUM, refer to *RFC* *3761,* *The* *E.164* *to* *Uniform* *Resource* *Identifiers* *(URI)* *Dynamic* *Delegation* *Discovery* *System* *(DDDS)* *Application* *(ENUM)*.  
After the E.164 number is converted to a domain name, a DNS client can then perform a DNS lookup for the NAPTR records of the domain name. The following example illustrates how a DNS client processes NAPTR records.  
In this example, the telephone number 1-555-123-4567 is converted to the domain name 7.6.5.4.3.2.1.5.5.5.1.e164.arpa. The DNS client then sends a query to the Infoblox DNS server for the NAPTR records associated with 7.6.5.4.3.2.1.5.5.5.1.e164.arpa. The Infoblox DNS server returns the following NAPTR record:

*[image: media]*



*[drawio]*



The DNS client then examines the fields in the NAPTR record as follows:

- If a DNS client receives multiple NAPTR records for a domain name, the value in the Order field determines which record is processed first. It processes the record with the lowest value first.
- The DNS client uses the Preference value when the Order values are the same. Similar to the Preference field in MX records, this value indicates which NAPTR record the DNS client should process first when the records have the same Order value. It processes the record with the lowest value first.  
  In the example, the DNS client ignores the Order and Preference values because it received only one NAPTR record.
- The Flag field indicates whether the current lookup is terminal; that is, the current NAPTR record is the last NAPTR record for the lookup. It also provides information about the next step in the lookup process. The flags that are currently used are:

**U**: Indicates that the output maps to a URI (Uniform Record Identifier).  
**S**: Indicates that the output is a domain name that has at least one SRV record. The DNS client must then send a query for the SRV record of the resulting domain name.  
**A**: Indicates that the output is a domain name that has at least one A or AAAA record. The DNS client must then send a query for the A or AAAA record of the resulting domain name.  
**P**: Indicates that the protocol specified in the Service field defines the next step or phase.

- If the Flag field is blank, this indicates that the client must use the resulting domain name to look up other NAPTR records.
- The Service field specifies the service and protocol that are used to communicate with the host at the domain name. In the example, the service field specifies that SIP (Session Initiation Protocol) is used to contact the telephone service.
- The regular expression specifies the substitution expression that is applied to the original string of the client. In the example, the regular expression !^.*$!sip:jdoe@corpxyz.com! specifies that the domain name 7.6.5.4.3.2.1.5.5.5.1.e164.arpa is replaced with [sip:jdoe@corpxyz.com](mailto:sip:jdoe@corpxyz.com).   
  The regular expression in a NAPTR record is always applied to the original string of the client. It must not be applied to a domain name that resulted from a previous NAPTR rewrite.
- The Replacement field specifies the FQDN for the next lookup, if it was not specified in the regular expression.

> **warning**
>
> ### Note
> 
> If a NAPTR record with the domain name in its native characters is added to the Infoblox Grid through DDNS updates, the **Domain** and **Replacement** fields display the domain name in UTF-8 encoded format. For example, a NAPTR record with the domain name 电脑 .test.com added through DDNS updates displays \231\148\181\232\132\145.test.com in the **Domain** and **Replacement** fields.
