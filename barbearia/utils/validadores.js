const validarNome = (nome) =>{
    //console.log(nome)
    return nome?.toString().length > 2
    // se nome existe e se tem valor
}
const validarEmail = (email) =>{
    const emailStr = email?.toString()
    return emailStr.length >= 5 && emailStr.includes('@') && emailStr.includes('.')
}

const validarSenha = (senha) =>{
    return senha?.toString().length > 3
}

const validarConfirmacaoSenha = (confirmacaoSenha) =>{
    return confirmacaoSenha?.toString().length > 3
}

const validarConfirmacaoSenhaEsenha = (senha, confirmarSenha) => {
    const validar = senha === confirmarSenha
    return validar
}

export {
    validarNome,
    validarEmail,
    validarSenha,
    validarConfirmacaoSenhaEsenha
}