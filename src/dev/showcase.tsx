import React from 'react';
import ReactDOM from 'react-dom';
import Peep from '../../lib/peeps/index';

const styles = {
	peepStyle: {
		width: 300,
		height: 300,
		justifyContent: 'center',
		alignSelf: 'center',
		overflow: 'initial'
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
				strokeColor='black'
				backgroundColor={{
					degree: 310,
					firstColor: '#FF0015',
					secondColor: 'gold'
				}}
			/>

			<Peep
				style={styles.peepStyle}
				circleStyle={styles.circleStyle}
				accessory='GlassRoundThick'
				body='Shirt'
				face='Cute'
				hair='ShortVolumed'
				facialHair='Dali'
				viewBox={{ x: '-20', y: '0', width: '1050', height: '1200' }}
				
			/>

			<Peep
				style={{ ...styles.peepStyle, transform: 'scale(-1, 1)' }}
				accessory='GlassRoundThick'
				body='Shirt'
				face='Cute'
				hair='ShortVolumed'
				facialHair='Dali'
				strokeColor={{
					degree: 300,
					firstColor: '#2E8A57',
					secondColor: '#81087F'
				}}
			/>
		</div>
	);
};

ReactDOM.render(<Showcase />, document.getElementById('main'));
