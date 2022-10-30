import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

const rowComponent = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('likeBtn')
					.setLabel('0')
					.setEmoji('👍')                    
					.setStyle(ButtonStyle.Success),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('unlikeBtn')
					.setLabel('0')
					.setEmoji('👎')
					.setStyle(ButtonStyle.Danger),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('endBtn')
					.setLabel('Encerrar')
					.setStyle(ButtonStyle.Primary),
			)

export async function newRow(likes,unlikes) {
		const row =	new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('likeBtn')
				.setLabel(`${likes}`)
				.setEmoji('👍')                    
				.setStyle(ButtonStyle.Success),
		)
		.addComponents(
			new ButtonBuilder()
				.setCustomId('unlikeBtn')
				.setLabel(`${unlikes}`)
				.setEmoji('👎')
				.setStyle(ButtonStyle.Danger),
		)
		.addComponents(
			new ButtonBuilder()
				.setCustomId('endBtn')
				.setLabel('Encerrar')
				.setStyle(ButtonStyle.Primary),
		)
		return row
	}

export default rowComponent