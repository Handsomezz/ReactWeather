var React=require('react');
var ReactDOM=require('react-dom');
var WeatherForm=require('WeatherForm');
var WeatherInfo=require('WeatherInfo');
var openWeatherApp=require('openWeatherApp');


var Weather=React.createClass({
  getInitialState:function(){
    return {
      isLoading: false
    }
  },
  handleSearch:function(city){
    var that=this;

    this.setState({isLoading:true});

    openWeatherApp.getTemp(city).then(function(temp){
      that.setState({
        city:city,
        temp:temp,
        isLoading:false
      });
    },function(errorMessage){
      that.setState({isLoading:false});
      alert(errorMessage);
    });
  },
  render: function(){
    var {isLoading, temp, city}=this.state;

    function renderMessage(){
      if(isLoading){
          return <h3>Fetching weather</h3>;
      }else if(temp && location){
          return <WeatherInfo city={city} temp={temp}/>;
      }
    }

    return(
      <div>
        Get Weather
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports=Weather;
