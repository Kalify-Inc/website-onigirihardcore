const parseDate = (date: string) => {
    if (!date) {
        return null;
    }

    const fullMatch = date.match(/^(\d{4})-(\d{2})-(\d{2}):(\d{2}):(\d{2}):(\d{2})$/);
    if (fullMatch) {
        const [, year, month, day, hour, minute, second] = fullMatch;
        return new Date(Date.UTC(
            Number(year),
            Number(month) - 1,
            Number(day),
            Number(hour),
            Number(minute),
            Number(second)
        ));
    }

    const shortMatch = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (shortMatch) {
        const [, year, month, day] = shortMatch;
        return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
    }

    const parsed = new Date(date);
    if (Number.isNaN(parsed.getTime())) {
        return null;
    }

    return parsed;
};

const formatDate = (date: string) => {
    const d = parseDate(date);
    if (!d) {
        return '';
    }
    const year = d.getUTCFullYear();

    const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const day = String(d.getUTCDate()).padStart(2, '0');

    return `${day} de ${monthNames[d.getUTCMonth()]} de ${year}`;
}

export default formatDate;
