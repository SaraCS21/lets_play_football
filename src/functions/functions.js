import moment from 'moment';

function capitalize(value){
    return `${value?.charAt(0).toUpperCase()}${value?.slice(1)}`;
}

function formatBirthday(birthday){
    return moment(birthday).format("DD MMMM YYYY").toUpperCase();
}

function formatAge(birthday){
    return moment().diff(birthday, "years", false);
}

function formatFeet(rightFeet){
    return rightFeet ? "RIGHT" : "LEFT";
}

export {
    capitalize, formatBirthday, formatAge, formatFeet
}