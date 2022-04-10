const doyou = confirm("Do you want to play Rock paper scissors");
if(doyou){
    const playerChance = prompt("Pick yor chance?");
    console.log(playerChance.trim());

    // if(playerChance || playerChance === ""){
    //     const fg = playerChance.trim();
    //     console.log(fg);
    // // pick your chance
    // }else{
    //     console.log("next time");
    // }
    // do you want to play rpc
}else{
    console.log("Okay, as you wish it is your loss")
}