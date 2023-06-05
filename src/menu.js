import menu from "./data/menu.json"

export default function Menu(){

    if (!menu.data)
        return <div>Loading ...</div>

    return (
        <div className="Menu">
            {
                menu.data.map((item, index)=><MenuItem key={index} item={item} />)
            }
        </div>
    )
}

const MenuItem = ({item})=>{
    return <div className="MenuItem">
        <a href={item.url}>{item.title}</a>
    </div>
}