import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
    savedColors: []
  }

  changeHue = event => {
    this.setState({ hue: event.target.value })
  }

  changeSaturation = event => {
    this.setState({ saturation: event.target.value })
  }

  changeLightness = event => {
    this.setState({ lightness: event.target.value })
  }


  randomhsl = () => {
    this.setState ({
      hue: Math.round(Math.random() * 360),
      saturation: Math.round(Math.random() * 100),
      lightness: Math.round(Math.random() * 100)
    })
  }

  // componentDidMount(){
  //   this.randomhsl()
  // } compondidmount makes it where the color will be random when it first load. hsl starts at 0 when this is commented.

  saveColor = event => {
    const color = {
      myHue: this.state.hue,
      mySaturation: this.state.saturation,
      myLightness: this.state.lightness
    }
    this.setState({
      savedColors: this.state.savedColors.concat(color)
    })
  }

  render() {
    return (
      <>
        <header>
          <h1 style={{ color: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`}}>
          HSL Color Changer</h1>
          <section>
            <section className="square" style={{
              backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`}} />  
         <section className="controls">
          <h3>Hue</h3>
          <input type="range" value={this.state.hue} onChange={this.changeHue} max="360" />
          <h3>Saturation</h3>
          <input type="range" value={this.state.saturation} onChange={this.changeSaturation} />
          <h3>Lightness</h3>
          <input type="range" value={this.state.lightness} onChange={this.changeLightness} />
          </section>
          </section>
          <p>
            HSL: ({this.state.hue}, {this.state.saturation}%, {this.state.lightness}%)
          </p>       
        </header> 
          <section className="middle">
          <button className="save-color" onClick={this.saveColor}>
            Remember Color
          </button>
          <button onClick={this.randomhsl}>Random Color</button>
        </section>
        <section className="saved-list">
          <h2>Saved Colors:</h2>
          <ul>
            {this.state.savedColors.map(color => {
              return (
                <li class="saved-color">
                  <section
                    className="square"
                    style={{
                      backgroundColor: `hsl(${color.myHue},${
                        color.mySaturation
                      }%,${color.myLightness}%)`
                    }}
                  />
                  <p className="small-font">
                    HSL: ({color.myHue}, {color.mySaturation}%, {color.myLightness}%)
                  </p>
                </li>
              )
            })}
          </ul>
        </section>
      </>
    )
  }
}


export default App
