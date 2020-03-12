
# react-peeps

React implementation of the hand drawn illustration library called [Open Peeps](https://www.openpeeps.com/)

<p align="center"><img src="example.png" alt="peeps example" width="200"/></p>

## Installation

```
npm install react-peeps
```
</br>

[![Edit react-peeps-playground](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-peeps-playground-mbtlj?fontsize=14&hidenavigation=1&theme=dark)

## Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Peep, {
	Accessories,
	BustPose,
	Face,
	FacialHair,
	Hair,
	CirclePeep
} from 'react-peeps'

const styles = {
  peepStyle: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  circleStyle: {
    backgroundColor: '#F3D34A',
    width: 270,
    height: 270,
    alignSelf: 'center',
    borderRadius: 135,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid'
  },
  showcaseWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: '-webkit-fill-available'
  }
}

const Showcase: React.FC = () => {
  return (
    <div style={styles.showcaseWrapper}>
      <Peep
        style={styles.peepStyle}
        accessory={Accessories.GlassRoundThick}
        body={BustPose.PointingUp}
        face={Face.Cute}
        hair={Hair.Long}
      />

      <CirclePeep
        style={styles.peepStyle}
        accessory={Accessories.GlassRoundThick}
        body={BustPose.PointingUp}
        face={Face.Cute}
        hair={Hair.Long}
        circleStyle={styles.circleStyle}
        viewBox={{x: '0', y: '0', width: '1050', height: '1200'}}
      />
    </div>
  )
}

ReactDOM.render(<Showcase />, document.getElementById('main'))

```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Thanks :raised_hands:


## License
[MIT]([https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/))