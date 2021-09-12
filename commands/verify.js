const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
//copy pasted from other commands, will fill in later
module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('google accounts connecting to discord'),
	async execute(interaction) {
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('Verify')
				.setLabel('Verify')
				.setStyle('LINK')
                .setURL('https://google.com')
		);
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Click the button below to connect your discord and hcpss account.')
			.setURL('https://www.youtube.com/watch?v=VVjNMH5OxGc')
			.setDescription('I guess theres only one way to find out!');

			await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });
	},
};