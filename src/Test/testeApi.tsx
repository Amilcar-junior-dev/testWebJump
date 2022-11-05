async function responseApi(api){

    try {
        const response = await api.get(`/api/v2/pokemon?limit=8&offset=`)
        return response.data.results
    } catch (error) {
        alert('Falha ao buscar dados.')
    }
}
module.exports = responseApi


