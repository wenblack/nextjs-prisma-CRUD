import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const idUserOne = 'clg5thfwm00061jeqel52lodf'
const idUserTwo = 'clg5thfwm00061jeqel52lodg'
const idBeerOne = 'clg5thfwm00061jeqel52lldf'
const idBeerTwo = 'clg5thfwm00061jeqel52lmdf'

async function main() {
    await prisma.beer.create({
        data: {
            id: idBeerOne,
            name: 'stella artois',
            birthDay: '1366',
            description: 'A receita da Stella Artois foi criada, originalmente, como um presente de Natal para os habitantes da pequena cidade de Leuven, na Bélgica. Cristalina, recebeu o nome de Stella, estrela em Latim. Seu aroma suave possui notas maltadas. Suave, uma cerveja com mais de 600 anos de tradição e receita única. ',
            ibu: 24,
            note: 8,
            style: 'Premium Lager',
            review: 'Cerveja muito equilibrada e levre, perfeita pra quem de uma cerveja saborosa e de qualidade. Recomendadíssima',
        },
    })
    await prisma.beer.create({
        data: {
            id: idBeerTwo,
            name: 'heineken',
            birthDay: '1873',
            description: 'Onde quer que você vá no mundo, é sempre incrível ver algo que você reconhece. Aquela garrafa verde, a estrela vermelha, o e sorridente ... é como receber as boas-vindas instantâneas de um velho amigo.',
            ibu: 19,
            note: 9,
            style: 'Premium Lager',
            review: 'Cerveja ótima e 100% equilibrada, perfeita pra quem gosta de amargor e qualidade. Vale a pena a compra, principalmente na promoção',
        },
    })
    await prisma.user.create({
        data: {
            id: idUserOne,
            name: "John Doe",
            emai: "example@example.com",
            avatarUrl: "https:github.com/wenblack.png",
            password: '123456'
        },
    })
    await prisma.user.create({
        data: {
            id: idUserTwo,
            name: "Zé Gotinha",
            emai: "zegota@vdlk.com",
            avatarUrl: "https:github.com/wenblack.png",
            password: '123456'
        },
    })

    await prisma.review.create({
        data: {
            content: "Amazing Beer",
            beerId: idBeerOne,
            userId: idUserOne,
        },
    })
    await prisma.review.create({
        data: {
            content: "Wonderfull Beer",
            beerId: idBeerTwo,
            userId: idUserTwo
        },
    })


}
main()