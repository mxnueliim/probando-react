import { useState } from "react"
import "./App.css"
import { XFollowCard } from './XFollowCard.jsx'

const users = [
    {
        userName: '31minutos_tv',
        name: '31 minutos',
        isFollowing: true
    },

    {
        userName: 'GabrielBoric',
        name: 'Gabriel Boric',
        isFollowing: false
    },

    {
        userName: 'MCRofficial',
        name: 'My Chemical Romance',
        isFollowing: true
    },
]

export function App () {
    const [state, setState] = useState(0)

    return (
        <section className='App'>
            {
            users.map(({userName, name, isFollowing}) => (
                <XFollowCard
                key= {userName}
                userName={userName}
                initialIsFollowing={isFollowing}
                >
                    {name}
                </XFollowCard>

            ))
            }
        </section>
    )
}