import { useCallback, useEffect, useRef, useState } from "react";

//import icons
import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp
} from "react-icons/io5";

import { FaRandom } from "react-icons/fa";
import { TbArrowsRight } from "react-icons/tb";

import {
    IoMdVolumeHigh,
    IoMdVolumeLow,
    IoMdVolumeOff
} from "react-icons/io";



const Controls = ({ togglePlayPause, isPlaying, audioRef, duration, setTimeProgress, progressBarRef, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext, setRandom, random }) => {

    const [volume, setVolume] = useState(60);
    const [muteVolume, setMuteVolume] = useState(false);
    const playAnimationRef = useRef();

    const handlePrevious = () => {
        if (trackIndex === 0) {
            setTrackIndex(tracks.length - 1); //last track
            setCurrentTrack(tracks[tracks.length - 1]);
        } else {
            setTrackIndex((prev) => prev - 1);
            setCurrentTrack(tracks[trackIndex - 1]);
        }
    };

    const skipBackward = () => {
        audioRef.current.currentTime -= 15;
    };

    const skipForward = () => {
        audioRef.current.currentTime += 15;
    };

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        playAnimationRef.current = requestAnimationFrame(repeat);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
        )
    }, [audioRef, setTimeProgress, duration, progressBarRef]);

    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;
            audioRef.current.muted = muteVolume;
        }
    }, [audioRef, volume, muteVolume]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);



    return (
        <div className="controls-wrapper">
            <div className="controls">
                <button onClick={handlePrevious}>
                    <IoPlaySkipBackSharp />
                </button>

                <button onClick={skipBackward}>
                    <IoPlayBackSharp />
                </button>

                <button
                    onClick={togglePlayPause}
                >
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>

                <button onClick={skipForward}>
                    <IoPlayForwardSharp />
                </button>

                <button onClick={handleNext}>
                    <IoPlaySkipForwardSharp />
                </button>
                <button onClick={() => setRandom((prev) => !prev)}>
                    {random ? <FaRandom></FaRandom> :
                        <TbArrowsRight></TbArrowsRight>}
                </button>
            </div>
            <div className="volume">
                <button onClick={() => setMuteVolume((prev) => !prev)}>
                    {muteVolume || volume < 5 ?
                        (<IoMdVolumeOff />) :
                        volume < 40 ?
                            (<IoMdVolumeLow />) :
                            (<IoMdVolumeHigh />)
                    }
                </button>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    style={{
                        background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
                    }}
                />
            </div>
        </div>
    )
}

export default Controls;