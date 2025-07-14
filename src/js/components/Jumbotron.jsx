export const Jumbotron = () => {
    return (
        <div className="container">
            <div className="p-4 mb-3 rounded-3" style={{ backgroundColor: "#cccccc" }}>
                <div className="py-5">
                    <h1 className="display-5 fw-bold">Jumbotron personalizado</h1>
                    <p className="col-md-8 fs-4">Esto es un texto muy muy muy muy muy muy larguisimo</p>
                    <button className="btn btn-primary btn-lg" type="button">Botón de ejemplo</button>
                </div>
            </div>
        </div>
    )
}