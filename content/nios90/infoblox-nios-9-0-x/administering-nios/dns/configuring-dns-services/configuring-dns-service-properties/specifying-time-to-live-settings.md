---
title: "Specifying Time To Live Settings"
source: "/space/nios90/281215163"
pageId: "281215163"
---
You can specify TTL (time to live) settings for Infoblox host records and resource records. TTL is the time that a name server is allowed to cache data. After the TTL expires, the name server is required to update the data. Setting a high TTL reduces network traffic, but also renders your cached data less current. Conversely, setting a low TTL renders more current cached data, but also increases the traffic on your network.   
You can specify global TTL settings at the Grid level, for individual zones, or resource records. When you configure TTL settings for auto-generated records, the following conditions apply:

- NS records that are auto-generated for delegated name servers use TTL settings from their delegated zones.
- Auto-generated glue A and AAAA records use TTL settings from a delegated zone if the name of the name server is below the delegation point and does not belong to an authoritative child zone.
- All other auto-generated NS, A, and AAAA records continue to use TTL settings from their parent zones.
- Auto-generated PTR records do not inherit TTL settings from delegated zones. They use TTL settings from their parent zones.

When you have an RRSET (resource record set) that contains different TTL settings for each record, Grid Manager displays the actual TTL values for these records. However, in DNS responses, the appliance takes the least of the values and returns that as the TTL setting for all resource records in the RRset.  
For recursive DNS servers, you can specify the maximum cache TTL value that establishes the time limit for the name server to cache positive responses. You can also specify the maximum negative cache TTL value that specifies the time limit for the name server to cache negative responses. For information about how to configure these settings, see Specifying Max Cache TTL and Max Negative Cache TTL Settings below.

# Specifying TTL Settings for a Grid

To specify global TTL settings for resource records hosted by Grid members:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**
2. In the **Basic** tab of the **General** section of the *Grid* *DNS* *Properties* editor, modify the following values as necessary:
   
   - **Refresh:** This interval tells secondary servers how often to send a message to the primary server for a zone to check that their data is current, and retrieve fresh data if it is not. The default is three hours. Ensure that you set the refresh interval to a value above 300 seconds; setting the refresh interval to below 300 seconds may not work as expected.
   - **Retry:** This interval tells secondary servers how long to wait before attempting to recontact the primary server after a connection failure between the two occurs. The default is one hour.
   - **Expire:** If the secondary fails to contact the primary for the specified interval, the secondary stops giving out answers about the zone because the zone data is too old to be useful. The default is 4 weeks.
   - **Default** **TTL:** Specifies how long name servers can cache the data. The default is eight hours.
   - **Negative-caching** **TTL** **(Time** **to** **Live):** Specifies how long name servers can cache negative responses, such as NXDOMAIN responses. The default is 15 minutes.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Specifying TTL Settings for a Zone

To specify TTL settings for host and resource records in a zone:

1. From the **Data** **Management** tab, select the **DNS** tab and click the **Zones** tab-&gt; *dns_view* -&gt; *zone* checkbox -&gt; Edit icon.
2. In the *Authoritative* *Zone* editor, click **Settings**.
3. Click **Override** and complete the fields as described in the preceding section, Specifying TTL Settings for a Grid.

# Specifying the TTL of a Host or Resource Record

To specify the TTL setting for an Infoblox host or resource record:

1. From the **Data** **Management** tab, select the **DNS** tab and click the **Zones** tab -&gt; *dns_view* -&gt; *zone* -&gt; *resource_record*.
2. The **TTL** tab of the resource record editor displays the TTL setting the resource record inherited from the Grid or zone. Click **Override** and enter a value. The setting is in hours by default. You can change it to seconds, minutes, days or weeks.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Specifying TTL Settings for a Lame Server

Servers that are marked as authoritative, but do not respond as authoritative servers are called lame servers. You can specify the number of seconds to cache a lame delegation or lame server indication through the Lame TTL option. Lame TTL usually indicates the amount of time your name server remembers information about the remote name server that is not authoritative for a zone, which is delegated to it.  
A domain or sub-domain that is delegated to a server that is not authoritative for the domain is called lame delegation. It indicates that a zone file does not exist for the domain on the server.  
The lame time-to-live cache value can be defined at the Grid DNS, Member DNS, or DNS view level. To specify the Lame TTL cache value for a lame delegation or lame server:

1. **Grid:** From the **Infoblox Grid** tab -&gt; **Grid** **Manager** tab, select the **DNS** tab, click the **Services** tab -&gt; *member* checkbox, expand the **Toolbar** and click **Edit** -&gt; **Grid** **DNS** **Properties**. In the *Grid* *DNS* *Properties* editor, select the **General** tab -&gt; click the **Advanced** tab (or click **Toggle** **Advanced** **Mode**).  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member* checkbox -&gt; *Edit* icon. In the *Member* *DNS* *Properties* editor, select the **General** tab -&gt; click the **Advanced** tab (or click **Toggle** **Advanced** **Mode**).  
   **DNS** **View:** From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; *dns_view* checkbox -&gt; *Edit* icon. In the *DNS* *View* editor, select the **General** tab -&gt; click the **Advanced** tab (or click **Toggle** **Advanced** **Mode**).
2. In the *Grid* *DNS* *Properties*, *Member* *DNS* *Properties*, or the *DNS* *View* editor, select the **General** tab -&gt; click the **Advanced** tab (or click **Toggle** **Advanced** **Mode**) and then complete the following:  
   **Lame** **TTL:** Specify the duration of time to cache a lame delegation or lame server. The default value is 600 seconds (ten minutes) and the maximum value is 1800 seconds (thirty minutes). The appliance displays a warning message when you specify a value equal to 0 (zero). The appliance displays an error message when you specify a value greater than 1800 seconds.  
   The **Lame** **TTL** cache value is inherited from the Grid by the member and DNS view levels and this field is disabled, by default. To override the **Lame** **TTL** cache value, click **Override**. You can override the value at the member and DNS view levels. To retain the same **Lame** **TTL** value as the Grid, click **Inherit** at the member and DNS view level.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> The Lame TTL field always displays a value of 0 due to a detected security vulnerability (CVE).

# Specifying Max Cache TTL and Max Negative Cache TTL Settings

You can specify the maximum duration of time for which your name server caches positive responses using the Max Cache TTL settings. The Max Cache TTL indicates the time limit for which the name server retains records in the cache. When the Max Cache TTL for a record expires, the name server deletes the record from the cache.  
You can also specify the maximum duration of time for which your name server caches negative responses through the Max Negative Cache TTL settings. The Max Negative Cache TTL sets the time limit for which the name server retains negative responses (NXDOMAIN/NXRRSET responses) in the cache. The name server deletes a negative response from the cache when the Max Negative Cache TTL period for the entry expires.  
You can define the Max Cache TTL value and the Max Negative Cache TTL value at the Grid DNS, Member DNS, and DNS view levels.  
To specify the Max Cache TTL and the Max Negative Cache TTL:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, expand the **Toolbar** and click **Grid** **DNS** **Properties**.  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.  
   **DNS** **View**: From the **Data** **Management** tab, select the **DNS** tab and click the **Zones** tab -&gt; *dns_view* checkbox -&gt; Edit icon.
2. In the *Grid* *DNS* *Properties*, *Member* *DNS* *Properties*, or the *DNS* *View* editor, click **Toggle** **Advanced** **Mode** if the editor is in the basic mode.
3. Click the **Advanced** subtab of the **General** tab and then complete the following:
   
   - **Max Cache TTL**: Specify the maximum duration of time for which the name server caches positive responses. Select the time period in minutes, hours, or days from the drop-down list. The default value is one week (7 days), and the maximum value is 49710 days, 1193046 hours, or 71582788 minutes. The appliance displays an error message when you enter a value greater than the maximum value. Note that setting the Max Cache TTL value to 0 (zero) will disable the name server from caching any data, and it is not recommended.
   - **Max Negative Cache TTL**: Specify the maximum duration of time for which the name server caches negative responses. Select the time period in minutes, hours, or days from the drop-down list. The default value is three hours, and the maximum value is 7 days, 168 hours, or 10080 minutes. The appliance displays an error message when you enter a value greater than the maximum value. Note that setting the Max Negative Cache TTL value to 0 (zero) will disable the name server from caching negative responses, and it is not recommended.  
     The Max Cache TTL value and the Max Negative Cache TTL value are inherited from the Grid at the member and DNS view levels. To override the inherited values, click **Override** and specify the new value. To retain the Grid values, click **Inherit**.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
