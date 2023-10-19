import { useEffect, useContext } from 'react';
import { Context } from '../components/Player';

const audio = new Audio();

export default function useAudio(song) {
    const [playing, setPlaying] = useContext(Context);
    const togglePlayBack = () => {
        setPlaying(!playing);
    };
    useEffect(() => {
        audio.src = song;
    }, [song]);

    useEffect(() => {
        if (playing) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [playing]);
    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);
    return [togglePlayBack];
}
