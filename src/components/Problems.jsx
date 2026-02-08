import "./Problems.css";

export default function Problems() {
    const items = [
        "デスクワークで肩や首がつらい",
        "立ち上がりや歩き方に違和感がある",
        "姿勢が気になるけど何をしたらいいかわからない",
        "病院に行くほどではないが体がしんどい",
        "自分に合ったセルフケアを知りたい"
    ];

    return (
        <section className="problems-section">
            <h2 className="ribbon-title">こんな方に</h2>
            <ul className="check-list">
                {items.map((text, i) => (
                    <li key={i}>{text}</li>
                ))}
            </ul>
        </section>
    );
}