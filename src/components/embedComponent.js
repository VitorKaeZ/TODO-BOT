import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

const embedComponent = (interaction) => {
    const areaId = interaction.options._hoistedOptions[0].role.id
    const areaName = interaction.options._hoistedOptions[0].role.name
    const assunto = interaction.options._hoistedOptions[1].value
    const conteudo = interaction.options._hoistedOptions[2].value
    const avatar = interaction.user.displayAvatarURL()
    const authorName =  interaction.member.nickname
    const userUrl =  interaction.user.id
    let liked = 0
    let unliked = 0
    return [
    new EmbedBuilder()
    .setDescription(
        `
        \`${conteudo}\`   
        `
    )
    .setColor('Blue')
    .setTitle(`__${assunto}__`.toUpperCase())
    .addFields(
        { name:'__Área__', value: `<@&${areaId}>`},
        
    )
    .setAuthor({ name: `${authorName}`, iconURL: avatar, url: `https://discord.com/users/${userUrl}` })
    .setThumbnail(avatar)
    .setTimestamp()
    .setFooter({ text: 'github.com/vitorkaez © ', iconURL: "https://avatars.githubusercontent.com/u/94807471?s=400&u=9912c713fa22f84cbb1e02afbf5417d15c5bc2e1&v=4"})
]}

export default embedComponent