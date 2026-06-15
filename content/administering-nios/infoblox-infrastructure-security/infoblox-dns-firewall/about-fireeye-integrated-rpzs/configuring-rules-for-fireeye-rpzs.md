---
title: "Configuring Rules for FireEye RPZs"
source: "/space/nios90/1406173198"
pageId: "1406173198"
---
You can define a list of rules based on how the DNS server determines its response to recursive queries. Based on the rules defined, responses to clients are either manipulated or forwarded without any changes. To configure rules for FireEye RPZs:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, click *DNS_View* -> *Zone* and then click **Add** -> select a **Rule**.
2. The rules are classified as follows, for more information about these rules see, [*Configuring Rules for RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269891):
   
   - **Passthru** **Rule**
   - **Block** **(No** **Such** **Domain)** **Rule**
   - **Block** **(No** **Data)** **Rule**
   - **Substitute** **(Domain** **Name)** **Rule**
   - **Substitute** **(Record)** **Rule**
3. Complete the details in the corresponding editor.
4. Save the configuration and click **Next** to define extensible attributes.
