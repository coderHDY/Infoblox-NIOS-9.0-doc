---
title: "How To Import Zone Data"
source: "/space/nios90/1432720345"
pageId: "1432720345"
---
1. To import zone data to the [corpxyz.com](http://corpxyz.com) zone that you created earlier, click the **Zones** tab, select the [**corpxyz.com**](http://corpxyz.com) checkbox, and then click **Import** **Zone** from the Toolbar.
2. In the *Import* *Zone* editor*,* complete the following:
   
   - **Address**: Enter the IP address **10.1.5.3** of the DNS server from which you want to import zone data.
   - **Create** **Hosts** **and** **Bulk** **Hosts** **during** **import**: Select this option to allow the appliance to merge imported records into hosts and bulk hosts. If you do not select this option, then resource records are imported one-to-one with each DNS record from the imported zone producing a corresponding DNS record on the NIOS appliance.
     
     - **Create** **PTR** **records** **for** **Hosts** **if** **necessary**: Select this to create host records from the imported address records, even if the corresponding PTR records or the authoritative reverse zones that would contain them, do not exist. If you do not select this option, then host records will be created for imported address records only if a corresponding PTR record exists.
     - **Create** **PTR** **records** **for** **Bulk** **Hosts** **if** **necessary**: Select this to create bulk host records from the imported address records, even if the corresponding PTR records or the authoritative reverse zones that would contain them, do not exist. If you do not select this option, then bulk host records will be created for the imported address records only if the corresponding PTR records exist.
3. Click **Import**.
4. After successfully importing the zone data, click [**corpxyz.com**](http://corpxyz.com) in the **Zones** tab.   
   You can see all the imported forward-mapping zone data in the *Records* panel. Because you have not yet imported the reverse-mapping zone data, most of the records appear as A records.
5. To import the reverse-mapping zone data, from the **Zones** tab, click the Add icon -> **Authoritative** **Zone**.
6. In the *Add* *Authoritative* *Zone* wizard, select **Add** **an** **authoritative** **IPv4** **reverse-mapping** **zone.**
7. Click **Next** and complete the following:
   
   - **IPv4** **Network:** Enter **1.1.1.0**.
   - **Netmask**: Select **24** from the drop-down list.
   - **Comment:** Enter **Reverse-mapping** **zone**.
8. Click **Save** **&** **Close**.
9. To assign a name server group to the reverse-mapping zone, click the **Zones** tab, select the 1.1.1.in-addr.arpa checkbox, and then click the Edit icon.
10. In the *Authoritative* *Zone* editor, select the **Name** **Servers** tab, and then complete the following:
   
   - **Use** **this** **name** **server** **group**: Select this, and then select **corpxyz** from the drop-down list.
11. Click **Save** **&** **Close**.
12. To import reverse-mapping zone data, click the **Zones** tab, select the [corpxyz.com](http://corpxyz.com) checkbox, and then click **Import** **Zone** from the Toolbar.
13. In the *Import* *Zone* editor*,* complete the following:
   
   - **Address:** Enter the IP address **10.1.5.3** of the DNS server from which you want to import zone data.
14. Click **Import**.
15. After successfully importing the zone data, click **1.1.1.in-addr.arpa** on the **Zones** tab. You can see all the imported reverse-mapping zone data in the *Records* panel.
16. Click [**corpxyz.com**](http://corpxyz.com) in the Forward Mapping Zones list.  
   Because you have now imported both the forward- and reverse-mapping zone data, most of the records appear as host records.
17. Finally, you must remove the ns1 host record for the legacy server (value 1.1.1.3). To remove it, select the ns1 checkbox (the host record for 1.1.1.3), and then click the Delete icon.
