/*const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('debugging command'),
	async execute(interaction) {
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('bazinga')
				.setLabel('bazinga')
				.setStyle('PRIMARY'),
		);
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('I Wonder What This Video is?')
			.setURL('https://www.youtube.com/watch?v=VVjNMH5OxGc')
			.setDescription('I guess theres only one way to find out!');

			await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });
	},
};
command template. copy, paste, build from here.
*/