import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}) {
  // const hasBorder = props.hasBorder != false;
  /* Primeiramente foi passado uma propriedade chamada props
  essa propriedade contem todas as propriedades do componente
  avatar, depois disso, as mesma foi desestruturada, utilizando
  os {} transformando as propriedades em um objeto, assim, nos permitindo
  passar apenas as propriedades desejadas, e tambem criando a possibilidade
  de atribuir valores default para as mesmas, no caso, hasBorder, tem o 
  valor padrao, de true, o que junto com a condicao utilizada em className
  faz com que todos os componentes Avatar pussuam borda por padrao,
  */

    return (
        <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt="Foto de perfil"
      />
    );
}