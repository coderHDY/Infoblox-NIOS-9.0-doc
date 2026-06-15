---
title: "Custom Rules"
source: "/space/nios90/280275901"
pageId: "280275901"
---
Based on your security needs, you can define custom rules using predefined rule templates. Custom rules are typically whitelisting or blacklisting rules. You can create up to 500 custom rules for each rule template offered by Infoblox DNS Infrastructure Protection . The appliance logs a syslog message if there are more than 500 rules for a specific rule category. You can remove some rules in order to create new ones for that category.

You can add or delete custom rules for the Grid only. You cannot add or delete them for members, but you can enable, disable, and modify certain rule parameters at the member level.  
When you create custom rules, NIOS automatically generates the rule ID from the template used. Note that custom rules do not support IDNs (Internationalized Domain Names). You must first convert IDNs into punycode before entering the data. For information about how to create custom rules, see Creating Custom Rules below.  
When you create custom rules, you are essentially creating whitelisting and blacklisting entries that utilize rate limiting to detect suspicious UDP and TCP traffic. Infoblox DNS Infrastructure Protection supports a series of rule templates for defining new custom rules. For information about rule templates, see the following Custom Rule Templates section.  
Whitelisting rules define a list of allowed resources before they are blocked by the configured rate limit settings. They provide for only a selected set of entities to access the protected environment. Examples include company offices and their associated internal network services, which presumably use access control systems to enforce them. In effect, addresses or networks that do not match the whitelisting entries are automatically blocked.  
Blacklisting rules define a list of disallowed resources through FQDN lookups as well as rate limiting. Blacklists typically allow a far broader base of access to many more entities, and cite a list of specific entities or people that do not have access. Otherwise, any devices or users theoretically have access to the protected environment.  
For whitelist entries, the matching values are mandatory, in which the IP address or network of the rule is expressly permitted access. Blacklist entries are forbidden, in which the IP address or network of the rule is expressly denied access. In essence, blacklisting is convenience while whitelisting is more secure.

> **warning**
>
> **Note**
> 
> - You can create DNS-specific blacklists under the **Data** **Management** tab **–>** **DNS** tab. However, you cannot use this blacklist feature as part of DNS Infrastructure Protection.
> - If an appliance configuration is set to the DNS Cache Acceleration (DCA) -first mode with both virtual DNS Cache Acceleration (vDCA) and DNS Infrastructure Protection running, rate limiting Advance DNS Protection rules for TCP and UDP queries are not supported.

# Custom Rule Templates

Infoblox DNS Infrastructure Protection supports a few custom rule templates from which you create new custom rules. Note that when you use a specific rule template to create custom rules, the new rules reside in their respective rule categories. For information about creating custom rules, see Creating Custom Rules below.  
For each rule you create, you can define the **Events** **per** **second** value to determine the number of events per second that will be logged for the rule. You can also define specific rule parameters for custom rules, as follows:  
When you create custom rules that involve FQDN lookups, the appliance automatically verifies the FQDN syntax and format that you enter in the **Value** field. It properly translates escaped sequences and special characters that are used to represent specific characters in the FQDN. For example, \032 is interpreted as a space (hex 20), and \" is interpreted as the double quote (hex 22). The appliance sends an error message when it detects invalid characters in the FQDN.

> **warning**
>
> **Note**
> 
> Custom rules do not support IDNs (Internationalized Domain Names). To use IDNs for custom rules, you must first convert the IDNs into punycode. You can use the **IDN** **Converter** from the **Toolbar** for the conversion.

- **BLACKLIST** **FQDN** **lookup** **TCP**: Use this rule template to create custom rules for blacklisting DNS queries by FQDN lookups on TCP. In the Rule Parameters table, complete the following:
  
  - **Blacklisted FQDN: **Enter the FQDN that you want the appliance to block over TCP traffic. NIOS supports an** **exact match or subdomain matches for the FQDN specified in the rule. For example, if "test.com" is specified as a custom rule, NIOS blocks “test.com” or “abc.test.com” but “abctest.com” will not be blocked.
- **BLACKLIST** **FQDN** **lookup** **UDP**: Use this rule template to create custom rules for blacklisting DNS queries by FQDN lookups on UDP. In the Rule Parameters table, complete the following:
  
  - **Blacklisted** **FQDN**: Enter the FQDN that you want the appliance to block over UDP traffic. NIOS supports an exact match or subdomain matches for the FQDN specified in the rule. For example, if "test.com" is specified as a custom rule, NIOS blocks “test.com” or “abc.test.com” but “abctest.com” will not be blocked.
- **BLACKLIST** **IP** **TCP** **Drop** **prior** **to** **rate** **limiting**: Use this rule template to create rules for blocking IPv4 or IPv6 addresses on TCP before the appliance drops the packets based on rate limiting rules you have defined using the **BLACKLIST IP TCP Drop prior to rate limiting** template. In the Rule Parameters table, complete the following:
  
  - **Blacklisted** **IP** **address/network**: Enter the IPv4 or IPv6 address from which packets sent are dropped before any relevant rate limiting rules take effect. Note that all TCP traffic from the specified Ipv4 and IPv6 addresses and networks will be blocked. Enter network addresses in address/CIDR format.
- **BLACKLIST** **IP** **UDP** **Drop** **prior** **to** **rate** **limiting**: Use this rule template to create rules for blocking IPv4 or IPv6 addresses on UDP before the appliance drops the packets based on rate limiting rules you have defined using the **BLACKLIST IP UDP Drop prior to rate limiting** template. In the Rule Parameters table, complete the following:
  
  - **Blacklisted** **IP** **address/network**: Enter the IPv4 or IPv6 address from which packets sent are dropped before any relevant rate limiting rules take effect. Note that all UDP traffic from the specified Ipv4 and IPv6 addresses and networks will be blocked. Enter network addresses in address/CIDR format.
- **RATELIMITED** **FQDN** **lookup** **TCP**: Use this template to create custom rules that contains rate limiting restrictions for blocking DNS queries by FQDN lookups on TCP traffic. In the Rule Parameters table, complete the following:
  
  - **Packets** **per** **second**: Enter the number of packets per second to define the rate limit for this rule. You define this value to control the rate of TCP traffic that consists of DNS lookups for the FQDN defined in this rule. The default is 5.
  - **Drop** **interval**: Enter the number of seconds for which the appliance drops packets.
  - **Blacklist** **rate** **limited** **FQDN**: Enter the FQDN that is affected by the rate limit value configured for this rule. The appliance drops the packets sent by this FQDN when the TCP traffic of DNS lookups for this FQDN exceeds the configured rate limit value.
- **RATELIMITED** **FQDN** **lookup** **UDP**: Use this rule template to create custom rules that contains rate limiting restrictions for blocking DNS queries by FQDN lookups on UDP traffic. In the Rule Parameters table, complete the following:
  
  - **Packets** **per** **second**: Enter the number of packets per second to define the rate limit for this rule. You define this value to control the rate of UDP traffic that consists of DNS lookups for the FQDN defined in this rule. The default is 5.
  - **Drop** **interval**: Enter the number of seconds for which the appliance drops packets.
  - **Blacklist** **rate** **limited** **FQDN**: Enter the FQDN that is affected by the rate limit value configured for this rule. The appliance drops the packets sent by this FQDN when the UDP traffic of DNS lookups for this FQDN exceeds the configured rate limit value.

> **warning**
>
> **Note**
> 
> Make sure that you enter a valid FQDN. Example: [test.com](http://test.com), [foo.com](http://foo.com), etc. The appliance does not display an error message when you enter an invalid FQDN. However, the DNS Infrastructure Protection dashboard displays a warning message for the invalid FQDNs. For information about DNS Infrastructure Protection status for Grid, see *[/wiki/spaces/nios90draft/pages/73272311](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/537002114)*.

- **RATELIMITED** **IP** **TCP**: Use this rule template to create custom rules that contains rate limiting restrictions for blacklisting IP addresses on TCP. If there are certain IP addresses that you want to block before its traffic reaches the rate limit restrictions, you can create a rule using the **RATELIMITED IP TCP** template. In the Rule Parameters table, complete the following:
  
  - **Packets** **per** **second**: Enter the number of packets per second to define the rate limit for this rule. You define this value to control the rate of TCP traffic that consists of DNS lookups for the IP address or network defined in this rule. The default is 5.
  - **Drop** **interval**: Enter the time interval in seconds the appliance drops IP packets sent by the rate limited IP address or network defined for this rule. The default is 30 seconds.
  - **Rate** **limited** **IP** **address/network**: Enter the IP address or network that is affected by the rate limit value configured for this rule. The appliance drops the packets sent by this IP address based on the drop interval when the TCP traffic of DNS lookups for this IP address exceeds the configured rate limit value.
- **RATELIMITED** **IP** **UDP**: Use this rule template to create custom rules that contains rate limiting restrictions for blacklisting IP addresses on UDP. If there are certain IP addresses that you want to block before its traffic reaches the rate limit restrictions, you can create a rule using the **RATELIMITED IP UDP** template. In the Rule Parameters table, complete the following:
  
  - **Packets** **per** **second**: Enter the number of packets per second to define the rate limit for this rule. You define this value to control the rate of UDP traffic that consists of DNS lookups for the IP address or network defined in this rule. The default is 5.
  - **Drop** **interval**: Enter the time interval in seconds the appliance drops IP packets sent by the rate limited IP address or network defined for this rule. The default is 30 seconds.
  - **Rate** **limited** **IP** **address/network**: Enter the IP address or network that is affected by the rate limit value configured for this rule. The appliance drops the packets sent by this IP address based on the drop interval when the TCP traffic of DNS lookups for this IP address exceeds the configured rate limit value.
- **WHITELIST** **IP** **TCP** **Pass** **prior** **to** **rate** **limiting**: Use this rule template to create custom rules for allowing certain IP addresses on TCP before the appliance drops the packets based on rate limiting rules you have defined using the **RATELIMITED** **IP** **TCP** template. In the Rule Parameters table, complete the following:
  
  - **Whitelisted** **IP** **address/network**: Enter the IPv4 or IPv6 address from which packets sent are allowed before any relevant rate limiting rules take effect.
- **WHITELIST** **IP** **UDP** **Pass** **prior** **to** **rate** **limiting**: Use this rule template to create custom rules for allowing certain IP addresses on UDP before the appliance drops the packets based on rate limiting rules you have defined using the **RATELIMITED** **IP** **UDP** template. In the Rule Parameters table, complete the following:
  
  - **Whitelisted** **IP** **address/network**: Enter the IPv4 or IPv6 address from which packets sent are allowed before any relevant rate limiting rules take effect.
- **WHITELIST** **TCP** **Domain**: Use this rule template to create custom rules to allow DNS queries by FQDN lookups on TCP. In the Rule Parameters table, complete the following:
  
  - **Whitelist** **FQDN**: Enter the FQDN that you want the appliance to allow over TCP traffic. NIOS supports an** **exact match or subdomain matches for the FQDN specified in the rule. For example, if "test.com" is specified as a custom rule, NIOS allows “test.com” or “abc.test.com” but “abctest.com” will be blocked.
- **WHITELIST** **UDP** **Domain**: Use this rule template to create custom rules to allow DNS queries by FQDN lookups on UDP. In the Rule Parameters table, complete the following:
  
  - **Whitelist** **FQDN**: Enter the FQDN that you want the appliance to allow over UDP traffic. NIOS supports an** **exact match or subdomain matches for the FQDN specified in the rule. For example, if "test.com" is specified as a custom rule, NIOS allows “test.com” or “abc.test.com” but “abctest.com” will be blocked.
- **BLACKLIST** **TCP** **FQDN** **lookup** **for** **DNS** **Message** **Type**: Use this rule template to create custom rules for blacklisting FQDN lookups on TCP for the specified DNS message type. In the Rule Parameters table, complete the following:
  
  - **DNS** **Record** **Type**: Select the DNS record type from the drop-down list or enter a valid ENUM for the DNS record. You can enter a value between 1 and 65534. The following DNS resource records are not supported by this rule template: MD (3), MF (4), MB (7), MG (8), MR (9), WKS (11), HINFO (13), MINFO (14), IXFR (251), and AXFR (252) record.
  - **Blacklisted** **FQDN** **substring**: Enter the FQDN from which the packets received are blocked over TCP for the specified DNS message type.
- **BLACKLIST**** UDP ****FQDN**** lookup ****for ****DNS ****Message**** Type**: Use this rule template to create custom rules for blacklisting FQDN lookups on UDP for the specified DNS message type. In the Rule Parameters table, complete the following:
  
  - **DNS**** Record**** Type**: Select the DNS record type from the drop-down list or enter a valid ENUM for the DNS record. You can enter a value between 1 and 65534. The following DNS resource records are not supported by this rule template: MD (3), MF (4), MB (7), MG (8), MR (9), WKS (11), HINFO (13), MINFO (14), IXFR (251), and AXFR (252) record.
  - **Blacklisted ****FQDN ****substring**: Enter the FQDN from which the packets received are blocked over UDP for the specified DNS message type.
- **Pass**** TCP**** DNS**** Message****T ypes**: Use this rule template to create custom rules to allow TCP DNS packets that contain the specified DNS record type. In the Rule Parameters table, complete the following:
  
  - **DNS**** Record**** Type**: Select the DNS record type from the drop-down list or enter a valid ENUM for the DNS record. You can enter a value between 1 and 65534. The following DNS resource records are not supported by this rule template: MD (3), MF (4), MB (7), MG (8), MR (9), WKS (11), HINFO (13), MINFO (14), IXFR (251), and AXFR (252) record.
- **Pass** **UDP** **DNS** **Message** **Types:** Use this rule template to create custom rules to allow UDP DNS packets that contain the specified DNS record type. In the Rule Parameters table, complete the following:
  
  - **DNS** **Record** **Type**: Select the DNS record type from the drop-down list or enter a valid ENUM for the DNS record. You can enter a value between 1 and 65534. The following DNS resource records are not supported by this rule template: MD (3), MF (4), MB (7), MG (8), MR (9), WKS (11), HINFO (13), MINFO (14), IXFR (251), and AXFR (252) record.
- **RATE** **LIMITED** **TCP** **DNS** **Message** **Type**: Use this rule template to create custom rules that contain rate limiting restrictions for blacklisting TCP DNS packets that contain the specified DNS record type. In the Rule Parameters table, complete the following:
  
  - **Packets** **per** **second**: Enter the number of packets per second to define the rate limit for this rule. You define this value to control the rate of TCP traffic that consists of DNS packets with the DNS record type defined in this rule. The default is 5.
  - **DNS** **Record** **Type**: Select the DNS record type from the drop-down list or enter a valid ENUM for the DNS record. You can enter a value between 1 and 65534. The following DNS resource records are not supported by this rule template: MD (3), MF (4), MB (7), MG (8), MR (9), WKS (11), HINFO (13), MINFO (14), IXFR (251), and AXFR (252) record.
  - **Drop** **interval**: Enter the number of seconds for which the appliance drops packets.
- **RATE** **LIMITED** **UDP** **DNS** **Message** **Type**: Use this rule template to create custom rules that contain rate limiting restrictions for blacklisting UDP DNS packets that contain the specified DNS record type. In the Rule Parameters table, complete the following:
  
  - **Packets** **per** **second**: Enter the number of packets per second to define the rate limit for this rule. You define this value to control the rate of UDP traffic that consists of DNS packets with the DNS record type defined in this rule. The default is 5.
  - **DNS** **Record** **Type**: Select the DNS record type from the drop-down list or enter a valid ENUM for the DNS record. You can enter a value between 1 and 65534. The following DNS resource records are not supported by this rule template: MD (3), MF (4), MB (7), MG (8), MR (9), WKS (11), HINFO (13), MINFO (14), IXFR (251), and AXFR (252) record.
  - **Drop** **interval**: Enter the number of seconds for which the appliance drops packets.
- **WHITELIST PASS UDP IP for DHCP responses**: Use this rule template to create custom rules for allowing certain IP addresses on UDP before the appliance drops the packets based on DHCPv4 responses. In the Rule Parameters table, complete the following:
  
  - **Whitelisted IP address/network**: Enter the IPv4 address from which packets sent are allowed.
- **WHITELIST PASS UDP IP for DHCPV6 responses**: Use this rule template to create custom rules for allowing certain IP addresses on UDP before the appliance drops the packets based on DHCPv6 responses. In the Rule Parameters table, complete the following:
  
  - **Whitelisted IP address/network**: Enter the IPv6 address from which packets sent are allowed.

# Creating Custom Rules

Infoblox DNS Infrastructure Protection provides a few rule templates from which you can create custom rules.  
To create a custom rule:

1. From the **Data** **Management** tab, select the **Security** tab -> **DNS Infrastructure** **Protection** **Rules** tab -> *Ruleset* link, and then click **Add** **Custom** **Rule** from the Toolbar.
2. In the *Add* *Custom* *Rule* editor, complete the following:
   
   - **Template**: From the drop-down list, select the blacklisting or whitelisting rule template from which you want to create the new rule. For more information about the rule templates, see the previous section, Custom Rule Templates.
   - **Description**: Displays the description of the rule that you are about to create. You cannot modify this.
   - **Comment**: Enter comments to describe the new rule.
   - **Disable**: Select this if you want to keep the new rule disabled for later use.
3. Click **Next** and complete the following to configure rule parameters:
   
   - **Description**: Displays the description of the rule that you are about to create. You cannot modify this.
   - **Action**: Displays the operation the appliance performs when an event related to this rule occurs. Some rules are restricted to specific actions. For example, the action for all blacklisting rules is set to **Drop**, where the appliance drops IP packets when such an event occurs. The action for all whitelisting rules is set to **Pass**, where the appliance passes IP packets when such an event occurs.
   - **Log**** Severity**: Select **Critical**, **Major**, **Warning** or **Informational**. The log severity you select here determine the severity of the message triggered by a match against the rule.  
     In the Rule Parameters section, do the following:
   - Click the **Value** field for **Events ****per ****second** to enter the maximum number of events per second that will be logged for this rule. Use a nonzero value if you want matches against the current rule to log events. Setting a value to 0 (zero) disables the appliance from logging events associated with this rule.
   - Depending on the template you have selected, click the **Value** field and enter the appropriate parameters to configure the rule. For descriptions about the parameters for each rule template and System and Auto Rule Categories, see *[/wiki/spaces/nios90draft/pages/73293940](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668961)*. Note that when you create custom rules that involve FQDN lookups, the appliance automatically verifies the FQDN syntax and format that you enter in the **Value** field. It properly translates escaped sequences and special characters that are used to represent specific characters in the FQDN. For example, \32 is interpreted as a space (hex 20), and \" is interpreted as the double quote (hex 22). The appliance sends an error message when it detects invalid characters in the FQDN.
4. Click **Save** **&** **Close**.

The new rule, with an automatically assigned rule ID, is created and placed in its corresponding rule category.
