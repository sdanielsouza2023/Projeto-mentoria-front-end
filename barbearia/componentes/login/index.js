import InputPublico from "../inputPublico"
import Image from "next/image"
import Botao from '../botao/index'
import imagemEnvelope from '../../public/imagens/email.svg'
import imagemChave from '../../public/imagens/password.svg'
import imagemLogo from '../../public/imagens/logo.svg'
import Link from "next/link"
import { useState } from "react"
import {validarEmail, validarSenha} from '../../utils/validadores'
export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return (
        <section className={`paginaLogin paginaPublica`}>
            {
                <div className="logoContainer">

                    <Image src={imagemLogo}
                        alt="Logotipo"
                        layout="fill"
                        className="logo"
                    />
                </div>
            }


            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico
                        image={imagemEnvelope}
                        texto="E-mail"
                        tipo="Email"
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                        mensagemValidacao="O endereço informado e inválido"
                        exibirMensagemValidacao={email && !validarEmail(email)}
                    />
                    <InputPublico
                        image={imagemChave}
                        texto="Senha"
                        tipo="password"
                        aoAlterarValor={e => setSenha(e.target.value)}
                        valor={senha}
                        mensagemValidacao="Precisa de pelo menos 3 caracteres"
                        exibirMensagemValidacao={senha && !validarSenha(senha)}
                    />
                    <Botao
                        texto="Login"
                        tipo="submit"
                        desabilitado={false}
                    />
                </form>
                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta?</p>
                    <Link href="/cadastro"><p>Cadastre-se agora!</p></Link>

                </div>
            </div>
        </section>
    )
}