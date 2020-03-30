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
		<>
			<div style={styles.showcaseWrapper}>
				<Peep
					style={{ ...styles.peepStyle }}
					body='DocProtectiveClothe'
					face='CalmNM'
					hair='DocShield'
					viewBox={{ x: '-20', y: '500', width: '1050', height: '2400' }}
				/>

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

				<Peep
					style={{ ...styles.peepStyle, transform: 'scale(-1, 1)' }}
					body='Doc'
					face='CalmNM'
					hair='DocSurgery'
					viewBox={{ x: '-20', y: '500', width: '1050', height: '2400' }}
				/>
			</div>
			<div style={styles.showcaseWrapper}>
				<Peep
					style={{ ...styles.peepStyle }}
					body='WheelChair'
					face='Calm'
					hair='Long'
					viewBox={{ x: '-20', y: '500', width: '1050', height: '2400' }}
				/>

				<Peep
					style={{ ...styles.peepStyle }}
					body='RoboDanceBW'
					face='Cheeky'
					hair='Short'
					viewBox={{ x: '-20', y: '500', width: '1050', height: '2400' }}
				/>

				<Peep
					style={{ ...styles.peepStyle, transform: 'scale(-1, 1)' }}
					body='Bike'
					face='Awe'
					hair='BunFancy'
					viewBox={{ x: '-20', y: '500', width: '1050', height: '2400' }}
				/>

				<Peep
					style={{ ...styles.peepStyle, transform: 'scale(-1, 1)' }}
					body='MediumBW'
					face='Cute'
					hair='MediumBangs'
					viewBox={{ x: '-20', y: '500', width: '1050', height: '2400' }}
				/>
			</div>
		</>
	);
};

ReactDOM.render(<Showcase />, document.getElementById('main'));
