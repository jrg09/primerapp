import PropTypes from 'prop-types';

const jrg = {title:'jjj 🏎',msg:'jorge hola'};

export const Header = ({title,veces=2}) => {
    return (
        <>
            <header>
                <h1>{title}</h1>
                <div>
                    se repite: <b>{veces}</b>:
                {
                    Array.from({length:veces}, (value,key) => <span key={key}>{key}span </span>)
                }
                </div>
            </header>
        </>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    veces: PropTypes.number
};
Header.defaultProps = {
    title: 'Sin título'
}