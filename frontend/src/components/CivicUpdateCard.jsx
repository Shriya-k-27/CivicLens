import Comments from "./Comments";

function CivicUpdateCard({ update }) {
    return (
        <article className="update-card">

            <h3>{update.title}</h3>

            <p className="update-description">
                {update.description}
            </p>

            <div className="update-footer">

                <span>
                    {update.source}
                </span>

                <span>
                    {new Date(update.publishedAt).toLocaleDateString()}
                </span>

            </div>

            <a
                href={update.source}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
            >
                Read article
            </a>

            <Comments updateId={update._id} />
        </article>
    );
}

export default CivicUpdateCard;