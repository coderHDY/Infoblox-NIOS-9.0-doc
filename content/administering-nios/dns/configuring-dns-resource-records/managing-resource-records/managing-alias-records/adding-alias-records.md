---
title: "Adding ALIAS Records"
source: "/space/nios90/1423114644"
pageId: "1423114644"
---
To add an ALIAS record, perform the following steps:

1. From the **Data Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Record** ->  **ALIAS Record**.
2. In the *Add ALIAS Record* wizard, do the following:
   
   - **Name**: The ALIAS record name. The displayed zone name can either be the last selected zone or the zone from which you are adding the ALIAS record. If no zone name is displayed or if you want to specify a different zone, click **Select Zone**. When there are multiple zones, Grid Manager displays the *Zone Selector* dialog box. If you do not specify the record name, then it resumes the name of the Zone Apex.
   - **Record Type**: You can configure any record type - A, AAAA, MX, NAPTR, PTR, SPF, SRV, TXT.
   - **Target**: Enter the domain name that is used to reply to any DNS request. Any FQDN. You can also type the domain name for the resource. Examples:
     
     - CloudFront distribution domain name: d111111abcdef8.cloudfront.net
     - ELB load balancer DNS name: example-1.us-east-1.elb.amazonaws.com
     - S3 website endpoint: s3-website.us-east-2.amazonaws.com
     - Resource record set in this hosted zone: [http://www.example.com](http://www.example.com)
   - **Comment**: Enter additional information about the ALIAS record.
   - **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it.
3. Click **Next** to define extensible attributes. For information, see [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)*.*
4. Save the configuration or click **Next** to schedule this task. Click **Now** in the **Schedule Change** panel to immediately execute this task or click **Later** and specify a date, time, and time zone. For information about how to schedule a task, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
5. Save the configuration and click **Restart** if it appears at the top of the screen.
