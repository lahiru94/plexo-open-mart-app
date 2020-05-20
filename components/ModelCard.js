
import Link from 'next/link'
import customCardStyles from './ModelCard.module.css'

export default function ModelCard(props) {

    const {modelData} = props

    const data = modelData || {}

    return (
        <Link href={`model/${data.id}`}>
            <div style={{ width: 310, marginRight: 25, marginLeft: 25, marginBottom: 50 }}>
                <div className={`card border-light ${customCardStyles.card}`}>
                    <img src={`/img/blog/image-${data.id}.jpg`} className="card-img-top rounded-top" alt="image" />
                    <div className="card-body">
                        <span className="h6 icon-tertiary small"><i className="fas fa-medal mr-2"></i>Rating: {data.stats.stars} </span>
                        <h5 className="card-title mt-3"> {data.name} </h5>
                        <p className="card-text"> {data.technical_summary.text_summary} </p>
                        {/* <a href="#" className="btn btn-primary btn-sm">Read More</a> */}
                    </div>
                </div>
            </div>
        </Link>
    )
}