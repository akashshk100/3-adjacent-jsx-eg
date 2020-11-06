
This project depicts how we can display different html tags adjacent to each other without including use of an enclosing tag.

    1. Using the concept that array is one single object and can be used in place of JSX. (Exactly what we do when we use map to render list). The return statement from a components expects a single object to be returned, when we use map to return multiple tags it creates single array that includes multiple tags. 

    We wrap all the jsx tags in single array i.e. all the tags are added into an array and that array is returned.

    for eg. 
    return [
        <p>Akash</p>,
        <h1>Akash<h1>,
        <div>Akash</div>
    ]

    2. The second method includes usage of Higher Order Components (HOC)
    Higher order components are used to wrap a given component, add some extra details and function to it and return the wrapped component

    let Aux = props => return props.children