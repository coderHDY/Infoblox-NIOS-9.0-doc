---
title: "Specifying Hostname Policies"
source: "/space/nios90/280272861"
pageId: "280272861"
---
You can enforce a naming policy for the hostnames of A, AAAA, Host, MX, NS, and bulk host records based on  
user-defined or default patterns. For MX and NS records, the hostname restrictions apply to the text in the RDATA field (right-hand side) of the resource record name.  
Records that you created before you enabled the hostname checking policy need not comply with the hostname restriction that you specify.  
You can select one of three preconfigured policies or define your own host naming policy with a POSIX regular expression. The policies Infoblox provides implement standard host naming restrictions according to *RFC* *952,* *DOD* *Internet* *Host* *Table* *Specification*, and *RFC* *1123,* *Requirements* *for* *Internet* *Hosts* *--* *Application* *and* *Support.*

> **warning**
>
> ### Note
> 
> The hostname restriction limits the hostname of A, AAAA, Host, MX, NS, and bulk host records only.

You can define your own hostname restriction policy at the Grid level only. At the member and zone levels, you can select a predefined policy or a policy that was defined at the Grid level. The appliance supports IDNs for DNS zones and resource records. For more information about IDNs, see [*Managing Internationalized Domain Names*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/managing-internationalized-domain-names). You can use UTF-8 characters when you configure your own hostname checking policy.

# Defining Grid Hostname Policies

You can define new hostname policies and set the hostname policy for all zones in the Grid as follows:

1. From the **Data** ** Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** ** DNS** ** Properties**.
2. In the *Grid* * DNS* * Properties* editor, click **Toggle** ** Advanced ** **Mode**.
3. When the additional tabs appear, click **Host** ** Naming**.  
   The Host Name Policies section lists the following preconfigured record policies:
   
   - **Strict Hostname Checking**: You can only use hostnames that contain alphanumeric characters, dashes (-), and asterisks (*). You cannot use other special characters, such as underscore (_). Note that when you select this policy, the appliance automatically applies the policy to dynamic DNS updates and zone transfers it receives. When you select this, you can enter host names through Grid Manager using punycode, but not IDNs. The appliance stores IDNs that are created through DDNS updates and DNS transfers in punycode. You can monitor non-compliant host names using the Hostname Compliance report. For information, see  Obtaining a List of Invalid Record Names below.
   - **Allow Underscore**: You can only use hostnames with alphanumeric characters, dashes, and underscores ("-" and "_"). This is the default.
   - **Allow Any**: You can use any hostname.
   
   Select Default from the drop-down list in the Default column to change the Grid default hostname policy.
4. Click **Add** to define your own hostname checking policy.
5. Enter a record policy name and a regular expression string, and click **OK**. See [*Supported Expressions for Search Parameters*](/nios90/infoblox-nios-9-0-x/reference-information/supported-expressions-for-search-parameters) for definitions of regular expressions.  
   Note that Grid Manager does not validate the regular expressions that you enter. Therefore, you can inadvertently specify an invalid regular expression that might cause noncompliance errors when you create records.
6. If you select the Strict Hostname Checking policy, the **Apply policy to dynamic updates and inbound zone transfers (requires Strict Hostname Checking setting)** option is enabled by default. It enables the appliance to apply the policy to dynamic DNS updates and zone transfers that it receives. You can then select which action the appliance takes when it encounters names that do not conform to the policy. Select either **Fail** or **Warn.** If you select **Warn,** the appliance allows the dynamic DNS update or zone transfer, but logs a syslog message.
   
   Note that the Strict Hostname Checking policy only allows alphanumeric characters and dashes ("-"). In addition, this policy allows IDNs that are written in punycode. You cannot use other special characters, such as underscore ("_"). Therefore, DDNS updates from Microsoft Active Directory controllers may not be accepted.
7. Save the configuration and click **Restart** if it appears at the top of the screen.

After you specify a hostname restriction policy, if you create a record name that does not comply with this policy and try to save it, an error message appears.

# Defining Hostname Restrictions

You can select a hostname restriction policy for an individual Grid member or zone. You can specify hostname restrictions for authoritative forward-mapping zones only. You cannot specify hostname restrictions for forward zones, stub zones, IPv4 reverse-mapping zones, and IPv6 reverse mapping zones.  
To select a hostname restriction policy for a Grid member or zone:

1. **Member:** From the **Data** **Management** tab, select the **DNS** tab, click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.  
   **Zone:** From the **Data** **Management** tab, select the **DNS** tab and click the **Zones** tab-&gt; *dns_view* -&gt; *zone* checkbox -&gt; Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the *Member* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode**.
3. When the additional tabs appear, click **Host** **Naming**.
4. Click **Override**.
5. From the **Host** **Name** **Policy** drop-down list, select a predefined policy or a policy that was defined at the Grid level.
6. If you select the Strict Hostname Checking policy, the Apply policy to dynamic updates and inbound zone transfers (requires Strict Hostname Checking setting) is enabled by default. It enables the appliance to apply the policy to dynamic DNS updates and zone transfers that it receives. You can then select which action the appliance takes when it encounters names that do not conform to the policy. Select either Fail or Warn. If you select Warn, the appliance allows the dynamic DNS update or zone transfer, but logs a syslog message.
   
   Note that the strict hostname checking policy only allows alphanumeric characters and dashes. It does not allow for the use of other special characters, such as underscore ("_"). Therefore, DDNS updates from Microsoft Active Directory controllers might not be accepted.
7. Save the configuration and click **Restart** if it appears at the top of the screen.

# Obtaining a List of Invalid Record Names

You can retrieve a list of all record names that do not comply with the current hostname checking policy of a zone. These could be records that were created before the current host naming policy was set. In addition, if you selected the Strict Hostname Checking policy and allowed illegal hostnames in DDNS updates and inbound zone transfers with a warning, those records are listed in this report as well.  
To display the Hostname Compliance report:

1. From the **Data** **Management** tab, select the **DNS** tab and click the **Zones** tab-&gt; *dns_view* -&gt; *zone* checkbox.
2. Click **Hostname** **Compliance.**  
   The Hostname Compliance Report for the zone displays. It lists the record name, type, value, and comment for all records that do not comply with the hostname restriction policy of the zone.

From the report, you can select a record and do the following:

- Click the Edit icon to open the record editor.
- Click the Delete icon to move it to the Recycle Bin.
