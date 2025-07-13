export const MiCard = (props) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <img src={props.image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>
    )
}