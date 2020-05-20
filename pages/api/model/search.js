import data from './data.json'

export default (req, res) => {
    if (req.method === 'POST') {
        var results = []
        for(var i=0; i<6; i++){
            let name = data.data[i]['name'].toLowerCase()
            let searchText = req.body.query.toLowerCase()
            let isMatched = name.includes(searchText)
            if(isMatched){
                results.push(data.data[i])
            }
        }
        res.json({
            data:results
        })
    } else {
        // Handle any other HTTP method
    }
}