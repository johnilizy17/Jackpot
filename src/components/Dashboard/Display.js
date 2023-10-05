import React from 'react';

export default function Display({name}) {

    function cardTransition(id){
        var element2 = document.getElementById(id);
        // element2.d
    }

    return (
        <div className="view-swiper">
            <div className="view game-over pictured view-gameover active"
                style={{ transform: "scale(0px, 0px)", translate: "none", rotate: "none", scale: "none", zIndex: 1, opacity: 5 }}>
                <h2 className="title">Minor</h2>
                <div className="info">
                    <div className="card"><img src="../image/money_bag.png" alt="" />
                        <div className="texts">
                            <h4>Jackpot Entry</h4>
                            <p>320 USDC</p>
                        </div>
                    </div>
                    <div className="card"><img src="../image/trophie.png" alt="" />
                        <div className="texts second">
                            <h4>Current Award</h4>
                            <p>334 USDC</p>
                        </div>
                    </div>
                    <div className="card"><img src="../image/mesh.png" alt="" />
                        <div className="texts">
                            <h4>Information</h4>
                            <p>Participants: 3121<br />Bets: 77</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view view-big"
                style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }}>
                <h2 className="title" style={{ color: "rgb(148, 144, 213)", backgroundColor: "rgb(31, 28, 74)" }}>BIG</h2>
                <div className="info" style={{ backgroundColor: "rgb(46, 42, 111)" }}>
                    <div className="card"><img src="../image/money_bag.png" alt=""
                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                        <div className="texts"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                            <h4>Jackpot Entry</h4>
                            <p>320 USDC</p>
                        </div>
                    </div>
                    <div className="card"><img src="../image/trophie.png" alt=""
                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                        <div className="texts second"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                            <h4>Current Award</h4>
                            <p>334 USDC</p>
                        </div>
                    </div>
                    <div className="card"><img src="../image/mesh.png" alt=""
                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                        <div className="texts"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                            <h4>Information</h4>
                            <p>Participants: 3121<br />Bets: 77</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view view-minor"
                style={{ transform: "translate(0px, 0px)", translate: "none", display:"none", rotate: "none", scale: "none", opacity: 1, zIndex: 5 }}>
                <h2 className="title">GAMEOVER</h2>
                <div className="info"><img src="../image/coin_stack.png" alt="treasure chest" className="chest"
                    style={{ transform: "translate3d(0px, 0px, 0px) scale(1.0152, 1.0152)", translate: "none", rotate: "none", scale: "none" }} />
                    <div className="splash-text">
                        <div
                            style={{ translate: "none", rotate: "none", scale: "none", transform: "rotate(50deg) skew(-30deg, 0deg) scale(3, 3)", opacity: 0.1, top: "50%" }}>
                            <p>You are out of</p>
                        </div>
                        <div className="prize-div"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "skew(-30deg, 0deg)" }}>
                            <p className="prize">LUCK!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view bomb-mode view-bomb"
                style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }}>
                <h2 className="title" style={{ color: "rgb(248, 200, 34)", backgroundColor: "rgb(148, 116, 5)" }}>BOMB 💥</h2><img
                    src="../image/alpha_bomb.png" alt="Alpha365 Bomb" className="alpha-bomb"
                    style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 0%)" }} />
                <div className="info" style={{ backgroundColor: "rgb(113, 93, 47)" }}>
                    <div className="card"><img src="../image/money_bag.png" alt=""
                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                        <div className="texts"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                            <h4>Jackpot Entry</h4>
                            <p>320 USDC</p>
                        </div>
                    </div>
                    <div className="card"><img src="../image/trophie.png" alt=""
                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                        <div className="texts second"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                            <h4>Current Award</h4>
                            <p>334 USDC</p>
                        </div>
                    </div>
                    <div className="card"><img src="../image/mesh.png" alt=""
                        style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }} />
                        <div className="texts"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0%, 0%)" }}>
                            <h4>Information</h4>
                            <p>Participants: 3121<br />Bets: 77</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view winner pictured view-win"
                style={{ transform: "scale(0.7, 0.7)", translate: "none", rotate: "none", scale: "none", opacity: 0, zIndex: 0 }}>
                <h2 className="title">CASHOUT</h2>
                <div className="info"><img src="../image/treasure.svg" alt="treasure chest" className="chest"
                    style={{ translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) scale(1.0998, 1.0998)" }} />
                    <div className="splash-text">
                        <div
                            style={{ translate: "none", rotate: "none", scale: "none", transform: "rotate(50deg) skew(-30deg, 0deg) scale(5, 5)", opacity: 0.1, top: "50%" }}>
                            <p>You Win</p>
                        </div>
                        <div className="prize-div"
                            style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "skew(-30deg, 0deg)" }}>
                            <p className="prize">2000 USDC</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}