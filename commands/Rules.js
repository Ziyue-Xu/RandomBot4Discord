module.exports = {
    name: 'Rules',
    description: "Rules for the server/!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setDescription('RULES')
        .addFields(
            {name: 'Rule 1', value: 'Keep it clean'},
            {name: 'Rule 2', value: 'Keep it respectful'},
            {name: 'Rule 3', value: 'No spamming allowed. \n Consequences of Spamming: \n Ranges from being muted to banned.'},
            {name: 'Ranking system', value: 'Rookie: level 15, \n Intermediate: level 25, \n Expert: level 50. \n Another way to earn Expert is to become a mod.'},
        )

        message.channel.send(newEmbed);
    }
}