const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('repo')
		.setDescription('link to bot repository for self-hosting and cusomizing'),
	async execute(interaction) {
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomID('git')
				.setLabel('Github')
				.setStyle('LINK')
                .setURL('https://github.com/ttrueno2110/v13esportsbot')
		);
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Github Repository')
			.setDescription('I guess theres only one way to find out!');
		
			await interaction.reply({ content: 'here\'s the repo g', ephemeral: true, embeds: [embed], components: [row] });
	},
};