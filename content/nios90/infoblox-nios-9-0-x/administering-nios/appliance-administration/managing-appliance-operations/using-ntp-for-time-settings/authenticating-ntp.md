---
title: "Authenticating NTP"
source: "/space/nios90/1449001060"
pageId: "1449001060"
---
To prevent intruders from interfering with the time services on your network, you can authenticate communications between a NIOS appliance and a public NTP server, and between a NIOS appliance and external NTP clients. NTP communications within the Grid go through an encrypted VPN tunnel, so you do not have to enable authentication between members in a Grid.  
NTP uses symmetric key cryptography, where the server and the client use the same algorithm and key to calculate and verify a MAC (message authentication code). The MAC is a digital thumbprint of the message that the receiver uses to verify the authenticity of a message.  
As shown in the figure below, the NTP client administrator must first obtain the secret key information from the administrator of the NTP server. The server and the client must have the same key ID and data. Therefore, when you configure the NIOS appliance as an NTP client and want to use authentication, you must obtain the key information from the administrator of the external NTP server and enter the information on the NIOS appliance. When you configure a NIOS appliance as an NTP server, you must create a key and send the key information to clients in a secure manner. A key consists of the following:

- Key Number: A positive integer that identifies the key.
- Key Type: Specifies the key format and the algorithm used to calculate the MAC (message authentication code) of a message.
  
  - M: The key is a 1-31 character ASCII string using MD5 (Message Digest).
  - S: The key is a 64-bit hexadecimal number in DES (Data Encryption Standard) format. The high order 7 bits of each octet form the 56-bit key, and the low order bit of each octet is given a value so that the octet maintains odd parity. You must specify leading zeros so the key is exactly 16 hexadecimal digits long and maintains odd parity.
  - A: The key is a DES key written as a 1-8 character ASCII string.
  - N: The key is a 64-bit hexadecimal number in NTP format. It is the same as the S format, but the bits in each octet have been rotated one bit right so the parity bit is in the high order bit of the octet. You must specify leading zeros and odd parity must be maintained.
- Key String: The key data used to calculate the MAC. The format depends on the Key Type you select.

When the NTP client initiates a request for time services to the NTP server, it creates the MAC by using the agreed upon algorithm to compress the message and then encrypts the compressed message (which is also called a message digest) with the secret key. The client appends the MAC to the message it sends to the NTP server. When the NTP server receives the message from the client, it performs the same procedure on the message — it compresses the message it received, encrypts it with the secret key and generates the MAC. It then compares the MAC it created with the MAC it received. If they match, the server continues to process and respond to the message. If the MACs do not match, the receiver drops the message.

The following table lists the NTP client server behaviour in different scenarios:

| Scenario | Behavior |
| --- | --- |
| No authentication on both the NTP client and server | The NTP client will synchronize with the server |
| Authentication on the NTP server, no authentication on the NTP client | The NTP client will synchronize with the server |
| Authentication on both the NTP server and client | The NTP client will synchronize with the server |
| No authentication on the NTP server, authentication on the client | The NTP client will be out-of-synchronization with the server |

*NTP* *Client* *Administrator* *Obtaining* *Secret* *Key* *from* *NTP* *Server* *Administrator*

![image](/assets/1449001060/aae6fe34-1cf7-444e-9c2f-2e4a4cb127b2.png)
