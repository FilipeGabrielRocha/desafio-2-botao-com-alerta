import './button.css'

const showTitleButton = (label) => {
    alert(`A label desse botão é ${label}`)
    console.log(label);
}

const Button = ({label}) => {
    return (
        <button 
        className='btn'
        onClick={() => showTitleButton(label)}>
            {label}
        </button>
    )
}

Button.defaultProps = {
    label: 'Botão Roxo'
}

export default Button