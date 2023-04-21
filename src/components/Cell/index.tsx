import React from 'react';

import { Container, Text } from './styles';

interface CellProps {
    index: number;
    row: number;
    column: number;
    block: number;
    value: string;
    color: string;
    backgroundColor?: string;
    borderColor: string;
    preFilled: boolean;
    highlighted: boolean;
    enabled: boolean;
    selected: boolean;
    onPress: () => void;
}

export function Cell({
    index,
    row,
    column,
    block,
    value,
    color,
    backgroundColor,
    borderColor,
    preFilled,
    highlighted,
    enabled,
    selected = false,
    onPress
}: CellProps) {

    return (
        <Container
            onPress={onPress}
            // disable
            selected={selected}
            enabled={enabled}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
        >
            <Text color={color}>
                {value}
            </Text>
        </Container>

    );
}
