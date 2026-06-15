---
title: "Forwarder Limitations"
source: "/space/nios90/1468498338"
pageId: "1468498338"
---
- Forwarding zones (also known as conditional forwarders) do not support the **Add client IP, MAC addresses, and DNS View name to outgoing recursive queries** and the **Copy client IP, MAC addresses, and DNS View name to outgoing recursive queries** checkboxes.
- This **Add client IP, MAC addresses, and DNS View name to outgoing recursive queries** or **Copy client IP, MAC addresses, and DNS View name to outgoing recursive queries** checkboxes are features that are used in conjunction with forwarding to Infoblox Threat Defense Cloud. These features are not used by DTC in any way. DTC uses normal EDNS0 ECS options when available and applicable.
- When DNS Forwarding Proxy is enabled, if DNS queries that should be resolved locally are getting forwarded to the Infoblox Portal Configuration, enable the following option in each authoritative zone to prevent the use of forwarders for sub domains:
  
  1. Go to **Data Management** tab &gt; **DNS** tab &gt; **Zones** tab.
  2. Select an authoritative zone and click the **Edit** icon.
  3. On the *Authoritative Zone* editor &gt; **Settings** tab, select **Don't use forwarders to resolve queries in subzones**.
