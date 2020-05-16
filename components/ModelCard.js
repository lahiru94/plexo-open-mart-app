
import Link from 'next/link'
import customCardStyles from './ModelCard.module.css'

export default function ModelCard(props) {
    return (
        <Link href={`model/${props.index}`}>
            <div style={{ width: 310, marginRight: 25, marginLeft: 25, marginBottom: 50 }}>
                <div class={`card border-light ${customCardStyles.card}`}>
                    <img src={`/img/blog/image-${props.index}.jpg`} class="card-img-top rounded-top" alt="image" />
                    <div class="card-body">
                        <span class="h6 icon-tertiary small"><i class="fas fa-medal mr-2"></i>Rating: 9/10</span>
                        <h5 class="card-title mt-3">Model title</h5>
                        <p class="card-text">Some quick desscription text to describe the model.</p>
                        {/* <a href="#" class="btn btn-primary btn-sm">Read More</a> */}
                    </div>
                </div>
            </div>
        </Link>
    )
}