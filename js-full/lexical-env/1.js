let message = 'Just learn it';

export function setMessage(text) {
    message = text;
}

export function sendMessage(name) {
    const sender = 'Your Gromcode';

    console.log(`${name}, ${message}! ${sender}`);
}