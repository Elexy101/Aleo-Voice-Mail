program aleo_voice6.aleo;

struct TotalMessage:
    messenger as address;
    total_messages as u64;

record Voice:
    owner as address.private;
    sent_from as address.private;
    msg as u128.private;
    hash_msg as u128.private;
    date as u128.private;

record CoBind:
    owner as address.private;
    hash_owner as field.private;
    receiver as address.private;
    bind_hash as field.private;


mapping voice_input:
	key as field.public;
	value as TotalMessage.public;


function send_voice:
    input r0 as address.private;
    input r1 as address.private;
    input r2 as field.private;
    input r3 as u128.private;
    input r4 as u128.private;
    hash.bhp256 r3 into r5 as u128;
    assert.eq self.caller r0;
    assert.neq self.caller r1;
    hash.keccak512 r0 into r6 as field;
    hash.keccak512 r1 into r7 as field;
    add r6 r7 into r8;
    assert.eq r2 r8;
    cast r1 r0 r3 r5 r4 into r9 as Voice.record;
    async send_voice r0 r5 into r10;
    output r9 as Voice.record;
    output r10 as aleo_voice6.aleo/send_voice.future;

finalize send_voice:
    input r0 as address.public;
    input r1 as u128.public;
    hash.keccak512 r0 into r2 as field;
    cast r0 0u64 into r3 as TotalMessage;
    get.or_use voice_input[r2] r3 into r4;
    add r4.total_messages 1u64 into r5;
    cast r0 r5 into r6 as TotalMessage;
    set r6 into voice_input[r2];



function combine_owner_receiver_hash:
    input r0 as address.private;
    input r1 as address.private;
    assert.eq r0 self.caller;
    hash.keccak512 r0 into r2 as field;
    hash.keccak512 r1 into r3 as field;
    add r2 r3 into r4;
    cast r0 r2 r1 r4 into r5 as CoBind.record;
    output r5 as CoBind.record;
