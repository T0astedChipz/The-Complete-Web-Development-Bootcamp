import React, { useEffect, useState } from "react";

function PriceLabel(props) {

    return (
        <div className="disButtonBase-root disChip-root makeStyles-price-23 disChip-outlined">
          <span className="disChip-label">{props.sellPrice} $DFr0g</span>
        </div>
    );
}

export default PriceLabel;

