import search from 'assets/img/search.svg';
import { Nav, DivContainer, } from 'views/Tags/BlockLevel'
import { H1 } from 'views/Tags/Text';
import { Input } from 'views/Tags/Form/Inputs';
import { Image } from 'views/Tags/Picture';
import { useStyles } from './styles';
import styled from 'styled-components';

const HamburgerButton = styled.button`
    @media all and (min-width: 1100px) {
        display: none;
    }
`

export const NavBar = () => {
    const classes = useStyles();
    const classNav = 'nav '.concat(classes.position)
    return (
        <Nav className={classNav} role='navigation'>
            <DivContainer className='max-centered'>
                <H1 className='nav__logo'>Rule of thumb.</H1>
                <HamburgerButton className='nav__hamburger icon-button' alt='Open Menu'>
                    <svg width='25' height='20' xmlns="http://www.w3.org/2000/svg"><path d='M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z' fill='#FFF' fill-rule='nonzero'/></svg>
                </HamburgerButton>
                <ul className='nav__links'>
                    <li>
                        <a href='#'>Past Trials</a>
                    </li>
                    <li>
                        <a href='#'>How It Works</a>
                    </li>
                    <li>
                        <a href='#'>Login / Sign Up</a>
                    </li>
                    <li>
                        <form>
                            <Input className='nav__search-input' aria-label='search' type='text' />
                            <button className='nav__search icon-button' alt='Search' type='submit'>
                                <Image src={search} alt='search' />
                            </button>
                        </form>
                    </li>
                </ul>
            </DivContainer>
        </Nav>
    );
}