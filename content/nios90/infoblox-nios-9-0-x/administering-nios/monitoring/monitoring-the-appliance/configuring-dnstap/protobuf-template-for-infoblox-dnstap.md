---
title: "Protobuf Template for Infoblox dnstap"
source: "/space/nios90/1432781072"
pageId: "1432781072"
---
The following is a sample template that you can create for flexible and efficient use of your logged data. You can specify the way in which information must be logged by defining protobuf message types.

`// dnstap: flexible, structured event replication format for DNS software,`  
`// This file contains the protobuf schemas for the "dnstap" structured event `  
`// replication format for DNS software.`  
`// Written in 2013-2014 by Farsight Security, Inc.`  
`// Updated in 2019-2020 by Infoblox, Inc.`  
`// To the extent possible under law, the author(s) have dedicated all copyright `  
`// and related and neighboring rights to this file to the public domain worldwide. `  
`// This file is distributed without any warranty.`  
`// You should have received a copy of the CC0 Public Domain Dedication along with this file.`  
`// If not, see:`  
`// &lt;http://creativecommons.org/publicdomain/zero/1.0/&gt;. package dnstap;`  
`// "Dnstap": this is the top-level dnstap type, which is a "union" type that`  
`// contains other kinds of dnstap payloads, although currently only one type`  
`// of dnstap payload is defined.`  
`// See: https://developers.google.com/protocol-buffers/docs/techniques#union`  
`message Dnstap {`  
`// DNS server identity.`  
`optional bytes identity = 1;`  
`// DNS server version.`  
`optional bytes version = 2;`  
`// Extra data for this payload.`  
`optional bytes extra = 3;`  
`// Identifies which field below is filled in.`  
`enum Type {`  
`MESSAGE = 1;`  
`}`  
`required Type type = 15;`  
`// One of the following will be filled in.`  
`optional Message message = 14;`  
`}`  
`// SocketFamily: the network protocol family of a socket. This specifies how`  
`// to interpret "network address" fields.`  
`enum SocketFamily {`  
`INET = 1; // IPv4 (RFC 791)`  
`INET6 = 2; // IPv6 (RFC 2460)`  
`}`  
`// SocketProtocol: the transport protocol of a socket. This specifies how to`  
`// interpret "transport port" fields.`  
`enum SocketProtocol {`  
`UDP = 1; // User Datagram Protocol (RFC 768)`  
`TCP = 2; // Transmission Control Protocol (RFC 793)`  
`}`  
`// Message: a wire-format (RFC 1035 section 4) DNS message and associated`  
`// metadata. Applications generating "Message" payloads should follow`  
`// certain requirements based on the MessageType, see below.`  
`message Message {`  
`// We are supporting the following types of messages`  
`// CQ: CLIENT_QUERY`  
`// CR: CLIENT_RESPONSE`  
`enum Type {`  
`// CLIENT_QUERY is a DNS query message sent from a client to a DNS`  
`// server which is expected to perform further recursion, from the`  
`// perspective of the DNS server. The client may be a stub resolver or`  
`// forwarder or some other type of software which typically sets the RD`  
`// (recursion desired) bit when querying the DNS server. The DNS server`  
`// may be a simple forwarding proxy or it may be a full recursive`  
`// resolver.`  
`CLIENT_QUERY = 5;`  
`// CLIENT_RESPONSE is a DNS response message sent from a DNS server to`  
`// a client, from the perspective of the DNS server. The DNS server`  
`// typically sets the RA (recursion available) bit when responding.`  
`CLIENT_RESPONSE = 6;`  
`}`  
`// One of the Type values described above.`  
`required Type type = 1;`  
`// One of the SocketFamily values described above.`  
`optional SocketFamily socket_family = 2;`  
`// One of the SocketProtocol values described above.`  
`optional SocketProtocol socket_protocol = 3;`  
`// The network address of the message initiator.`  
`// For SocketFamily INET, this field is 4 octets (IPv4 address).`  
`// For SocketFamily INET6, this field is 16 octets (IPv6 address).`  
`optional bytes query_address = 4;`  
`// The network address of the message responder.`  
`// For SocketFamily INET, this field is 4 octets (IPv4 address).`  
`// For SocketFamily INET6, this field is 16 octets (IPv6 address).`  
`optional bytes response_address = 5;`  
`// The transport port of the message initiator.`  
`// This is a 16-bit UDP or TCP port number, depending on SocketProtocol.`  
`optional uint32 query_port = 6;`  
`// The transport port of the message responder.`  
`// This is a 16-bit UDP or TCP port number, depending on SocketProtocol.`  
`optional uint32 response_port = 7;`  
`// The time at which the DNS query message was sent or received, depending`  
`// on whether this is an AUTH_QUERY, RESOLVER_QUERY, or CLIENT_QUERY.`  
`// This is the number of seconds since the UNIX epoch.`  
`optional uint64 query_time_sec = 8;`  
`// The time at which the DNS query message was sent or received.`  
`// This is the seconds fraction, expressed as a count of nanoseconds.`  
`optional fixed32 query_time_nsec = 9;`  
`// The initiator's original wire-format DNS query message, verbatim.`  
`optional bytes query_message = 10;`  
`// This is a wire-format DNS domain name.`  
`// Currently, we are not supporting this.`  
`optional bytes query_zone = 11;`  
`// The time at which the DNS response message was sent or received,`  
`// depending on whether this is an CLIENT_RESPONSE.`  
`// This is the number of seconds since the UNIX epoch.`  
`optional uint64 response_time_sec = 12;`  
`// The time at which the DNS response message was sent or received.`  
`// This is the seconds fraction, expressed as a count of nanoseconds.`  
`optional fixed32 response_time_nsec = 13;`  
`// The responder's original wire-format DNS response message, verbatim.`  
`optional bytes response_message = 14;`  
`// Start of Infoblox specific log messages`  
`optional bytes subscriber_id = 15; // 32 bytes`  
`optional uint64 local_id = 16; // 8 bytes`  
`optional bytes pcp_ssp = 17; // 16 bytes`  
`optional bytes proxy_all = 18; // Proxy all`  
`optional bytes fqdn = 19; // MAX 255 bytes`  
`required uint32 txid = 20; //16-bit transaction id`  
`}`  
`// All fields except for 'type' in the Message schema are optional.`  
`// It is recommended that at least the following fields be filled in for`  
`// particular types of Messages.`  
`// CLIENT_QUERY:`  
`// socket_family, socket_protocol`  
`// query_message`  
`// query_time_sec, query_time_nsec`  
`// CLIENT_RESPONSE:`  
`// socket_family, socket_protocol`  
`// query_time_sec, query_time_nsec`  
`// response_message`  
`// response_time_sec, response_time_nsec`

## Sample Proto File for Violations Over TLS and Violations over TCP

Use the following dnstap proto file if you want to capture violations over TLS or violations over TCP along with the existing queries and responses:

`syntax = "proto2";`  
`// dnstap: flexible, structured event replication format for DNS software`  
`//`  
`// This file contains the protobuf schemas for the "dnstap" structured event`  
`// replication format for DNS software.`

`// Written in 2013-2014 by Farsight Security, Inc.`  
`//`  
`// To the extent possible under law, the author(s) have dedicated all`  
`// copyright and related and neighboring rights to this file to the public`  
`// domain worldwide. This file is distributed without any warranty.`  
`//`  
`// You should have received a copy of the CC0 Public Domain Dedication along`  
`// with this file. If not, see:`  
`//`  
`//&lt;http://creativecommons.org/publicdomain/zero/1.0/&gt;.`  
  
`package dnstap;`  
`option go_package = "http://github.com/dnstap/golang-dnstap;dnstap ";`  
  
`// "Dnstap": this is the top-level dnstap type, which is a "union" type that`  
`// contains other kinds of dnstap payloads, although currently only one type`  
`// of dnstap payload is defined.`  
`// See: https://developers.google.com/protocol-buffers/docs/techniques#union `  
`message Dnstap {`  
`    // DNS server identity.`  
`    // If enabled, this is the identity string of the DNS server which generated`  
`    // this message. Typically this would be the same string as returned by an`  
`    // "NSID" (RFC 5001) query.`  
`    optional bytes      identity = 1;`  
  
`    // DNS server version.`  
`    // If enabled, this is the version string of the DNS server which generated`  
`    // this message. Typically this would be the same string as returned by a`  
`    // "version.bind" query.`  
`    optional bytes      version = 2;`  
  
`    // Extra data for this payload.`  
`    // This field can be used for adding an arbitrary byte-string annotation to`  
`    // the payload. No encoding or interpretation is applied or enforced.`  
`    optional bytes      extra = 3;`  
  
`    // Identifies which field below is filled in.`  
`    enum Type {`  
`        MESSAGE = 1;`  
`    }`  
`    required Type       type = 15;`  
  
`    // One of the following will be filled in.`  
`    optional Message    message = 14;`  
`}`  
  
`// SocketFamily: the network protocol family of a socket. This specifies how`  
`// to interpret "network address" fields.`  
`enum SocketFamily {`  
`    INET = 1;   // IPv4 (RFC 791)`  
`    INET6 = 2;  // IPv6 (RFC 2460)`  
`}`  
  
`// SocketProtocol: the transport protocol of a socket. This specifies how to`  
`// interpret "transport port" fields.`  
`enum SocketProtocol {`  
`    UDP = 1;    // User Datagram Protocol (RFC 768)`  
`    TCP = 2;    // Transmission Control Protocol (RFC 793)`  
`}`  
  
`enum ProcessGenerating {`  
`    DCA = 1;   // vdca`  
`    NAMED = 2;  //  named`  
`}`  
  
`// Message: a wire-format (RFC 1035 section 4) DNS message and associated`  
`// metadata. Applications generating "Message" payloads should follow`  
`// certain requirements based on the MessageType, see below.`  
`message Message {`  
  
`    // There are eight types of "Message" defined that correspond to the`  
`    // four arrows in the following diagram, slightly modified from RFC 1035`  
`    // section 2:`

`    //    +---------+               +----------+           +--------+`  
`    //    |         |     query     |          |   query   |        |`  
`    //    | Stub    |-SQ--------CQ-&gt;| Recursive|-RQ----AQ-&gt;| Auth.  |`  
`    //    | Resolver|               | Server   |           | Name   |`  
`    //    |         |&lt;-SR--------CR-|          |&lt;-RR----AR-| Server |`  
`    //    +---------+    response   |          |  response |        |`  
`    //                              +----------+           +--------+`  
  
`    // Each arrow has two Type values each, one for each "end" of each arrow,`  
`    // because these are considered to be distinct events. Each end of each`  
`    // arrow on the diagram above has been marked with a two-letter Type`  
`    // mnemonic. Clockwise from upper left, these mnemonic values are:`  
`    //`  
`    //   SQ:        STUB_QUERY`  
`    //   CQ:      CLIENT_QUERY`  
`    //   RQ:    RESOLVER_QUERY`  
`    //   AQ:        AUTH_QUERY`  
`    //   AR:        AUTH_RESPONSE`  
`    //   RR:    RESOLVER_RESPONSE`  
`    //   CR:      CLIENT_RESPONSE`  
`    //   SR:        STUB_RESPONSE`  
  
`    // Two additional types of "Message" have been defined for the`  
`    // "forwarding" case where an upstream DNS server is responsible for`  
`    // further recursion. These are not shown on the diagram above, but have`  
`    // the following mnemonic values:`  
  
`    //   FQ:   FORWARDER_QUERY`  
`    //   FR:   FORWARDER_RESPONSE`  
  
`    // The "Message" Type values are defined below.`  
  
`    enum Type {`  
`        // AUTH_QUERY is a DNS query message received from a resolver by an`  
`        // authoritative name server, from the perspective of the authorative`  
`        // name server.`  
`        AUTH_QUERY = 1;`  
  
`        // AUTH_RESPONSE is a DNS response message sent from an authoritative`  
`        // name server to a resolver, from the perspective of the authoritative`  
`        // name server.`  
`        AUTH_RESPONSE = 2;`  
  
`        // RESOLVER_QUERY is a DNS query message sent from a resolver to an`  
`        // authoritative name server, from the perspective of the resolver.`  
`        // Resolvers typically clear the RD (recursion desired) bit when`  
`        // sending queries.`  
`        RESOLVER_QUERY = 3;`  
  
`        // RESOLVER_RESPONSE is a DNS response message received from an`  
`        // authoritative name server by a resolver, from the perspective of`  
`        // the resolver.`  
`        RESOLVER_RESPONSE = 4;`  
  
`        // CLIENT_QUERY is a DNS query message sent from a client to a DNS`  
`        // server which is expected to perform further recursion, from the`  
`        // perspective of the DNS server. The client may be a stub resolver or`  
`        // forwarder or some other type of software which typically sets the RD`  
`        // (recursion desired) bit when querying the DNS server. The DNS server`  
`        // may be a simple forwarding proxy or it may be a full recursive`  
`        // resolver.`  
`        CLIENT_QUERY = 5;`  
  
`        // CLIENT_RESPONSE is a DNS response message sent from a DNS server to`  
`        // a client, from the perspective of the DNS server. The DNS server`  
`        // typically sets the RA (recursion available) bit when responding.`  
`        CLIENT_RESPONSE = 6;`  
  
`        // FORWARDER_QUERY is a DNS query message sent from a downstream DNS`  
`        // server to an upstream DNS server which is expected to perform`  
`        // further recursion, from the perspective of the downstream DNS`  
`        // server.     FORWARDER_QUERY = 7;`  
  
`        // FORWARDER_RESPONSE is a DNS response message sent from an upstream`  
`        // DNS server performing recursion to a downstream DNS server, from the`  
`        // perspective of the downstream DNS server.`  
`        FORWARDER_RESPONSE = 8;`  
`        // STUB_QUERY is a DNS query message sent from a stub resolver to a DNS`  
`        // server, from the perspective of the stub resolver.`  
`        STUB_QUERY = 9;`  
  
`        // STUB_RESPONSE is a DNS response message sent from a DNS server to a`  
`        // stub resolver, from the perspective of the stub resolver.`  
`        STUB_RESPONSE = 10;`  
  
`        // TOOL_QUERY is a DNS query message sent from a DNS software tool to a`  
`        // DNS server, from the perspective of the tool.`  
`        TOOL_QUERY = 11;`  
  
`        // TOOL_RESPONSE is a DNS response message received by a DNS software`  
`        // tool from a DNS server, from the perspective of the tool.`  
`        TOOL_RESPONSE = 12;`  
  
`        // UPDATE_QUERY is a DNS update query message received from a resolver`  
`        // by an authoritative name server, from the perspective of the`  
`        // authoritative name server.`  
`        UPDATE_QUERY = 13;`  
  
`        // UPDATE_RESPONSE is a DNS update response message sent from an`  
`        // authoritative name server to a resolver, from the perspective of the`  
`        // authoritative name server.`  
`	UPDATE_RESPONSE = 14;`  
  
`        //Violation when domain queried hits RPZ NX-DOMAIN.`  
`        VIOLATION_RPZ = 101;`  
  
`        //Violation when domain queried hits PCP BLOCK ALL category.`  
`	VIOLATION_BLOCK_ALL = 102;`  
  
`        //Violation when domain queried hits PCP-BLOCK category.`  
`        VIOLATION_PCP = 103;`  
  
`        //Violation when domain queried hits WPCP category.`  
`        VIOLATION_WPCP = 104;`  
  
`        //Violation when domain queried hits BLOCK-LIST category.`  
`        VIOLATION_BLOCKLIST = 105;`  
  
`        //Violation when domain queried is GUEST query from unknown device.`  
`        VIOLATION_NEW_DEVICE_EVENT = 106;`  
  
`        //Uncategorised Policy`  
`        VIOLATION_UCP = 107;`  
`    }`  
  
`    // One of the Type values described above.`  
`    required Type               type = 1;`  
  
`    // One of the SocketFamily values described above.`  
`    optional SocketFamily       socket_family = 2;`  
  
`    // One of the SocketProtocol values described above.`  
`    optional SocketProtocol     socket_protocol = 3;`  
  
`    // The network address of the message initiator.`  
`    // For SocketFamily INET, this field is 4 octets (IPv4 address).`  
`    // For SocketFamily INET6, this field is 16 octets (IPv6 address).`  
`    optional bytes              query_address = 4;`  
  
`    // The network address of the message responder.`  
`    // For SocketFamily INET, this field is 4 octets (IPv4 address).`  
`    // For SocketFamily INET6, this field is 16 octets (IPv6 address).`  
`    optional bytes              response_address = 5;`  
  
`    // The transport port of the message initiator.`  
`    // This is a 16-bit UDP or TCP port number, depending on SocketProtocol.`  
`    optional uint32             query_port = 6;`  
  
`    // The transport port of the message responder.`  
`    // This is a 16-bit UDP or TCP port number, depending on SocketProtocol.`  
`    optional uint32             response_port = 7;`  
`    // The time at which the DNS query message was sent or received, depending`  
`    // on whether this is an AUTH_QUERY, RESOLVER_QUERY, or CLIENT_QUERY.`  
`    // This is the number of seconds since the UNIX epoch.`  
`    optional uint64             query_time_sec = 8;`  
  
`    // The time at which the DNS query message was sent or received.`  
`    // This is the seconds fraction, expressed as a count of nanoseconds.`  
`    optional fixed32            query_time_nsec = 9;`  
  
`    // The initiator's original wire-format DNS query message, verbatim.`  
`    optional bytes              query_message = 10;`  
  
`    // The "zone" or "bailiwick" pertaining to the DNS query message.`  
`    // This is a wire-format DNS domain name.`  
`    optional bytes              query_zone = 11;`  
  
`    // The time at which the DNS response message was sent or received,`  
`    // depending on whether this is an AUTH_RESPONSE, RESOLVER_RESPONSE, or`  
`    // CLIENT_RESPONSE.`  
`    // This is the number of seconds since the UNIX epoch.`  
`    optional uint64             response_time_sec = 12;`  
  
`    // The time at which the DNS response message was sent or received.`  
`    // This is the seconds fraction, expressed as a count of nanoseconds.`  
`    optional fixed32            response_time_nsec = 13;`  
  
`    // The responder's original wire-format DNS response message, verbatim.`  
`    optional bytes              response_message = 14;`  
  
`    // Start of Infoblox specific log messages`  
`    // Device_id(Subscriber ID) - 256 bytes`  
`    optional bytes              subscriber_id = 15; // 32 bytes `  
  
`    // MAC address for the subscriber device - 8 bytes.`  
`    optional uint64             local_id = 16;`  
  
`    // PCP SSP word - 8 bytes   - Not required`  
`    optional uint64             pcp_ssp = 17 [deprecated = true];`  
  
`    // Proxy all - Not required`  
`    optional bytes              proxy_all = 18;`  
  
`    // MAX 255 bytes`  
`    optional bytes              fqdn = 19;`  
  
`    //16-bit transaction id`  
`    required uint32             txid = 20;`  
  
`    // Query type i.e.- A, AAAA, or HTTPS`  
`    optional bytes              query_type = 101;`  
  
`    //Violating domain details`  
`    optional bytes              violation_domain = 102;`  
  
`    //Violation category bits for PCP/WPCP/BL - 16 bytes`  
`    optional bytes              violation_category = 103;`  
  
`    //process generating violation(RPZ -- 0 /DCA -- 1)`  
`    optional ProcessGenerating  process_generating = 104;`  
  
`    //Optional subscriber secure site name`  
`    optional string             site_name = 105;`  
  
`    //RPZ Channel for rpz block(0-63) - 1 byte`  
`    optional bytes              rpz_channel = 106;`  
  
`}`  
  
`// All fields except for 'type' in the Message schema are optional.`  
`// It is recommended that at least the following fields be filled in for`  
`// particular types of Messages.`  
  
`// AUTH_QUERY:`  
`//      socket_family, socket_protocol`  
`//      query_address, query_port`  
`//      query_message`  
`//      query_time_sec, query_time_nsec`  
  
`// AUTH_RESPONSE:`  
`//      socket_family, socket_protocol`  
`//      query_address, query_port`  
`//      query_time_sec, query_time_nsec`  
`//      response_message`  
`//      response_time_sec, response_time_nsec`  
  
`// RESOLVER_QUERY:`  
`//      socket_family, socket_protocol`  
`//      query_message`  
`//      query_time_sec, query_time_nsec`  
`//      query_zone`  
`//      response_address, response_port`  
  
`// RESOLVER_RESPONSE:`  
`//      socket_family, socket_protocol`  
`//      query_time_sec, query_time_nsec`  
`//      query_zone`  
`//      response_address, response_port`  
`//      response_message`  
`//      response_time_sec, response_time_nsec`  
  
`// CLIENT_QUERY:`  
`//      socket_family, socket_protocol`  
`//      query_message`  
`//      query_time_sec, query_time_nsec`  
  
`// CLIENT_RESPONSE:`  
`//      socket_family, socket_protocol`  
`//      query_time_sec, query_time_nsec`  
`//      response_message`  
`//      response_time_sec, response_time_nsec`  
  
`// VIOLATION_EVENT:`  
`//      socket_family, socket_protocol`  
`//      query_address, query_port`  
`//      violation_domain`  
`//      query_type`  
`//      response_address, response_port`  
`//      redirect_msg`  
`//      violation_time_sec, violation_time_nsec`  
`//      violation type`  
`//      subscriber_id`  
`//      local_id`  
`//      rpz_channel /* rpz number *?`  
`//      violation_category`  
`//      process_generating`  
`//      site_name`  
`//      view`  
`//      txid`  
  
`// VIOLATION_RPZ:`  
`//      socket_family, socket_protocol`  
`//      query_address, query_port`  
`//      violation_domain`  
`//      query_type`  
`//      violation type`  
`//      response_address, response_port`  
`//      redirect_msg`  
`//      process_generating /* RPZ violation always from  BIND, really required ??? */`  
`//      query_time_sec, query_time_nsec`  
`//      subscriber_id`  
`//      local_id`  
`//      rpz_channel`  
`//      violation_category`  
`//      site_name`  
`//      view`  
`//      txid`  
  
`// VIOLATION_PCP/ABP:`  
`//      socket_family, socket_protocol`  
`//      query_address, query_port`  
`//      violation_domain`  
`//      query_type`  
`//      response_address, response_port`  
`//      redirect_msg`  
`//      process_generating /* RPZ violation always from  BIND, really required ??? */`  
`//      query_time_sec, query_time_nsec`  
`//      subscriber_id`  
`//      local_id`  
`//      violation_category`  
`//      site_name`  
`//      view`  
`//      txid`  
  
`// VIOLATION_WPCP:`  
`//      socket_family, socket_protocol`  
`//      query_address, query_port`  
`//      violation_domain`  
`//      query_type`  
`//      violation type`  
`//      response_address, response_port`  
`//      redirect_msg`  
`//      process_generating /* RPZ violation always from  BIND, really required ??? */`  
`//      query_time_sec, query_time_nsec`  
`//      subscriber_id`  
`//      local_id`  
`//      violation_category`  
`//      site_name`  
`//      view`  
`//      txid`  
  
`// VIOLATION_BLOCKLIST:`  
`//      socket_family, socket_protocol`  
`//      query_address, query_port`  
`//      violation_domain`  
`//      query_type`  
`//      violation type`  
`//      response_address, response_port`  
`//      redirect_msg`  
`//      process_generating /* RPZ violation always from  BIND, really required ??? */`  
`//      query_time_sec, query_time_nsec`  
`//      subscriber_id`  
`//      local_id`  
`//      violation_category`  
`//      site_name`  
`//      view`  
`//      txid`  
  
`// VIOLATION_UCP:`  
`//      socket_family, socket_protocol`  
`//      query_address, query_port`  
`//      violation_domain`  
`//      query_type`  
`//      violation type`  
`//      response_address, response_port`  
`//      process_generating /* RPZ violation always from  BIND, really required ??? */`  
`//      query_time_sec, query_time_nsec`  
`//      subscriber_id`  
`//      local_id`  
`//      site_name`  
`//      view`  
`//      txid`
