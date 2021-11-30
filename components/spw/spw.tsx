import styled from 'styled-components'

const Wrapper = styled.span<{ hasArticle: boolean }>`
    border: ${props => props.hasArticle ? 'thin solid teal' : ''};
    transition: color .3s, background-color .3s;
    &:hover {
        cursor: ${props => props.hasArticle ? '' : ''};
        background: ${props => props.hasArticle ? 'teal' : ''};
        color: ${props => props.hasArticle ? 'teal' : ''};
    }
`

export function Spw({label, full}: { label: string, full?: boolean }) {
    const className = 'spw-item';
    return <Wrapper className={className} data-label={label} hasArticle={false}>{label}</Wrapper>;
}