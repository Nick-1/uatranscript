import './VideoPlayer.css';
import {FC} from 'react';

interface VideoPlayerProps {
    src: string;
    type?: string;
}

const VideoPlayer: FC<VideoPlayerProps> = (props) => {
    const { src, type } = props;
    const videoType = type? type : 'video/mp4';

    return (
        <div className="video-container">
            <video className="responsive-video" controls>
                <source src={src} type={videoType} />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
