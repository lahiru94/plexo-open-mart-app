
import ModelCard from '../components/ModelCard'

export default function Home() {

  const featuredModels = new Array(6)
  featuredModels.fill()

  return (
    <>
<div class="container">
      <section  style={{marginTop:60}}>
        <div class="form-group">
          <div class="input-group mb-4">
            <input class="form-control" placeholder="Search for model" type="text"/>
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
          </div>
        </div>
      </section>

      <section style={{marginTop:50}}>
        <h4>
          Featured
        </h4>
        <div className="d-flex flex-wrap justify-content-center" style={{marginTop:30}}>
          {featuredModels.map((model, index)=>(<ModelCard index={index+1}/>))}
        </div>
      </section>
      </div>
    </>
  )
}
