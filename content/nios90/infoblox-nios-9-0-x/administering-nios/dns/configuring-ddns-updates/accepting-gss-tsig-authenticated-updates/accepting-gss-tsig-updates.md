---
title: "Accepting GSS-TSIG Updates"
source: "/space/nios90/1333363546"
pageId: "1333363546"
---
You can allow a Grid or specific members or zones to accept GSS-TSIG signed updates from domain controllers and DHCP clients and servers, as follows:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties**.   
   **Member**: From the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon.   
   **Zone**: From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; *zone* checkbox -&gt; Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. Select the **Updates** tab and do the following in the **Basic** subtab:
   
   - **Allow** **GSS-TSIG** **signed** **updates:** Select this option.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

You can then use the *Active* *Directory* wizard or navigate to the **Active** **Directory** tab of the *Authoritative* *Zone* editor to enable the appliance to create underscore zones for the records hosted by domain controllers and to allow GSS-TSIG signed updates to the underscore zones.  
To use the *Active* *Directory* wizard:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Configure** **Active** **Directory**.
2. In the *Configure* *Active* *Directory* wizard, complete the following, and then click **Next**:
   
   - **Select** **Zone**: Click this and select a zone. The name of the zone must match the name in the AD domain controller so the zone transfer from the AD domain controller to the NIOS appliance can succeed.
   - **Allow** **GSS-TSIG-signed** **(secure)** **updates** **from** **Domain** **Controllers:** Select this option.
3. Complete the following:
   
   - **Do** **you** **want** **to** **create** **underscore** **zones** **to** **hold** **the** **records** **added** **by** **the** **Domain** **Controllers?**  
     This option allows the appliance to create the following subzones that the DNS server must have to answer AD-related DNS queries:  
     *_*msdcs*.zone*  
     *_*sites*.zone*  
     *_*tcp*.zone*  
     *_*udp*.zone*  
     domaindnszones.*zone*   
     forestdnszones.*zone*  
     Note that these zones are automatically generated. You cannot edit these zones or import data into them.
   - **Allow** **GSS-TSIG-signed** **updates** **to** **underscore** **zones:** Select this checkbox to allow underscore zones to accept GSS-TSIG signed updates.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

To use the *Authoritative* *Zone* editor:

1. From the **Data Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; *zone* checkbox -&gt; Edit icon.
2. In the *Authoritative Zone* editor, select the **Active Directory** tab and do the following:
   
   - **Allow unsigned updates from these Domain Controllers:** Clear this checkbox.
   - **Automatically create underscore zones:** (select)  
     This option automatically creates the following subzones that the DNS server must have to answer AD-related DNS queries:  
     *_*msdcs*.zone*  
     *_*sites*.zone*  
     *_*tcp*.zone*  
     *_*udp*.zone*  
     domaindnszones*.zone *  
     forestdnszones*.zone*  
     Note that these zones are automatically generated and cannot be manually edited.
   - **Allow** **GSS-TSIG-signed** **updates** **to** **underscore** **zones:** Select this checkbox to allow underscore zones to accept GSS-TSIG signed updates.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
