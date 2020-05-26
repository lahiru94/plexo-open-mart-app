import { useRouter } from 'next/router'
const axios = require('axios');
import modelStyles from './Model.module.css'
import config from '../../config'
import ReactMarkdown from 'react-markdown'

export default function Model(props) {

    const{modelData} = props

    const router = useRouter()
    const { id } = router.query

    const dowloadModel = () => {
        window.open(modelData.model_file.path, 'Download');
    }

    return (
        <>
        <div className={modelStyles.modelHeaderBackground}/>
        <div className="container">
            <section>
                <div className="row justify-content-center text-white">
                    <div className="col-12 col-md-8 text-center">
                        <h1 className="display-2 mb-4" > {modelData.name} </h1>
                        <p className="lead"> {modelData.description} </p>
                    </div>
                </div>
            </section>

            <section style={{marginTop:35}}>
            <div className="col-lg-12 mb-5">
                <div className="card bg-white border-light flex-lg-row align-items-center no-gutters p-4">
                    <div className="col-12 col-lg-6">
                        <img src={modelData.header_image} alt="themesberg office" className="card-img-top rounded" />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between col-auto py-4 p-lg-3 p-xl-5">
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <h2>Overview</h2>
                            <button onClick={dowloadModel} className="btn btn-sm mb-2 mr-2 btn-outline-primary" type="button">
                                <i className="fas fa-download mr-2"></i>
                                Download
                            </button>
                        </div>
                        <table className="table" style={{ marginTop: 20 }}>
                            <tbody>
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
                                            Stars
                                        </div>
                                    </td>
                                    <td> {modelData.stats.stars} </td>

                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            Categories
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

            <section style={{marginBottom:150}}>
                <div className="row">
                    <div className="col-0 col-md-2"/>
                    <div className="col-12 col-md-8">
                        <ReactMarkdown source={modelData.technical_data.text_summary} />
                    </div>
                    <div className="col-0 col-md-2"/>
                </div>
            </section>
        </div>
        </>
    )
}

export async function getServerSideProps(context) {

    const response = await axios.get(config.baseUrl+'/mlmodels/'+context.params.id)
    return {
      props: {
            modelData: response.data.data
      }, // will be passed to the page component as props
    }
}