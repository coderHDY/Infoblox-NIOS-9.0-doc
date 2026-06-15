---
title: "Defining Port Configuration Blackout Periods"
source: "/space/nios90/280763850"
pageId: "280763850"
---
Similar to discovery blackout periods, you can define port configuration blackout periods for managed networks under IPAM and DHCP. You specify the scheduled time when the blackout period begins, and the duration of the blackout period.  
By default, networks inherit their blackout settings from the Grid level. For port configuration blackout settings in a network, the network must be under managed status in IPAM.

# Defining Port Configuration Blackouts for the Grid

Port configuration blackout settings apply globally across the entire Infoblox Grid unless overridden by members or for specific networks.

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab.
2. Expand the Toolbar and click **Edit** **–>** **Grid** **Discovery** **Properties**.
3. Click the **Blackout** tab.
4. Click the **Enable** **Port** **Configuration** **Blackout** checkbox.
   
   1. Select the **Use** **Discovery** **Blackout** **Schedule** checkbox to apply the same blackout schedule to port configurations that is applied locally to discovery blackouts. (For more information on discovery blackouts, see [*Defining Blackout Periods*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406071).)  
      –or–
   2. Click the Schedule icon below. The Blackout Scheduler dialog opens.

*Scheduling* *a* *Port* *Configuration* *Blackout*

#   
Defining Port Configuration Blackouts for Networks

By default, networks inherit their blackout settings from the Grid level. You can override these with local settings for the network or for a network container, for both IPAM and DHCP. To change port configuration blackout settings for an IPAM or DHCP network or network container:

1. Select a managed network or network container from one of the following locations:
   
   1. **Data ** **Management** **–>** **IPAM** **–>** list view   
      –or–
   2. **Data ** **Management** **–>** **DHCP** **–>** **Networks**
2. Click the Action icon
   
   *[image: media]*
   
   for a chosen network and choose **Edit** from the popup menu.
   
   - Under IPAM, the network must be in managed status (a value of **Yes** appears in the **Managed** field, and the table row is highlighted in white).
   - Under DHCP, all networks appearing on this page may be selected for this purpose.
3. Click the **Discovery** **Blackout** tab. The editor page appears as shown in the below figure.  
     
   *The* *Discovery* *Blackout* *tab* *with* *enabled* *Port* *Configuration* *Blackouts*

*[image: media]*
