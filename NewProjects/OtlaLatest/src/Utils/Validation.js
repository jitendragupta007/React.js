export const checkValidData = (
  selected,
  fromDate,
  toDate,
  sliceRoomDetails
) => {
  const isDate1GreaterThanDate2 = new Date(fromDate) > new Date(toDate);
  const currentDate = new Date();
  const selectedDate = new Date(fromDate);
  if (selected === "" || fromDate === "" || toDate === "")
    return "Please fill all the inputs!";
  if (selectedDate >= currentDate) {
    console.log("Date is valid");
  } else {
    return "Invalid date. Please select a From date greater than today.";
  }

  if (isDate1GreaterThanDate2) return "To date should be greter than from Date";

  for (const element of sliceRoomDetails) {
    console.log("element.childs", element.childs, element.childrenages.length);
    if (element?.childs !== element.childrenages.length) {
      return "Select ages for all children!";
    }
  }

  return null;
};
