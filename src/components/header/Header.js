import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

//Components
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

//selectors
import { selectCurrentUser } from '../../redux/selectors/userSelectors';
import { selectCartHidden } from '../../redux/selectors/cartSelectors';
import { createStructuredSelector } from 'reselect';

//styles
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './Header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
