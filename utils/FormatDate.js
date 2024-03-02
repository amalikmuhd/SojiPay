const formatDate = {
  format: (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate(); // Get the day (1-31)
    const month = date.getMonth() + 1; // Get the month (1-12)
    const year = date.getFullYear(); // Get the year
    const fullDate = `${day}-${month}-${year}`;

    return { day, month, year, fullDate };
  },

  formatLong: () => {
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
    };
    const date = new Date();

    const formattedDate = date.toLocaleDateString('en-ZA', options);
    return formattedDate;
  },
};

export default formatDate;
