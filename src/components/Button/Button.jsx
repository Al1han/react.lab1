import './Button.css'

export const Button = (props) => {
    console.log('props', props)
    const oneclick = () => {
        alert('clicked')
    }

    const name = props.name

    return (
        <button 
            className="button__container"
            onClick={oneclick}
        >
            {name}
        </button>
    )
}