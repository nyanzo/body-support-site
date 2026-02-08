import "./FeaturesPrice.css";

export default function Price() {
    return (
        <div className="fp-section">
            <h2 className="ribbon-title small">料金</h2>
            <div className="price-list">
                <div className="price-item">
                    <span className="label">初回</span>
                    <span className="value">〇〇分　〇〇〇〇円</span>
                </div>
                <div className="price-item">
                    <span className="label">継続</span>
                    <span className="value">〇〇分　〇〇〇〇円</span>
                </div>
            </div>
        </div>
    );
}