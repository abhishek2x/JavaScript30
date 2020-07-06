const pressed = []
const secretKey = 'abhishek';


window.addEventListener('keyup', (e) => {
    // console.log(e.key);
    pressed.push(e.key);
    console.log(pressed);

    pressed.splice(-secretKey.length - 1,
        pressed.length - secretKey.length);

    if (pressed.join('').includes(secretKey)) {
        console.log('BING BING');
        cornify_add();
    }

    console.log('pressed');

});