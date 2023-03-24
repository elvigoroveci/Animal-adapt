import "../Categories.scss";

const CategoryGrid = (cards) => {

    const cardsGrid = [];

    for (let i = 0; i < cards.length; i += 5) {

        const card1 = [i];
        const card2 = [i + 1];
        const card3 = [i + 2];
        const card4 = [i + 3];
        const card5 = [i + 4];

        const row = (
            <div className="row" key={i}>
                {card1 && <div className="card-grid__column">{card1}</div>}
                {card2 && <div className="card-grid__column">{card2}</div>}
                {card3 && <div className="card-grid__column">{card3}</div>}
                {card4 && <div className="card-grid__column">{card4}</div>}
                {card5 && <div className="card-grid__column">{card5}</div>}
            </div>
        );
        cardsGrid.push(row);
    }

    return(
        <div className="card-grid">{cardsGrid}</div>
    )
}

export default CategoryGrid;