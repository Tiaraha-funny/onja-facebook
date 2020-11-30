import React from 'react'
import styled from 'styled-components'

const OptionsStyle = styled.div`
margin: auto;
width: 50%;
`

function UserName() {
    return (
        <OptionsStyle>
            <div>Options:</div>
            <form>
                <label>username:</label>
                <input type="text" placeholder="type your username here"/>
                <label>profile picture</label>
                <input type="url" placeholder="Paste a url here" />
                <button>Save</button>
            </form>
        </OptionsStyle>
    )
}

export default UserName
