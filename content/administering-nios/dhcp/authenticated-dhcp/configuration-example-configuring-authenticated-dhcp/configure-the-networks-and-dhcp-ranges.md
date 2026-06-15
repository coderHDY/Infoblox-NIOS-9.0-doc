---
title: "Configure the Networks and DHCP Ranges"
source: "/space/nios90/1412137092"
pageId: "1412137092"
---
Configure the network on the Grid Master.

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** section.
2. Click the Add drop-down list and select **IPv4** **Network**.
3. In the *Add* *IPv4* *Network* wizard, select one of the following and click **Next**:
   
   - **Add** **Network:** Click this.
4. Complete the following and click **Next**:
   
   - **Address**: Enter **10.2.1.0/24**.
5. Complete the following to assign the network to the Grid Master:
   
   - **Add Infoblox Membe**r: Select [**gm.campus1.school.edu**](http://gm.campus1.school.edu).
6. Click **Save & Close.**

Configure the ranges on the Grid Master. To create the authenticated range:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** section.
2. Click the 10.2.1.0/24 network link, and then click the Add drop-down list and select **DHCP** **Range**.
3. In the *Add* *IPv4* *Range* wizard, select **Add** **DHCP** **Range** and click **Next**:
4. Complete the following:
   
   - **Network**: Click **Select** **Network** and select **10.2.1.0/24**.
   - **Start:** Enter **10.2.1.50**.**End:** Enter **10.2.1.150**.
   - **Name**: Enter **authenticated** **range**.
5. Click **Next** and complete the following:
   
   - **Grid Member:** Select this option and select [**gm.campus1.school.edu**](http://gm.campus1.school.edu).
6. Click **Save & Close.**

To create the guest range:

1. Click the 10.2.1.0/24 network link, and then click the Add drop-down list and select **DHCP Range**.
2. In the *Add IPv4 Range* wizard, select **Add DHCP Range** and click **Next**:
3. Complete the following:
   
   - **Network**: Click **Select Network** and select 10.2.1.0/24.
   - **Start:** Enter **10.2.1.151**.
   - **End:** Enter **10.2.1.170**.
   - **Name**: Enter **guest** **range.**
4. Click **Next** and complete the following:
   
   - **Grid Member:** Select this option and select [**gm.campus1.school.edu**](http://gm.campus1.school.edu).
5. Click **Save & Close.**

To create the quarantine range:

1. Click the 10.2.1.0/24 network link, and then click the Add drop-down list and select **DHCP** **Range**.
2. In the *Add* *IPv4* *Range* wizard, select **Add** **DHCP** **Range** and click **Next**:
3. Complete the following:
   
   - **Network**: Click **Select** **Network** and select 10.2.1.0/24.
   - **Start:** Enter **10.2.1.225**.
   - **End:** Enter **10.2.1.254**.
   - **Name**: Enter **quarantine** **range.**
4. Click **Next** and complete the following:
   
   - **Grid Member:** Select this option and select [**gm.campus1.school.edu**](http://gm.campus1.school.edu).
5. Click **Save & Close.**

Create the network and DHCP ranges for the DHCP servers [ds1.campus1.school.edu](http://ds1.campus1.school.edu) and [ds2.campus2.school.edu](http://ds2.campus2.school.edu).
