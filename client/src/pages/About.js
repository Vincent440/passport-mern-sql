import React from "react";

class About extends React.Component {
    render() {
        return(
            <div>
                <h1 className="display-2 text-center text-white">Protected About Page!</h1>
                <h1 className="text-center">Welcome {this.props.user.username||""}</h1>
                <p className="text-center">You should have to be logged in, in order to view the contents of this page without being immediately redirected.</p>
            </div>

        );
    }
}
export default About;