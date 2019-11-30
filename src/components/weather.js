import React from 'react';
class Weather extends React.Component {

    constructor(props){
      super(props)
      this.state = {}
    }

    componentDidMount(){
      fetch("http://api.openweathermap.org/data/2.5/forecast?q=London,us&appId=4816db2bc1d7d5621ccadd87644bd0a6")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              weatherData:result
            })
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }
    
    minTemperature(){
      var minVal = 9999;
      this.state.weatherData.list.map((item,index) =>{
        if(minVal > item.main.temp_min){
          minVal = item.main.temp_min
        }
      })
      return minVal
    }  
    maxTemperature(){
      var maxVal = 0;
      this.state.weatherData.list.map((item,index) =>{
        if(maxVal < item.main.temp_max){
          maxVal = item.main.temp_max
        }
      })
      return maxVal
    } 
     
    averageTemperature(){
      var temp = 0;
      this.state.weatherData.list.map((item,index) =>{
        temp += item.main.temp
      })
      return temp / this.state.weatherData.list.length
    }

    componentDidUpdate(){
      if(this.state.weatherData !== undefined){
        console.log("min: ",this.minTemperature());
        console.log("max: ",this.maxTemperature());
        console.log("average: ",this.averageTemperature());
      }
    }

    render() {
      return (<p>open js console!!</p>)
    }

  }

  export default Weather;
