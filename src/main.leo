// The 'aleo_voice' program.
program aleo_voice6.aleo {

    //getting the total number of messages sent from an address
    struct TotalMessage{
        messenger: address,
        total_messages: u64,
    }

    //setting voice to mapping for every voice input
    mapping voice_input: field => TotalMessage;
    
    //Struct for Voice V1 = sender
    record Voice{
        owner: address,
        sent_from: address,
        msg: u128,
        hash_msg: u128,
        date: u128,
    }

    // CoBind reveal 2 users hash field
    record CoBind {
        hash_owner: field,
        owner: address,
        receiver: address,
        bind_hash: field,
    }


/*
    //setup function to check the value of voice over max required.
    inline calc_my_voice(test: u128) -> u128 {
        let max_voice : u128 = 123456789u128;
        let encrypt_max_voice: u128 = BHP256:: hash_to_u128(max_voice);

        //Ask the Aleo Team if its possible to insert the need for length of integer required 
        //to use in conditional statement to check the limit length of a particular length...
        if (max_voice > encrypt_max_voice) {
            return 0u128;
        }else {
            return test;
        }
    } */


    // user A sends a voice note to user B on the record, only both of them is visible to the record
    async transition send_voice(owner: address, receiver: address, co_bind: field, msg: u128, date: u128) -> (Voice, Future){
        
        //hash the msg u64 messages
        let hash: u128 = BHP256:: hash_to_u128(msg);

        //checking sender is not null
        assert_eq(self.caller, owner);

        //checks that receiver is not self.caller => avoid sending a message to yourself...
        assert_neq(self.caller, receiver);

        //check cobind hash of owner/receiver
        let hash_owner: field = Keccak512::hash_to_field(owner);
        //hash the opponent
        let hash_opponent: field = Keccak512::hash_to_field(receiver);
        //add both owner_hash and opponent_hash
        let add_hash: field = hash_owner + hash_opponent;
        //checking... otherwise fails
        assert_eq(co_bind, add_hash);

        //hash the message u64 from the owner
        let send_from : Voice = Voice {
            owner: receiver,
            sent_from: owner,
            msg: msg,
            hash_msg: hash,
            date: date,
        }; 


        return (send_from, finalize_send_voice(owner, hash));
    }
    async function finalize_send_voice(owner: address, hash: u128) {
        //check cobind hash of owner/receiver
        let hash_owner: field = Keccak512::hash_to_field(owner);

        let tot_message: TotalMessage = Mapping::get_or_use(voice_input, hash_owner, TotalMessage {
            messenger: owner,
            total_messages: 0u64,
        });

        //adding the count messages to a particular address
        voice_input.set(hash_owner, TotalMessage {
            messenger: owner,
            total_messages: tot_message.total_messages + 1u64,
        });
    }



    //==============================================================================================
    //======================= ADDING HASHED ADDRESS[OWNER + RECEIVER] ==============================
    //==============================================================================================
    transition combine_owner_receiver_hash(owner: address, receiver: address) -> (CoBind) {
        //check that owner is self.caller
        assert_eq(owner, self.caller);
        //hash the owner address such that its not reveal the identity of owner address to public
        let hash_owner: field = Keccak512::hash_to_field(owner);
        //hash the receiver
        let hash_receiver: field = Keccak512::hash_to_field(receiver);
        //add both owner_hash and receiver_hash
        let add_hash: field = hash_owner + hash_receiver;

        //Add versus Reveal
        let update_hash : CoBind = CoBind {
            hash_owner: hash_owner, // this will be usedful for checking total messages of owner address
            owner: owner, // raw data of owner
            receiver: receiver, //raw data of receiver
            bind_hash: add_hash, //bind hash of both owner and receiver
        };
        return (update_hash);
    }
}
