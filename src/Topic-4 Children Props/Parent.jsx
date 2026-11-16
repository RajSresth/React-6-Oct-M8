import Card from "./Card"

const Parent = () => {
    let fullname = "Virat Kohli";
    return (
        <div>
            {/* primitive props */}
            <Card fullname={fullname}  />

            {/* children Prop
            <Card>
                <h1>Hello Dev</h1>
            </Card> */}
        </div>
    )
}

export default Parent;
