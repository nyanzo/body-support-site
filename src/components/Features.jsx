import "./FeaturesPrice.css"; // Priceと同じCSSを使います

export default function Features() {
    return (
        <div className="fp-section">
            <h2 className="ribbon-title small">理学療法士養成校 在学中</h2>
            <ul className="check-list orange-check">
                <li>解剖学・運動学を学ぶサポート</li>
                <li>公民館・ご自宅への出張対応</li>
                <li>一人ひとりに合わせたケアをご提案</li>
            </ul>
        </div>
    );
}