const formattedDate = (date: Date) => {
  const thisDate = new Date(date);
  const formattedDate = thisDate.toDateString();
  if (formattedDate !== "Invalid Date") {
    return formattedDate;
  } else {
    return "-";
  }
};

export default formattedDate;
