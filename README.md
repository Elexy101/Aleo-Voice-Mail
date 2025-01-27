# Aleo-Voice-Mail
This program exemplifies how blockchain technology, combined with cryptographic techniques, can facilitate secure and private communication between users.

DEPLOYED LINK: https://testnet.aleo.info/program/aleo_voice101.aleo
## DESCRIPTION 
The Aleo voice text program is designed for sending voice messages (or any form of data represented as u128) between two users on the Aleo blockchain. The program ensures that only the sender and the receiver have access to the content of the message through encryption and hashing techniques.

## KEY COMPONENTS
- Structs:

1. Voice: This record is used to store the message. It contains three pieces of information:
   
  `owner`: The address of the message's recipient (User B).

  `msg`: The actual message (or voice note) sent by the sender (User A).
  
  `hash_msg`: A hashed version of the message for additional privacy.

- Mapping:
  `voice_input`: A mapping that stores the hash of the message for each receiver. This ensures that every user has a unique entry for the message they receive.

## PROCESS FLOW
1. Message Encryption and Sending (`send_voice` function):
   
- User A sends a message to User B. Before the message is sent:
  
(A) The message is hashed using the BHP256 hashing algorithm, creating a private version of the message (`hash_msg`).<br>
(B) The system checks that User A is the actual sender and that User B is not the same as User A (preventing self-messaging).<br>
(C) The system creates a 2 `Voice record`, which stores the message, the recipient's address, and the hashed message and vice versa.<br>
(D) The `finalize_send_voice` function then stores the hashed message in the `voice_input` mapping for User B.<br>

## Privacy and Security Features:
- <b>Message Hashing:</b> Before sending the message, it is hashed using <b>BHP256</b>. This converts the original message into an unreadable format unless decrypted by the intended recipient.

## Use Case of Aleo Voice Mail:
The program can be used to implement a secure voice mail or messaging service on the Aleo blockchain. It is particularly useful in scenarios where privacy is paramount, such as:

- <b>Confidential Communication:<b> Users can securely send and receive private messages, knowing that only they have access to the message.
  
- <b>Blockchain-Based Messaging App:</b> It can serve as the foundation for decentralized, encrypted messaging applications.

- <b>Proof of Communication:</b> Since the message and user hashes are stored on the blockchain, this system can act as proof of communication between two users without revealing the actual content.

## UPDATE: INTEGRATION OF ALEO NAME SERVICE:
The project now supports aleo name service(.ans). Each user have to register aleo name service as its primary name to use the application without need of aleo address. we hope this will foster the communication between users.

As developing the application, we use the `leo add aleo_name_service_registry_v4.aleo` to add the aleo name service contract dependencies into our project to fetch data from aleo name service contract

## LEO COMMAND 
- STEP 1: Go to the file folder
- STEP 2: type this command `leo add aleo_name_service_registry_v4.aleo`
 
- STEP 2:type this command `leo run send_voice aleo1az8p9vlllyqwtj0c2g9svkd0e5v0p3zzdflwwrpa7kpe8xrfxgfqqpru7m aleo1f5enhpxfz3l3pqyh8k9d5xkqu0njv27xp5sv4nedarrk3nrgnuzqm3pp9h 2410337194949654760603884559220116331158426312068391926144246629395435935799field 123456789u128 123456u128 --network testnet` to run the transition function (`send_voice`) which has `4` inputs representing the `owner`, `receiver`, `message`, `date` respectively.

![Screenshot from 2024-09-07 04-39-04](https://github.com/user-attachments/assets/54732b88-60e5-4817-b0cd-10831daa428a)


## VIDEO 
https://youtu.be/v8d-T-QnR7A
