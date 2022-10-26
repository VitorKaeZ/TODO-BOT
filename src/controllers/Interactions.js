const interactionFunction = async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
        if (interaction.commandName === 'sugestao') {
            const area = interaction.options._hoistedOptions[0].role
            await interaction.reply({ content: `Sugestão para a área de ${area.name}`, });
            console.log(area)
        }
  }

  export default interactionFunction