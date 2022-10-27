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

export default rowComponent