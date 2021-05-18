import React from 'react'
import './BlockFour.css'
const BlockFour = () => {
    return (
    <div id="sp" className="servicesss">
        <h1>Speakers</h1>
            <hr style={{backgroundColor:"#ff6d00"}}  />
            <div className="spb">
                <div>
                    <img className="dummypic" alt="" src="https://picsum.photos/200/300?grayscale" />
                </div>
                <div>
                    <h5>Name surname</h5>
                    <p>speaker</p>
                </div>
            </div>
            <div className="spb">
            <div>
                <img className="dummypic" alt="" src="https://picsum.photos/200/300?grayscale" />
            </div>
            <div>
                <h5>Name surname</h5>
                <p>speaker</p>
            </div>
        </div>

        </div>
    )
}

export default BlockFour
