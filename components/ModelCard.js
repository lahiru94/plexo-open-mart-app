
import Link from 'next/link'
import customCardStyles from './ModelCard.module.css'

export default function ModelCard(props) {
    return (
        <Link href={`model/${props.index}`}>
            <div style={{ width: 310, marginRight: 25, marginLeft: 25, marginBottom: 50 }}>
                <div className={`card border-light ${customCardStyles.card}`}>
                    <img src={`/img/blog/image-${props.index}.jpg`} className="card-img-top rounded-top" alt="image" />
                    <div className="card-body">
                        <span className="h6 icon-tertiary small"><i className="fas fa-medal mr-2"></i>Rating: 9/10</span>
                        <h5 className="card-title mt-3">Model title</h5>
                        <p className="card-text">Some quick desscription text to describe the model.</p>
                        {/* <a href="#" className="btn btn-primary btn-sm">Read More</a> */}
                    </div>
                </div>
            </div>
        </Link>
    )
}