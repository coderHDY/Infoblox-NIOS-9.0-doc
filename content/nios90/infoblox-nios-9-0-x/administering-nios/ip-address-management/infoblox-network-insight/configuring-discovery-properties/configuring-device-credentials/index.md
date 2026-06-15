---
title: "Configuring Device Credentials"
source: "/space/nios90/1343325309"
pageId: "1343325309"
---
Credentials apply to devices at the following levels:

- The Grid: Settings apply across the Grid and all Probe appliances licensed for Discovery.
- Discovery Probe appliances: You can use inherited Grid settings or override them.
- Individual devices: You can use inherited Grid or Probe settings or override them with device-specific settings.

You can configure the following types of device polling credentials:

- SNMPv1/v2 Credentials
- SNMPv3 Credentials
- CLI Credentials

Once configured, you can test the credentials.

For more information on configuring device credentials, see the following sections:

- [Configuring SNMPv1/v2 Credentials](#)
- [Configuring SNMPv3 Credentials](#)
- [Configuring CLI Credentials](#)
- [Defining CLI Credentials for Objects](#)
- [Testing SNMP and CLI Credentials](#)

If any SNMP or CLI credentials become obsolete, you can reset them for all affected devices at once. After that, Network Insight re-guesses the credentials for each device. This does not apply to CLI credentials manually set for specific devices. For more information, see the [*reset snmp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/reset-snmp) and [*reset cli*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/reset-cli)* *Administrative Shell commands.

You can assign a credential to a credential group that is specific to a particular device group. For more information about credential groups, see Configuring Credential Groups below.
