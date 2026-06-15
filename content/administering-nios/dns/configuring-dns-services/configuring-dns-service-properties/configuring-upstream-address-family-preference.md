---
title: "Configuring Upstream Address Family Preference"
source: "/space/nios90/684621862"
pageId: "684621862"
---
NIOS sends upstream queries using both IPv4 and IPv6 interfaces when the configuration allows dual network interfaces for DNS services. From NIOS 9.0.4 onwards, NIOS provides an option to restrict upstream queries to either IPV6 or IPV4 only, without impacting the downstream queries.

> **warning**
>
> **Note**
> 
> - The **Upstream Address Family Preference** option works only if the **Allow recursion** checkbox is enabled at the Grid or member level.
> - The **Upstream Address Family Preference** option is available only the DNS member level and not at the DNS view level.
> - If you want to select only **IPv4 **option listed in** Upstream Address Family Preference **option, ensure to configure at least one IPv4 forwarder. Similarly, if you want to select only **IPv6**, ensure to configure at least one IPv6 forwarder.
> - If a custom root name server is configured, ensure that the custom root name server's configuration meets the requirements for the **Upstream Address Family Preference** option.

To configure upstream address family preferences:

1. From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon.
2. In the *Member* *DNS* *Configuration* editor, click **General** -> **Basic** tab.
3. In the **Upstream Address Family Preference** option, select one of the following from the dropdown. By default, **ANY** is displayed. If you want to select only **IPv4** or **IPv6**, ensure that the dual stack is configured where the DNS listens to both the IPv4 and IPv6 interfaces in the NIOS Grid.  
   **ANY**-Select this to send upstream queries using IPv4 or IPv6.  
   **IPv4**-Select this to send upstream queries using IPv4.  
   **IPv6**-Select this to send upstream queries using IPv6.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
