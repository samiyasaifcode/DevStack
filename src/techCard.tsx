import React from 'react';
import type { technologiesTypes } from './types/technologiesTypes';

type techCardProps = {
    tech:technologiesTypes;
    saved:technologiesTypes[];

}

const techCard = ({techPromise}:{techPromise: Promise<technologiesTypes[]>}) => {
    return (
        <div>
            
        </div>
    );
};

export default techCard;