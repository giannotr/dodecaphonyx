// import isPitch from './is-pitch';
import { pitches } from '../types/Pitch';

function isTwelveToneSeries(list: number[]) {
	// if(list instanceof Error) {
	// 	return false;
	// }
	
	if(list.length !== 12) {
		return false;
	}

	// for(let number of list) {
	// 	if(!isPitch(number)) {
	// 		return false;
	// 	}
	// }

	let map = pitches.reduce((acc, i) => {
		acc[i] = (acc[i] || 0) + 1;
		return acc;
	}, {});

  for(let pitch of list) {
    if(!map[pitch] || map[pitch] === 0) {
      return false;
    } else {
      map[pitch]--;
    }
  }

  for(let m in map) {
    if(map[m] !== 0) {
      return false;
    }
  }

  return true;
}

export default isTwelveToneSeries;
