import styles from './navigation.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useMemo, useState} from 'react';

function NavLink({link}: { link: { pathname: string; name: string } }) {
    const [checked, setChecked] = useState(false);
    const router                = useRouter();

    const isActive = router.pathname == link.pathname;

    useEffect(() => {
        let listener = () => {
            setChecked(true);
        };
        document.addEventListener('focus', listener);
        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('focus', listener);
            document.removeEventListener('click', listener);
        }
    }, [router]);

    return (
        <li key={link.name}>
            {
                !isActive ?
                <Link href={link.pathname}>
                    <a tabIndex={0}>
                        {link.name}
                    </a>
                </Link>
                          :
                <a                    onFocusCapture={e => setChecked(true)}
                    className={styles.active}
                    aria-disabled={'true'}
                    tabIndex={!checked ? 1 : 0}
                >
                    {link.name}
                </a>
            }
        </li>
    );
}
export function Navigation() {
    const list = useMemo(() => [
                             {name: 'Home', pathname: '/'},
                             {name: 'Long-Term', pathname: '/projects'},
                             {name: 'Daily', pathname: '/daily'},
                         ] as { pathname: string, name: string }[],
                         []);

    return (
        <nav role="navigation" className={styles.mainNavigation}>
            <ul className={styles.navList}>
                {
                    list.map(
                        link => {
                            return <NavLink key={link.name} link={link}/>;
                        },
                    )
                }
            </ul>
        </nav>
    );
}