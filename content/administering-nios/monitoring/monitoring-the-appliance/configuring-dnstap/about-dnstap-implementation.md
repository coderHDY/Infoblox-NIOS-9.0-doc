---
title: "About dnstap Implementation"
source: "/space/nios90/1432715617"
pageId: "1432715617"
---
dnstap is implemented using the Google protocol buffer (protobuf) for packaging logged data, and Frame Streams as a lightweight streaming protocol to transmit the data to a receiver.

A bi-directional communication starts with a 3-way handshake sequence of Frame Streams control packets over a TCP (or other reliable byte-streaming). The following figure illustrates the connection between the transmitter and receiver pair.

*Packet Flow for Frame Streams 3-way handshake initialization and data frames over a TCP connection*

*[image: media]*

The transmitter initiates the communications to the receiver by first sending a READY control frame carrying the `protobuf:dnstap.Dnstap` string. The receiver responds with an ACCEPT control frame carrying the same `protobuf:dnstap.Dnstap` string. The handshake is completed when the transmitter sends a START control frame carrying the same `protobuf:dnstap.Dnstap` string.

*Frame Streams Control Frame Format*

*[image: media]*

Data packets are carried over the connection with only a 4-byte framing overhead as illustrated in the following figure.

*Frame Streams Data Frame Format*

*[image: media]*

To end the bi-directional communication that is shown in the following figure, the sequence starts with a STOP control frame from one of the communicating pairs, followed by a FINISH acknowledgment control frame from the other half of the pair.

*Packet flow for Frame Streams termination over a TCP connection*

*[image: media]*
