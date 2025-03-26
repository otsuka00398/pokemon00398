/*　宣言方法
　　１）var　：古い書き方、バグの原因になりやすい
　　２）let　：変数
　　３）const：定数
*/

// UseState＝値が変わると画面を自動更新
// UseEffect＝データ取得、タイマーとか
import React, { useState, useEffect } from "react";
import usokki0185 from './pic/usokki0185.svg';
import mahoippu0869 from './pic/mahoippu0869.svg';
import ponita0077 from './pic/ponita0077.svg';
import './App.css';

function App() { // App() ページの本体
  const images = [usokki0185, mahoippu0869,ponita0077]; // 画像リスト

 // currentIndex＝現在〇番目、setCurrentIndex＝更新するメソッド、useState(0)＝初期値（0）
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [isShuffling, setIsShuffling] = useState(true); 
  let shuffleInterval; // タイマー用

  useEffect(() => {
    if (!isShuffling)return; // 停止中なら何もしない
    

    const shuffleInterval = setInterval(() => { // setInterval で一定時間ごとに処理を実行
      // prevIndex + 1 で次の画像に変更、% images.length で 最後の画像の次は最初に戻る
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 200); // 0.5秒ごとに変更

    return () => clearInterval(shuffleInterval); // コンポーネントが更新されたら停止
  }, [isShuffling]); // isShuffling が変更されたら再実行

  const handleClick = () => {
    setIsShuffling((prev) => !prev); // クリックで ON/OFF 切り替え
  };

  return (
    <div className="App">
      {/* タグの中はJSX式
      　div で全体を囲む（CSSの適用のため）
      　header を使ってコンテンツをまとめる
      */}
      <header className="App-header">
      <h1>今日のポケモン</h1>
      <a>画像をクリック！</a>
      <img
          src={images[currentIndex]}
          className="App-image"
          alt="Shuffling"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </header>
    </div>
  );
}

export default App;