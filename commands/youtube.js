module.exports = {
    name: 'youtube',
    description: "Gives a link to youtube",
    execute (message, args, Discord){
        message.channel.send('https://www.youtube.com')
    }
}