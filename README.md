# Aleo-Voice-Mail
This program exemplifies how blockchain technology, combined with cryptographic techniques, can facilitate secure and private communication between users.

## DESCRIPTION 
The Aleo voice text program is designed for sending voice messages (or any form of data represented as u128) between two users on the Aleo blockchain. The program ensures that only the sender and the receiver have access to the content of the message through encryption and hashing techniques.

## KEY COMPONENTS
- Structs:

1. Voice: This record is used to store the message. It contains three pieces of information:
   
  `owner`: The address of the message's recipient (User B).

  `msg`: The actual message (or voice note) sent by the sender (User A).
  
  `hash_msg`: A hashed version of the message for additional privacy.
  
2. CoBind: This record stores a combined hash of the sender's and receiver's addresses. It ensures that the message is bound specifically to these two users, making sure no other users can intercept or view the message.

- Mapping:
  `voice_input`: A mapping that stores the hash of the message for each receiver. This ensures that every user has a unique entry for the message they receive.

## PROCESS FLOW
1. Message Encryption and Sending (`send_voice` function):
   
- User A sends a message to User B. Before the message is sent:
  
(A) The message is hashed using the BHP256 hashing algorithm, creating a private version of the message (`hash_msg`).<br>
(B) The system checks that User A is the actual sender and that User B is not the same as User A (preventing self-messaging).<br>
(C) Both users’ addresses are hashed using the Keccak512 hashing algorithm and combined to generate a unique CoBind hash. This ensures the message is tied to both the sender and the recipient.<br>
(D) The system creates a `Voice record`, which stores the message, the recipient's address, and the hashed message.<br>
(E) The `finalize_send_voice` function then stores the hashed message in the `voice_input` mapping for User B.<br>

2. Hashing and Binding Users (combine_owner_receiver_hash function):

- This function creates a combined hash of both the sender’s and receiver’s addresses using the <b>Keccak512</b> algorithm. This combined hash, stored in the CoBind record, acts as a unique identifier that binds the two users together for this message.

## Privacy and Security Features:
- <b>Message Hashing:</b> Before sending the message, it is hashed using <b>BHP256</b>. This converts the original message into an unreadable format unless decrypted by the intended recipient.

- <b>Address Hashing:</b> The sender and receiver addresses are also hashed using <b>Keccak512</b> to ensure privacy. This helps in protecting the identity of both users, especially in public blockchain environments.

- <b>Co-Binding:</b> The use of the CoBind structure ensures that the message is only accessible by the sender and receiver. If the hashed combination of their addresses does not match, the system will reject the transaction, thus preventing unauthorized access.

## Use Case of Aleo Voice Mail:
The program can be used to implement a secure voice mail or messaging service on the Aleo blockchain. It is particularly useful in scenarios where privacy is paramount, such as:

- <b>Confidential Communication:<b> Users can securely send and receive private messages, knowing that only they have access to the message.
  
- <b>Blockchain-Based Messaging App:</b> It can serve as the foundation for decentralized, encrypted messaging applications.

- <b>Proof of Communication:</b> Since the message and user hashes are stored on the blockchain, this system can act as proof of communication between two users without revealing the actual content.

## LEO COMMAND 
- STEP 1: Go to the file folder
- STEP 2: type this command `leo run combine_owner_receiver_hash aleo1az8p9vlllyqwtj0c2g9svkd0e5v0p3zzdflwwrpa7kpe8xrfxgfqqpru7m aleo1f5enhpxfz3l3pqyh8k9d5xkqu0njv27xp5sv4nedarrk3nrgnuzqm3pp9h --network testnet` to run the transition function (`combine_owner_receiver_hash`) which has `2` inputs representing the `owner` and `receiver` address respectively

![Screenshot from 2024-09-07 04-36-56](https://github.com/user-attachments/assets/4cf40aff-5d9a-43ac-8347-6320fbbe23b6)
 
- STEP 3:type this command `leo run send_voice aleo1az8p9vlllyqwtj0c2g9svkd0e5v0p3zzdflwwrpa7kpe8xrfxgfqqpru7m aleo1f5enhpxfz3l3pqyh8k9d5xkqu0njv27xp5sv4nedarrk3nrgnuzqm3pp9h 2410337194949654760603884559220116331158426312068391926144246629395435935799field 123456789u128 123456u128 --network testnet` to run the transition function (`send_voice`) which has `5` inputs representing the `owner`, `receiver`, `co_bind hash`, `message`, `date` respectively. The `co_bind` can be gotten from the STEP 2

![Screenshot from 2024-09-07 04-39-04](https://github.com/user-attachments/assets/54732b88-60e5-4817-b0cd-10831daa428a)


## VIDEO 
https://youtu.be/v8d-T-QnR7A
