//converte minutes em horas
// 1080 -> 18:00

export function convertMinutes(minutesAmoun: number) {
    const hours = Math.floor(minutesAmoun / 60);
    const minutes = minutesAmoun % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}