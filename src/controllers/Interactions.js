import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import btnInteractions from "./Button/btnController.js";
import inputInteractions from "./Input/inputController.js";

const interactionFunction = async (interaction) => {
    if (interaction.isChatInputCommand()){
            inputInteractions(interaction)

  }else if (interaction.isButton()) {
            btnInteractions(interaction)
}
}

  export default interactionFunction