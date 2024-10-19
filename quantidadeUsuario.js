import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuario (){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDaRedes = Object.keys (dados)
    const quantidadeUsuario = Object.values(dados)

    const data = [
        {
            x: nomeDaRedes,
            y: quantidadeUsuario,
            type: 'bar',
            marker: {
                color:getCSS('--primary-color')
            }
       
        }
    
    ]

    

        const layout = {
            plot_bgcolor: getCSS('--bg-color'),
            paper_bgcolor: ('--bg-color'),
            title: {
                text : 'Redes sociais com mais usuários no mundo',
                x: 0, 
                font: {
                    color: getCSS('--primary-color'),
                    size: 30,
                    font: getCSS('--font')
                }
            },
            xaxis: {
                tickfont: tickConfig,
                title: {
                    text: 'Nome das redes',
                    font:{
                        color: getCSS('--secondary-color')
                    }
                }
            },
            yaxis:{
                tickfont: tickConfig,
                title:{
                    text: 'Bilhões de usuários ativos',
                    font:{
                        color: getCSS('--secondary-color')
                    }
                }
            }
        }
    

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('grafico-container').appendChild(grafico)
    Plotly.newPlot(grafico,data,layout)
}

quantidadeUsuarioPorRede()