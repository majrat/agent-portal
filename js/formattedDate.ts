const formattedDate = (date: Date) => {
  const thisDate = new Date(date);
  const formattedDate = thisDate.toDateString();
  return formattedDate;
};

export default formattedDate;
