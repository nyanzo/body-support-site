import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="main-title">毎日の体の使い方、見直してみませんか？</h1>
                <p className="subtitle">肩・腰・姿勢が気になる方へ</p>

                <div className="banner">
                    <h2>体の使い方サポート／コンディショニング</h2>
                </div>

                <div className="message-box">
                    <p>
                        痛みを<span className="orange-text">[治す]</span>のではなく<br />
                        <span className="blue-underline">負担を減らし、楽に動ける体づくり</span>をお手伝いします
                    </p>
                </div>
            </div>

            <div className="hero-image">
                {/* publicフォルダに画像を置いてください */}
                <img src="/hero-img.png" alt="腰に手を当てる女性" />
            </div>
        </section>
    );
}