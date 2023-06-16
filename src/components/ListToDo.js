import Card from "./Card";
export default function ListToDo({itens, removeItem}) {
return (
    <>
        {
            itens.map((item, index) => {
            return (
                <Card item={item} removeItem={removeItem} key={index} index={index}/>
            )
        })
        }
    </>
)
}