const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('google accounts connecting to discord'),
	async execute(interaction) {
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('bazinga')
				.setLabel('bazinga')
				.setStyle('PRIMARY')
                .setURL('https://google.com')
		);
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('I Wonder What This Video is?')
			.setURL('https://www.youtube.com/watch?v=VVjNMH5OxGc')
			.setDescription('I guess theres only one way to find out!');

			await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });
	},
};