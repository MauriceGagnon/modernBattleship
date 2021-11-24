import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import logo from "./images/LogoModernBattleship.png";
import "bootstrap/dist/css/bootstrap.css";

function Square({ value, click }) {
    return (
        <div className="board-square" onClick={click}>
            {value}
        </div>
    );
}

function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const nextSymbole = isXNext ? "X" : "O";

    function onClickSquare(position) {
        let maCopie = squares.slice();
        maCopie[position] = nextSymbole;
        setSquares(maCopie);
        setIsXNext(!isXNext);
    }

    function fabriqueSquare(position) {
        return <Square value={squares[position]} click={() => onClickSquare(position)} />;
    }

    return (
        <div className="container">
            <img className="logo" src={logo} alt="Logo Modern Battleship"></img>
            <div className="row">
                <div className="col-sm-3, mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Welcome Maurice</h4>
                            <p class="card-text">Your scrore : 10 vs 15</p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <p className="boardTitle">OPPENENT'S FLEET</p>
                        <div className="game">
                            <div className="game-board">
                                <div className="board-row">
                                    {fabriqueSquare(0)}
                                    {fabriqueSquare(1)}
                                    {fabriqueSquare(2)}
                                    {fabriqueSquare(3)}
                                    {fabriqueSquare(4)}
                                    {fabriqueSquare(5)}
                                    {fabriqueSquare(6)}
                                    {fabriqueSquare(7)}
                                    {fabriqueSquare(8)}
                                    {fabriqueSquare(9)}
                                </div>
                                <div className="board-row">
                                    {fabriqueSquare(10)}
                                    {fabriqueSquare(11)}
                                    {fabriqueSquare(12)}
                                    {fabriqueSquare(13)}
                                    {fabriqueSquare(14)}
                                    {fabriqueSquare(15)}
                                    {fabriqueSquare(16)}
                                    {fabriqueSquare(17)}
                                    {fabriqueSquare(18)}
                                    {fabriqueSquare(19)}
                                </div>
                                <div className="board-row">
                                    {fabriqueSquare(20)}
                                    {fabriqueSquare(21)}
                                    {fabriqueSquare(22)}
                                    {fabriqueSquare(23)}
                                    {fabriqueSquare(24)}
                                    {fabriqueSquare(25)}
                                    {fabriqueSquare(26)}
                                    {fabriqueSquare(27)}
                                    {fabriqueSquare(28)}
                                    {fabriqueSquare(29)}
                                </div>
                                <div className="board-row">
                                    {fabriqueSquare(30)}
                                    {fabriqueSquare(31)}
                                    {fabriqueSquare(32)}
                                    {fabriqueSquare(33)}
                                    {fabriqueSquare(34)}
                                    {fabriqueSquare(35)}
                                    {fabriqueSquare(36)}
                                    {fabriqueSquare(37)}
                                    {fabriqueSquare(38)}
                                    {fabriqueSquare(39)}
                                </div>
                                <div className="board-row">
                                    {fabriqueSquare(40)}
                                    {fabriqueSquare(41)}
                                    {fabriqueSquare(42)}
                                    {fabriqueSquare(43)}
                                    {fabriqueSquare(44)}
                                    {fabriqueSquare(45)}
                                    {fabriqueSquare(46)}
                                    {fabriqueSquare(47)}
                                    {fabriqueSquare(48)}
                                    {fabriqueSquare(49)}
                                </div>
                                <div className="board-row">
                                    {fabriqueSquare(50)}
                                    {fabriqueSquare(51)}
                                    {fabriqueSquare(52)}
                                    {fabriqueSquare(53)}
                                    {fabriqueSquare(54)}
                                    {fabriqueSquare(55)}
                                    {fabriqueSquare(56)}
                                    {fabriqueSquare(57)}
                                    {fabriqueSquare(58)}
                                    {fabriqueSquare(59)}
                                </div>
                                <div className="board-row">
                                    {fabriqueSquare(60)}
                                    {fabriqueSquare(61)}
                                    {fabriqueSquare(62)}
                                    {fabriqueSquare(63)}
                                    {fabriqueSquare(64)}
                                    {fabriqueSquare(65)}
                                    {fabriqueSquare(66)}
                                    {fabriqueSquare(67)}
                                    {fabriqueSquare(68)}
                                    {fabriqueSquare(69)}
                                </div>
                                <div className="board-row">
                                    {fabriqueSquare(70)}
                                    {fabriqueSquare(71)}
                                    {fabriqueSquare(72)}
                                    {fabriqueSquare(73)}
                                    {fabriqueSquare(74)}
                                    {fabriqueSquare(75)}
                                    {fabriqueSquare(76)}
                                    {fabriqueSquare(77)}
                                    {fabriqueSquare(78)}
                                    {fabriqueSquare(79)}
                                </div>
                                <div className="board-row">
                                    {fabriqueSquare(80)}
                                    {fabriqueSquare(81)}
                                    {fabriqueSquare(82)}
                                    {fabriqueSquare(83)}
                                    {fabriqueSquare(84)}
                                    {fabriqueSquare(85)}
                                    {fabriqueSquare(86)}
                                    {fabriqueSquare(87)}
                                    {fabriqueSquare(88)}
                                    {fabriqueSquare(89)}
                                </div>
                                <div className="board-row">
                                    {fabriqueSquare(90)}
                                    {fabriqueSquare(91)}
                                    {fabriqueSquare(92)}
                                    {fabriqueSquare(93)}
                                    {fabriqueSquare(94)}
                                    {fabriqueSquare(95)}
                                    {fabriqueSquare(96)}
                                    {fabriqueSquare(97)}
                                    {fabriqueSquare(98)}
                                    {fabriqueSquare(99)}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <p className="boardTitle">YOUR FLEET</p>
                            <div className="game2">
                                <div className="game-board">
                                    <div className="board-row">
                                        {fabriqueSquare(10)}
                                        {fabriqueSquare(11)}
                                        {fabriqueSquare(12)}
                                        {fabriqueSquare(13)}
                                        {fabriqueSquare(14)}
                                        {fabriqueSquare(15)}
                                        {fabriqueSquare(16)}
                                        {fabriqueSquare(17)}
                                        {fabriqueSquare(18)}
                                        {fabriqueSquare(19)}
                                    </div>
                                    <div className="board-row">
                                        {fabriqueSquare(110)}
                                        {fabriqueSquare(111)}
                                        {fabriqueSquare(112)}
                                        {fabriqueSquare(113)}
                                        {fabriqueSquare(114)}
                                        {fabriqueSquare(115)}
                                        {fabriqueSquare(116)}
                                        {fabriqueSquare(117)}
                                        {fabriqueSquare(118)}
                                        {fabriqueSquare(119)}
                                    </div>
                                    <div className="board-row">
                                        {fabriqueSquare(120)}
                                        {fabriqueSquare(121)}
                                        {fabriqueSquare(122)}
                                        {fabriqueSquare(123)}
                                        {fabriqueSquare(124)}
                                        {fabriqueSquare(125)}
                                        {fabriqueSquare(126)}
                                        {fabriqueSquare(127)}
                                        {fabriqueSquare(128)}
                                        {fabriqueSquare(129)}
                                    </div>
                                    <div className="board-row">
                                        {fabriqueSquare(130)}
                                        {fabriqueSquare(131)}
                                        {fabriqueSquare(132)}
                                        {fabriqueSquare(133)}
                                        {fabriqueSquare(134)}
                                        {fabriqueSquare(135)}
                                        {fabriqueSquare(136)}
                                        {fabriqueSquare(137)}
                                        {fabriqueSquare(138)}
                                        {fabriqueSquare(139)}
                                    </div>
                                    <div className="board-row">
                                        {fabriqueSquare(140)}
                                        {fabriqueSquare(141)}
                                        {fabriqueSquare(142)}
                                        {fabriqueSquare(143)}
                                        {fabriqueSquare(144)}
                                        {fabriqueSquare(145)}
                                        {fabriqueSquare(146)}
                                        {fabriqueSquare(147)}
                                        {fabriqueSquare(148)}
                                        {fabriqueSquare(149)}
                                    </div>
                                    <div className="board-row">
                                        {fabriqueSquare(150)}
                                        {fabriqueSquare(151)}
                                        {fabriqueSquare(152)}
                                        {fabriqueSquare(153)}
                                        {fabriqueSquare(154)}
                                        {fabriqueSquare(155)}
                                        {fabriqueSquare(156)}
                                        {fabriqueSquare(157)}
                                        {fabriqueSquare(158)}
                                        {fabriqueSquare(159)}
                                    </div>
                                    <div className="board-row">
                                        {fabriqueSquare(160)}
                                        {fabriqueSquare(161)}
                                        {fabriqueSquare(162)}
                                        {fabriqueSquare(163)}
                                        {fabriqueSquare(164)}
                                        {fabriqueSquare(165)}
                                        {fabriqueSquare(166)}
                                        {fabriqueSquare(167)}
                                        {fabriqueSquare(168)}
                                        {fabriqueSquare(169)}
                                    </div>
                                    <div className="board-row">
                                        {fabriqueSquare(170)}
                                        {fabriqueSquare(171)}
                                        {fabriqueSquare(172)}
                                        {fabriqueSquare(173)}
                                        {fabriqueSquare(174)}
                                        {fabriqueSquare(175)}
                                        {fabriqueSquare(176)}
                                        {fabriqueSquare(177)}
                                        {fabriqueSquare(178)}
                                        {fabriqueSquare(179)}
                                    </div>
                                    <div className="board-row">
                                        {fabriqueSquare(180)}
                                        {fabriqueSquare(181)}
                                        {fabriqueSquare(182)}
                                        {fabriqueSquare(183)}
                                        {fabriqueSquare(184)}
                                        {fabriqueSquare(185)}
                                        {fabriqueSquare(186)}
                                        {fabriqueSquare(187)}
                                        {fabriqueSquare(188)}
                                        {fabriqueSquare(189)}
                                    </div>
                                    <div className="board-row">
                                        {fabriqueSquare(190)}
                                        {fabriqueSquare(191)}
                                        {fabriqueSquare(192)}
                                        {fabriqueSquare(193)}
                                        {fabriqueSquare(194)}
                                        {fabriqueSquare(195)}
                                        {fabriqueSquare(196)}
                                        {fabriqueSquare(197)}
                                        {fabriqueSquare(198)}
                                        {fabriqueSquare(199)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Game />
    </React.StrictMode>,
    document.getElementById("root")
);
