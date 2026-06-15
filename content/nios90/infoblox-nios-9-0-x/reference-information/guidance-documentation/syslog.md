---
title: "Syslog"
source: "/space/nios90/193692008"
pageId: "193692008"
---
NIOS appliances generate syslog messages that you can view through the Syslog viewer and download to a directory on your management station. For more information about syslog, see [Using a Syslog Server](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1686826413).

Events logged and examples of their corresponding syslog messages are as follows:

`\\`  
`*Establishment/Termination* *of* *an* *HTTPS* *Session*`  
`*Event:* Generation of RSA key failed.`  
`*Message:* "Oct 19 09:15:01 EPBYMINW0065T1 httpd\[2115\]: cryptographic key generation failed"`  
`\\`  
`*Cluster logout* `  
`*Event:* Cluster logout. `  
`*Message:* "2020-06-03T12:58:13+00:00 daemon infoblox.localdomain INFOBLOX-Grid[]: notice Cluster logout for node &lt;node_name&gt;, for node clean restart.`  
`\\ `  
`*Event:* Session is terminated.`  
`*Message:* "Oct 19 09:15:01 EPBYMINW0065T1 httpd\[2115\]: Session terminated (remote address: 10.6.11.249)"`  
`\\`  
`*Event:* Failed to establish a session.`  
`*Message:* "Oct 19 08:50:21 EPBYMINW0065T1 httpd\[2314\]: Failed to establish a session (remote address: 10.6.11.249), error 1115 (SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed)"`  
`\\`  
`*Event:* Session is established.`  
`*Message:* "Oct 19 08:54:42 EPBYMINW0065T1 httpd\[2314\]: Session has been established (remote address: 10.6.11.249)"`  
`\\`  
`*Establishment/Termination of a* *TLS* *Session*`  
`*Event:* Generation of RSA key failed.`  
`*Message:* "Oct 19 08:38:08 EPBYMINW0065T1 openvpn\[1415\]: cryptographic key generation failed"`  
`\\`  
`*Event:* Session has been established.`  
`*Message:* "Oct 19 08:38:08 EPBYMINW0065T1 openvpn\[1552\]: Session has been established (remote address: 10.6.11.249)"`  
`\\`  
`*Event:* HMAC failure:`  
`*Message:* "Oct 19 08:41:01 EPBYMINW0065T1 openvpn\[1567\]: cryptographic key generation failed: HMAC"`  
`\\`  
`*Event:* Signing failure (constructed message, it is not trivial to obtain it into the syslog).`  
`*Message:* "Oct 19 08:45:01 EPBYMINW0065T1 openvpn\[1582\]: cryptographic operation failed: signature"`  
`\\`  
`*Event:* Encryption failure.`  
`*Message:* "Oct 19 08:46:41 EPBYMINW0065T1 openvpn\[1612\]: cryptographic operation failed: encryption"`  
`\\`  
`*Event:* Decryption failure.`  
`*Message:* "Oct 19 08:46:41 EPBYMINW0065T1 openvpn\[1612\]: cryptographic operation failed: decryption"`  
`\\`  
`*Event:* Session was not established.`  
`*Message:* "Oct 19 08:50:21 EPBYMINW0065T1 openvpn\[1701\]: Failed to establish a session (remote address: 10.6.11.249), error 1115 (SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed)"`  
`\\`  
`*Event:* Packet was not verified.`  
`*Message:* "Oct 19 08:55:25 EPBYMINW0065T1 openvpn\[1815\]: Packet verification fails (remote address: 10.6.11.249)"`  
`*Random* *Number* *Generation* *Process*`  
`\[2011/10/19 10:13:46.282\] (26360 /infoblox/one/bin/ib_prngd_control) : ib_prngd daemon is not running while CC mode is enabled`  
`\[2011/10/19 10:13:46.324\] (26368 /infoblox/one/bin/ib_prngd) main.c:202 main(): ib_prngd daemon starting up...`  
`\[2011/10/19 10:13:46.700\] (26368 /infoblox/one/bin/ib_prngd) main.c:214 main(): Setting FIPS mode OK \[2011/10/19 10:13:48.400\] (26368 /infoblox/one/bin/ib_prngd) main.c:214 main(): Setting FIPS mode FAILED \[2011/10/19 10:13:46.700\] (26368 /infoblox/one/bin/ib_prngd) main.c:125 rename_rnd_dev(): Moving`  
`/dev/random to /dev/random_backup OK`  
`\[2011/10/19 10:13:46.700\] (26368 /infoblox/one/bin/ib_prngd) main.c:127 rename_rnd_dev(): Moving`  
`/dev/urandom to /dev/urandom_backup OK`  
`\[2011/10/19 10:13:46.700\] (26368 /infoblox/one/bin/ib_prngd) main.c:234 main(): Creating FIFO`  
`/dev/ib_random OK`  
`\[2011/10/19 10:13:46.700\] (26368 /infoblox/one/bin/ib_prngd) main.c:158 symlink_rnd_dev(): Symlinking`  
`/dev/random to /dev/ib_random OK`  
`\[2011/10/19 10:13:46.700\] (26368 /infoblox/one/bin/ib_prngd) main.c:160 symlink_rnd_dev(): Symlinking`  
`/dev/urandom to /dev/ib_random OK`  
`\[ TIME NOT KNOWN \] (26368) main.c:signal_handler\{\}: ib_prngd received SIGTERM signal....exiting. \[ TIME NOT KNOWN \] (26368) main.c:signal_handler\{\}: ib_prngd received SIGINT signal....exiting.`  
`\\`  
`\[ TIME NOT KNOWN \] (26368) main.c:signal_handler\{\}: ib_prngd received SIGQUIT signal....exiting.`  
`\[ TIME NOT KNOWN \] (26368) main.c:signal_handler\{\}: ib_prngd received an unknown signal....exiting. \[2011/10/19 10:13:49.205\] (26368 /infoblox/one/bin/ib_prngd) main.c:135 rename_rnd_dev(): Renaming`  
`/dev/random back OK`  
`\[2011/10/19 10:13:49.205\] (26368 /infoblox/one/bin/ib_prngd) main.c:141 rename_rnd_dev(): Renaming`  
`/dev/urandom back OK`  
`\[2011/10/19 10:13:49.205\] (26368 /infoblox/one/bin/ib_prngd) main.c:255 main(): Removing custom FIFO`  
`/dev/ib_random OK`  
`\[2011/10/19 10:13:49.205\] (26368 /infoblox/one/bin/ib_prngd) main.c:255 main(): Removing custom FIFO`  
`/dev/ib_random FAILED`  
`\[2011/10/19 10:13:49.205\] (26368 /infoblox/one/bin/ib_prngd) main.c:141 rename_rnd_dev(): Renaming`  
`/dev/urandom back FAILED`  
`\[2011/10/19 10:13:49.205\] (26368 /infoblox/one/bin/ib_prngd) main.c:135 rename_rnd_dev(): Renaming`  
`/dev/random back FAILED`  
`\[2011/10/19 10:25:22.931\] (26557 /infoblox/one/bin/ib_prngd) main.c:189 main(): Error!`  
`/infoblox/one/bin/ib_prngd is already running`  
`\[2011/10/19 10:26:58.107\] (26560 /infoblox/one/bin/ib_prngd) main.c:52 self_test(): OpenSSL FIPS mode functionality self test OK`  
`\[2011/10/19 10:26:58.107\] (26560 /infoblox/one/bin/ib_prngd) main.c:52 self_test(): OpenSSL FIPS mode functionality self test FAILED`  
`*Failures on Invoking* *Functionality*`  
`*Event:* Invalid size specified for algorithm HMAC-SHA256.`  
`*Message:{*}2011-10-19T17:57:12-04:00 user EPBYMINW2856 httpd\[\]: err TSIG key generation failure: Size 512 can not be used with algorithm HMAC-SHA256`  
`\\`  
`*Event:* Invalid algorithm specified in Common Criteria mode.`  
`*Message:* 2011-10-19T18:12:22-04:00 user EPBYMINW2856 httpd\[\]: err TSIG key (keylen = 256, algname = HMAC-MD5) generation error : Only HMAC-SHA256 available in CC mode.`  
`*Open VPN*`  
`*Event:* Generation of RSA key failed`  
`*Message:* Oct 19 08:38:08 EPBYMINW0065T1? openvpn\[1415\]: cryptographic key generation failed`  
`\\`  
`*Event:* Session has been established`  
`*Message:* Oct 19 08:38:08 EPBYMINW0065T1? openvpn\[1552\]: Session has been established (remote address: 10.6.11.249)`  
`\\`  
`*Event:* HMAC failure`  
`*Message:* Oct 19 08:41:01 EPBYMINW0065T1? openvpn\[1567\]: cryptographic key generation failed: HMAC`  
`\\`  
`*Event:* Signing failure`  
`*Message:* Oct 19 08:45:01 EPBYMINW0065T1? openvpn\[1582\]: cryptographic operation failed: signature`  
`\\`  
`*Event:* Encryption failure`  
`*Message:* Oct 19 08:46:41 EPBYMINW0065T1? openvpn\[1612\]: cryptographic operation failed: encryption *Event:* Decryption failure`  
`\\`  
`*Message:* Oct 19 08:46:41 EPBYMINW0065T1? openvpn\[1612\]: cryptographic operation failed: decryption`  
`\\`  
`*Event:* Session was not established`  
`*Message:* Oct 19 08:50:21 EPBYMINW0065T1? openvpn\[1701\]: Failed to establish a session (remote address: 10.6.11.249), error 1115 (SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed)`  
`\\`  
`*Event:* Packet was not verified`  
`*Message:* Oct 19 08:55:25 EPBYMINW0065T1? openvpn\[1815\]: Packet verification fails (remote address: 10.6.11.249)`  
`*HTTPS*`  
`*Event:* Generation of RSA key failed`  
`*Message:* Oct 19 09:15:01 EPBYMINW0065T1? httpd\[2115\]: cryptographic key generation failed`  
`\\`  
`*Event:* Session is terminated`  
`*Message:* Oct 19 09:15:01 EPBYMINW0065T1? httpd\[2115\]: Session terminated (remote address: 10.6.11.249)`  
`\\`  
`*Event:* Failed to establish a session`  
`*Message:* Oct 19 08:50:21 EPBYMINW0065T1? httpd\[2314\]: Failed to establish a session (remote address: 10.6.11.249), error 1115 (SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed)`  
`\\`  
`*Event:* Session is established`  
`*Message:* Oct 19 08:54:42 EPBYMINW0065T1? httpd\[2314\]: Session has been established (remote address: 10.6.11.249)`  
`\\`  
`*Event:* HMAC failure`  
`*Message:* Oct 19 08:55:56 EPBYMINW0065T1? httpd\[2356\]: cryptographic key generation failed: HMAC`  
`\\`  
`*DNS*`  
`*Message:* 2011-10-18T13:37:33+00:00 daemon (none) named\[4456\]: err client 10.32.2.108#47160: request has invalid signature: TSIG sha256cc: tsig verify failure (BADKEY) 2011-10-18T13:37:33+00:00 daemon (none) named\[4456\]: err client 10.32.2.108#47160: request has invalid signature: TSIG sha256cc: tsig verify failure (BADKEY)`  
`*DHCP*`  
`*Message:* 2011-10-18T11:18:38+00:00 daemon (none) dhcpd\[20440\]: err No tsec for use with key sha128cc *Message:* 2011-10-31T18:32:17+00:00 daemon (none) dhcpd\[20440\]: err Invalid operation in ddns code.`  
`*Upgrade*`  
`*Message:* 2011-10-26T12:33:30-04:00 user EPBYMINW2994t1 infoblox_crypt\[\]: err cryptographic operation failed: decryption`  
`*Message:* 2011-10-26T12:34:33-04:00 user EPBYMINW2994t1 infoblox_crypt\[\]: err cryptographic operation failed: encryption`  
`*Message:* 2011-10-26T12:35:53-04:00 user EPBYMINW2994t1 infoblox_crypt\[\]: err cryptographic operation failed: RSA verify signature`  
`*Message:* 2011-10-26T12:38:56-04:00 user EPBYMINW2994t1 infoblox_crypt\[\]: err cryptographic operation failed: RSA signing`  
`\\`  
`*Quotas*`  
`*Event:* When the administration backend is overloaded by too much combined GUI and API traffic, a message like this is logged to syslog (it is not associated with any user).`  
`*Message:* 2011-10-31T23:42:21+00:00 user (none) httpd\[\]: warning Too many administration connections *Event:* Disk space limit was changed and is below the disk usage.`  
`*Message:* 2011-11-02T00:24:54+00:00 user manojk-vm httpd\[\]: err Storage Limit has been lowered and usage now exceeeds the limit, Usage: 150 MB, Limit :100 MB`  
`*Event:* Disk space limit reached.`  
`*Message:* 2011-11-02T00:24:54+00:00 user manojk-vm httpd\[\]: err Exceed the TFTP Storage limit, User name:user1, Used Storage:2048 B, File name :a.zip, File size :272629904 B, Limit :102400 B`  
`*Open* *SSL*`  
`*Event:* FIPS self test failed.`  
`*Message:* FIPS routines:EVP_DigestInit_ex:fips selftest failed:digest.c:18: *Event:* Tried to use non-FIPS algorithm in FIPS mode.`  
`*Message:* 140576691959464:error:140A9129:SSL routines:SSL_CTX_new:only tls allowed in fips mode:ssl_lib.c:1527:`  
`*Message:* 139852903503528:error:0A07C06E:dsa routines:func(124):reason(110):dsa_key.c:131: *Event:* Used DES-CBC-SHA cipher suite in FIPS mode.`  
`*Message:* 140418599392936:error:1410D0B9:SSL routines:SSL_CTX_set_cipher_list:no cipher match:ssl_lib.c:1282:`  
`*Event:* Error setting digest MD5.`  
`*Message:* 140403566474920:error:060800A0:digital envelope routines:EVP_DigestInit_ex:unknown cipher:digest.c:248:`  
`*Replay* *Detection*`  
`*Event:* OpenVPN`  
`*Message:* Mon Oct 22 22:30:00 2007 us=939054 Authenticate/Decrypt packet error: bad packet ID (may be a replay): \[ #0 / time = (4196958004) Wed Nov 23 16:11:48 1966 \] silence this warning with --mute-replay-warnings, error_prefix, packet_id_net_print (&pin, true, &gc)`  
`*Event:* OpenVPN`  
`*Message:* Mon Oct 22 22:30:00 2007 ACK reliable_can_send is a replay : \[1\] 0 *Event:* HTTPS`  
`*Message:* Mon Oct 22 22:30:00 2007 Digest: Warning possible replay attack: nonce-count check failed: 12345678`  
`= 123456789`  
`\\`  
`*GSS-TSIG*`  
`*Message:* 2011-10-18T13:37:33+00:00 named\[4456\]: err signature invalid: message integrity`  
`*Message:* 2011-10-18T14:32:22+00:00 named\[4456\]: err authentication failed for aes128-cts-hmac-sha1-96: unknown principal`  
`*Message:* 2011-10-18T14:42:12+00:00 named\[4456\]: err signature failed to verify(1) *Message:* 2011-10-18T14:45:54+00:00 named\[4456\]: err signature is in the future`  
`*User* *Login*`  
`*Message:* 2011-10-19T08:27:23-04:00 user spradhan-vm serial_console\[\]: info User admin set_repsafe_mode: On *Message:* 2011-10-19T08:29:54-04:00 user spradhan-vm serial_console\[\]: info User admin set_repsafe_mode: Off`  
`*Message:* 2011-10-19T08:38:02-04:00 user spradhan-vm serial_console\[\]: info audit has been truncated to approximately 2011-10-19T08:29:00-04:00`  
`\\`  
`*Message:* 2011-10-19T08:41:47-04:00 user spradhan-vm serial_console\[\]: info syslog has been truncated to approximately 2011-10-19T08:41:00-04:00`  
`*File* *Rotation*`  
`*Event:* Audit log is rotated.`  
`*Message:* 2011-11-01T18:23:00-07:00 user manojk-vm perl\[18990\]:info audit has been truncated to approximately 2011-11-01T18:23:00-07:00`  
`*Event:* Syslog is rotated.`  
`*Message:* 2011-11-01T18:23:00-07:00 user manojk-vm perl\[18990\]:info syslog has been truncated to approximately 2011-11-01T18:23:00-07:00`  
`*Zeroization*`  
`*Event:* Logged in case of error`  
`*Message:* 2011-11-01T15:32:59-04:00 daemon manojk-vm ntpd\[18990\]:err Error erasing /storage/etc/ntp.keys using shred`  
`*First* *Login*`  
`*Message:* \[2011/10/19 08:44:45.866\] (32289 /usr/bin/httpd)`  
`/infoblox/common/lib/python/infoblox/one/admin_conn/userauth.py:415 _log(): \[user\] First_Login to=AdminConnector auth=LOCAL group=admin-group apparently_via=GUI`  
`*Password* *Expired*`  
`*Message:* \[2011/10/20 09:17:29.257\] (15750 /usr/bin/httpd)`  
`/infoblox/common/lib/python/infoblox/one/admin_conn/userauth.py:415 _log(): \[user\] Password_Expired to=AdminConnector ip=127.0.0.1 auth=LOCAL group=admin-group apparently_via=GUI`  
`*Password* *Reset*`  
`*Message:* \[2011/10/19 08:44:45.962\] (32289 /usr/bin/httpd)`  
`/infoblox/common/lib/python/infoblox/one/admin_conn/userauth.py:415 _log(): \[user\] Password_Reset to=AdminConnector auth=LOCAL group=admin-group apparently_via=GUI`  
`*Failed* *Password* *Reset*`  
`*Message:* \[2011/10/19 09:07:33.343\] (32526 /usr/bin/httpd)`  
`/infoblox/common/lib/python/infoblox/one/admin_conn/userauth.py:415 _log(): \[user\] Password_Reset_Error to=AdminConnector auth=LOCAL group=admin-group apparently_via=GUI`  
`\\`  
`\\`  
`\\`  
`\\`
