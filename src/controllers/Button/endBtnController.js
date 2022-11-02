import { getMyDb } from "../../../db/db.js"
import { todoRow } from "../../components/rowComponent.js"


const endBtnController = async (interaction) => {
    const db = await getMyDb()
    const sugestaoID = interaction.message.interaction?.id || interaction.message.reference?.messageId || interaction.message.id
    const dados = await db.data.suggestions.find(element => element.id == sugestaoID)
    if (dados.authorId === interaction.user.id) {
        const embedData = interaction.message.embeds.map((embedData) => {
            return embedData
        })
        
        if (dados.likes.length > dados.unlikes.length){
            
            const channel = interaction.guild.channels.cache.get(process.env.APPROVED_CHANNEL)
            const label = "Aprovada"
            embedData[0].fields[1].value = label
            const todoRows = todoRow
            channel.send({ embeds: embedData, components: [todoRows]}).then((data) => {
                dados.id = data.id
                dados.status = label
                db.write()
                interaction.message.delete({ timeout: 2000})
            })              
        }else if (dados.unlikes.length > dados.likes.length) {
            const channel = interaction.guild.channels.cache.get(process.env.NOT_APPROVED_CHANNEL)
            const label ="Reprovada"
            embedData[0].fields[1].value = label
            channel.send({ embeds: embedData }).then((data) => {
                dados.id = data.id
                dados.status = label
                db.write()
                interaction.message.delete({ timeout: 2000})
            })
        }
    }
}
const endBtnController2 = async (interaction) => {
    const db = await getMyDb()
    const sugestaoID = interaction.message.interaction?.id || interaction.message.reference?.messageId || interaction.message.id
    const dados = await db.data.suggestions.find(element => element.id == sugestaoID)
    if (dados.authorId === interaction.user.id) {
        const embedData = interaction.message.embeds.map((embedData) => {
            return embedData
        })
            const channel = interaction.guild.channels.cache.get(process.env.COMPLETED_CHANNEL)
            const label = "Concluída"
            embedData[0].fields[1].value = label
            const todoRows = todoRow
            channel.send({ embeds: embedData, components: [todoRows]}).then((data) => {
                dados.id = data.id
                dados.status = label
                db.write()
                interaction.message.delete({ timeout: 2000})
            })
    }
}
export {endBtnController as default , endBtnController2} 