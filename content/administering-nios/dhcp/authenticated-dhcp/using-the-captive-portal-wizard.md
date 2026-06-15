---
title: "Using the Captive Portal Wizard"
source: "/space/nios90/280663106"
pageId: "280663106"
---
After you configure the captive portal and the DHCP ranges for each access level, you can use the *Captive* *Portal*  
wizard to accomplish the following tasks:

- Associate the captive portal member with the member that serves the DHCP ranges you configured.
- Create MAC address filters and add them to the appropriate DHCP ranges. The wizard allows you to create MAC address filters for the quarantine DHCP range, and for the authenticated and guest DHCP ranges, depending on whether the captive portal is used to register users for authentication, guests, or both. This was specified, when you configured the captive portal properties, described in *[Configuring Captive Portal Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663106)*. For example, if you indicated that the captive portal is used for authenticated users only, then the wizard allows you to create a MAC filter for the authenticated DHCP range only.
  
  - If the captive portal is used to register users for authentication, the wizard allows you to create a MAC address filter for the authenticated range. The wizard then automatically adds the filter to the authenticated DHCP range with an action of Allow. It also adds the filter to the quarantine range with an action of Deny. This ensures that the member does not allocate an address from the quarantine range to a host whose MAC address matches an entry in the MAC filter.
  - If the captive portal is used to register guest users, the wizard allows you to create a MAC address filter for the guest range. The wizard then automatically adds the filter to the guest DHCP range with an action of Allow. It also adds the filter to the quarantine range with an action of Deny. This ensures that the member does not allocate an address from the quarantine range to a host whose MAC address matches an entry in the MAC filter.
- Add the captive portal IP address as the DNS server for the quarantine address range.
- Set the lease time of the quarantine range to 30 seconds.

To use the *Captive* *Portal* wizard to complete the tasks for the DHCP authentication feature:

1. From the **Data** **Management** tab, select the **DHCP** tab, or from the **Infoblox Grid** tab, select the **Grid** **Manager** tab.
2. Expand the Toolbar and click **Configure** **Captive** **Portal**.
3. In the *Captive* *Portal* wizard, complete the following and click **Next**:
   
   - **Member** **DHCP:** Select the member DHCP server that uses this captive portal to authenticate users.
   - **Captive** **Portal:** Select the member that runs the captive portal. Note that the member that runs the captive portal cannot run any other service, such as DHCP or DNS, and cannot be the Grid Master or Grid Master candidate.
4. This panel allows you to create MAC filters for the authenticated and guest DHCP ranges. The MAC filters you can create depend on your entry in the Captive Portal properties of the Grid member. For example, if you indicated that the captive portal is used for authenticated users only, then this panel allows you to create a MAC filter for the authenticated DHCP range only.  
   You can also specify existing MAC filters, if you want to apply them to the authenticated and guest DHCP ranges. Complete the following and click **Next**:
   
   - **Authenticated ****MAC ****Filter:** Specify a name for the MAC filter that is used for authenticated users.
   - **Expiration**** Time:** Specify how long a MAC address is stored in the MAC address filter for authenticated users.
     
     - **Never**: Select this option to store MAC addresses in the MAC address filter until they are manually removed.
     - **Expires in**: Select this option to store MAC addresses in the MAC address filter for the specified period of time.
   - **Guest ****MAC ****Filter:** Specify a name for the MAC filter that is used for guest users.
   - **Expiration**** Time:** Specify how long a MAC address is stored in the MAC address filter for guest users.
     
     - **Never**: Select this option to store MAC addresses in the MAC address filter until they are manually removed.
     - **Expires in**: Select this option to store MAC addresses in the MAC address filter for the specified period of time.
5. In this panel, you specify the network and address ranges, so the wizard can apply the MAC address filters to the appropriate ranges. Complete the following:
   
   - **Network:** Select the network that uses DHCP authentication.
   - **Authenticated ****Range:** Select the IP address range that the appliance uses for authenticated users. The wizard applies the authenticated MAC address filter you specified in the preceding step to this DHCP range with an action of Allow. This effectively allows the member to assign an IP address from the address range to a requesting host whose MAC address matches the MAC address in the filter.
   - **Guest**** Range:** Select the IP address range that the appliance uses for guest users. The wizard applies the guest MAC address filter you specified in the preceding step to this DHCP range with an action of Allow. This effectively allows the member to assign an IP address from the address range to a requesting host whose MAC address matches the MAC address in the filter.
   - **Quarantine**** Range:** Select the IP address range that the appliance uses for quarantined addresses. The wizard applies the authenticated and guest MAC address filters to the quarantine DHCP range with an action of Deny. This effectively denies an address request from a host whose MAC address matches an entry in the MAC filters for the authenticated and guest DHCP ranges.
6. Save the configuration and click **Restart** if it appears at the top of the screen.
