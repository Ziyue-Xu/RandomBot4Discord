const Discord = require('discord.js');
const prefix = '+';
const fetch = require('node-fetch');
const fs = require('fs');
const InventoryManager = require('./Inventory/InventoryManager')
const inventoryManager = new InventoryManager;

function checkAnswer (correctAnswer, answer, message) {
    if(answer.toLowerCase() === correctAnswer.toLowerCase()) {
        message.channel.send("That's Right!");
        inventoryManager.updateScore(message.guild.ownerID.toString(), true);
   }
    else {
        message.channel.send("That is incorrect.");
        inventoryManager.updateScore(message.guild.ownerID.toString(), false);
    }

}

function main_func(token_string) {
    const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
    client.commands = new Discord.Collection();

    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for(const file of commandFiles){
        const command = require(`./commands/${file}`);

        client.commands.set(command.name, command);
    }

    client.on('ready', () => {

        console.log ('Ready and online')
    });


    client.on('message', async message =>{
        /*
        const questions = [
            'Complete the Prophecy, "Find all blades forever sharp, the savior’s fate lies in his chain, two from over, two sons of rule, one of great power, one of mystery, and one successor of Zeus, defeat the evil cloud they must, else great evil may begin.”'
            
        ] //here's an array of the questions
        
        const answers = [
            'Learn the old ways the heroes must'
        ]
        
        const filter = (user) => user.id !== '1'
        
        const channelID = '861011579751759933' //put here the id of the channel
        
        const time = 300000 //the interval (in milliseconds)
        
        const timeToAnswer = 60000 //the time members have to guess
        
        const correctReply = 'Good Job!' //the message that gets sent when someone guesses the answer
        
        const Guess = 'Time is up! Someone Guessed!' //the message that gets sent once the time is up and someone guessed
        
        const timeUp = 'Time is up! Better luck next time' //the message that gets sent once the time is up and no one guessed
        setInterval(async () => { //this is the function for setting an interval for a function
            var randomIndex = Math.floor(Math.random() * ((questions.length - 1) - 0 + 1)) + 0; //this picks a random number in range which will also be the index of the question
        
            let channel = client.channels.cache.get(channelID) //finds the channel
        
            let msg = await channel.send(questions[randomIndex]) //sends a random questions
            const collector = msg.createMessageCollector(filter, {time: timeToAnswer})
            let guessed = false
            collector.on('collect', i => {
                if(i.content == answers[randomIndex]){
                    i.reply(correctReply)
                    guessed = true
                    
                }
            })
            collector.on('end', () => {
                if(guessed) return channel.send(Guess)
                channel.send(timeUp)
            })
        
        }, time)
        */

        if(!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        inventoryManager.addInv(message.guild.ownerID.toString());
        

        if(command == "myth"){
            try{
                console.log("STARTING.STARTING")
                const response = await fetch('https://opentdb.com/api.php?amount=5&category=20');
                console.log("YA!")
                //if (client.users.fetch(message.authorId) )
                
                const data = await response.json();
                console.log("WEEEEE!")
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;
        
                message.channel.send(question);
                const filter = m => m.author.id === message.author.id;
                const answer = await message.channel.awaitMessages(filter, {max: 1, time: 100000, errors: ['time', 'max']})
                console.log("Message gud");
                const ans = answer.first();
                checkAnswer(ans.content, correctAnswer, message);
            }
            catch(error)
            {
                
                console.log(error);
            }
        }

        if(command == "comic"){
            try{
                console.log("STARTING.STARTING")
                const response = await fetch('https://opentdb.com/api.php?amount=1&category=29');
                console.log("YA!")
                //if (client.users.fetch(message.authorId) )
                
                const data = await response.json();
                console.log("WEEEEE!")
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;
        
                message.channel.send(question);
                const filter = m => m.author.id === message.author.id;
                const answer = await message.channel.awaitMessages(filter, {max: 1, time: 100000, errors: ['time', 'max']})
                console.log("Message gud");
                const ans = answer.first();
                checkAnswer(ans.content, correctAnswer, message);
            }
            catch(error)
            {
                
                console.log(error);
            }
        }

        if(command == "math"){
            try{
                console.log("IT STARTED!")
                const response = await fetch ('https://opentdb.com/api.php?amount=1&category=19');
                console.log("Wo ho!")

                const data = await response.json();
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;
        
                message.channel.send(question);
                const filter = m => m.author.id === message.author.id;
                const answer = await message.channel.awaitMessages(filter, {max: 1, time: 100000, errors: ['time', 'max']})
                console.log("YA!");
                const ans = answer.first();
                checkAnswer(ans.content, correctAnswer, message);
            }
            catch(error)
            {
                console.log(error);
            }
        
        }
        
        if(command == "music"){
            try{
                console.log("IT STARTED!")
                const response = await fetch ('https://opentdb.com/api.php?amount=1&category=12');
                console.log("Wo ho!")

                const data = await response.json();
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;
        
                message.channel.send(question);
                const filter = m => m.author.id === message.author.id;
                const answer = await message.channel.awaitMessages(filter, {max: 1, time: 100000, errors: ['time', 'max']})
                console.log("YA!");
                const ans = answer.first();
                checkAnswer(ans.content, correctAnswer, message);
            }
            catch(error)
            {
                console.log(error);
            }
        
        }

        if(command == "gknowledge"){
            try{
                console.log("IT STARTED!")
                const response = await fetch ('https://opentdb.com/api.php?amount=1&category=9');
                console.log("Wo ho!")

                const data = await response.json();
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;
        
                message.channel.send(question);
                const filter = m => m.author.id === message.author.id;
                const answer = await message.channel.awaitMessages(filter, {max: 1, time: 100000, errors: ['time', 'max']})
                console.log("YA!");
                const ans = answer.first();
                checkAnswer(ans.content, correctAnswer, message);
            }
            catch(error)
            {
                console.log(error);
            }
        
        }

        if(command == "gadget"){
            try{
                console.log("IT STARTED!")
                const response = await fetch ('https://opentdb.com/api.php?amount=1&category=30');
                console.log("Wo ho!")

                const data = await response.json();
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;
        
                message.channel.send(question);
                const filter = m => m.author.id === message.author.id;
                const answer = await message.channel.awaitMessages(filter, {max: 1, time: 100000, errors: ['time', 'max']})
                console.log("YA!");
                const ans = answer.first();
                checkAnswer(ans.content, correctAnswer, message);
            }
            catch(error)
            {
                console.log(error);
            }
        
        }

        if(command == "movie"){
            try{
                console.log("IT STARTED!")
                const response = await fetch ('https://opentdb.com/api.php?amount=1&category=11');
                console.log("Wo ho!")

                const data = await response.json();
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;
        
                message.channel.send(question);
                const filter = m => m.author.id === message.author.id;
                const answer = await message.channel.awaitMessages(filter, {max: 1, time: 100000, errors: ['time', 'max']})
                console.log("YA!");
                const ans = answer.first();
                checkAnswer(ans.content, correctAnswer, message);
            }
            catch(error)
            {
                console.log(error);
            }
        
        }

        if(command == "game"){
            try{
                console.log("IT STARTED!")
                const response = await fetch ('https://opentdb.com/api.php?amount=1&category=15');
                console.log("Wo ho!")

                const data = await response.json();
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;
        
                message.channel.send(question);
                const filter = m => m.author.id === message.author.id;
                const answer = await message.channel.awaitMessages(filter, {max: 1, time: 100000, errors: ['time', 'max']})
                console.log("YA!");
                const ans = answer.first();
                checkAnswer(ans.content, correctAnswer, message);
            }
            catch(error)
            {
                console.log(error);
            }
        
        }

        if(command == "geography"){
            try{
                console.log("IT STARTED!")
                const response = await fetch ('https://opentdb.com/api.php?amount=1&category=22');
                console.log("Wo ho!")

                const data = await response.json();
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;
        
                message.channel.send(question);
                const filter = m => m.author.id === message.author.id;
                const answer = await message.channel.awaitMessages(filter, {max: 1, time: 100000, errors: ['time', 'max']})
                console.log("YA!");
                const ans = answer.first();
                checkAnswer(ans.content, correctAnswer, message);
            }
            catch(error)
            {
                console.log(error);
            }
        
        }
        
        if(command == "geo"){
            try{
                console.log("IT STARTED!")
                const response = await fetch ('https://opentdb.com/api.php?amount=1&category=22');
                console.log("Wo ho!")

                const data = await response.json();
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;
        
                message.channel.send(question);
                const filter = m => m.author.id === message.author.id;
                const answer = await message.channel.awaitMessages(filter, {max: 1, time: 100000, errors: ['time', 'max']})
                console.log("YA!");
                const ans = answer.first();
                checkAnswer(ans.content, correctAnswer, message);

            }
            catch(error)
            {
                console.log(error);
            }
        
        }

        client.user.setActivity(`over ${client.guilds.cache.size} servers`, {
        type: "WATCHING",
        });

        if(command == 'inventory'){
            let resultString = inventoryManager.getResult(message.guild.ownerID.toString());
            message.channel.send(resultString);
        }

        if(command == 'message'){
            client.commands.get('Message').execute(messages, args, Discord);
        }

        if(command == 'inv'){
            let resultString = inventoryManager.getResult(message.guild.ownerID.toString());
            message.channel.send(resultString);
        }

        if(command == 'help'){
            client.commands.get('Help').execute(message, args, Discord);
        }

        if(command === 'rule'){

            client.commands.get('Rules').execute(message, args, Discord);
        }
        if(command === 'hello'){

            client.commands.get('Hi').execute(message, args, Discord);
        }
        if(command === 'ping') {
            client.commands.get('ping').execute(message, args, Discord);
        }
        else if (command === 'youtube') {
            client.commands.get('youtube').execute(message, args);
        }
        else if (command === 'reactionrole') {
            client.commands.get('reactionrole').execute(message, args, Discord, client);
        }
    });


    //Last line of entire code
//    client.login('ODYxMDgxODE5NjQyNzI0MzYy.YOEm7w.RKSBoXTunmhi5BINOeTmQl6heuc');
    console.log(token_string);
    client.login(token_string);
}

if (process.argv.length >= 3)
{
    const tokenFileName = process.argv[2];
    const token = fs.readFileSync(tokenFileName);
    main_func(token.toString());
}
else
{
    console.log('pls provide token file');
}

/*
for(let i = 0; i < process.argv.length; ++i) {
    console.log(`index ${i} argument -> ${process.argv[i]}`);
}
*/
