---
title: "Configuring Outbound Endpoints"
source: "/space/nios90/280269512"
pageId: "280269512"
---
An endpoint sends outbound notifications based on the notification rule and the outbound template that you have configured. With NIOS, you can configure REST API, DXL, Syslog, Cisco ISE endpoints to send outbound notifications. You can use the RESTful API and DXL fabric to obtain core network service information from the Infoblox Grid to assist with profiling the source or destination of network devices or use the RESTful API and WAPI in DXL endpoint to change configurations in the Infoblox Grid to help mitigate security threats. In addition to querying inbound data and changing system configurations and query interfaces, you can use the RESTful API and DXL messages to send outbound notifications so you can prioritize your security needs by detecting new hosts or networks or managing network access control.

The REST API endpoint you configure must be REST enabled so that they can handle RESTful API calls. The DXL endpoints must be connected to DXL brokers and listen on specific DXL topics as configured in the DXL action template. You must upload session management and action templates before you configure endpoints.

> **warning**
>
> ### Note
> 
> Infoblox recommends that you send notifications from a Grid Master Candidate, when it is available, instead of the Grid Master.
