import './css/Title.css'

function Title({ title, text }) {
    return (
        <div className="title-block">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Title;