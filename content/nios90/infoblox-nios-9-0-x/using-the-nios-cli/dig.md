---
title: "dig"
source: "/space/nios90/280757540"
pageId: "280757540"
---
The **dig** command performs a DNS lookup on a specified server and displays the results. You can also use the inverse command to perform a reverse DNS lookup. This command displays IDN data in punycode, if any, for the specified server. If you specify IP address of the Microsoft server in this command, the IDN data is displayed in \xyz format.

# Syntax

`dig ``[@``server_address``] &lt;``hostname``&gt; [``type``] [``opt...``]`  
`dig ``[@``server_address``] ``&lt;ip-address&gt; ``inverse`

| **Argument** | **Description** |
| --- | --- |
| server_address | The IP address of the host on which you want to perform a DNS lookup. |
| hostname | The name of the host on which you want to perform a DNS lookup. |
| ip-address | The IP address of the host on which you want to perform a DNS lookup. |
| type | You can enter any of the following for the object type (case sensitive): `a, a6, aaaa, afsdb, any, apl, axfr, cert, cname, dhcid, div, dname, dnskey, ds, gpos, hinfo, hip, ipseckey, isdn, ixfr, key, keydata, kx, loc, maila, mailb, mb, md, mf, mg, minfo, mr, mx, naptr, none, ns, nsap, nsap_ptr, nsec, nsec3, nsec3param, null, nxt, opt, ptr, px, rp, rrsig, rt, sig, soa, spf, srv, sshfp, tkey, tsig, txt, unspec, wks, and x25`. The default is `a`. |
| opt | You can enter one or more of the following options:  - `-x`` `(specifies the in-addr lookup) - `-b`* *`address`` `(specifies the binding to the source address) - `-y`* *`name:key` (specifies the named base64 tsig key) - `+vc` (enables the TCP mode) - `+norecurse` (disables the recursive mode) - `+short` (disables everything except the short forms of answers) - `+nssearch` (searches all the authoritative nameservers) - `+trace` (traces all the delegations from the root) - `+cdflag` (requests the server not to perform a DNSSEC validation) - `+dnssec` (requests the server to send DNSSEC records) - `+multiline` (displays records in multiple lines) |



## **Examples**

## Perform a DNS lookup

`Infoblox &gt; ``dig`` ``@10.0.2.60`` ``www.infoblox.com`` ``a`  
` : &lt;&lt;&gt;&gt; DiG 9.6.1-p3 &lt;&lt;&gt;&gt; @10.0.2.60 -x www.infoblox.com a`  
` : &lt;1 server found&gt;`  
` :: global options: +cmd`  
` :: Got answer:`  
` :: &gt;&gt;HEADER&lt;&lt; opcode: QUERY, status: NOERROR, id: 45283`  
` :: flags: qr aa rd ra: QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 0`  
` :: QUESTION SECTION: `  
`: www.infoblox.com.                       IN             A`  
`:: ANSWER SECTION:`  
`www.infoblox.com        3600          IN            CNAME        infoblox.com.`  
`infoblox.com                 600           IN             A                  128.242.99.236`  
`:: Query time: 2 msec`  
`:: SERVER: 10.0.2.60#53&lt;10.0.2.60&gt;`  
` :: WHEN: Fri Feb 26 14:06:00 2010`  
` :: MSG SIZE rcvd: 64`

## Perform a reverse DNS lookup

`Infoblox &gt; dig @10.0.2.60 inverse`  
` : &lt;&lt;&gt;&gt; DiG 9.6.1-p3 &lt;&lt;&gt;&gt; @10.0.2.60 inverse`  
` : &lt;1 server found&gt;`  
` :: global options: +cmd`  
` :: Got answer:`  
` :: &gt;&gt;HEADER&lt;&lt; opcode: QUERY status: NXDOMAIN, id: 37916`  
` :: flags: qr rd ra: QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 0`  
` :: QUESTION SECTION:`  
` :inverse.                        IN          A`  
` :: AUTHORITY SECTION:`  
` . 10800                          IN          SOA      a.root-servers.net.`  
` nst1d.verisign-grs.com. 2010022601 1800 900 604800 86400`  
` :: Query time: 132 msec`  
` :: SERVER: 10.0.2.60#53&lt;10.0.2.60&gt;`  
` :: WHEN: Thu Feb 25 11:20:09 2010`  
` :: MSG SIZE rcvd: 100`
