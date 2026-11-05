function Cards(){
    return(
        <div style={{border:'1px solid #ccc', padding: '10px',
        margin:'10px', borderRadius:'5px'}}>

            <h3>{props.titulo}</h3>
            <p>{props.nomeAluno}</p>

        </div>
    )
}

export default Cards;