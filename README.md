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
import React from 'react';
import ReactDOM from 'react-dom';
import Peep from 'react-peeps';

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
};

const Showcase: React.FC = () => {
  return (
    <div style={styles.showcaseWrapper}>
      <Peep
        style={styles.peepStyle}
        accessory='GlassRoundThick'
        body='Shirt'
        face='Cute'
        hair='ShortVolumed'
        facialHair='Dali'
        strokeColor='#e6e6e6'
        backgroundColor='red'
      />

      <Peep
        style={styles.peepStyle}
        circleStyle={styles.circleStyle}
        accessory='GlassRoundThick'
        body='Shirt'
        face='Cute'
        hair='ShortVolumed'
        facialHair='Dali'
        strokeColor='#e6e6e6'
        viewBox={{ x: '0', y: '0', width: '1050', height: '1200' }}
      />

      <Peep
        style={{...styles.peepStyle, transform: 'scale(-1, 1)'}}
        accessory='GlassRoundThick'
        body='Shirt'
        face='Cute'
        hair='ShortVolumed'
        facialHair='Dali'
        strokeColor={{degree: 300, firstColor: '#2E8A57', secondColor: '#81087F'}}
      />
    </div>
  );
};

ReactDOM.render(<Showcase />, document.getElementById('main'));
```

## Props

|       Attribute | Type                                                             | Description                                                   | Required |
|----------------:|------------------------------------------------------------------|---------------------------------------------------------------|----------|
| accessory       | string                                                           | Defines the picked accessory piece name                       | No       |
| body            | string                                                           | Defines the picked body type                                  | No       |
| face            | string                                                           | Defines the picked face expression name                       | No       |
| facialHair      | string                                                           | Defines the picked facial hair type                           | No       |
| hair            | string                                                           | Defines the picked hair type                                  | No       |
| style           | CSSProperties                                                    | Style of the SVG element                                      | No       |
| circleStyle     | CSSProperties                                                    | Wraps the SVG into a div element and passes style to that div | No       |
| strokeColor     | string                                                           | Defines the stroke color of lines                             | No       |
| backgroundColor | string                                                           | Defines the background color of the SVG                       | No       |
| viewBox         | {   x: string;   y: string;   width: string;   height: string; } | Defines the viewable dimensions of the SVG                    | No       |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Thanks :raised_hands:

## License

[MIT](<[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)>)
