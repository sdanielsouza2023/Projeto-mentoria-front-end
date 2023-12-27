import { useEffect, useRef } from "react"

export default function UploadImagem({
    // o que e um className especial?
    className = '',
    setImagem,
    imagemPreview,
    imagemPreviewClassName = '',
    aoSetarAreferencia
}) {

    const referenciaInput = useRef(null)

    useEffect(()=>{
        if(!aoSetarAreferencia){
            return 
        }

        aoSetarAreferencia(referenciaInput?.current)

    }, [referenciaInput?.current])
    

    const abrirSelectorArquivos = () => {
        referenciaInput?.current?.click()
    }

    const aoAlterarImagem = () =>{
        console.log('aoAlterarImagem')
        if(!referenciaInput?.current?.files?.length){
            return 
        }
        const arquivo = referenciaInput?.current?.files[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(arquivo)
        fileReader.onloadend = () => {
           setImagem({
                preview: fileReader.result,
                arquivo
           })
        }
    } 
    return ( 
        <div className={`uploadImagemContainer ${className}`} onClick={abrirSelectorArquivos} >
            
            {imagemPreview && (
                <div className="imagemPreviewContainer">
                    <img src={imagemPreview}
                         alt='Imagem do perfil'
                         className={imagemPreviewClassName}
                    />

                </div>
            )}

            <input 
            type='file' 
            className="oculto" 
            accept="image/*" 
            ref={referenciaInput}
            onChange={aoAlterarImagem}
            />
        </div>
    )
}