---
title: "Setting the Prefix Length Mode for DHCPv6"
source: "/space/nios90/280403963"
pageId: "280403963"
---
The prefix length mode determines the prefix selection rules employed by the DHCPv6 server when a DHCPv6 client sends an empty prefix with just a prefix length as a hint for the server to specify the required prefix length. This determines the prefix that gets allocated to the DHCPv6 client.

To set the prefix length mode:

1. **Grid**: From the **Data Management** tab, select the **DHCP** tab, and then click **Grid DHCP Properties** from the Toolbar.  
   **Member**: From the **Data Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox, and then click the Edit icon.
2. In the editor, click the **General** tab -&gt; **Advanced** tab.
3. In the IPv6 Properties area, from the **Prefix Length Mode** drop-down list, select from the following options:
   
   - **Exact**: The DHCP server looks for a prefix with exactly the same length as the length requested by the client. If it cannot find a prefix that has the exact same length as the length requested, the server returns a status indicating that no prefixes are available. If you do not configure the prefix length mode, Exact is the default value.
   - **Ignore**: The DHCP server ignores the length requested by the client and offers the first available prefix.
   - **Prefer**: The DHCP server looks for prefixes that have the same length as the length requested by the client. If it does not find a prefix of the same length, it offers the first available prefix of any length.
   - **Minimum**: The DHCP server looks for a prefix that has the same length as the requested length. If it does not find such a prefix, it returns a prefix whose length is greater than (that is, longer than) the requested value. If it does not even find a prefix of a greater length, it returns a status indicating that no are prefixes available. For example, if the client requests a prefix length of /60, and the DHCP server has prefixes of lengths /56 and /64 available, it offers a prefix of length /64.
   - **Maximum**: The DHCP server looks for a prefix that has the same length as the requested length. If it does not find such a prefix, it returns a prefix whose length is less than (that is, shorter than) the requested value. If it does not even find a prefix of a shorter length, it returns a status indicating that no prefixes are available. For example, if the client requests a length of /60, and the server has prefixes of lengths /56 and /64 available, it offers a prefix of length /56.
4. Click **Save & Close**.
