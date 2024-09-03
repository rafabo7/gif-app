import "./Content.css"

export function Content ({ content }) {

    return (
        <section className="content-grid">
            {
                content ?
                content.map( ( item ) => {
                    return(
                    <article key={item.id} className="img-container">
                        <img className="gif" src={item.url}  alt="A gif" />
                    </article>
                    )}) : null
            }
        </section>
    )
}