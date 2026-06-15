---
title: "Enabling BFD for BGP Neighbor"
source: "/space/nios90/1412006233"
pageId: "1412006233"
---
BFD can be enabled for each configured BGP neighbor individually. You can also use the Enable Multi-hop option, which allows BGP to connect to BGP neighbors which are more than one IP hops away.  
To enable BFD for the BGP neighboring router:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.
2. In the *Grid* *Member* *Properties* editor, select the **Anycast** tab.
3. In the BGP Neighbor Configuration table, select the BGP neighboring router, click the Edit icon, and then complete the following:
   
   - **Enable** **Multi-hop** **(optional)**: Select this checkbox to allow BGP to connect with the neighbors which are more than one IP hops away.
   - **Hop** **Limit**: Enter the maximum hop limit. The default value is 255.
   - **Enable** **BFD**: Select this checkbox to enable BFD for the BGP neighboring router.
   - **BFD** **template**: You can assign a BFD template to the BGP neighboring router to run BFD with non-default settings. Click **Select** **BFD** **Template** and select a BFD template from the *Select* *BFD* *Template* dialog box. You can click **Clear** to remove the selected BFD template and select a new one.
   - **BFD Internal DNS Monitoring**: Select this checkbox to enable the internal DNS monitor to send and receive DNS responses and to retract the BGP route if it does not receive a DNS response.
4. Save the configuration.

The BFD session for a given BGP neighbor is created when the BGP state reaches 'Established'.



*Enabling* *BFD* *for* *BGP* *Neighbor*

## Viewing Runtime BFD Information for BGP

You can use the `show bgp neighbor` CLI command to view runtime BFD information for BGP. For more information, see [*show bgp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-bgp).
