import { Link } from 'react-router-dom';

export default function Item ({ item }) {
    return(
    <Link to={'/producto/${item.id}'}>
        <div key={item.id} className="row row-cols-1 row-cols-md-3 g-4 ">
                    <div className="col p-3 mb-5 mt-4">
                        <div className="card h-100">
                        <img src={item.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                 <h5 className="card-title">{item.name}</h5>
                                 <p className="card-text">{item.decription}</p>
                            </div>
                            <div className="card-footer">
                             <small className="text-muted">{item.price} </small>
                            </div>
                        </div>
                    </div>
                </div>
    </Link>
    )
    
}