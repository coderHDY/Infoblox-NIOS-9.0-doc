---
title: "Run the Captive Portal Wizard"
source: "/space/nios90/1412006007"
pageId: "1412006007"
---
Run the *Captive* *Portal* wizard to associate the Grid Master with its captive portal, and to configure the MAC address filters:

1. From the **Data** **Management** tab, select the **DHCP** tab, or from the **Grid** tab, select the **Grid** **Manager** tab.
2. Expand the Toolbar and click **Configure** **Captive** **Portal**.
3. In the *Captive* *Portal* wizard, complete the following and click **Next**:
   
   - **Member** **DHCP:** Select the Grid Master, [**gm.campus1.school.edu**](http://gm.campus1.school.edu).
   - **Captive** **Portal:** Select [**cp1.campus1.school.edu**](http://cp1.campus1.school.edu).
4. Complete the following and click **Next**:
   
   - **Authenticated** **MAC** **Filter:** Enter **Auth_MAC_Filter**.
   - **Expiration** **Time:** Select **Never**.
   - **Guest** **MAC** **Filter:** Enter **Guest_MAC_Filter**.
   - **Expiration** **Time:** Select **Never.**
5. Complete the following:
   
   - **Network:** Select **10.2.1.0/24**.
   - **Authenticated** **Range:** Select **10.2.1.50** **-** **10.2.1.150**.
   - **Guest** **Range:** Select **10.2.1.151** **-** **10.2.1.170**.
   - **Quarantine** **Range:** Select **10.2.1.225** **-** **10.2.1.254**.

1. Click **Save** **&** **Close**.

Run the *Captive* *Portal* wizard to associate [ds1.campus2.school.edu](http://ds1.campus2.school.edu) with the captive portal server [cp2.campus2.school.edu](http://cp2.campus2.school.edu), and then run it again to associate [ds2.campus2.school.edu](http://ds2.campus2.school.edu) with the same captive portal server.
