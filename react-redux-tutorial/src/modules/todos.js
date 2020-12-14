const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOOGLE = 'todos/TOOGLE';
const REMOVE = 'todos/REMOVE';



export const changeInput = input => ({
    type : CHANGE_INPUT,
    input
});


let id =3;
export const insert = text => ({
    type : INSERT,
    todo: {
        id : id++,
        text,
        done :false
    }
});

export const toggle = id => ({
    type:TOOGLE,
    id
})

export const remove = id => ({
    type:REMOVE,
    id
})

