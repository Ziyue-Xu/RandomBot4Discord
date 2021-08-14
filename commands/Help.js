module.exports = {
    name: 'Help',
    description: "A list of all the commands",
    execute (message, args, Discord){
        message.channel.send('Commands that members can use \n +help: This page \n +hello: Says hi \n +ping: Says pong back \n +youtube: Sends the link to youtube \n +myth: Sends a random mythology question \n +game: Sends a random video game question \n +geo or +geography: Sends a random geography question \n +movie: Sends a random movie question \n +comic: Sends a random comic question \n +math: Sends a random math question \n +music: Sends a random music question.')
    }
}