import { useRef, useState } from 'react';
import { tracks } from '../data/tracks';

import Displaytrack from './Displaytrack';
import Controls from './Controls';
import Progressbar from './Progressbar';

const Audioplayer = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const audioRef = useRef();
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    console.log(audioRef);
    const progressBarRef = useRef();
    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
          setTrackIndex(0);
          setCurrentTrack(tracks[0]);
        } else {
          setTrackIndex((prev) => prev + 1);
          setCurrentTrack(tracks[trackIndex + 1]);
        }
      };

    return (
        <div className="audio-player">
            <div className="inner">
                <Displaytrack {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext, }} />
                <Controls {...{ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext, }} />
                <Progressbar {...{ progressBarRef, audioRef, timeProgress, duration }} />
            </div>
        </div>
    );
};
export default Audioplayer;