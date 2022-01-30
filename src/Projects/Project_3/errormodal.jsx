const ErrorModal = (props) => {
    return (
        <div>

            <div>{props.err.eTitle}</div>
            <div>{props.err.eMsg}</div>

        </div>
    )
}

export default ErrorModal