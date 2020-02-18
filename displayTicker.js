function display(text, width) {
    let tick = 0;

    setInterval(() => {
        console.clear();
        console.log(ticker(text, width, tick));
        tick++
    }, 100);
}

const ticker = (text, width, tick) => {
    let textStr = text.padStart(width + text.length)

    let sliceStr = textStr.slice(tick % textStr.length,
        width + (tick % textStr.length))
    return sliceStr.padEnd(width)
}

display('Beautiful is better than ugly.', 10)