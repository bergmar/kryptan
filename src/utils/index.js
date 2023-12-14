export const renderDate = (input) => {
    const date = new Date(input);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };

    const formatter = new Intl.DateTimeFormat('sv-SE', options);

    return formatter.format(date);
}

export const formatUSD = (value) => {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(value);
}