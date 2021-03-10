const Pet = ( {name, type, breed} ) =>{
    return React.createElement(
        "div", {} ,
        React.createElement("h1",{},name),
        React.createElement("h2",{},type),
        React.createElement("h2",{},breed)
    );

}


const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{},"Adopt Me!"),
        React.createElement(Pet, {name : "animalName1", type : "Cat", breed : "xyz"}),
        React.createElement(Pet, {name : "animalName2", type : "Dog", breed : "abc"}),
        React.createElement(Pet, {name : "animalName3", type : "mouse", breed : "mno"})
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
); 