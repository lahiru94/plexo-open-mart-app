import { useRouter } from 'next/router'
const axios = require('axios');
import modelStyles from './Model.module.css'
import config from '../../config'

export default function Model(props) {

    const{modelData} = props

    const router = useRouter()
    const { id } = router.query

    return (
        <>
        <div className={modelStyles.modelHeaderBackground}/>
        <div className="container">
            <section>
                <div className="row justify-content-center text-white">
                    <div className="col-12 col-md-8 text-center">
                        <h1 className="display-2 mb-4" > {modelData.name} </h1>
                        <p className="lead"> {modelData.technical_summary.text_summary} </p>
                    </div>
                </div>
            </section>

            <section style={{marginTop:35}}>
            <div className="col-lg-12 mb-5">
                <div className="card bg-white border-light flex-lg-row align-items-center no-gutters p-4">
                    <div className="col-12 col-lg-6">
                        <img src={`/img/blog/image-${id}.jpg`} alt="themesberg office" className="card-img-top rounded" />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between col-auto py-4 p-lg-3 p-xl-5">
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <h2>Overview</h2>
                            <button className="btn btn-sm mb-2 mr-2 btn-outline-primary" type="button">
                                <i className="fas fa-download mr-2"></i>
                                Download
                            </button>
                        </div>
                        <table className="table" style={{ marginTop: 20 }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            Rating
                                        </div>
                                    </td>
                                    <td> {modelData.stats.stars} /10</td>

                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            Tags
                                        </div>
                                    </td>
                                    <td>
                                        { modelData.categories && modelData.categories.map((cat,i)=>{
                                            return(
                                                <span key={cat} style={{marginBottom:3}} className="badge badge-primary ml-2"> {cat} </span>
                                            )
                                        })}
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            Views
                                        </div>
                                    </td>
                                    <td> {modelData.stats.views} </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            Downloads
                                        </div>
                                    </td>
                                    <td> {modelData.stats.downloads} </td>
                                </tr>

                            </tbody>
                        </table>
                        <div className="d-flex align-items-center mt-3">
                            <img className="avatar avatar-sm rounded-circle" src="/img/team/profile-picture-1.jpg" alt="Richard avatar" />
                            <h3 className="h6 small ml-2 mb-0">Uploader Name</h3>
                            <span className="h6 text-muted small font-weight-normal mb-0 ml-auto">
                                <time dateTime="2019-04-25">21 February, 2019</time>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <section style={{marginBottom:150, paddingLeft:100, paddingRight:100}}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Nisl nisi scelerisque eu ultrices vitae auctor eu. Ultricies mi quis hendrerit dolor magna eget est. Augue mauris augue neque gravida in fermentum et. Aliquet bibendum enim facilisis gravida neque convallis a. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Tellus elementum sagittis vitae et leo duis. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Ac orci phasellus egestas tellus rutrum. Eget mi proin sed libero enim. Pharetra massa massa ultricies mi. Hendrerit dolor magna eget est lorem ipsum dolor. Sed ullamcorper morbi tincidunt ornare. Dui ut ornare lectus sit amet est placerat in. Tincidunt nunc pulvinar sapien et ligula. Quis imperdiet massa tincidunt nunc pulvinar sapien et.
                </p>
                <p>
                    Lobortis mattis aliquam faucibus purus. Nibh tortor id aliquet lectus proin. Ut diam quam nulla porttitor. Diam donec adipiscing tristique risus nec. Ac orci phasellus egestas tellus rutrum. Bibendum arcu vitae elementum curabitur. Amet venenatis urna cursus eget nunc scelerisque. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Erat pellentesque adipiscing commodo elit. Commodo odio aenean sed adipiscing. Urna nunc id cursus metus aliquam. Diam vulputate ut pharetra sit amet aliquam. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Facilisis sed odio morbi quis commodo odio. Imperdiet nulla malesuada pellentesque elit eget. Quam pellentesque nec nam aliquam sem et tortor consequat id.
                </p>
                <p>
                    In metus vulputate eu scelerisque felis imperdiet. Tellus in hac habitasse platea dictumst vestibulum. Ac turpis egestas sed tempus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Vitae sapien pellentesque habitant morbi tristique senectus et. Integer feugiat scelerisque varius morbi enim nunc. Amet consectetur adipiscing elit ut aliquam purus. Diam in arcu cursus euismod. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Dignissim sodales ut eu sem. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Dui faucibus in ornare quam viverra orci sagittis eu. Ultricies integer quis auctor elit sed. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Cras adipiscing enim eu turpis egestas pretium aenean. Sed elementum tempus egestas sed sed. Vestibulum lectus mauris ultrices eros. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Amet est placerat in egestas erat imperdiet sed euismod nisi. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
                </p>
            </section>
        </div>
        </>
    )
}

export async function getServerSideProps(context) {

    const response = await axios.get(config.baseUrl+'/model/'+context.params.id)
    return {
      props: {
            modelData: response.data.data
      }, // will be passed to the page component as props
    }
}