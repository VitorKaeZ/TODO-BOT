import { getMyDb } from "../../../db/db.js";
import embedComponent from "../../components/embedComponent.js";
import rowComponent from "../../components/rowComponent.js";

const inputInteractions = async (interaction) => {
        if (interaction.commandName === 'sugestao') {
            const db = await getMyDb()
            const areaName = interaction.options._hoistedOptions[0].role.name
            const assunto = interaction.options._hoistedOptions[1].value     
            const embed = embedComponent(interaction)
            const row = rowComponent
            await interaction.reply( { embeds: embed, components: [row], fetchReply: true} )
            .then((msg) => {
                msg.startThread({
                    name: `${areaName} - ${assunto}`,
                    autoArchiveDuration: 60,
                    type: 'GUILD_PUBLIC_THREAD',
                    reason: 'thread'
                });
            }).catch((err) => console.log(err))

                db.data.suggestions.push({
                    id:interaction.id,
                    likes:[],
                    unlikes:[]
                })
               db.write()      

        };
    }

    export default inputInteractions