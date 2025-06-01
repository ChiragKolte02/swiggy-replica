import React from "react"
// const User=()=>{
//   return( <div>
//         <h1>Chirag KOlte</h1>
//         <h2>react lover</h2>
//         <h3>chiragkolte@gmail.com</h3>
//     </div>
    
// )
// }
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default"
            }
        };
    }

    async componentDidMount() {
        try {
            const data = await fetch("https://api.github.com/users/ChiragKolte02");
            const json = await data.json();
            this.setState({
                userInfo: json,
            });
        } catch (err) {
            console.error("Failed to fetch user data", err);
        }
    }

    render() {
        const { name = "Loading...", location = "Loading..." } = this?.state?.userInfo;

        return (
            <div>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <h4>react lover</h4>
                <h3>chiragkolte@gmail.com</h3>
            </div>
        );
    }
}

export default User;
