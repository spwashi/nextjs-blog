import styles from './hello.module.scss';
import Hello1 from './_assets/hello.svg';
import Hello2 from './_assets/hello-2.svg';
import {useCallback, useState} from 'react';

const options = [Hello1, Hello2];

function Inner({which}: { which: string | number }) {
    let alt = 'Hello! Welcome to my blog.';
    switch (which) {
        case 1:
            return <Hello2 alt={alt} role="img"/>;
        default:
            return <Hello1 alt={alt} role="img"/>;
    }
}

export function Hello() {
    const [which, setWhich] = useState(0);
    const onClick           = useCallback(() => { setWhich((which + 1) % (options.length )); }, [which])
    return (
        <button className={`${styles.heroImageWrapper} svg${which}`} onClick={onClick} aria-label="welcome button">
            <Inner which={which}/>
        </button>
    );
}