import {useState, useEffect} from 'react'
import ModelCard from '../components/ModelCard';
const axios = require('axios');
import config from '../config'

export default function Home(props) {

    const [featuredModels, setFeaturedModels] = useState([])

    const [searchQuery, setSearchQuery] = useState(null);
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showSeachResults, setShowSearchResults] = useState(false)

    useEffect(()=>{
        loadFeaturedModles()
    },[])

    const loadFeaturedModles = async () => {
        const response = await axios.get(config.baseUrl + '/model/featured')
        setFeaturedModels(response.data.data)
    }

    const searchModels = async () => {
        setShowSearchResults(true)
        setSearchLoading(true)
        try{
            const response = await axios.post(config.baseUrl + '/model/search',{
                query:searchQuery
            })
            setSearchResults(response.data.data)
            setSearchLoading(false)
        }catch(e){
            setSearchLoading(false)
        }

    }

    const detectSearchEnter = async (e) => {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            if(searchQuery){
                searchModels()
            }else{
                setShowSearchResults(false)
            }
        }
    }

    return (
        <div className="container">
            <section style={{ marginTop: 60, display:'flex', justifyContent:'center' }}>
                <div className="col-12 col-sm-12 col-md-10">
                <div className="form-group">
                    <div className="input-group mb-4">
                        <input 
                            className="form-control" 
                            placeholder="Search for models" 
                            type="text" 
                            onKeyPress={detectSearchEnter}
                            value={searchQuery}
                            onChange={(e)=>setSearchQuery(e.target.value)}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section hidden={showSeachResults} style={{ marginTop: 50 }}>
                <h5 style={{ width:'100%', display:'flex', justifyContent:'center' }} >
                    Featured Models
                </h5>
                <div className="d-flex flex-wrap justify-content-center" style={{ marginTop: 30 }}>
                    {featuredModels && featuredModels.map((model, index) => (<ModelCard modelData={model} key={index} index={index + 1} />))}
                </div>
            </section>

            <section hidden={!showSeachResults} style={{ marginTop: 50 }}>
                <h5 style={{ width:'100%', display:'flex', justifyContent:'center' }} >
                    {searchLoading? "Loading":"Search Results"}
                </h5>
                <div className="d-flex flex-wrap justify-content-center" style={{ marginTop: 30 }}>
                    {searchResults && searchResults.map((model, index) => (<ModelCard modelData={model} key={index} index={index + 1} />))}
                </div>
            </section>
        </div>
    )
}