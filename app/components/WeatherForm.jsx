var React=require('react');
var ReactDOM=require('react-dom');


var WeatherForm=React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();

    var city=this.refs.city.value;

    if(city.length>0){
      this.refs.city.value="";
      this.props.onSearch(city); 
    }


  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="city"/>
          <button>Get info</button>
        </form>
      </div>
    );
  }
});

module.exports=WeatherForm;
