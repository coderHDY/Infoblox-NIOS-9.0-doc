---
title: "Authenticating Admins Using SAML"
source: "/space/nios90/194446232"
pageId: "194446232"
---
NIOS uses SAML (Security Assertion Markup Language) 2.0 authentication support for Single-Sign-On in NIOS. SAML provides a standard vendor-independent grammar and protocol for transferring information about a user from one web server to another independent of the server DNS domains. SAML enables IT administrators to manage user access rights in a single place. By enabling SAML, user management is delegated to an external application, thus relieving IT administrators the complexity of maintaining user accounts in all the applications (also known as Service Providers) being used by the organization. Instead, IT administrators need to maintain one account in the Identity Provider (IdP) which can be used across Service Providers (SPs). IdP is the application server that maintains the user accounts of the entire organization. IT administrators can manage users access rights at one place. User can login to the IdP directly and once logged in, they can be traverse towards the required SP without being prompted for the user ID and password. SAML helps NIOS delegate Identity Management to a third-party SSO application (IdP) and thereby eases administrative efforts.

> **warning**
>
> ### Note
> 
> - You need super user permissions to perform SAML-related configurations.

This diagram illustrates the step-by-step process of SAML-based Single Sign-On (SSO) for NIOS, showing how authentication is delegated to an Identity Provider while NIOS acts as the Service Provider.

*SAML SSO Authentication Flow for NIOS*



*[drawio]*

*[image: media]*



The following steps describe the flow of the SAML authentication process in detail:

1. **User Access Request**: The process begins when a user attempts to access NIOS.
2. **NIOS Generates SAML Request**: NIOS creates a SAML authentication request and sends it to the Identity Provider.
3. **Redirection to Identity Provider**: The user is redirected to the Identity Provider, which is responsible for verifying the user’s identity.
4. **Identity Provider Authenticates User**: The Identity Provider authenticates the user using its own credentials and security mechanisms (e.g., password, MFA).
5. **Identity Provider Generates SAML Response**: After successful authentication, the Identity Provider generates a signed SAML response containing user identity assertions.
6. **NIOS Verifies SAML Response**: NIOS validates the SAML response to ensure authenticity and integrity.
7. **User Logged into NIOS**: Upon successful verification, the user gains access to NIOS without re-entering credentials, completing the SSO process.

# Authentication Sequence Between the Identity Provider and Service Provider in SAML Authentication

The table below illustrates the sequence of steps in the SAML authentication process between the Service Provider and Identity Provider. It highlights the direction of communication, the binding protocol used, and the specific action performed at each stage.

| **Step** | **Direction** | **Protocol Binding** | **Action** |
| --- | --- | --- | --- |
| 1 | SP → IdP | HTTP-Redirect | AuthnRequest |
| 2 | IdP → SP | HTTP-POST | SAMLResponse (Assertion) |

- **Step**: Indicates the order in which the actions occur during the authentication flow.
- **Direction**: Shows the communication path between entities, where SP → IdP means the Service Provider sends a request to the Identity Provider, and IdP → SP means the Identity Provider responds.
- **Protocol Binding**: Specifies the transport mechanism used for the message exchange, such as HTTP-Redirect or HTTP-POST.
- **Action**: Describes the specific operation performed in that step. For example, sending an authentication request or returning a SAML response.
