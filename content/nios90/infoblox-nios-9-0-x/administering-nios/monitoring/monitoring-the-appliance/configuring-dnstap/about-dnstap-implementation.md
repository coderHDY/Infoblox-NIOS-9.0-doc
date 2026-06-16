---
title: "About dnstap Implementation"
source: "/space/nios90/1432715617"
pageId: "1432715617"
---
dnstap is implemented using the Google protocol buffer (protobuf) for packaging logged data, and Frame Streams as a lightweight streaming protocol to transmit the data to a receiver.

A bi-directional communication starts with a 3-way handshake sequence of Frame Streams control packets over a TCP (or other reliable byte-streaming). The following figure illustrates the connection between the transmitter and receiver pair.

*Packet Flow for Frame Streams 3-way handshake initialization and data frames over a TCP connection*

![image](/assets/1432715617/365d2bf8-513d-43e4-a85b-d8aa05a0ae25.png)

The transmitter initiates the communications to the receiver by first sending a READY control frame carrying the `protobuf:dnstap.Dnstap` string. The receiver responds with an ACCEPT control frame carrying the same `protobuf:dnstap.Dnstap` string. The handshake is completed when the transmitter sends a START control frame carrying the same `protobuf:dnstap.Dnstap` string.

*Frame Streams Control Frame Format*

![image](/assets/1432715617/76e6bb6d-af04-47db-8cc1-cb90af8dfd2a.png)

Data packets are carried over the connection with only a 4-byte framing overhead as illustrated in the following figure.

*Frame Streams Data Frame Format*

![image](/assets/1432715617/e32c8648-d4a1-4217-81d2-73a19607174e.png)

To end the bi-directional communication that is shown in the following figure, the sequence starts with a STOP control frame from one of the communicating pairs, followed by a FINISH acknowledgment control frame from the other half of the pair.

*Packet flow for Frame Streams termination over a TCP connection*

![image](/assets/1432715617/df9c62ea-68d3-417c-8ec3-ae57f4314c8e.png)
