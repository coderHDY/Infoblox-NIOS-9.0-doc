---
title: "Adding and Modifying the Filters and Associations"
source: "/space/nios90/280403562"
pageId: "280403562"
---
The *Captive* *Portal* wizard simplified the configuration process by accomplishing a number of tasks simultaneously. To accomplish each task separately, or to modify the filters or associations after you have run the wizard:

- To define the MAC address filters for each range, see *[Defining MAC Address Filters](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403799)*.
- To bind each filter to the appropriate DHCP range, see *[Applying Filters to DHCP Objects](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)*.
- To specify the DNS server IP address for the quarantine range and set the lease time to 30 seconds, see *[Configuring General IPv4 DHCP Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663815)*.
- To associate a member DHCP server with a captive portal and specify the MAC filters for the authenticated and guest DHCP ranges:
  
  1. From the **Data ****Management** tab, select the **DHCP** tab -> **Members** tab -> *member* checkbox -> Edit icon.
  2. In the *Member** DHCP** Properties* editor, click the **IPv4**** Authenticated ****DHCP** tab and complete the following:
     
     - **Use ****this**** Captive ****Portal**** for**** Infoblox ****Authenticated**** DHCP:** Select this checkbox and select the captive portal that you want to associate with the member.
     - **Authenticated**** User ****MAC ****Filter:** Select the MAC filter used for authenticated users. To change your section, click **Clear** and click **Select** again.
     - **Guest ****User ****MAC ****Filter:** Select the MAC filter for guest users. To change you selection, click **Clear** and click **Select** again.
  3. Save the configuration and click **Restart** if it appears at the top of the screen.
