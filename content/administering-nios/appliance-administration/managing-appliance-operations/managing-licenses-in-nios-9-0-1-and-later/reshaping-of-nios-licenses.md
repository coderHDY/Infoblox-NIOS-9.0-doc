---
title: "Reshaping of NIOS Licenses"
source: "/space/nios90/1446412839"
pageId: "1446412839"
---
A Trinzic X6 series hardware appliance model supports software models of the X6 series and some models of the X5 series. The naming convention used for the software appliance models is as follows:

- TE-xxxx: Models that support features other than network discovery and reporting.
- ND-xxxx: Models that support network discovery.
- TR-xxxx: Models that support reporting.

For any Trinzic X6 series hardware appliance, you may reshape NIOS by switching one supported software appliance model to another based on your requirement. The installation or reshaping of NIOS license either triggers a product restart or a repart of the storage disk as follows:

1. The first time a NIOS license (TE, ND, or TR) is applied to an X6 series hardware appliance:
   
   - TE appliance – a product restart is triggered.
   - ND or TR appliance – a repart is triggered.
2. After the installation of the first license, if needed, you can switch to another supported software model as follows:
   
   - Reshape the license to a different model of the same type: This does not require the current licenses to be reset. When you install the license, a product restart is triggered.  
     Example: TE-825 to TE-926.
   - Reshape license to a model of different type: This requires you to reset the currently installed licenses.  
     Example: TE-926 to ND-906  
      To reset the licenses installed on a NIOS appliance:
     
     1. Back up the data on the appliance if it is a standalone system or a Grid Master in a Grid.
     2. Run the `reset all licenses` command.  
        The command clears all data on the appliance.
     3. Install the license to switch to the required software model.  
        This triggers a repart of the storage disk.

For the software models supported by a hardware appliance, refer to the specific hardware installation guide available in the [*Infoblox Documentation Portal*](https://docs.infoblox.com).

The following table lists the impact of NIOS reshape activity:

| **Switching to Software Model** | **Product Restart / Repart of the Storage Disk** | **Notes** |
| --- | --- | --- |
| Installing TE-xxxx (first NIOS license on a hardware) | Product restart | - |
| Installing ND-xxxx or TR-xxxx (first NIOS license on a hardware) | Repart | - |
| TE-xxxx to TE-xxxx  ND-xxxx to ND-xxxx | Product restart | - |
| TE-xxxx to ND-xxxx  ND-xxxx to TE-xxxx | Repart | You must back up the data if it is a standalone appliance or a Grid Master in a Grid, and then reset licenses using the command `reset all licenses`. |
| **TR (Reporting) model** |
| TE-xxxx to TR-xxxx  TR-xxxx to TE-xxxx  ND-xxxx ro TR-xxxx  TR-xxxx to ND-xxxx | Repart | You must back up the data if it is a standalone appliance or a Grid Master in a Grid, and then reset licenses using the command `reset all licenses`. |

> **warning**
>
> **Note**
> 
> - After you run the `reset all licenses` command, the next time you install a NIOS license a repart of storage disk is triggered regardless of the model you are switching to.
> - In the context of reshaping of NIOS licenses, “repart” refers to restoring the storage space to its previous condition after resetting it to the default state to clear the data stored in it. This excludes the root disk space where system files are stored.

When the `reset all licenses` command is executed on X6 hardware and the NIOS license is installed, the system is restored to a clean state. Consequently, in NIOS 9.0.6 and lower, Threat Insight artifacts may be missing after the NIOS license installation, which may impact Threat Insight functionality. To ensure that the Threat Insight service is functional, apply the latest moduleset and allowlist updates. For more information, see [About Infoblox Threat Insight](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280759983).
