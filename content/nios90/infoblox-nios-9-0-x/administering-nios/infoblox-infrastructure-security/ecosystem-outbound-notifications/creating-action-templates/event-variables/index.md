---
title: "Event Variables"
source: "/space/nios90/1375045224"
pageId: "1375045224"
---
The E: event name space is populated with variables from the event. For performance reasons, only the variables referred in the template will be available in the name space. This means that if the template is changed and if a new variable is added, it might take some time for the changes to be propagated to all the Grid members and the new variable to be available in future template executions.  
You can use `event_type` in an action template to specify the following supported event types: RPZ, LEASE, TUNNEL, NETWORK_IPV4, NETWORK_IPV6, RANGE_IPV4, RANGE_IPV6, FIXED_ADDRESS_IPV4, FIXED_ADDRESS_IPV6, HOST_ADDRESS_IPV4, HOST_ADDRESS_IPV6, and SESSION. Note that SESSION is used only for the login and logout events for the session management templates. For information about action templates, see [*Creating Action Templates*](https://infoblox-docs.atlassian.net/wiki/pages/resumedraft.action?draftId=73295805); and for information about session management templates, see [*Creating Session Management Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/creating-session-management-templates).  
The following tables list the supported variables by event type:
