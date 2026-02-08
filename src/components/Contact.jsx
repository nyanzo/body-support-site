import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact-section">
            <h2 className="ribbon-title">ご予約・お問い合わせ</h2>

            <div className="contact-container">
                <div className="contact-actions">
                    <a
                        href="https://lin.ee/xxxxxxx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="line-btn"
                    >
                        <span className="line-icon">LINE</span> 友だち追加 ＞
                    </a>
                </div>

                <div className="qr-code">
                    {/* publicフォルダに画像を置いてください */}
                    <img src="/qr-code.png" alt="LINE QRコード" />
                </div>
            </div>

            <div className="footer-notes">
                <p>※当サービスはセルフケア・動作改善のサポートです。医療行為・診断・治療は行いません。</p>
                <p>症状が強い場合は医療機関の受診をお勧めします。</p>
            </div>
        </section>
    );
}