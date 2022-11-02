import clearController from "./clearController.js";
import suggestionController from "./suggestionController.js";


const inputInteractions = async (interaction) => {
        if (interaction.commandName === 'sugestao') {
                suggestionController(interaction)
                return
        }else if (interaction.commandName === 'clear') {
                clearController(interaction)
                return
        }
    }

export default inputInteractions