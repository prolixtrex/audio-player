import { tracks } from "../data/track";
import { useRef, useState } from "react";
import '../styles/customize-progress-bar.css';

//import components
import DisplayTracks from "./DisplayTracks";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import Lists from "./Lists";

const AudioPlayer = () => {
    const [trackIndex, setTrackIndex] = useState(0)
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const audioRef = useRef();
    const progressBarRef = useRef();
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const randomNum = Math.floor(Math.random() * tracks.length);
    const [random, setRandom] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    }

    const playRandom = () => {
        setTrackIndex(randomNum);
        setCurrentTrack(tracks[randomNum]);
    }

    const handleNext = () => {
        if (random) {
            playRandom();
        } else {
            if (trackIndex >= tracks.length - 1) {
                setTrackIndex(0);
                setCurrentTrack(tracks[0]);
            } else {
                setTrackIndex((prev) => prev + 1);
                setCurrentTrack(tracks[trackIndex + 1]);
            }
        }
    };


    return (
        <div className="audio-player">
            <div className="inner">
                <DisplayTracks {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext }} />
                <Controls {...{ togglePlayPause, isPlaying, audioRef, duration, setTimeProgress, progressBarRef, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext, setRandom, random }} />
                <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
                <Lists {...{ tracks, togglePlayPause, isPlaying, setCurrentTrack, setTrackIndex, currentTrack, setIsPlaying }} />
            </div>
        </div>
    )
}

export default AudioPlayer;