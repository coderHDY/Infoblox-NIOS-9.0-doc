---
title: "Query Count Details by Subscriber ID"
source: "/space/nios90/1429013668"
pageId: "1429013668"
---
If you have configured Infoblox Subscriber Services, the* Query Count Details by Subscriber ID* dashboard provides information about the query count per subscriber ID. You can generate this report only if both the **Security** option of the reporting server and the **Enable DCA Subscriber Query Count logging** option are enabled.

This dashboard displays the following information in table format:

- **Subscriber ID Value**: The subscriber ID. The value is based on the subscriber ID type.
- **Subscriber ID Type**: Displays one of the following AVPs: **IMSI**, **IMEI**, **MSISDN**, **NAS-Port-ID**, **NAS-Port Calling-Station-ID**, **User-Name**, **Realm**, or **Class**.
- **Client ID**: The IP address of the client that queried for the subscriber services.
- **IP Space Discriminator**: The name of the IP space discriminator.
- **Event Type**: Displays one of the following event types: **All, Start, Interim, Stop**.
- **Query Count**: Total queries made by the subscriber ID. Queries made by guest devices are not counted in the query count.
