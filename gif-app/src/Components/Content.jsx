import "../Styles/Content.css"

export function Content ({ content }) {

    return (
        <section className="content-grid">
            {
                content ?
                content.map( ( item ) => {
                    return(
                    
                        <div key={item.id}>
                            <img className="gif" src={item.url}  alt="A gif" />
                            </div>
                    
                    )}) : null
            }
        </section>
    )
}