---
title: "Using the NIOS CLI"
source: "/space/nios90/284230124"
pageId: "284230124"
---
The Infoblox NIOS CLI (Command Line Interface) allows you to configure and monitor the appliance from a remote console using a set of commands. Some administrative tasks, such as resetting the appliance, can be done only through the CLI. CLI commands do not support IDNs. These commands display IDN data in punycode only. For more information about IDN, see *[Multilingual Support](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/multilingual-support)*.

This section explains the CLI commands that you can use to configure and manage the NIOS appliance from a remote terminal. For the latest Infoblox documentation, visit the Infoblox Support web site at *[https://support.infoblox.com/](https://support.infoblox.com/)*.

| **Topic** | **Content** |
| --- | --- |
| Overview | Explains how to access the Infoblox CLI using a console port or SSHv2 client. This topic also describes the CLI conventions and outlines the basic CLI commands. |
| CLI Commands | Explains the function and usage of each command, and provides an example of the command usage and expected results. |

# Conventions

The conventions used in this section follow the Infoblox documentation style conventions, as listed in the following table.

| **Style** | **Usage** |
| --- | --- |
| `screen` | Indicates session text or system information displayed on the screen |
| `boldface screen` | Signifies command line entries that you type. |
| `italic screen` | Signifies variables that you enter for your configuration, such as file names and group names. |

CLI syntax uses conventions that are unique to documenting command line tools. The following table provides a list of syntax delimiters and their meanings.

| **Item** | **Convention** |
| --- | --- |
| { } brackets | Indicates a mandatory feature. |
| [ ] brackets | Indicates an optional feature. |
| \| pipe symbol | Indicates an “or” relationship between two features. |

# Variables

Infoblox uses the following variables to represent the values of the configurations that exist on your appliance. You should substitute the variables with the actual values that match your site configuration.

| **Variable** | **Value** |
| --- | --- |
| admin_group | Name of a group of administrators |
| admin_name | Name of the appliance administrator |
| addr_range | IP address range |
| domain_name | Domain name |
| directory | Directory name |
| dns_view | DNS view |
| filter_name | Filter name |
| grid_master | Grid master |
| grid_member | Grid member |
| hostname | Host name of an independent appliance |
| id_grid | Grid name |
| ip_addr | IPv4 address |
| member | Grid member name |
| netmask | Subnet mask |
| network | IP address of a network |
| numerical | Numerical entry |
| zone | DNS zone |

The following is a list of commands that NIOS supports:

*[children]*
