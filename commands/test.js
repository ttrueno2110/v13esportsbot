const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('test command for various functions'),
	async execute(interaction) {
		await interaction.reply('testing testing 1 2 1 2');
	},
};