import imagemLogo from "../../public/imagens/logo.svg"
import Image from "next/image"
import Link from "next/link"
import meUsuarioAtivo from '../../public/imagens/meUsuarioAtivo.svg'
import imagemChave from '../../public/imagens/password.svg'
import InputPublico from "../../componentes/inputPublico"
import Email from "../../public/imagens/email.svg"
import Botao from "../../componentes/botao"
import UploadImagem from '../../componentes/uploadImagens'
import { useState } from "react"
import imagensAvatarSemPerfil from '../../public/imagens/imagensAvatarSemPerfil.svg'
import {validarEmail, validarNome ,validarSenha, validarConfirmacaoSenhaEsenha } from '../../utils/validadores'

export default function cadastro() {
    const [imagem, setImagem] = useState(null)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmacaoSenha, setconfirmacaoSenha] = useState("")

    return (
        <section className={`paginaCadastro paginaPublica`}>

            <div className="logoContainer desktop">

                <Image
                    src={imagemLogo}
                    alt="Logotipo"
                    layout="fill"
                    className="logo"
                />
            </div>
            <div className="conteudoPaginaPublica">
                <form>
                    {
                         <UploadImagem 
                         imagemPreviewClassName="avatar avatarPreview"
                         imagemPreview={imagem?.preview || imagensAvatarSemPerfil.src}
                         setImagem={setImagem}
                    />
                    }

                    <InputPublico
                        image={meUsuarioAtivo}
                        texto="Nome Completo"
                        tipo="text"
                        aoAlterarValor={e => setNome(e.target.value)}
                        valor={nome}

                    />
                    <InputPublico
                        image={Email}
                        texto='E-mail'
                        tipo='email'
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                    />
                    <InputPublico
                        image={imagemChave}
                        texto='Senha'
                        tipo='password'
                        aoAlterarValor={e => setSenha(e.target.value)}
                        valor={senha}
                    />
                    <InputPublico
                        image={imagemChave}
                        texto='Confirmar Senha'
                        tipo='password'
                        aoAlterarValor={e => setconfirmacaoSenha(e.target.value)}
                        valor={confirmacaoSenha}
                    />
                    <Botao
                        texto="Cadastrar"
                        tipo="submit"
                        desabilitado={false}
                    />
                </form>
                <div className="rodapePaginaPublica">
                    <p>Já  possui uma conta?</p>
                    <Link href="/"><p>Faça login agora!</p></Link>
                </div>
            </div>
        </section>
    )
}