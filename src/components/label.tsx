import React from 'react'
import { Text, ITextProps } from 'native-base'

const getOpacity = (emphasis: string) => {
    switch (emphasis) {
        case 'low':
            return 0.48
        case 'medium':
            return 0.66
        default:
            return 0.87
    }
}

interface Props extends ITextProps {
    emphasis?: 'low' | 'medium' | 'high',
}

export default function Label ({ children, emphasis, ...props }: Props) {
    return (
      <Text opacity={getOpacity(emphasis ?? 'high')} {...props}>{children}</Text>
    )
}
