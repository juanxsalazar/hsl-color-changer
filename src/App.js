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
            <section
              className="square"
              style={{
                backgroundColor: `hsl(${this.state.hue},${
                  this.state.saturation
                }%,${this.state.lightness}%)`
              }}
            />  <p>
            HSL: ({this.state.hue}, {this.state.saturation}%, {this.state.lightness}%)
          </p>
          </section>
             <section className="controls">
          <h3>Hue</h3>
          <input type="range" value={this.state.hue} onChange={this.changeHue} max="360" />
          <h3>Saturation</h3>
          <input type="range" value={this.state.saturation} onChange={this.changeSaturation} />
          <h3>Lightness</h3>
          <input type="range" value={this.state.lightness} onChange={this.changeLightness} />
          </section>
        </header> 
          <section className="middle">
          <button className="save-color" onClick={this.saveColor}>
            Remember Color
          </button>
        </section>
        <section className="saved-list">
          <h2 className="saved-list-header">Saved Colors: </h2>
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
                  <p className="color-values">
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
