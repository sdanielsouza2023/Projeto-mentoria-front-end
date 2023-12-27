const path = require('path')

const nextConfig = {
    ReactStrictMode:  true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }

}

module.exports = nextConfig

// parei 16:15 aula Criando o projeto - Parte 1