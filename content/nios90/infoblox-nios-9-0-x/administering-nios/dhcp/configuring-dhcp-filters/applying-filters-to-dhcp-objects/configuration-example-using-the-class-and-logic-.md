---
title: "Configuration Example: Using the Class and Logic Filter Lists"
source: "/space/nios90/1320357439"
pageId: "1320357439"
---
The following example shows you how to define DHCP filters and apply them to the class and logic filter lists. It also shows you the DHCP configuration file that is generated based on the configuration.  
In this example, you first define a MAC filter, two option filters (one without match rules), and a NAC filter, and then apply the MAC filter to the Class Filter List and the other filters to the Logic Filter List of the address range 10.34.34.6 - 10.34.34.55.

1. Configure and save a MAC filter as follows. For more information, see [* Defining MAC Address Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-mac-address-filters).
   
   1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Filters** tab, and then expand the Toolbar and click **Add** -&gt; **IPv4** **MAC** **Address** **Filter**.
   2. In the *Add* *IPv4* *MAC* *Filter* wizard, complete the following:
      
      - **Name**: Enter **MAC1**.
   3. Click **Next** and complete the following to define the DHCP options to return to the matching client:
      
      - **Lease** **Time**: Enter **1234** and select **seconds** from the drop-down list.  
        **Options** **to** **Merge** **with** **Object** **Options:** Click the Add icon. Grid Manager adds a new row to the table with the default DHCP option space and option name displayed. Complete the following:
      - **Option Name**: Click the down arrow and select **log-server(7)** from the drop-down list.
      - **Value**: Enter **10.34.34.3** as the value for the log-server option that is sent to the client in the OFFER/ACK message.
   4. Save the configuration.
2. Add a MAC address filter item as follows. For more information, see [*Adding MAC Address Filter Items*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-mac-address-filters).
   
   1. From the **Data Management** tab, select the **DHCP** tab -&gt; **Filters** tab, and then expand the Toolbar and click **Add** -&gt; **IPv4 MAC Address Filter Item**.
   2. In the *Add IPv4 MAC Address Filter Item* wizard, complete the following:
      
      - **MAC Address Filter**: Click **Select Filter**. In the *DHCP Filter Selector* dialog box, click **MAC1**.
      - **MAC Address**: Enter `AB:DE:CC:DD:EE:01` as the MAC address.
   3. Save the configuration.
3. Configure and save an option filter with match rules as follows. For more information, see [*Defining Option Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-option-filters).
   
   1. From the **Data Management** tab, select the **DHCP** tab -&gt; **Filters** tab, and then expand the Toolbar and click **Add** -&gt; **IPv4 / IPv6 Option Filter**.
   2. In the *AddIPv4OptionFilter* wizard, complete the following:
      
      - **Name**: Enter `Option1`.
   3. Click **Next** and complete the following to add match rules:
      
      - In the first drop-down list, select `vendor-class-identifier.`
      - In the second drop-down list, select `substring equals`, and then enter the following:
        
        - **Offset**: Enter `0 `to match the value starting at the first character of the option data.
        - **Length**: Enter `4`.
        - Enter `MSFT `as the matching value.  
          Click **Preview** and the appliance displays the expression: `(vendor-class-identifier,0,4="MSFT")`.
   4. Click **Next** and complete the following to define the DHCP options to return to the matching client:  
      **Options** **to** **Merge** **with** **Object** **Options:** Click the Add icon. Grid Manager adds a new row to the table with the default DHCP option space and option name displayed. Complete the following:
      
      - **Option Name**: Click the down arrow and from the drop-down list, select `time-server(4)`.
      - **Value**: Enter `10.34.34.2` as the value for the time-server option that is sent to the client in the OFFER/ACK message.
   5. Save the configuration.
4. Configure and save another option filter without match rules as follows:
   
   1. In the *AddIPv4OptionFilter* wizard, complete the following:
      
      - **Name**: Enter **Option2**.
   2. Click **Next**. Do not define any match rules.
   3. Click **Next** again and complete the following to define the DHCP options to return to the matching client:  
      **Options** **to** **Merge** **with** **Object** **Options:** Click the Add icon. Grid Manager adds a new row to the table with the default DHCP option space and option name displayed. Complete the following:
      
      - **Option Name**: Click the down arrow and from the drop-down list, select `domain-name(6).`
      - **Value**: Enter `www.infoblox.com.`
   4. Save the configuration.
5. Configure and save a NAC filter as follows. For more information, see [*Defining NAC Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters).
   
   1. From the **Data Management** tab, select the **DHCP** tab -&gt; **Filters** tab, and then expand the Toolbar and click **Add** -&gt; **IPv4 NAC Filter**.
   2. In the *AddFilter* Wizard, complete the following and click **Next**:
      
      - **Name:** Enter `NAC1`.
   3. Create a rule as follows:
      
      - In the first drop-down list, select **Compliance State**.
      - In the second drop-down list, select **equals**.
      - In the third drop-down list, select **Compliant**.
        
        Click **Preview** and the appliance displays the expression: (`Sophos.ComplianceState="Compliant"`).
   4. Click **Next** and complete the following to define DHCP options:
      
      - **Lease Time**: Enter **1000** and select `seconds` from the drop-down list.
        
        **Options** **to** **Merge** **with** **Object** **Options:** Click the Add icon. Grid Manager adds a new row to the table with the default DHCP option space and option name displayed. Complete the following:
      - **Option Name**: Click the down arrow and from the drop-down list, select `cookies-servers(8)`.
      - **Value**: Enter **10.34.34.5**.
   5. Save the configuration.
6. Apply the filters to the address range as follows.
   
   1. From the **Data Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; **10.34.34.6-10.34.34.55** checkbox, and then click the Edit icon.
   2. In the *DHCP Range* editor, click **Toggle Advanced Mode**.
   3. Click the **Filters** tab and complete the following:  
      **Class** **Filter** **List**: Click the Add icon and add **MAC1** as a class filter. Click the **Action** column and select **Grant** **lease** from the drop-down list.  
      **Logic** **Filter** **List**: Click the Add icon and add **Option1**, **NAC1**, and **Option2** respectively as logic filters
   4. Save the configuration.  
      The appliance generates the following information in the DHCP configuration file based on the filter configuration in this example:

`# MAC filter "MAC1" `

`class "MAC1" {`

`default-lease-time 1234;`

`min-lease-time 1234;`

`max-lease-time 1234;`

`option log-servers 10.34.34.3;`

`}`

`# NAC filter "NAC1"`

`{option sophos.compliance `

`state="compliant"`

`}`  
` subnet 10.34.34.0 netmask 255.255.255.0 { `

`pool {`

`infoblox-range 10.34.34.6 10.34.34.55;`

`range 10.34.34.6 10.34.34.55;`

`option routers 10.34.34.1;`

`# INFOBLOXMACFILTERDEBUGINFO: allow members of "MAC1";`

` if (substring(option vendor-class-identifier,0,4)="MSFT") {`

`# Option filter "Option1" `

`option time-servers 10.34.34.2;`

`}`

`elsif (option Sophos.ComplianceState="Compliant") {`

`# NAC filter "NAC1" `

`default-lease-time 1000;`

`min-lease-time 1000;`

`max-lease-time 1000;`

`option cookie-servers 10.34.34.5;`

`}`

`else {`

`# Option filter "Option2" `

`default-lease-time 2500;`

`min-lease-time 2500;`

`max-lease-time 2500;`

`option domain-name "www.infoblox.com"; }`

`}`

Depending on client requests and the matching criteria, the following scenarios can happen in this example:

If the requesting client matches the MAC1 and Option1 filters, the appliance returns the following:

- Lease time = 1234 seconds (from the MAC filter)
- Returned options:
  
  - Router(3) with a value of 10.34.34.1 (from the address range)
  - Log-server(7) with a value of 10.34.34.3 (from the MAC filter MAC1)
  - Time-server(4) with a value of 10.34.34.2 (from the option filter Option1)

If the requesting client matches the MAC1 and NAC1 filters, the appliance returns the following:

- Lease time = 1234 seconds (from the MAC filter MAC1)Returned options:
  
  - Router(3) with a value of 10.34.34.1 (from the address range)
  - Log-server(7) with a value of 10.34.34.3 (from the MAC filter MAC1)
  - Cookie-server(8) with a value of 10.34.34.5 (from the NAC filter NAC1)

If the client matches the MAC1 filter, but not the Option1 or NAC1 filters, the appliance returns the following:

- Lease time = 1234 seconds (from the MAC filter)
- Returned options:
  
  - Router(3) with a value of 10.34.34.1 (from the address range)
  - Log-server(7) with a value of 10.34.34.3 (from the MAC filter MAC1)
  - Domain-name(6) with a value of [http://www.infoblox.com](http://www.infoblox.com)  (from the option filter Option2)

If the requesting client does not match the MAC1 filter, no lease is granted.
