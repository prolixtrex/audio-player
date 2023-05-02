import { createElement } from "react";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";

const Lists = ({ tracks, togglePlayPause, isPlaying, setCurrentTrack, setTrackIndex, currentTrack }) => {
    let songs = [];

    const handlePlayPause = (i) => {
        if (currentTrack.id === (i + 1)) {
            togglePlayPause();
        } else {
            setTrackIndex(i);
            setCurrentTrack(tracks[i]);
        }
    }

    for (let i = 0; i < tracks.length; i++) {
        let listThumbnails = createElement("img", { id: i, className: "list-thumbnail", src: tracks[i].thumbnail, alt: tracks[i].title });
        let listSongs = createElement("p", { id: i, className: "list-title" }, tracks[i].title);
        let playPause = createElement("button", { id: i, className: "list-button", onClick: () => handlePlayPause(i) }, isPlaying && currentTrack.id === i + 1 ? <IoPauseSharp /> : <IoPlaySharp />);

        songs.push(createElement("div", { id: i, className: `lists` }, [listThumbnails, listSongs, <div className="controls">{playPause}</div>]));
    }


    return (
        <div>
            {songs.map((song, id) => <div key={id}>{song}</div>)}
        </div>
    )
}

export default Lists;