import "./App.css"
import { useState } from "react"


export function XFollowCard ({children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing ] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header"> 
                <img 
                    className="tw-followCard-avatar" 
                    alt="avatar 1" 
                    src={`https://unavatar.io/x/${userName}`} />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span
                    className="tw-followCard-infoUserName">@{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}