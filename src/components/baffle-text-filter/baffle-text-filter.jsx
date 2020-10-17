import React from 'react';
import Baffle from "baffle-react";


const BaffleTextFilter = ({text, speed, obfuscate, type}) => {

    switch(type) {
        case 'kanji':
             type = "口回戸戸甲瓦尺尺弓己丁了廿凵ソソ山山メメ羊と乙乏~!@#$%^&*()-+=[]{}|;:,./<>?10";
             break;
        case 'tone':
             type = "░▓█ ▒░▓▓░ █▓░░▓ ▒▒ ▓▒▓░▒█▒░ ▓▓▒ █░";
             break;
        default:
             type = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
             break;
      }

    return (
        <Baffle
        speed={speed}
        characters={type}
        exclude={[" ", "!"]}
        obfuscate={obfuscate}
        revealDuration={3000}
        revealDelay={3000}>
            {text} 
        </Baffle>   
    ) 
}

export default BaffleTextFilter;