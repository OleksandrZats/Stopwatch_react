export const formatTime = (milliseconds) => {
    const time = new Date(milliseconds);
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const outputHours = hours ? `${hours}:` : '';
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const fraction = Math.floor(time.getMilliseconds() / 10).toString().padStart(2, '0');

    return `${outputHours}${minutes}:${seconds},${fraction}`;
}