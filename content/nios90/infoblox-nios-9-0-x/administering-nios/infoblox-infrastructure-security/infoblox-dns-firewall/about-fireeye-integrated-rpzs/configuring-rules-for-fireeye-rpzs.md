---
title: "Configuring Rules for FireEye RPZs"
source: "/space/nios90/1406173198"
pageId: "1406173198"
---
You can define a list of rules based on how the DNS server determines its response to recursive queries. Based on the rules defined, responses to clients are either manipulated or forwarded without any changes. To configure rules for FireEye RPZs:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab, click *DNS_View* -&gt; *Zone* and then click **Add** -&gt; select a **Rule**.
2. The rules are classified as follows, for more information about these rules see, [*Configuring Rules for RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs):
   
   - **Passthru** **Rule**
   - **Block** **(No** **Such** **Domain)** **Rule**
   - **Block** **(No** **Data)** **Rule**
   - **Substitute** **(Domain** **Name)** **Rule**
   - **Substitute** **(Record)** **Rule**
3. Complete the details in the corresponding editor.
4. Save the configuration and click **Next** to define extensible attributes.
