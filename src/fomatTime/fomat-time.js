export const fomatTime = (time) => {
    const rounded = Math.ceil(time);

    const seconds = rounded % 60;
    const minutes = ((rounded - seconds) / 60) % 60;

    const fomattedSeconds = String(seconds).padStart(2, '0');
    const fomattedMinutes = String(minutes).padStart(2, '0');
    return `${fomattedMinutes}:${fomattedSeconds}`;
}