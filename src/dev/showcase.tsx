import React from 'react';
import ReactDOM from 'react-dom';
import Peep, {
	Accessories,
	BustPose,
	StandingPose,
	SittingPose,
	Face,
	FacialHair,
	Hair,
	CirclePeep
} from '../../lib/peeps/index';

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
				accessory={Accessories.GlassRoundThick}
				body={StandingPose.EasingBW}
				face={Face.Cute}
				hair={Hair.ShortVolumed}
			/>

			<CirclePeep
				style={styles.peepStyle}
				accessory={Accessories.GlassRoundThick}
				body={StandingPose.EasingBW}
				face={Face.Cute}
				hair={Hair.ShortVolumed}
				circleStyle={styles.circleStyle}
				viewBox={{x: '0', y: '0', width: '1050', height: '1200'}}
			/>
		</div>
	);
};

ReactDOM.render(<Showcase />, document.getElementById('main'));
