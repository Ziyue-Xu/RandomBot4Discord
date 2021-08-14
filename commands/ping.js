module.exports = {
    name: 'ping',
    description: "Ping command",
    execute (message, args, Discord){
        message.channel.send('pong!');
    }
};