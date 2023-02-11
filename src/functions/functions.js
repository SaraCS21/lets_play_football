function capitalize(value){
    const result = `${value?.charAt(0).toUpperCase()}${value?.slice(1)}`

    return result;
}

export {
    capitalize
}