// props { author: "" , content: ""}
//Props eh um objeto que segura as propriedades da funcao

export function Post(props)  {
    return (
        <>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
        </>
    )
}

