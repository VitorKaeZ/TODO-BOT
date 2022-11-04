import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

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

const newLikeRow = async (data, data2) => {
			return new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('likeBtn')
					.setLabel(`${data}`)
					.setEmoji('👍')                    
					.setStyle(ButtonStyle.Success),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('unlikeBtn')
					.setLabel(`${data2}`)
					.setEmoji('👎')
					.setStyle(ButtonStyle.Danger),
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('endBtn')
					.setLabel('Encerrar')
					.setStyle(ButtonStyle.Primary),
			)
			
		}
const todoRow = new ActionRowBuilder()
				.addComponents(
					new ButtonBuilder()
						.setCustomId('initialBtn')
						.setLabel(`Iniciar`)
						.setStyle(ButtonStyle.Primary),
				)
				.addComponents(
					new ButtonBuilder()
						.setCustomId('pauseBtn')
						.setLabel(`Pausar`)
						.setStyle(ButtonStyle.Danger),
				)
				.addComponents(
					new ButtonBuilder()
						.setCustomId('endBtn2')
						.setLabel('Finalizar')
						.setStyle(ButtonStyle.Success),
				)

const returnRow = new ActionRowBuilder()
				.addComponents(
					new ButtonBuilder()
						.setCustomId('returnBtn')
						.setLabel(`Voltar`)
						// .setEmoji('')
						.setStyle(ButtonStyle.Danger),
				)
				.addComponents(
					new ButtonBuilder()
						.setCustomId('saveBtn')
						.setLabel(`Armazenar`)
						// .setEmoji('')
						.setStyle(ButtonStyle.Primary),
				)
	

export { rowComponent as default , todoRow, newLikeRow, returnRow }