export function required() {
    return [ v => !!v || 'This field is required' ]
}

export function email(){
    return [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ]
}
