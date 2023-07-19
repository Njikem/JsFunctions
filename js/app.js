let username = [`bri`, `sassy`, `jony`, `amin`, `mussa`]

counter = 0;
while(counter < username.length){
    console.log(username[counter]);

    let lower_user_name = username[counter].toLowerCase();

    let includes_winner = username.includes('winner');
    if(includes_winner === true){
        console.log('we have a winner' + username[counter]);
}
    counter = counter + 1;
}


