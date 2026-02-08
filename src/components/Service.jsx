import "./Service.css";

export default function Service() {
    return (
        <section className="service-section">
            <h2 className="ribbon-title">サポート内容</h2>

            <div className="service-container">
                <div className="service-list-box">
                    <ul className="icon-list">
                        <li><span className="icon">🖥️</span> 姿勢・動作のチェック</li>
                        <li><span className="icon">🗣️</span> 体の使い方のアドバイス</li>
                        <li><span className="icon">🏠</span> 自宅でできるセルフケア指導</li>
                        <li><span className="icon">📄</span> 日常生活の環境アドバイス</li>
                    </ul>
                </div>
                <div className="service-image">
                    {/* publicフォルダに画像を置いてください */}
                    <img src="/service-img.jpeg" alt="施術の様子" />
                </div>
            </div>

            <p className="note-banner">
                ※医療行為・診断・治療・マッサージは行いません
            </p>
        </section>
    );
}