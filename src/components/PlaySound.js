import { Toast } from 'native-base';
import Sound from 'react-native-sound';

 const PlaySound = () => {
	var whoosh = new Sound('beep_scan_sound_effect.mp3', Sound.MAIN_BUNDLE, (error) => {
		if (error) {
			console.log('failed to load the sound', error);
			return;
		}
		// loaded successfully
		console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

		// Play the sound with an onEnd callback
		whoosh.play((success) => {
			if (success) {
				console.log('successfully finished playing');
			} else {
				console.log('playback failed due to audio decoding errors');
			}
		});
	});
}

export {
	PlaySound
}
