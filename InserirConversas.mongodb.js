const database = 'Chat';

const collection = 'Conversas'

use(database);

db[collection].insertMany(

    [
        {"Personagem":"Maria", "conversa":"Oi, tudo bem? A Black das Farmácias está ótima esse ano!", "DataHora":"28/11/2024 15:10"},
        {"Personagem":"José", "conversa":"Oi, tudo sim! Eu também vi, estão com ótimos descontos em vários produtos.", "DataHora":"28/11/2024 15:12"},
        {"Personagem":"Maria", "conversa":"Eu comprei uns medicamentos que estava precisando, aproveitei o preço!", "DataHora":"28/11/2024 15:15"},
        {"Personagem":"José", "conversa":"Eu também, aproveitei para pegar vitaminas e outros produtos de saúde.", "DataHora":"28/11/2024 15:18"},
        {"Personagem":"Maria", "conversa":"Boa ideia! Eu vi também alguns kits de cuidados que estavam com descontos ótimos.", "DataHora":"28/11/2024 15:20"},
        {"Personagem":"José", "conversa":"Sim, as farmácias estão realmente com promoções incríveis. Valeu a pena esperar a Black Friday.", "DataHora":"28/11/2024 15:22"},
        {"Personagem":"Maria", "conversa":"Com certeza! Fiquei surpresa com os preços. Já até comprei mais do que o necessário! hahaha", "DataHora":"28/11/2024 15:25"},
        {"Personagem":"José", "conversa":"Hahaha, eu também! Mas é bom aproveitar essas promoções. Agora é só esperar a entrega.", "DataHora":"28/11/2024 15:30"},
        {"Personagem":"Maria", "conversa":"Sim, espero que chegue rápido. Aproveitei para garantir o estoque de alguns produtos essenciais.", "DataHora":"28/11/2024 15:35"},
        {"Personagem":"José", "conversa":"Eu fiz o mesmo, com os preços tão baixos, não dá para perder!", "DataHora":"28/11/2024 15:40"}
    ]
)