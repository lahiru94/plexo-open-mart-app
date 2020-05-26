
import Link from 'next/link'
import customCardStyles from './ModelCard.module.css'

export default function ModelCard(props) {

    const {modelData} = props

    const data = modelData || {}

    return (
        <Link href={`model/${data.key}`}>
            <div style={{ width: 310, marginRight: 25, marginLeft: 25, marginBottom: 50 }}>
                <div className={`card border-light ${customCardStyles.card}`}>
                    <img src={data.header_image} className="card-img-top rounded-top" alt="image" />
                    <div className="card-body">
                        <span className="h6 icon-tertiary small"><i className="fas fa-eye mr-2"></i>Views: {data.stats.views} </span>
                        <h5 className="card-title mt-3"> {data.name} </h5>
                        <p className="card-text"> {data.description} </p>
                        {/* <a href="#" className="btn btn-primary btn-sm">Read More</a> */}
                    </div>
                </div>
            </div>
        </Link>
    )
}