import { getMyDb } from "../../../db/db.js";
import likeController from "./likeBtnController.js";
import unlikeController from "./unLikeBtn.js";
import endBtnController, { endBtnController2 } from "./endBtnController.js";
import initialBtnController from "./initialBtnController.js";
import pauseBtnController from "./pauseBtnController.js";


const btnInteractions = async (interaction) => {
    const oldEmbed = interaction.message.embeds[0]
    const db = await getMyDb()
    const sugestaoID = interaction.message.interaction?.id || interaction.message.reference?.messageId || interaction.message.id
    const dados = await db.data.suggestions.find(element => element.id == sugestaoID)
    
    if (interaction.customId === 'likeBtn') {
        likeController(interaction)
        return
    }else if (interaction.customId === 'unlikeBtn') {
        unlikeController(interaction)
        return
    }else if (interaction.customId === 'endBtn') {
        endBtnController(interaction)
        return          
    }else if (interaction.customId === 'endBtn2') {
        endBtnController2(interaction)
        return
    }else if (interaction.customId === 'initialBtn') {
        initialBtnController(interaction)
        return
    } else if (interaction.customId === 'pauseBtn') {
        pauseBtnController(interaction)
        return
    }        
};


export default btnInteractions