---
title: "set dnstap_violation_over_tcp"
source: "/space/nios90/1581023737"
pageId: "1581023737"
---
The `set dnstap_violation_over_tcp` CLI command enables or disables the logging of parental control and response policy zone (RPZ) violations over TCP using dnstap, alongside DNS queries and/or responses. The ability to log violations over TCP is introduced from NIOS 9.0.7. This feature can be enabled on Grid Masters or Grid members through the CLI command only, as there are no UI options available in the Grid Manager UI.

The logging of violations over TLS allows you to enable only the subscriber violations to be logged over TLS using dnstap. It cannot be enabled alongside the DNS queries and responses logging. In contrast, the logging of violations over TCP using dnstap supports the concurrent logging of queries, responses, and violations.

When the command is set to `on` and the logging of queries or responses through dnstap is enabled for a member, the logging of violations over TCP will be enabled for the member. If it is set to `off` and the query or response logging remains enabled for the member, the logging of violations over TCP will be disabled.

To enable the logging of violations over TCP for a Grid member:

- Ensure that DNS cache acceleration and subscriber services are running.
- Update the dnstap receiver with the latest proto file to support the logging of violations in addition to queries and responses. For more information, see the [*Sample Proto File for Violations Over TLS and Violations over TCP*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/configuring-dnstap/protobuf-template-for-infoblox-dnstap) section.
- Ensure that dnstap is configured to log DNS queries, responses, or both. For more information, see [*Configuring dnstap to Log DNS Queries and Responses*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/configuring-dnstap/configuring-dnstap-to-log-dns-queries-and-respon).

> **warning**
>
> **Note**
> 
> - If you enable the **Violations over TLS** option in *Grid Member Properties* for a member, the logging of violations over TCP will be automatically disabled.
> - If Violations over TLS is enabled at the Grid level, ensure to override it on the member for which violations need to be logged over TCP.

# Syntax

`set dnstap_violation_over_tcp {on|off}`

| **Argument** | ** Description** |
| --- | --- |
| `on` | Specify this value to enable the logging of violations over TCP. |
| `off` | Specify this value to disable the logging of violations over TCP. |

# Example

`Infoblox &gt; set dnstap_violation_over_tcp on`
