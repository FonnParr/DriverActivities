export default function SearchBox({ onChange, ...props }) {

    const changed = (event) => {
        onChange(event.target.value)
    }

    return (<input
        onChange={changed}
        {...props} />
    )
}