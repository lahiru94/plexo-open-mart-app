import data from './data.json'

export default (req, res) => {

    const {
        query: { id },
    } = req

    res.statusCode = 200
    res.json({data:data.data[id-1]})
}