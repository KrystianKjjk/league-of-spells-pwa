import { css } from 'styled-components'

const useBorder = false;

export const border = (color, useIt = useBorder) => {
    return useIt
        ? css`
        box-sizing: border-box;
        border: 2px solid ${color};
    `
        : null;
}
