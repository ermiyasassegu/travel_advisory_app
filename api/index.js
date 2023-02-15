import axios from 'axios'

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : '59.92248868875644',
          tr_latitude: tr_lat ? tr_lat : '60.29783886899097',
          bl_longitude: bl_lng ? bl_lng : '24.78287583286821',
          tr_longitude: tr_lng ? tr_lng : '25.25448493653011',
          restaurant_tagcategory_standalone: '10591',
          restaurant_tagcategory: '10591',
          limit: '30',
          currency: 'USD',
          open_now: 'false',
          lunit: 'km',
          lang: 'en_US',
        },
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      }
    )
    //console.log('data restaurant', data)
    return data
  } catch (error) {
    return null
  }
}
