---
title: "Alias Records"
source: "/space/nios90/280661676"
pageId: "280661676"
---
> **warning**
>
> **Note**
> 
> IDN is supported for object type: `fqdn.` You can use IDN or punycode while importing this object.



| **Field**** ****Name** | **Data**** ****Type ** | **Required (Yes/No)** | **Associated**** ****GUI f****ield** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-aliasrecord | String | Yes | NA | NA | Example: Alias Record |
| fqdn | FQDN | Yes | Name | name | This field combines the Alias record name and the zone name to form the  FQDN. Example: aaaa1.corp100.com |
| new_fqdn | FQDN | No | NA | dns_name |  |
| target_name | String | Yes | Target Name | target_name | You can type the domain name for the resource. Examples:  - CloudFront distribution domain name: d111111abcdef8.cloudfront.net - Elastic Beanstalk environment CNAME: example.elasticbeanstalk.com - ELB load balancer DNS name: example-1.us-east-1.elb.amazonaws.com - S3 website endpoint: s3-website.us-east-2.amazonaws.com - Resource record set in this hosted zone: www.example.com |
| new_target_name | String | No | NA | dns_target_name |  |
| target_type | String | Yes | Target Type | target_type | Type of the aliased resource record, can be one of: A, AAAA, CAA, MX, NAPTR, PTR, SPF, SRV, TXT. |
| _new_target_type | String | No | NA | NA |  |
| comment | String | No | Comment | comment | Additional Information |
| ttl | Boolean | No | TTL | ttl | This is an inherited field. For information, see *Data Specific Guidelines*. Example: 7200 |
| disabled | Boolean | No | Disable | disabled | Example: FALSE |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| Creator | String | No | NA | creator |  |
