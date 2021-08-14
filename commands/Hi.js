module.exports = {
    name: 'Hello',
    description: "Says hi back to the author",
    execute (message, args, Discord){
        message.channel.send('Hi!')
    }
}