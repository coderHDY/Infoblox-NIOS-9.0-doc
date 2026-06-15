---
title: "Using Extension Mechanisms for DNS (EDNS0)"
source: "/space/nios90/154623126"
pageId: "154623126"
---
The NIOS appliance supports EDNS0 (Extension Mechanisms for DNS), which allows DNS clients to expand and advertise up to 4096 bytes of UDP packets for certain DNS parameters. EDNS0 facilitates the transfer of UDP packets beyond the original restricted packet size of 512 bytes. As defined in RFC 6891, EDNS0 provides extended UDP packet size that supports additional DNS functionality, such as DNSSEC. When EDNS0 is supported, the DNS client adds information to the additional data section of a DNS request in the form of an OPT pseudo-RR (resource record). An OPT RR does not contain actual DNS data and its contents pertain to the UDP transport layer message only. An OPT RR is not cached, forwarded, or stored. For more information about EDNS0, refer to RFC 6891 Extension Mechanisms for DNS (EDNS0).

By default, EDNS0 is enabled on the NIOS appliance and all outgoing recursive queries are set to have a maximum UDP packet size of 1232 bytes. The EDNS0 UDP packet size (EDNS0 buffer size) is configurable and can be set from a minimum of 512 bytes to a maximum of 4096 bytes. Typically, when the appliance receives a DNS request that contains an OPT record, it assumes that the DNS client supports EDNS0 and thus scales its response accordingly. If appliance is used as a forwarder or a resolver for recursive queries, when it first queries a remote server, it advertises a UDP packet size of 512 as this has the greatest chance of success on the first try. If the initial query is successful with EDNS advertising a packet size of 512, then it advertises progressively larger packet sizes on successive queries, until responses begin timing out or EDNS0 buffer size is reached. Query timeouts observed for any given server affect the packet size advertised in queries sent to that server. For servers that do not work as expected when queried with EDNS, the standard 512 byte query (without EDNS) that was being sent has been removed. DNS packets may be sent over TCP. For the DNS service to function properly, ensure that you configure your firewall accordingly.

# Configuring the EDNS0 Buffer Size and UDP Buffer Size

When the size of a DNS message that is transferred over UDP exceeds the maximum transmission unit, IP packets get fragmented and reassembled. IP fragmentation is considered fragile as it makes certain attacks on DNS possible. NIOS allows you to configure the EDNS0 buffer size and UDP buffer size attributes to control the data packet size allowed in DNS responses so that the data is transferred without fragmentation.

- The UDP buffer size is used by authoritative DNS servers when data is transferred between DNS server and DNS client to ensure that DNS messages they send are not larger than the configured buffer size.
- The EDNS0 buffer size is used by recursive DNS servers when data is transferred between DNS servers to ensure that DNS messages they send are not larger than the configured buffer size.

> **warning**
>
> ### Note
> 
> The UDP buffer size and EDNS0 buffer size attributes are available only for BIND resolvers.

You can configure the EDNS0 buffer size and the UDP buffer size are configurable for a Grid, member, standalone system, and a DNS view. To configure the EDNS0 buffer size and UDP buffer size, complete the following steps:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties**.  
    **Member**: From the **Data** **Management** tab, select the **DNS** tab, and then click the **Members** tab -> *member* checkbox -> Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.  
   **Standalone system**: From the **Data Management** tab, select the **DNS** tab, expand the Toolbar and click **System DNS Properties**.  
   **DNS view:** From the **Data Management** tab, select the **DNS** tab -> **Zones** tab -> *dns_view *checkbox -> Edit icon. Note that if there is only one DNS view, for example, the predefined default view, then you can just click the Edit icon beside it.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the *Grid* *DNS* *Properties, Member* *DNS* *Properties, System DNS Properties*, or *DNS View* editor, click **Toggle Advanced Mode** if the editor is in basic mode.
3. Click the **General** tab -> **Advanced** tab, and complete the following:
   
   1. **EDNS0 Buffer Size**: Specify the maximum packet size to be allowed in DNS query responses when transferring DNS messages between DNS servers. The default buffer size is 1232 bytes. The minimum buffer size that you can set is 512 bytes and the maximum is 4096 bytes.  
      Infoblox recommends that you configure the **EDNS0 Buffer Size** value in the range of 512 to 1232 bytes. DNS responses that exceed 1232 bytes can get fragmented and may result in unexpected behavior when resolving queries.
      
      Note that if you want DNS query responses to use the configured EDNS0 buffer size in servers that support EDNS0, then ensure that you do not disable EDNS0.
   2. **UDP Buffer Size**: Specify the maximum packet size to be allowed in DNS query responses when transferring DNS messages from DNS servers to DNS clients. The default buffer size is 1232 bytes. The minimum buffer size that you can set is 512 bytes and the maximum is 4096 bytes.  
      Infoblox recommends that you configure the **UDP Buffer Size** value in the range of 512 to 1232 bytes. DNS responses that exceed 1232 bytes can get fragmented and may result in unexpected behavior when resolving queries.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

# Disabling EDNS0

To ensure that end servers that do not support EDNS0 can respond to recursive queries from the NIOS appliance and to improve DNS performance, you can disable EDNS0 for the Grid and override the Grid settings for individual members. Note that you cannot configure the maximum UDP packet size, which is set for 4096 bytes by default. When you disable EDNS0, the appliance does not include OPT RRs for all outgoing recursive DNS queries. Thus remote end servers that do not support EDNS0 can still respond to the queries. This feature is useful when your NIOS appliance is used as a forwarder or a resolver for recursive queries, and the end servers in the configuration do not support EDNS0.

> **error**
>
> ### Warning
> 
> *When you disable EDNS0, all outgoing DNSSEC queries to zones within trusted anchors will fail even if DNSSEC validation is enabled. This is due to the restriction of the UDP packet length when you disable EDNS0. For more information about DNSEC, see *[*Configuring DNSSEC*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280661031)*.*

To disable EDNS0:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**  
    **Member:** From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click the **General** tab -> **Advanced** tab, and complete the following:
   
   - **Disable** **EDNS0**: This checkbox is deselected and EDNS0 is enabled by default. To override the value inherited from the Grid, click **Override**. To retain the same value as the Grid, click **Inherit**. Select this checkbox to disable EDNS0. When you disable EDNS0, the appliance does not include OPT RRs for all outgoing recursive DNS queries and all outgoing DNSSEC queries to zones within trusted anchors will fail even if DNSSEC validation is enabled.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
