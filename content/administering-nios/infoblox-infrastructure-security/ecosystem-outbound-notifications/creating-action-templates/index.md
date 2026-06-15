---
title: "Creating Action Templates"
source: "/space/nios90/280402383"
pageId: "280402383"
---
The purpose of an action template is to convert an event into one or more RESTful API, DXL, and Syslog messages that are sent from the NIOS appliance to the endpoint configured in the notification rule. An action template consists of a series of statements that are interpreted into specific actions. When creating an action template, ensure that it consists of an initial section with some general template settings, followed by one or more steps that are executed in sequence. Steps are constructed for sending messages to the endpoint and for receiving responses. It can also perform specific operations on template variables.

> **warning**
>
> ### Note
> 
> The steps in an action template are executed sequentially. Some constructs enable steps to be skipped by jumping forward in the list of steps; jumping backwards is not supported.

Consider the following guidelines while composing action templates:

- Template error handling is active only if the severity level for logging is set to **Debug**, otherwise error handling is disabled and the server continues to execute a template even if the template tries to access nonexistent variables or perform invalid operations such as trying to increment a STRING variable. For information about setting the severity level for logging, see [*Configuring Outbound Notifications*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269606). If you have disabled template error handling, then accessing any nonexistent variables will return an empty string and invalid operations are not executed.
- Matching a regular expression is performed un-anchored. If anchoring is required, you must add the characters ^ and/or $ to the respective regular expression.
- For outbound notifications, only template instances are considered. Template instances are constructed from action templates as well as template instance variables in the template. You may configure these variables through Grid Manager when a specific template is associated to an event.
- You can use functions that contain the list of steps to be executed. The **FUNCTION** operation executes the steps in the function.
- Note that the function steps use step execution limit. Step counters for functions are removed when you return to template steps from function steps.
- You must specify the list of functions in the event template and these functions can be used only by the event template.
- Jumping between functions and template steps is not supported.
- Infoblox supports unused functions and allows execution of a function that is located within a function, including itself.
- You cannot upload or update a template if the function does not exist.

An action template consists of the variables and elements listed in the Action template Variables table blow.

> **warning**
>
> ### Note
> 
> When "yes" is indicated in the "Sub" column for a variable, it means that variable substitution (where it is possible to have ${...} variables as part of the value, and have them substituted when the template is executed) is supported for that variable, a * means that the substitution is supported for some of the fields of the struct.
