import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    
    const onClick=()=>{
        console.log('click')
    }


    return (
        <header className='header'>
          <h1>{title}</h1> 
          <Button color='Blue' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.prototype={
    title:PropTypes.string.isRequired
}

export default Header
