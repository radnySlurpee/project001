import React from 'react';
import Baffle from "baffle-react";


const BaffleTextFilter = ({text, speed, obfuscate, isKanji}) => {

    const kanji = "口回戸戸甲瓦尺尺弓己丁了廿凵ソソ山山メメ羊と乙乏~!@#$%^&*()-+=[]{}|;:,./<>?10";
    const normal = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"

    return (
        <Baffle
        speed={speed}
        characters={isKanji ? kanji : normal}
        exclude={[" ", "!"]}
        obfuscate={obfuscate}
        revealDuration={3000}
        revealDelay={3000}>
            {text} 
        </Baffle>   
    ) 
}

export default BaffleTextFilter;