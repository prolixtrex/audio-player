import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";

const Lists = ({ tracks, togglePlayPause, isPlaying, setCurrentTrack, setTrackIndex, currentTrack, setIsPlaying }) => {
    const style = {
        border: "2px solid #f50"
    }

    const handlePlayPause = (id) => {
        if (currentTrack.id === id) {
            togglePlayPause();
        } else {
            setTrackIndex(id);
            setCurrentTrack(tracks[id - 1]);
            setIsPlaying(true)
        }
    }


    return (
        <div>
            {
                tracks.map((track, id) => (
                    <div key={id} className="lists" style={currentTrack.id === track.id ? style : {}}>
                        <img className="list-thumbnail" src={track.thumbnail} alt={track.author} />
                        <p className="list-title">{track.title}</p>
                        <button className="list-button" onClick={() => handlePlayPause(track.id)}>
                            {isPlaying && currentTrack.id === track.id ? <IoPauseSharp /> : <IoPlaySharp />}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Lists;