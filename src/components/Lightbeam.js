import React from 'react';
import { Container, Graphics } from '@inlet/react-pixi';

import {
    gridSize,
    scaleFactor,
    octWidth,
    coefficient,
} from '../constants';

export default function Lightbeam({ series = [] }) {

    const start = ((octWidth / 2))
    const scaleUp = (index) => start + (index * coefficient)

    const drawLightbeam = React.useCallback(g => {
        const applyScaleMoveTo = (x, y) => g.moveTo(scaleUp(x), scaleUp(y))
        const applyScaleLineTo = (x, y) => g.lineTo(scaleUp(x), scaleUp(y))
        const lineThickness = scaleFactor;

        g.clear()
        g.lineStyle(lineThickness, 0xffdd32, 1)
        // @todo gridHeight not gridsize
        applyScaleMoveTo(Math.floor(gridSize / 2), Math.floor((gridSize + 2) / 2))
        series.forEach(move => {
            applyScaleLineTo(move.x, move.y)
        })
    })

    return <Container x={0} y={0}>
        <Graphics
            draw={drawLightbeam}
        />
    </Container>
}