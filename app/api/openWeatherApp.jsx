var axios=require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=4faab70242752fcc4ffbcf87606f1d13';


//////  4faab70242752fcc4ffbcf87606f1d13


/////  http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=4faab70242752fcc4ffbcf87606f1d13

module.exports={
  getTemp: function(city){
    var encodedLocation=encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;



    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp-273;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
};
