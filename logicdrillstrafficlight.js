const updateLight = current => {
    return {
        red: 'green',
        yellow: 'red',
        green: 'yellow'
    }[current];
}

function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
            default:
                return 'green';
    }
}