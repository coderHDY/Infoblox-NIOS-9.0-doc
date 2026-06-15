---
title: "Configuring Outbound Notifications"
source: "/space/nios90/280269606"
pageId: "280269606"
---
A notification is an association between an event type, a template, and an endpoint. You must define the event type that triggers the notification, choose the template you want to use and an API endpoint with which the Grid must establish a connection.

Note the following before you configure outbound notifications:

- You must define an endpoint and create or upload outbound templates to the Grid before adding a notification.
- To send outbound notifications to an endpoint, you must configure notification rules first. A notification rule contains the target endpoint to which you want to send outbound notifications and the event type upon which you want to take action.
- The event type you select in a notification rule must match the event type defined in the template you want to use for that rule. Otherwise, the appliance returns an error.

To configure outbound notifications, complete the following:

1. Prepare outbound templates that you want to use for notification rules. For more information about API templates, see *[About Outbound Templates](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269564)*. You can also reference sample API templates for supported ecosystem partners and modify them accordingly.

2. Upload outbound templates to the Grid so you can use them for corresponding notification rules. For more information, see in *[Adding Outbound templates](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280661981)*.

3. Configure endpoints to which you want to send outbound notifications. Infoblox supports the following endpoints: RESTful API and DXL. For more information, see *[Configuring Outbound Endpoints](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269512)*.

4. Select event types and configure criteria for notification rules. For more information, see *[Configuring Notification Rules](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280759890)*.

> **warning**
>
> **Note**
> 
> To access online resources about this feature, including training videos and sample API templates for supported ecosystem partners, visit the Infoblox Community Site at *[https://community.infoblox.com](https://community.infoblox.com/)*.
