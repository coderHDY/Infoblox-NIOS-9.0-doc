---
title: "9.0.5 - What's New"
source: "/space/nios90/1324220582"
pageId: "1324220582"
---
The following are the new features introduced in the NIOS 9.0.5 release.

# Infoblox Universal DDI Management and IPAM Federation

Infoblox Universal DDI Management is a comprehensive SaaS solution designed for today's hybrid and multi-cloud networking infrastructure. NIOS 9.0.5 integrates Infoblox Universal DDI Management with IPAM Federation, a scalable and integrated management solution that allows the reservation of IP addresses so that they are unique across NIOS and Infoblox Universal DDI Management.

IPAM Federation allows an Infoblox administrator to manage multiple IPAM systems from one central control point (Infoblox Portal Configuration), ensuring greater efficiency and policy compliance. IPAM Federation bridges the gap between on-premise NIOS and Infoblox Universal DDI Management, thus offering a seamless integration and centralized management of both environments while still allowing local administration according to policies defined in Infoblox Universal DDI Management.

For more information, see [/nios90/infoblox-nios-9-0-x/administering-nios/ipam-federation](/nios90/infoblox-nios-9-0-x/administering-nios/ipam-federation).

# Simplified Subscriber Services (RFE-12977)

NIOS 9.0.5 allows vendors to populate subscriber information through APIs. The communication between API server and client is secured using Transport Layer Security (TLS). NIOS 9.0.5 also offers an alternative to subscriber service Splunk violation reporting by using dnstap. The NIOS dnstap client logs subscriber policy violations to the dnstap receiver over secured communication using TLS.

NIOS 9.0.5 introduces the following configurations for simplified subscriber services:

- The *Subscriber Site Properties* &gt; **Subscriber Collection** option has been introduced to specify if the subscriber site is API-based or RADIUS-based.
  
  - There are two options for subscriber collection: **API** and **RADIUS**. For the RADIUS option, NIOS listens on default port 1813 and this can be edited. For the API option, API server listens on default port 8909. This cannot be edited. If you select **RADIUS**, existing configuration options pertaining to NAS gateways are retained. If you select **API**, the API Server Members table is displayed to which you can add the members that will run the API server. For more information, see the [*Scaling Using Subscriber Sites*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services/scaling-using-subscriber-sites-and-ipsd)* *topic.
- *Grid/Member DNS Properties* &gt; **Logging** &gt; **Advanced** &gt; **Violations over TLS** checkbox has been introduced to select violation logging using dnstap. When the checkbox is selected, the dnstap client sends subscriber service violations in the protocol buffer format securely to the dnstap receiver. dnstap supports either violations over TLS or DNS query/response at a time. For more information, see the [*Configuring dnstap*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/configuring-dnstap) topic.

# Provisioning the PayGo Model (RFE-13864)

NIOS 9.0.5 launches the PayGo (Pay-as-You-Go) model for vNIOS for AWS and vNIOS for Azure. The PayGo model is for users who want to provision vNIOS without needing to procure separate licenses from Infoblox. For more information, see the vNIOS documentation for the respective appliances at [*Virtual Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).

# Support for Virtual Advanced DNS Protection and Virtual DNS Cache Acceleration in vNIOS for Azure (NIOS-10175)

Starting from NIOS 9.0.5, vNIOS for Azure instances support features such as virtual Advanced DNS Protection, virtual DNS Cache Acceleration, and dnstap that are enabled with accelerated networking. For more information about these features, refer to the [*Infoblox NIOS Documentation*](https://docs.infoblox.com/) and for the list of supported Trinzic X5, X6, and IB-FLEX appliances, see [*Supported vNIOS for Azure Appliances*](https://infoblox-docs.atlassian.net/wiki/spaces/vniosazure/pages/37486676).

**Note:** When selecting the VM size for the instance, make sure that the setting for NUMA node is NUMA=1. This is required for using accelerated networking -enabled features such as virtual Accelerated DNS Protection, virtual DNS Caching Acceleration, or dnstap. When you choose high-end Infoblox models such as IB-V4126, the vNIOS instance may get automatically assigned with NUMA=2 in which case the stated features may not run.

# vNIOS for Hyper-V Support on Microsoft Windows 2022 (RFE-518)

From NIOS 9.0.5 onwards, vNIOS for Microsoft Hyper-V can be configured on Microsoft Windows 2022.

# SilverPeak Support for Network Insight (RFE-13025)

From NIOS 9.0.5 onwards, Network Insight allows you to collect and manage data from Silver Peak SD-WANs. For more information, see the [*Configuring Discovery for SDN and SD-WAN*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-for-sdn-and-sd-wan) topic.

# Red Hat Enterprise Linux 9.4 Support (RFE-36)

NIOS 9.0.5 is supported on Red Hat Enterprise Linux version 9.4.

# GCVE Support for vNIOS for Google Cloud and vNIOS for VMware (RFE-13373)

vNIOS for Google Cloud and vNIOS for VMware are now supported in the GCVE (Google Cloud VMware Engine) environment.

# Discovering Virtual Extensible LANs (RFE-10)

Starting from version 9.0.5, NIOS can collect information about VxLANs from SNMP and SDN devices. For more information, see the [*Accessing Detailed Device Information*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/accessing-detailed-device-information) topic.

# Support for Synchronization of Google Cloud DNS (RFE-12100)

Starting from NIOS 9.0.5, you can synchronize a read-only copy of Google Cloud DNS data to NIOS to obtain a unified visualization experience. The Cloud DNS synchronization feature of NIOS has the ability to automate the process of discovery and synchronization of DNS data to NIOS from multiple projects of a Google Cloud organization.

# Monitoring and Alerting for Accelerated Networking Unresponsiveness (RFE-13783)

NIOS 9.0.5 introduces the option of performing an automatic member reboot for the Grid Master and Grid members. Automatic member reboot offers multiple options to recover NIOS nodes from dataplane unresponsiveness. You can perform Grid Manager reboot, send SNMP alerts, and email notifications. The Automatic Member Reboot option is available in the* Grid Properties Editor (for Grid) *or* Grid Member Properties Editor* (for members), **Monitoring** &gt; **Advanced** tab. For More information, see the [*Performing an Automatic member Reboot*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/performing-an-automatic-member-reboot) topic.

# 10G/1GE Intel 710 Quad SFP NIC Hardware Qualification

NIOS 9.0.5 has been qualified on the 10G/1GE Intel 710 Quad SFP NIC hardware.

**Note:** 710 Quad SFP NIC is not supported in 9.0.4 and below versions

# FQDN Support for External Servers (RFE-8054)

From NIOS 9.0.5 onwards, you can add external servers using both IP address and FQDNs instead of only IP addresses. This support is provided for the following functionalities:

- External syslog servers
- Syslog backup servers
- dnstap receivers
- Data collection for DNS queries/responses

Hereafter, when adding an external syslog server using STCP, the certificates added can use either the FQDN or the IP address of the external syslog server.

# Concatenating a URL with the DHCP Relay Agent Circuit ID (RFE-13762)

In NIOS 9.0.5, you can concatenate the DHCP relay agent information option’s `circuit-id sub-option` value, if it exists, to the end of a specified URL. The resulting concatenated string is then passed to the DHCP client as the value of a custom option. If the circuit ID is not included in the DHCP message, the specified URL itself is passed back to the client. You can do this using the CLI.

# Improved DNS Traffic Control Performance in the Grid Manager (RFE-13077)

In NIOS 9.0.5 onwards, the loading time of the DNS Traffic Control screens has been enhanced thus enhancing user experience when using the Infoblox Grid Manager.

# Splunk Package Upgrade

In NIOS 9.0.5, the Splunk package version has been upgraded to 9.2.1.

# Threat Insight Enhancements (NIOSRFE-9)

In NIOS 9.0.5, Threat Insight has been modernized to contain newer techniques and updated algorithms that help in enhancing detection.

# Grid Manager Login Page

NIOS 9.0.5 introduces a new look and feel to the login page of the Infoblox Grid Manager.
