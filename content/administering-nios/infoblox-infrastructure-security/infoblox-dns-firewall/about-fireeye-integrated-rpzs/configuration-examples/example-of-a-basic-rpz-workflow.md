---
title: "Example of a basic RPZ Workflow"
source: "/space/nios90/1405255826"
pageId: "1405255826"
---
Following is an example of a basic RPZ workflow:

1. Install the RPZ license. For more information, see [*License Requirements and Admin Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/420544897).
2. Enable recursive queries for a DNS view, member, or Grid, as described in [*Enabling Recursion for RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269921).
3. Enable RPZ logging in the *Grid* *DNS* *Properties* editor to view syslog entries for RPZ queries. For more information about setting DNS logging categories, see [*Using a Syslog Server*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148).
4. Create a local RPZ. For more information, see [*Configuring Local RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760177).
5. Define a **Substitute** **(PTR** **Record)** **Rule** for domain name 3.3.3.5.in-addr.arpa, which is substituted with the domain name [http://ptr1.com](http://ptr1.com) . For more information, see [*Defining Substitute Rules for PTR Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269891).
6. Execute the dig command to view output. The output contains the substituted domain name [http://ptr1.com](http://ptr1.com) . Following is the output of an RPZ query for **Substitute** **(PTR** **Record)** **Rule**:

`$ dig @10.36.2.73 3.3.3.5.in-addr.arpa in ptr`  
` ; &lt;<&gt;> DiG 9.6.2-P2-RedHat-9.6.2-5.P2.fc12 &lt;<&gt;> @10.36.2.73 3.3.3.5.in-addr.arpa in ptr`  
` ; (1 server found)`  
` ;; global options: +cmd`  
` ;; Got answer:`  
` ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 7351`  
` ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0 `



` ;; QUESTION SECTION: `  
` ;3.3.3.5.in-addr.arpa.          IN         PTR `



` ;; ANSWER SECTION:`  
` 3.3.3.5.in-addr.arpa. 7200      IN         PTR       ptr1.com. `



` ;; Query time: 3 msec`  
` ;; SERVER: 10.36.2.73#53(10.36.2.73)`  
` ;; WHEN: Thu Sep 26 23:27:10 2013`  
` ;; MSG SIZE rcvd: 60`

1. Following is the syslog entry for the query mentioned above:

`2013-09-27T02:26:46-04:00 daemon (none) named[21737]: info`  
`CEF:0|Infoblox|NIOS|6.9.0-218052|RPZ-QNAME|Local-Data|4|app=DNS dst=10.36.2.73`  
`src=10.120.20.194 spt=40518 view=2 qtype=PTR msg="rpz QNAME Local-Data rewrite`  
`3.3.3.5.in-addr.arpa [PTR] via 3.3.3.5.in-addr.arpa.local1.com"`



For more information about syslog, see [*Viewing RPZ in the Syslog*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269642).
